let Cookbook = require('../models/Cookbook')
let Cuisine = require('../models/Cuisine')
let Recipe = require('../models/Recipe')

let newCookBook = [
    {
        belongsTo: 'Arlen',
        createdOn: new Date(2020, 2, 23)
    },

]

let newCuisines = [
    {
        name: "Italian Cuisine",
        placeOfOrigin: "Italy",
    },
    {
        name: "Mexican Cuisine",
        placeOfOrigin: "Mexico",
    },
]

let newRecipes = [
    {
        name: "spaghetti",
        ingredients: [
            {
                name: "noodles",
                qty: .5,
                measurement: "ounce",
            },
            {
                name: "noodles",
                qty: .5,
                measurement: "ounce",
            }
        ],
        cooktime: 15,
        directions: "blah blahh blahhh coook like this",
        comment: "Loved this ",
    },
    {
        name: "lasagna",
        ingredients: [
            {
                name: "noodles",
                qty: .5,
                measurement: "ounce",
            },
            {
                name: "noodles",
                qty: .5,
                measurement: "ounce",
            }
        ],
        cooktime: 15,
        directions: "blah blahh blahhh coook like this",
        comment: "Loved this ",
    },
]

// newCookBook
// newCuisines
// newRecipes
// let theCuisine;

// Recipe.deleteMany().then(()=>{
//     return Cuisine.deleteMany();
// }).then(()=>{
//     return Cookbook.deleteMany();
// }).then(()=>{
//     return Cuisine.create(newCuisines);
// }).then((cuisines)=>{
//     theCuisine = cuisines;
//     return Recipe.create(newRecipes);
// }).then((recipes)=>{
//     recipes[1].coffee = theCuisine[0];
//     return recipes[1].save();
// }).then(()=>{
//     return Cookbook.create(newCookBook)
// }).then(()=>{
//     console.log('database seeded')
// })
// JUST RECIPE
Recipe.deleteMany().then(()=>{
    return Recipe.create(newRecipes)
}).then(()=>{
    console.log('database seeded')
})

