// GA4 click tracking for the "Open BEU Syllabus Bot" buttons
document.querySelectorAll('[data-track="open_bot_click"]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (typeof gtag !== 'function') return;
    gtag('event', 'open_bot_click', {
      event_category: 'engagement',
      event_label: 'Open BEU Syllabus Bot',
      button_location: btn.getAttribute('data-cta-location'),
      link_url: btn.href,
      transport_type: 'beacon'
    });
  });
});
