# Audit Raporu — Nokta Health Assistant

**Ekran:** `/index` (Ana Ekran)  
**Tarih:** 14.05.2026 11:39:15  
**Durum:** Çözüldü (SUCCESS)  
**Önem Derecesi:** 🟠 Orta

---

### 🔍 Hata Tanımı
Asistan (Nokta) uzun süre işlem yapılmadığında uyku moduna ("Zzz" durumu) geçiyor. Ancak kullanıcı ekrana dokunduğunda veya yeni bir komut verdiğinde, uyku ikonu ve kapalı göz animasyonu ekranda asılı (donuk) kalıyor. Asistan uyanma (idle/active) durumuna geçiş yapamıyor.

### 🛠 Önerilen Çözüm
Uyku durumunu yöneten `sleepState` veya `isSleeping` değişkenine bağımlı (dependent) olan animasyon bileşenlerindeki durum yönetimi (state management) kontrol edilmeli. `useEffect` tetikleyicilerinde state güncellendiğinde animasyonun zorla (force) yeniden render edilmesi veya uyanma animasyonunun tetiklenmesi sağlanmalı.

### 📸 Görsel İnceleme
*(Kullanıcı tarafından işaretlenen takılı kalan animasyon alanı aşağıda belirtilmiştir)*

```
+-------------------------------+
|  Nokta - Sağlık Asistanın     |
|                               |
|                               |
|  +-[ SARILI KUTU ALANI ]---+  |
|  |           Zzz           |  |
|  |          -   -          |  |
|  |            _            |  |
|  +-------------------------+  |
|                               |
|  +-------------------------+  |
|  | Merhaba, uyandın mı?    |  |
|  +-------------------------+  |
+-------------------------------+
```

![Ekran Görüntüsü](./screenshots/report-2-index-autoscroll.jpg)
