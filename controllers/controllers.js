const  { Article }  = require('../models/article')
const {handlerError} = require('../config/handlerErrors')

const homePage = (req,res) => {
        Article.find().sort({createdAt: -1}) // new article is on top
        .then( result => res.render('index', {result, pageTitle: 'Homepage'})
        )
        .catch( err => console.log(err))
}

const showOneArticle = (req, res) => {
    Article.findById(req.params.id)
    .then( result => {
        res.render('showOne', {result, pageTitle: 'Page Detail'})})
    .catch( err => console.log(err))
}

const addArticle = (req,res) => {
    if (req.method === 'GET') {
        res.render('post', {errors: null, pageTitle: 'Post'})
    }
    if (req.method === 'POST') {
            const article = new Article(req.body)
            article.save()
                .then( () => res.redirect('/'))
                .catch( err => {
                    const errors = handlerError(err)
                    res.render('post', {errors, pageTitle: 'Post'})})
    } 
}

const editArticle = (req,res) => {
    if (req.method === 'GET') {
        Article.findById(req.params.id)
            .then( result => res.render('editArticle', {result, errors: null, pageTitle: 'Edit'}))
            .catch( err => console.log(err))
            
    }
    
    if (req.method === 'POST') {
        Article.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
            .then(() => res.redirect('/'))
            .catch(err => {
                const errors = handlerError(err)
                // console.log(errors);
                Article.findById(req.params.id)
                    .then(result => {
                res.render('editArticle', {errors, result, pageTitle: 'Post'})})
            })
    }
}

const deleteArticle = (req,res) => {
    Article.findByIdAndDelete(req.params.id)
        .then( () => res.redirect('/'))
        .catch( err => console.log(err))
}

module.exports = {
    homePage,
    showOneArticle,
    addArticle,
    deleteArticle,
    editArticle,
}



