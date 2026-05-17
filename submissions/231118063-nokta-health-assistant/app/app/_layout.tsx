import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { captureScreen, captureRef } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuditWidget } from '@xtatistix/mobile-audit';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';

import { Alert } from 'react-native';

// Bridge implementation for AuditWidget dependencies
const auditStorage = {
  async loadNotes() {
    try {
      const json = await AsyncStorage.getItem('@audit_notes');
      return json ? JSON.parse(json) : [];
    } catch (e) {
      console.error('Failed to load audit notes', e);
      return [];
    }
  },
  async saveNotes(notes: any[]) {
    try {
      await AsyncStorage.setItem('@audit_notes', JSON.stringify(notes));
    } catch (e) {
      console.error('Failed to save audit notes', e);
    }
  }
};

const writeFile = async (filename: string, content: string) => {
  const uri = FileSystem.documentDirectory + filename;
  await FileSystem.writeAsStringAsync(uri, content, { encoding: FileSystem.EncodingType.UTF8 });
  return uri;
};

const writeFileBinary = async (filename: string, base64: string) => {
  const uri = FileSystem.documentDirectory + filename;
  await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
  return uri;
};

const shareFile = async (uri: string) => {
  try {
    console.log('\n==================================================');
    console.log('🚀 [Nokta Audit Widget] PAYLAŞIM TETİKLENDİ!');
    console.log('URI:', uri);
    
    try {
      const reportContent = await FileSystem.readAsStringAsync(uri);
      console.log('--- DOSYA İÇERİĞİ ---');
      console.log(reportContent);
    } catch (e) {
      console.log('Dosya metin formatında değil (muhtemelen ekran görüntüsü).');
    }
    console.log('==================================================\n');

    Alert.alert('Sistem Yanıtı', 'Dosya paylaşım adımı tetiklendi. Lütfen terminali kontrol edin.');

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(uri, {
        dialogTitle: 'Audit Raporunu Paylaş',
        mimeType: uri.endsWith('.md') ? 'text/markdown' : 'image/jpeg',
      });
    } else {
      console.warn('Sharing is not available on this device');
    }
  } catch (error) {
    console.error('Sharing failed:', error);
  }
};

const customCaptureScreen = async () => {
  return await captureScreen({
    format: 'jpg',
    quality: 0.8,
  });
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  const auditDeps = {
    captureScreen: customCaptureScreen,
    captureRef: async (ref: React.RefObject<any>) => {
      return await captureRef(ref, { format: 'jpg', quality: 0.8 });
    },
    writeFile,
    writeFileBinary,
    shareFile,
    storage: auditStorage,
    currentScreen: pathname,
    BugIcon: <MaterialIcons name="bug-report" size={24} color="white" />,
  };

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="expert" options={{ headerShown: false, presentation: 'modal' }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
      <AuditWidget deps={auditDeps} appName="Nokta Health Assistant" />
    </ThemeProvider>
  );
}
