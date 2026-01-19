# Google AdSense Integration Setup Guide

## Quick Setup Instructions

### Step 1: Get Your AdSense Publisher ID
1. Log in to your [Google AdSense account](https://www.google.com/adsense/)
2. Go to **Account** → **Account Information**
3. Copy your **Publisher ID** (format: `ca-pub-9149547459026347`)

### Step 2: Update Publisher ID in HTML
Open `index.html` and find this line in the `<head>` section:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9149547459026347"
```

Replace `ca-pub-9149547459026347` with your actual Publisher ID.

### Step 3: Create Ad Units in AdSense Dashboard
1. Go to **Ads** → **By ad unit** → **Display ads**
2. Click **+ New ad unit**
3. Choose **Display ad** type
4. Configure your ad:
   - **Name**: Give it a descriptive name (e.g., "Homepage Middle Ad")
   - **Size**: Select "Responsive" or "Auto"
   - **Ad type**: Choose your preferred ad types
5. Click **Create**
6. Copy the **Ad unit ID** (format: `1234567890`)

### Step 4: Update Ad Slot IDs in HTML
Find the ad containers in `index.html` and update the `data-adsense-slot` attributes:

```html
<!-- Example: Middle ad -->
<div id="adsense-middle" data-adsense-slot="YOUR_SLOT_ID_MIDDLE" ...></div>
```

Replace `YOUR_SLOT_ID_MIDDLE` with your actual Ad unit ID from Step 3.

### Step 5: Update Configuration in JavaScript (Optional)
If you want to manage ads programmatically, edit `js/adsense.js`:

```javascript
const ADSENSE_CONFIG = {
  clientId: 'ca-pub-YOUR_PUBLISHER_ID', // Your Publisher ID
  slots: {
    homePageTop: 'YOUR_SLOT_ID_1',
    homePageMiddle: 'YOUR_SLOT_ID_2',
    homePageBottom: 'YOUR_SLOT_ID_3',
  }
};
```

## Ad Placements

Ads are currently placed in these locations:
1. **Middle Ad**: Between "About" and "FAQ" sections
2. **Bottom Ad**: Before the footer

## Testing

1. **Test Mode**: Use AdSense's test mode to verify ads are loading
2. **Check Console**: Open browser DevTools → Console to check for any errors
3. **Ad Preview**: Use Google AdSense's ad preview tool

## Important Notes

- ⚠️ **Don't click your own ads** - This violates AdSense policies
- ✅ Ads load asynchronously and won't block page rendering
- ✅ Ads are responsive and adapt to screen size
- ✅ Error handling is built-in to prevent crashes
- ✅ Ads only initialize when page content is ready

## Troubleshooting

**Ads not showing?**
- Verify Publisher ID is correct
- Check Ad unit IDs are correct
- Ensure your AdSense account is approved
- Check browser console for errors
- Verify ads are enabled in your AdSense account

**Ads breaking layout?**
- Check `scss/blocks/_adsense.scss` for styling
- Ensure ad containers have proper spacing
- Test on different screen sizes

## Support

For AdSense-specific issues, refer to [Google AdSense Help Center](https://support.google.com/adsense/)
