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
const Ingredient = require('../models/Ingredient')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
// const templateRouter = express.Router()
const ingredientRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
// #NEW - GET req - take you to createForm
ingredientRouter.get('/new', (req,res)=>{
  res.render('ingredients/createForm')
})

// #CREATE - POST req - to create/add ingredients
ingredientRouter.post('/', (req, res)=>{
  Ingredient.create(req.body).then(()=>{
    res.redirect('/ingredients/index')
  })
})

// #SHOW - GET req - takes you to SPECIFIC ingredient
ingredientRouter.get('/:ingredientId', (req,res)=>{
  Ingredient.findById(req.params.ingredientId).then((ingredient)=>{
    console.log(ingredient);
    res.render('ingredients/ingredient',{ingredient})
  })
}) 

// #EDIT - GET req - take you to editForm
ingredientRouter.get('/:ingredientId/edit', (req, res)=>{
  Ingredient.findById(req.params.ingredientId).then((ingredient)=>{
    res.render('ingredients/editForm', {ingredient})
  })
})

// #UPDATE - PUT - update the database
ingredientRouter.put('/:ingredientId',(req, res)=>{
  Ingredient.findByIdAndUpdate(req.params.ingredientId, req.body).then((ingredient)=>{
    res.redirect('/ingredients')
  })
})

// #DELETE - DELETE - delete an item & go back to all ingredients
ingredientRouter.delete('/:ingredientId', (req, res)=>{
  Ingredient.findByIdAndRemove(req.params.ingredientId).then(()=>{
    res.redirect('/ingredients')
  })
})

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
// templateRouter.get('/', (req, res) => {
// #INDEX - GET - Takes you to ALL ingredients page
ingredientRouter.get('/', (req, res) => {
  Ingredient.find().then((ingredients)=>{
    console.log(ingredients)
    res.render('ingredients/index',{ ingredients })
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
// module.exports = templateRouter;
module.exports = ingredientRouter;

