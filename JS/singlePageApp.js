const app = {
  init: () => {
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', app.nav);
    });
    window.history.replaceState({}, 'Home', '#home');
  },
  nav: (ev) => {
    ev.preventDefault();
    const currentPage = ev.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
    window.history.pushState({}, currentPage, `#${currentPage}`);
  },
};
export default app;