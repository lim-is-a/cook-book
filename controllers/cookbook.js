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
const Cookbook = require('../models/Cookbook')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
// const templateRouter = express.Router()
const cookbookRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
// #NEW - GET req - take you to createForm
cookbookRouter.get('/cookbooks/new', (req,res)=>{
  res.render('cookbooks/createForm')
})

// #SHOW - GET req - takes you to SPECIFIC cookbook
cookbookRouter.get('/cookbooks/:cookbookId', (req,res)=>{
  Cookbook.findById(req.params.cookbookId).then((cookbook)=>{
    console.log(cookbook);
    res.render('cookbooks/cookbook',{cookbook})
  })
}) 

// #EDIT - GET req - take you to editForm
cookbookRouter.get('/cookbooks/:cookbookId/edit', (req, res)=>{
  Cookbook.findById(req.params.cookbookId).then((cookbook)=>{
    res.render('cookbooks/editForm', {cookbook})
  })
})

// #UPDATE - PUT - update the database
cookbookRouter.put('/cookbooks/:cookbookId',(req, res)=>{
  // console.log('in put')
  Cookbook.findByIdAndUpdate(req.params.cookbookId, req.body).then(()=>{
  //  console.log("in find" +req.params.cookbookId)
    res.redirect('/cookbooks/' + req.params.cookbookId)
  })
})

// #DELETE - DELETE - delete an item & go back to all cookbooks
cookbookRouter.delete('/cookbooks/:cookbookId', (req, res)=>{
  Cookbook.findByIdAndRemove(req.params.cookbookId).then(()=>{
    res.redirect('/cookbooks')
  })
})
// #CREATE - POST req - to create/add cookbooks
cookbookRouter.post('/cookbooks', (req, res)=>{
  Cookbook.create(req.body).then(()=>{
    res.redirect('/cookbooks')
  })
})
cookbookRouter.get('/cookbooks', (req, res) => {
  Cookbook.find().then(()=>{
    res.render('cookbooks/index')    
  })
})

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
// templateRouter.get('/', (req, res) => {
cookbookRouter.get('/', (req, res) => {
  Cookbook.find().then(()=>{
    res.render('cookbooks/cookbooks')    
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
// module.exports = templateRouter;
module.exports = cookbookRouter;
