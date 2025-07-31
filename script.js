
// Basic tracking script
console.log("Tracking script loaded.");

// Simulate a page view tracking event
(function trackPageView() {
    const trackingData = {
        event: "page_view",
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
    };
    console.log("Page view tracked:", trackingData);
})();
