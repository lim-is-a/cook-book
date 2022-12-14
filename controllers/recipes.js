/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `TemplateModel` to something more sensible (e.g:
 * `Shop`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
// const TemplateModel = require('../models/template.js')
const Recipe = require('../models/Recipe')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
// const templateRouter = express.Router()
const recipeRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
// #NEW - GET req - take you to createForm
recipeRouter.get('/new', (req,res)=>{
  res.render('recipes/createForm')
})

// #SHOW - GET req - takes you to SPECIFIC recipe
recipeRouter.get('/:recipeId', (req,res)=>{
  Recipe.findById(req.params.recipeId).then((recipe)=>{
    console.log(recipe);
    res.render('recipes/recipe',{recipe})
  })
}) 

// #EDIT - GET req - take you to editForm
recipeRouter.get('/:recipeId/edit', (req, res)=>{
  Recipe.findById(req.params.recipeId).then((recipe)=>{
    res.render('recipes/editForm', {recipe})
  })
})

// #UPDATE - PUT - update the database
recipeRouter.put('/:recipeId',(req, res)=>{
  // console.log('in put')
  Recipe.findByIdAndUpdate(req.params.recipeId, req.body).then(()=>{
  //  console.log("in find" +req.params.recipeId)
    res.redirect('/recipes/' + req.params.recipeId)
  })
})

// #DELETE - DELETE - delete an item & go back to all recipes
recipeRouter.delete('/:recipeId', (req, res)=>{
  Recipe.findByIdAndRemove(req.params.recipeId).then(()=>{
    res.redirect('/recipes')
  })
})
// #CREATE - POST req - to create/add recipes
recipeRouter.post('/', (req, res)=>{
  Recipe.create(req.body).then(()=>{
    res.redirect('/recipes')
  })
})
/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
// templateRouter.get('/', (req, res) => {
// #INDEX - GET - Takes you to ALL recipes page
recipeRouter.get('/', (req, res) => {
  Recipe.find().then((recipes)=>{
    console.log(recipes)
    res.render('recipes/index',{ recipes })
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
// module.exports = templateRouter;
module.exports = recipeRouter;