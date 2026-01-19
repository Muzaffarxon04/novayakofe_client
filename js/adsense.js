/**
 * Google AdSense Integration Module
 * 
 * This module provides a clean, safe way to initialize and manage Google AdSense ads
 * on static HTML pages. It prevents errors during page load and ensures ads are
 * initialized only when the page is ready.
 */

// AdSense Configuration
// Replace these with your actual AdSense client ID and slot IDs
const ADSENSE_CONFIG = {
  clientId: 'ca-pub-9149547459026347', // Replace with your AdSense Publisher ID
  slots: {
    // Define your ad slot IDs here
    // You can add multiple slots for different ad placements
    homePageTop: '1234567890',      // Example: Ad after header
    homePageMiddle: '0987654321',   // Example: Ad in middle of content
    homePageBottom: '1122334455',   // Example: Ad before footer
  }
};

/**
 * Initialize a single AdSense ad unit
 * @param {string} slotId - The AdSense slot ID
 * @param {string} containerId - The ID of the container element where ad will be placed
 * @param {Object} options - Additional options for the ad
 */
function initAdSenseAd(slotId, containerId, options = {}) {
  // Ensure DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      _initAd(slotId, containerId, options);
    });
  } else {
    _initAd(slotId, containerId, options);
  }
}

/**
 * Internal function to initialize the ad
 * @private
 */
function _initAd(slotId, containerId, options) {
  try {
    // Check if container exists
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`AdSense: Container with ID "${containerId}" not found`);
      return;
    }

    // Check if adsbygoogle is available
    if (typeof window.adsbygoogle === 'undefined') {
      console.warn('AdSense: adsbygoogle script not loaded yet');
      // Retry after a short delay
      setTimeout(() => _initAd(slotId, containerId, options), 500);
      return;
    }
    
    // Check if slot ID is valid (not a placeholder)
    if (!slotId || slotId.includes('YOUR_SLOT_ID') || slotId.includes('1234567890') || slotId.length < 8) {
      console.warn(`AdSense: ❌ Invalid or placeholder slot ID "${slotId}". Please replace with your actual AdSense ad unit ID.`);
      console.warn(`AdSense: Container "${containerId}" will be hidden.`);
      // Hide the container and its parent if slot ID is not set
      if (container.parentElement) {
        container.parentElement.style.display = 'none';
        container.parentElement.style.visibility = 'hidden';
        container.parentElement.style.height = '0';
        container.parentElement.style.margin = '0';
        container.parentElement.style.padding = '0';
      }
      container.style.display = 'none';
      return;
    }

    // Create the ad element
    const adElement = document.createElement('ins');
    adElement.className = 'adsbygoogle';
    adElement.style.display = 'block';
    adElement.setAttribute('data-ad-client', ADSENSE_CONFIG.clientId);
    adElement.setAttribute('data-ad-slot', slotId);
    adElement.setAttribute('data-ad-format', options.format || 'auto');
    adElement.setAttribute('data-full-width-responsive', options.fullWidthResponsive !== false ? 'true' : 'false');

    // Add custom styles if provided
    if (options.style) {
      Object.assign(adElement.style, options.style);
    }

    // Append to container
    container.appendChild(adElement);

    // Push to adsbygoogle array
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log(`AdSense: ✅ Ad pushed to adsbygoogle for slot "${slotId}"`);
      console.log(`AdSense: ⏳ Ads may take a few seconds to appear...`);
    } catch (error) {
      console.error('AdSense: ❌ Error pushing ad to adsbygoogle:', error);
    }

  } catch (error) {
    console.error(`AdSense: Error initializing ad in container "${containerId}":`, error);
  }
}

/**
 * Initialize multiple ads at once
 * @param {Array} ads - Array of ad configurations
 * Each ad config should have: { slotId, containerId, options }
 */
function initMultipleAds(ads) {
  ads.forEach(ad => {
    initAdSenseAd(ad.slotId, ad.containerId, ad.options || {});
  });
}

/**
 * Initialize ads when page is fully loaded
 * This ensures content is visible before showing ads (better UX)
 */
function initAdsOnPageLoad() {
  // Wait for page to be fully loaded
  if (document.readyState === 'complete') {
    _initAllAds();
  } else {
    window.addEventListener('load', _initAllAds);
  }
}

/**
 * Initialize all ads defined in the page
 * @private
 */
function _initAllAds() {
  // Find all ad containers and initialize them
  const adContainers = document.querySelectorAll('[data-adsense-slot]');
  
  if (adContainers.length === 0) {
    console.warn('AdSense: No ad containers found with data-adsense-slot attribute');
    return;
  }
  
  console.log(`AdSense: ✅ Found ${adContainers.length} ad container(s)`);
  
  let validAdsCount = 0;
  
  adContainers.forEach((container, index) => {
    const slotId = container.getAttribute('data-adsense-slot');
    const containerId = container.id || `adsense-${index}`;
    
    if (!container.id) {
      container.id = containerId;
    }
    
    // Check if slot ID is placeholder
    if (slotId && (slotId.includes('YOUR_SLOT_ID') || slotId.includes('1234567890') || slotId.length < 8)) {
      console.warn(`AdSense: ⚠️ Ad ${index + 1} - Placeholder slot ID detected: "${slotId}"`);
      console.warn(`AdSense: 📝 To fix: Replace "${slotId}" with your actual AdSense ad unit ID in index.html`);
      return; // Skip this ad
    }
    
    console.log(`AdSense: 🚀 Initializing ad ${index + 1} - Slot ID: "${slotId}", Container: "${containerId}"`);
    validAdsCount++;
    
    initAdSenseAd(slotId, containerId, {
      format: container.getAttribute('data-adsense-format') || 'auto',
      fullWidthResponsive: container.getAttribute('data-full-width-responsive') !== 'false'
    });
  });
  
  if (validAdsCount === 0) {
    console.error('AdSense: ❌ No valid ads found! All slot IDs are placeholders.');
    console.error('AdSense: 📖 Please read ADSENSE_FIX.md for setup instructions.');
  } else {
    console.log(`AdSense: ✅ Successfully initialized ${validAdsCount} ad(s)`);
  }
}

// Auto-initialize ads when script loads (if page is ready)
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  // Small delay to ensure everything is ready
  setTimeout(_initAllAds, 100);
} else {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(_initAllAds, 100);
  });
}

// Export functions for manual use if needed
window.AdSense = {
  init: initAdSenseAd,
  initMultiple: initMultipleAds,
  initOnLoad: initAdsOnPageLoad,
  config: ADSENSE_CONFIG
};
