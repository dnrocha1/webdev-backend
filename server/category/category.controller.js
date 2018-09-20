const Category = require('./category.model');

function getCategories(req, res) {
    Category.find()
        .then(categories => res.json(categories))
        .catch(err => res.send(err));
}

function getCategoryById(req, res) {
    Category.findById(req.params.idCategory)
        .then(category => json(category))
        .catch(err => res.send(err));
}

function newCategory(req, res) {
    const category = new Category(req.body);
    category.save()
        .then(() => {res.json(category)})
        .catch(err => res.send(err));
}

module.exports = {getCategories, getCategoryById, newCategory};