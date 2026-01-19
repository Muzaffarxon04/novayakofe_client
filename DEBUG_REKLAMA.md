# 🔍 Reklamalar Ko'rinmayapti - Debug Qo'llanmasi

## ✅ Tekshirilgan Narsalar:

1. ✅ Slot ID'lar qo'yilgan:
   - O'rta reklama: `8436552238`
   - Pastki reklama: `3717195132`

2. ✅ Publisher ID qo'yilgan: `ca-pub-9149547459026347`

3. ✅ AdSense script HTML'da bor

## 🔍 Tekshirish Qadamlar:

### 1. Browser Console'ni Ochish

1. Sahifani oching
2. **F12** tugmasini bosing (yoki **Ctrl+Shift+I** / **Cmd+Option+I**)
3. **Console** tab'ini tanlang

### 2. Quyidagi Xabarlarni Qidiring:

**✅ To'g'ri ishlayotgan bo'lsa:**
```
AdSense: ✅ Found 1 AdSense script(s)
AdSense: 🚀 Starting ad initialization...
AdSense: ✅ Found 2 ad container(s)
AdSense: 🚀 Initializing ad 1 - Slot ID: "8436552238"
AdSense: ✅ Ad element created successfully
AdSense: ✅ Ad pushed to adsbygoogle for slot "8436552238"
```

**❌ Muammo bo'lsa:**
```
AdSense: ❌ AdSense script not found in HTML!
AdSense: ❌ Invalid or placeholder slot ID
AdSense: adsbygoogle script not loaded yet
```

### 3. Network Tab'ni Tekshirish

1. **Network** tab'ini oching
2. Sahifani yangilang (F5)
3. `adsbygoogle` so'zini qidiring
4. Script yuklanganni tekshiring

### 4. Element Tab'ni Tekshirish

1. **Elements** (yoki **Inspector**) tab'ini oching
2. `adsense-middle` va `adsense-bottom` ID'larini qidiring
3. Quyidagi elementlar borligini tekshiring:
   ```html
   <ins class="adsbygoogle" 
        data-ad-client="ca-pub-9149547459026347"
        data-ad-slot="8436552238"
        ...>
   ```

## 🚨 Mumkin Bo'lgan Muammolar:

### Muammo 1: AdSense Script Yuklanmagan
**Belgilar:**
- Console'da: `AdSense: ❌ AdSense script not found`
- Network tab'da `adsbygoogle.js` yo'q

**Yechim:**
- Internet aloqasini tekshiring
- AdSense script tag HTML'da borligini tekshiring (55-57 qatorlar)

### Muammo 2: Reklamalar Hali Yuklanmagan
**Belgilar:**
- Console'da barcha xabarlar ✅ ko'rinadi
- Lekin reklamalar ko'rinmaydi

**Yechim:**
- **1-2 soat kutish** kerak (birinchi marta)
- AdSense Dashboard'da reklama birliklari yaratilganligini tekshiring

### Muammo 3: AdSense Hisob Tasdiqlanmagan
**Belgilar:**
- Reklamalar umuman ko'rinmaydi
- Console'da xatoliklar yo'q

**Yechim:**
- AdSense Dashboard'ga kiring
- Hisob holatini tekshiring
- Agar "Tekshirilmoqda" bo'lsa, kutish kerak

### Muammo 4: Reklama Birliklari To'g'ri Yaratilmagan
**Belgilar:**
- Slot ID'lar to'g'ri
- Lekin reklamalar ko'rinmaydi

**Yechim:**
- AdSense Dashboard → Ads → By ad unit
- Reklama birliklari yaratilganligini tekshiring
- Slot ID'lar to'g'ri ekanligini tekshiring

### Muammo 5: Ad Blocker
**Belgilar:**
- Reklamalar ko'rinmaydi
- Console'da xatoliklar yo'q

**Yechim:**
- Ad blocker'ni o'chiring
- Yoki incognito/private mode'da ochib ko'ring

## 📋 Tekshirish Ro'yxati:

- [ ] Browser Console ochildi (F12)
- [ ] AdSense script yuklanganni tekshirildi
- [ ] Slot ID'lar to'g'ri ekanligi tekshirildi
- [ ] Network tab'da `adsbygoogle.js` yuklanganni ko'rish
- [ ] Elements tab'da ad elementlar borligini tekshirish
- [ ] Ad blocker o'chirilgan
- [ ] 1-2 soat kutildi (birinchi marta)
- [ ] AdSense Dashboard'da reklama birliklari borligini tekshirish

## 🆘 Yordam

Agar muammo davom etsa:
1. Browser Console'dagi **barcha xabarlarni** nusxalang
2. Screenshot oling
3. AdSense Dashboard'dagi reklama birliklari holatini tekshiring
