# Nokta Forge Cycle Ledger

Bu dosya, Phase B kapsamında gerçekleştirilen kapalı geliştirme döngülerinin (Forge Cycles) kaydını tutar.

| Cycle | Rapor Adı | Hipotez | Sonuç | Değişen Dosyalar | Test Sonucu | Commit Hash | Ağırlık (kg) | Human Touch Points |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1** | `bug-report-2026-05-14.md` (#1) | Chat alanının alt boşluğunu 110px yaparak mesajların mikrofon butonu arkasında gizlenmesini engellemek | **SUCCESS** | `app/app/index.tsx` | Geçti (Tüm mesajlar okunabilir) | `89a03a26` | 10 kg | 0 |
| **#2** | `bug-report-2026-05-14.md` (#2) | Nokta'dan yeni bir yanıt geldiğinde ScrollView'a otomatik `scrollToEnd` tetikleterek son mesaja odaklanmak | **SUCCESS** | `app/app/index.tsx` | Geçti (Otomatik odaklanıyor) | `868d1656` | 12 kg | 0 |
| **#3** | `bug-report-2026-05-14.md` (#3) | Uzman sohbet ekranında (ExpertScreen) her mesaj dizisi güncellemesinde auto-scroll tetiklemek | **SUCCESS** | `app/app/expert.tsx` | Geçti (Sohbet akışı kesintisiz) | `5ba153fc` | 12 kg | 0 |
| **#4** | *Dahili İnceleme* | Sesli etkileşimin yanına ana ekrana alternatif bir metin giriş kutusu (TextInput) eklemek | **ROLLBACK** | `app/app/index.tsx` | Reddedildi (Maskot ile sesli bağ azaldı) | `N/A` | 0 kg | 0 |

## 📋 Özet Bilgiler
- **Toplam Başarılı Döngü:** 3 adet
- **Toplam Geri Çekilen Döngü (Rollback):** 1 adet
- **Toplam Etki Ağırlığı:** 34 kg
- **Toplam İnsan Müdahalesi (HTP):** 0 (Tam Otonom)
