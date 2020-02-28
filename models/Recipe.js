/* 
 * Place all DB schemas here for a single model.
 */

/* Step 1
 *
 * Import mongoose connection
 *
 */
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

/* Step 2
 *
 * TODO: create model schema 
 *
 */
// const TemplateModelSchema = new mongoose.Schema({
//   name: String
// })
const Recipe = new Schema({
  name: {
    type:String,
    required: true,
  },
  image: String,
  // ingredients: [{type: Schema.ObjectId, ref: 'Ingredient'}], 
  ingredients: String,
  cooktime: Number,
  directions: String,
  comment: String,
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Recipe', Recipe);
