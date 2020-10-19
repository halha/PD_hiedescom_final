const callbackNav = () => {
  window.addEventListener('scroll', () => {
    let scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    let screenHeight = window.innerHeight;
    let nav = document.getElementById('nav');

    if (scroll > screenHeight * 0.5) {
      nav.classList.add('fixed');

      nav.style.backgroundColor = 'var(--white)';
      nav.style.boxShadow = '0 6px 12px rgba(0, 0, 0, .1)';
    } else {
      nav.classList.remove('fixed');

      nav.style.backgroundColor = 'transparent';
      nav.style.boxShadow = 'unset';
    }
  });
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callbackNav();
} else {
  document.addEventListener('DOMContentLoaded', callbackNav);
}
