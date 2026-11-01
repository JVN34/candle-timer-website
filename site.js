(function () {
  const config = window.CANDLE_TIMER_CONFIG || {};
  const supportEmail = (config.supportEmail || "").trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(supportEmail) && supportEmail !== "SUPPORT_EMAIL";
  const appStoreUrl = (config.appStoreUrl || "").trim();
  const fallbackUrl = config.appStoreFallbackUrl || "https://apps.apple.com/gb/mac";

  document.querySelectorAll("[data-support-email]").forEach((node) => {
    if (validEmail) {
      node.textContent = supportEmail;
      if (node.tagName.toLowerCase() === "a") node.href = "mailto:" + supportEmail;
    } else {
      node.textContent = "Support contact to be configured";
      const alert = document.querySelector("[data-email-alert]");
      if (alert) alert.style.display = "block";
      if (node.tagName.toLowerCase() === "a") node.removeAttribute("href");
    }
  });

  document.querySelectorAll("[data-app-store-link]").forEach((link) => {
    const hasProductUrl = /^https:\/\/apps\.apple\.com\//.test(appStoreUrl);
    link.href = hasProductUrl ? appStoreUrl : fallbackUrl;
    link.textContent = hasProductUrl ? "View on the Mac App Store" : "Browse the Mac App Store";
    link.setAttribute("aria-label", hasProductUrl ? "View Candle Timer on the Mac App Store" : "Browse the Mac App Store");
  });

  document.querySelectorAll("[data-year]").forEach((node) => node.textContent = new Date().getFullYear());
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path) link.setAttribute("aria-current", "page");
  });
})();
