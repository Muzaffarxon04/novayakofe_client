# AdSense Muammoni Hal Qilish

## Muammo
Reklama joy egallab turibdi, lekin reklamalar ko'rinmayapti.

## Sabab
Slot ID'lar hali o'rnatilmagan. HTML faylda `YOUR_SLOT_ID_MIDDLE` va `YOUR_SLOT_ID_BOTTOM` placeholder'lar bor.

## Yechim (3 qadam)

### 1-qadam: AdSense Dashboard'da Reklama Birliklarini Yaratish

1. [Google AdSense](https://www.google.com/adsense/) ga kiring
2. **Ads** → **By ad unit** → **Display ads** ga o'ting
3. **+ New ad unit** tugmasini bosing
4. Reklama birligini sozlash:
   - **Name**: "Homepage Middle Ad" (yoki istalgan nom)
   - **Size**: **Responsive** yoki **Auto** ni tanlang
   - **Ad type**: Tanlovingizga qarab
5. **Create** tugmasini bosing
6. **Ad unit ID** ni nusxalang (masalan: `1234567890`)

**Ikkinchi reklama uchun ham takrorlang:**
- Name: "Homepage Bottom Ad"
- Ad unit ID ni nusxalang

### 2-qadam: HTML Faylini Yangilash

`index.html` faylini oching va quyidagi o'zgartirishlarni qiling:

**134-qatorda** (o'rta reklama):
```html
<div id="adsense-middle" data-adsense-slot="YOUR_SLOT_ID_MIDDLE" ...>
```
`YOUR_SLOT_ID_MIDDLE` ni birinchi reklama birligining ID'si bilan almashtiring.

**331-qatorda** (pastki reklama):
```html
<div id="adsense-bottom" data-adsense-slot="YOUR_SLOT_ID_BOTTOM" ...>
```
`YOUR_SLOT_ID_BOTTOM` ni ikkinchi reklama birligining ID'si bilan almashtiring.

### 3-qadam: Tekshirish

1. Sahifani yangilang (Ctrl+F5 yoki Cmd+Shift+R)
2. Browser Console'ni oching (F12)
3. Quyidagi xabarlarni ko'rish kerak:
   - `AdSense: Found 2 ad container(s)`
   - `AdSense: Ad initialized for slot "..."`

Agar xatolik bo'lsa, console'da ko'rinadi.

## Tez Yechim (Test Rejimi)

Agar reklamalarni tekshirish kerak bo'lsa, AdSense Dashboard'da:
1. **Ads** → **By ad unit** ga o'ting
2. Reklama birligini tanlang
3. **Test mode** ni yoqing

## Muhim Eslatmalar

- ⚠️ **O'z reklamalaringizga bosing** - Bu AdSense qoidalariga zid
- ✅ Reklamalar bir necha daqiqadan keyin ko'rinishi mumkin
- ✅ Agar reklamalar ko'rinmasa, bir necha soat kutish kerak bo'lishi mumkin
- ✅ AdSense hisobingiz tasdiqlangan bo'lishi kerak

## Yordam

Agar muammo davom etsa:
1. Browser Console'dagi xatoliklarni tekshiring
2. AdSense Dashboard'da reklama birliklari yaratilganligini tekshiring
3. Publisher ID to'g'ri ekanligini tekshiring: `ca-pub-9149547459026347`
