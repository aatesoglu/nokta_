# Audit Raporu — Nokta Health Assistant

**Ekran:** `/index` (Ana Ekran)  
**Tarih:** 14.05.2026 11:39:15  
**Durum:** Çözüldü (SUCCESS)  
**Önem Derecesi:** 🟠 Orta

---

### 🔍 Hata Tanımı
Mascot (Nokta) sesli asistanı konuştuktan sonra ekrana yazılı bir yanıt bastığında, `ScrollView` otomatik olarak aşağı kaymıyor. Kullanıcı ekrandaki yeni cevabı görmek için her seferinde manuel olarak sayfayı aşağıya kaydırmak zorunda kalıyor. Bu durum akıcı UX deneyimini olumsuz etkiliyor.

### 🛠 Önerilen Çözüm
Sohbet dizisi her güncellendiğinde `useEffect` kancası içinde referans verilen ScrollView bileşenine `scrollToEnd({ animated: true })` fonksiyonu çağrısı eklenmeli.

### 📸 Görsel İnceleme
*(Kullanıcı tarafından işaretlenen otomatik kaydırma beklenen alan)*

```
+-------------------------------+
|  Nokta - Sağlık Asistanın      |
|                               |
|  +-------------------------+  |
|  | Merhaba!                |  |
|  +-------------------------+  |
|  | [  Eski Mesajlar...  ]  |  |
|  |                         |  |
|  |                         |  |
|  +-[ SARILI KUTU ALANI ]---+  |
|  | [Buraya kayması lazım]  |  |
|  +-------------------------+  |
+-------------------------------+
```

![Ekran Görüntüsü](./screenshots/report-2-index-autoscroll.jpg)
