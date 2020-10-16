const callback = () => {
  // ==================== Scroll Function ====================
  let onScroll = document.querySelectorAll('.onScroll');
  let scroll =
    (window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0) + window.innerHeight;

  onScroll.forEach((el, i) => {
    const breakSec = el.offsetTop;

    if (scroll > breakSec) {
      el.classList.remove('hidden');
      el.classList.add('play');
    }
  });

  // ==================== Counter  Scroll ====================
  let i = 1;
  let onScrollCounter = document.querySelectorAll('.onScrollCounter');

  onScrollCounter.forEach((el, index) => {
    window.addEventListener('scroll', () => {
      let breakSec = el.offsetTop + 50;

      if (scroll > breakSec && i == 1) {
        count();
        i++;
      }
    });
  });
};

function count() {
  let count = document.querySelectorAll('.count');

  count.forEach((el, i) => {
    let elQuery = (el[i].Counter = 0);

    elQuery.animate(
      {
        Counter: el.textContent,
      },
      {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
          el.textContent = Math.ceil(now).toLocaleString();
        },
      }
    );
  });
}

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
