const app = {
	init: function() {
		console.log("currentPage");
		document.querySelectorAll('.nav-link').forEach((link) => {
			link.addEventListener('click', app.nav);
		})
		history.replaceState({}, 'Home', '#home');
	},
	nav: function(ev) {
		ev.preventDefault();
		let currentPage = ev.target.getAttribute('data-target');

		document.querySelector('.active').classList.remove('active');
		document.getElementById(currentPage).classList.add('active');
		history.pushState({}, currentPage, `#${currentPage}`);
	},
}
export {
	app
};