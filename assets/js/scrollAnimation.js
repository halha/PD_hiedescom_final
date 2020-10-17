const callbackAnimate = () => {
  // ==================== Scroll Function ====================
  let onScroll = document.querySelectorAll('.onScroll');

  onScroll.forEach((el, i) => {
    const elementHeight = el.clientHeight;

    window.addEventListener('scroll', () => {
      if (inView(el, elementHeight)) {
        el.classList.remove('hidden');
        el.classList.add('play');
      }
    });
  });
};

function inView(element, elementHeight) {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY || window.pageYOffset;

  const scrollPosition = scrollY + windowHeight;
  const elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callbackAnimate();
} else {
  document.addEventListener('DOMContentLoaded', callbackAnimate);
}
