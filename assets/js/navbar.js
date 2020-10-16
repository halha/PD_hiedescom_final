const callback = () => {
  let navShow = document.getElementById('show');
  let navUl = document.getElementById('nav-ul');
  let navHide = document.getElementById('hide');

  // ==================== Nav Hide and Show Function ====================
  navShow.addEventListener('click', () => {
    navUl.style.right = '0';
  });

  navHide.addEventListener('click', () => {
    navUl.style.right = '-100%';
  });

  // ========================= Scroll  Function =========================
  window.addEventListener('scroll', () => {
    let scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    let screenHeight = window.innerHeight;
    let nav = document.getElementById('nav');
    let navLogo = document.getElementById('nav-logo');

    if (scroll > screenHeight * 0.5) {
      nav.classList.add('fixed');

      navShow.classList.remove('black');
      navHide.classList.remove('black');
      navUl.classList.remove('primary');

      nav.style.backgroundColor = 'var(--white)';
      nav.style.boxShadow = '0 6px 12px rgba(0, 0, 0, .1)';

      navLogo.style.color = 'var(--black)';
      navLogo.style.visibility = 'visible';
    } else {
      nav.classList.remove('fixed');

      navShow.classList.add('black');
      navHide.classList.add('black');
      navUl.classList.add('primary');

      nav.style.backgroundColor = 'var(--primary-bg)';
      nav.style.boxShadow = 'unset';

      navLogo.style.color = 'var(--black)';
    }
  });
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
