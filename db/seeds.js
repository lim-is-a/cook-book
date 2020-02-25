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
