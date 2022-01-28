const express = require('express')
const router = express.Router();
const controller = require('./controllers/controllers')

router.get('/', controller.homePage)

router.all('/add-article', controller.addArticle)

router.get('/showOne-article/:id', controller.showOneArticle)

router.all('/edit-article/:id', controller.editArticle)

router.get('/delete-article/:id', controller.deleteArticle)

module.exports = router