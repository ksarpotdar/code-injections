setInterval(() => {
    const skip = document.querySelector('.ytp-ad-skip-button');
    if (skip) {skip.click()}
  
    const ytInVideoAd = document.querySelector('.ytp-ad-overlay-slot');
    if (ytInVideoAd) {ytInVideoAd.style.display = "none"}
  
    const ytAdContainer = document.querySelectorAll('[id*="player-ads"]');
    if (ytAdContainer) {
      for (var i = 0, len = ytAdContainer.length; i < len; i++) {
        ytAdContainer[i].style.display = "none";
      }
    }
  
    const googleAds = document.querySelectorAll('[id*="google_ads_iframe"]');
    if (googleAds) {
        for (var i = 0, len = googleAds.length; i < len; i++) {
              googleAds[i].style.display = "none";
          }
    }
}, 1000);