# Audit Raporu — Nokta Health Assistant

**Ekran:** `/index` (Ana Ekran)  
**Tarih:** 14.05.2026 11:38:00  
**Durum:** Çözüldü (SUCCESS)  
**Önem Derecesi:** 🔴 Yüksek

---

### 🔍 Hata Tanımı
Sohbet ekranında mesajlar çoğaldığında, en alttaki mesajlar yüzen mikrofon butonunun arkasında kalıyor. Kullanıcılar son gelen mesajı okuyabilmek için fazladan kaydırma yapmak istese de alt boşluk (padding) yetersiz olduğu için mesaj butonu kapatıyor.

### 🛠 Önerilen Çözüm
`ScrollView` bileşeninin `contentContainerStyle` altındaki `paddingBottom` değeri 110px değerine yükseltilerek butonun arkasında kalan alan görünür hale getirilmeli.

### 📸 Görsel İnceleme
*(Kullanıcı tarafından arayüzde işaretlenen alan aşağıda belirtilmiştir)*

```
+-------------------------------+
|  Nokta - Sağlık Asistanın      |
|                               |
|       [ NOKTA AVATAR ]        |
|                               |
|  +-------------------------+  |
|  | Merhaba, bugün nasılsın? |  |
|  +-------------------------+  |
|  | İyiyim, teşekkürler.     |  |
|  +-[ SARILI KUTU ALANI ]---+  |
|  | [  🛑 MİKROFON BUTONU ] |  |
|  +-------------------------+  |
+-------------------------------+
```

![Ekran Görüntüsü](./screenshots/report-1-index-mic.jpg)
