setInterval(() => {
    const googleAds = document.querySelectorAll('[id*="google_ads_iframe"]')
    if (googleAds) {
        for (var i = 0, len = googleAds.length; i < len; i++) {
              googleAds[i].style.display = "none";
          }
    }
  }, 1000)
  