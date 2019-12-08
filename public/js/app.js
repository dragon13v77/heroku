const app = (function () {
	return {
		init() {
			document.getElementById('page_title').innerHTML = 'Hello Heroku!!';
			return this;
		},
	};
}());

app.init();
