/* 
 * Place all DB schemas here for a single model.
 */

/* Step 1
 *
 * Import mongoose connection
 *
 */
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

/* Step 2
 *
 * TODO: create model schema 
 *
 */
// const TemplateModelSchema = new mongoose.Schema({
//   name: String
// })
const Cookbook = new Schema({
  belongsTo: String,
  createdOn: Date,
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Cookbook', Cookbook);
