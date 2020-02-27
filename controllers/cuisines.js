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
const Cuisine = require('../models/Cuisine')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const cuisineRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
// #NEW - GET req - take you to createForm
cuisineRouter.get('/new', (req,res)=>{
  res.render('cuisines/createForm')
})

// #SHOW - GET req - takes you to SPECIFIC cuisine
cuisineRouter.get('/:cuisineId', (req,res)=>{
  Cuisine.findById(req.params.cuisineId).then((cuisine)=>{
    console.log(cuisine);
    res.render('cuisines/cuisine',{cuisine})
  })
}) 

// #EDIT - GET req - take you to editForm
cuisineRouter.get('/:cuisineId/edit', (req, res)=>{
  Cuisine.findById(req.params.cuisineId).then((cuisine)=>{
    res.render('cuisines/editForm', {cuisine})
  })
})

// #UPDATE - PUT - update the database
cuisineRouter.put('/:cuisineId',(req, res)=>{
  Cuisine.findByIdAndUpdate(req.params.cuisineId, req.body).then(()=>{
    res.redirect('/cuisines/' + req.params.cuisineId)
  })
})

// #DELETE - DELETE - delete an item & go back to all cuisines
cuisineRouter.delete('/:cuisineId', (req, res)=>{
  Cuisine.findByIdAndRemove(req.params.cuisineId).then(()=>{
    res.redirect('/cuisines')
  })
})
// #CREATE - POST req - to create/add cuisines
cuisineRouter.post('/', (req, res)=>{
  Cuisine.create(req.body).then(()=>{
    res.redirect('/cuisines')
  })
})
/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
// templateRouter.get('/', (req, res) => {
// #INDEX - GET - Takes you to ALL cuisines page
cuisineRouter.get('/', (req, res) => {
  Cuisine.find().then((cuisines)=>{
    console.log(cuisines)
    res.render('cuisines/index',{ cuisines })
  })
})

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
cuisineRouter.get('/', (req, res) => {
  Cuisine.find().then(()=>{
    res.render('cuisines/index')
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = cuisineRouter;
