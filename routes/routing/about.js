const { Router } = require('express');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', function (req, res) {
			return res.render('about.ejs', {
        title: "Store",
        about: "Somos uma financiadora especializada no cliente e em trazer satisfação para você!",
      })
		});
	}
};

module.exports.page = '/about';