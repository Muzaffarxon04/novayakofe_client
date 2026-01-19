# ⚡ Tez Yechim - Reklamalarni Ko'rsatish

## 🔴 Muammo
Reklamalar ko'rinmayapti, chunki slot ID'lar placeholder holatida.

## ✅ Yechim (5 daqiqa)

### 1. Google AdSense Dashboard'ga kiring
👉 https://www.google.com/adsense/

### 2. Reklama Birligi Yaratish

**Birinchi reklama:**
1. **Ads** → **By ad unit** → **Display ads**
2. **+ New ad unit** tugmasini bosing
3. **Name**: `Homepage Middle Ad`
4. **Size**: **Responsive** yoki **Auto**
5. **Create** tugmasini bosing
6. **Ad unit ID** ni nusxalang (masalan: `1234567890`)

**Ikkinchi reklama:**
- Xuddi shu jarayonni takrorlang
- **Name**: `Homepage Bottom Ad`
- **Ad unit ID** ni nusxalang

### 3. HTML Faylini Yangilash

`index.html` faylini oching va quyidagilarni o'zgartiring:

**134-qatorda:**
```html
<div id="adsense-middle" data-adsense-slot="YOUR_SLOT_ID_MIDDLE" ...>
```
`YOUR_SLOT_ID_MIDDLE` ni birinchi reklama ID'si bilan almashtiring.

**Misol:**
```html
<div id="adsense-middle" data-adsense-slot="1234567890" ...>
```

**331-qatorda:**
```html
<div id="adsense-bottom" data-adsense-slot="YOUR_SLOT_ID_BOTTOM" ...>
```
`YOUR_SLOT_ID_BOTTOM` ni ikkinchi reklama ID'si bilan almashtiring.

**Misol:**
```html
<div id="adsense-bottom" data-adsense-slot="0987654321" ...>
```

### 4. Sahifani Yangilash

1. Sahifani yangilang (Ctrl+F5 yoki Cmd+Shift+R)
2. Browser Console'ni oching (F12)
3. Quyidagi xabarlarni ko'rish kerak:
   - `AdSense: ✅ Found 2 ad container(s)`
   - `AdSense: 🚀 Initializing ad 1 - Slot ID: "1234567890"`
   - `AdSense: ✅ Ad pushed to adsbygoogle`

### 5. Kutish

Reklamalar bir necha daqiqadan keyin ko'rinishi mumkin. Agar 1-2 soatdan keyin ham ko'rinmasa, AdSense Dashboard'da reklama birliklari yaratilganligini tekshiring.

## 🔍 Debug

Agar reklamalar ko'rinmasa:

1. **Browser Console'ni oching** (F12)
2. Quyidagi xabarlarni qidiring:
   - `AdSense: ❌` - xatoliklar
   - `AdSense: ⚠️` - ogohlantirishlar
   - `AdSense: ✅` - muvaffaqiyatli

3. **Tekshirish:**
   - Publisher ID to'g'rimi? (`ca-pub-9149547459026347`)
   - Slot ID'lar placeholder emasmi?
   - AdSense script yuklandimi?

## 📞 Yordam

Agar muammo davom etsa:
- Browser Console'dagi barcha xabarlarni nusxalang
- AdSense Dashboard'da reklama birliklari yaratilganligini tekshiring
- `ADSENSE_FIX.md` faylini o'qing
