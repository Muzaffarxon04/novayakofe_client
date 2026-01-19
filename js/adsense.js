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
    if (typeof (adsbygoogle = window.adsbygoogle) === 'undefined') {
      console.warn('AdSense: adsbygoogle script not loaded yet');
      // Retry after a short delay
      setTimeout(() => _initAd(slotId, containerId, options), 500);
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
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense: Error pushing ad to adsbygoogle:', error);
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
  
  adContainers.forEach(container => {
    const slotId = container.getAttribute('data-adsense-slot');
    const containerId = container.id || `adsense-${Math.random().toString(36).substr(2, 9)}`;
    
    if (!container.id) {
      container.id = containerId;
    }
    
    initAdSenseAd(slotId, containerId, {
      format: container.getAttribute('data-adsense-format') || 'auto',
      fullWidthResponsive: container.getAttribute('data-full-width-responsive') !== 'false'
    });
  });
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
