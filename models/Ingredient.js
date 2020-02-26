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

const Ingredient = new Schema({
    name: String, 
    qty: Number,
    measurement: String,
    recipe: {type: Schema.ObjectId, ref: 'Recipe'}
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Ingredient', Ingredient);
