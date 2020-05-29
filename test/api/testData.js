exports.testData = {
    restaurants: [
        {
            name: 'Macro',
            logoRelativePath: '/restaurantLogos/macro',
            openAtHour: 1200,
            closedAtHour: 2000,
            deliveryPrice: 20.00,
            deliveryLowerBoundary: 100,
            deliveryUpperBoundary: 250,
            deliveryTimeMinutes: 30,
            rating: 4.9,
            address: 'Jernbanegade 16',
            postalCode: 4700,
            city: 'Næstved'
        },
        {
            name: 'Dhaba',
            logoRelativePath: '/restaurantLogos/dhaba',
            openAtHour: 1200,
            closedAtHour: 2200,
            deliveryPrice: 10.00,
            deliveryLowerBoundary: 0,
            deliveryUpperBoundary: null,
            deliveryTimeMinutes: 30,
            rating: 4.2,
            address: 'Sct. Peders Kirkeplads 1',
            postalCode: 4700,
            city: 'Næstved'
        },
        {
            name: 'Café Elysia',
            logoRelativePath: '/restaurantLogos/cafeelysia',
            openAtHour: 1600,
            closedAtHour: 2200,
            deliveryPrice: 0.00,
            deliveryLowerBoundary: 50,
            deliveryUpperBoundary: 150,
            deliveryTimeMinutes: 45,
            rating: 4.6,
            address: 'Jernbanegade 15',
            postalCode: 4700,
            city: 'Næstved'
        }
    ],
    menuCategories: [
        {
            categoryName: 'Lunch from 12:00',
            restaurantId: 1
        },
        {
            categoryName: 'Dinner from 17:00',
            restaurantId: 1
        },
        {
            categoryName: 'Menu',
            restaurantId: 2
        },
        {
            categoryName: 'Tapas',
            restaurantId: 3
        },
        {
            categoryName: 'Burger',
            restaurantId: 3
        },
        {
            categoryName: 'Drinks',
            restaurantId: 1
        },
        {
            categoryName: 'Drinks',
            restaurantId: 2
        },
        {
            categoryName: 'Drinks',
            restaurantId: 3
        }
    ],
    menuItems: [
        {
            itemName: 'Mexican inspired salad',
            price: 70.00,
            categoryId: 1
        },
        {
            itemName: 'Smokey brisket sandwich',
            price: 60.00,
            categoryId: 1
        },
        {
            itemName: 'Chicken Pesto w/root vegetables',
            price: 70.00,
            categoryId: 2
        },
        {
            itemName: 'One pot pasta',
            price: 70.00,
            categoryId: 2
        },
        {
            itemName: 'Aloo Jeera',
            price: 49.00,
            categoryId: 3
        },
        {
            itemName: 'Vegetar samosa',
            price: 35.00,
            categoryId: 3
        },
        {
            itemName: 'Mango salad',
            price: 49.00,
            categoryId: 3
        },
        {
            itemName: 'Cheese & sausage',
            price: 89.00,
            categoryId: 4
        },
        {
            itemName: 'Curry Luxury herring',
            price: 110.00,
            categoryId: 4
        },
        {
            itemName: 'Classic',
            price: 70.00,
            categoryId: 5
        },
        {
            itemName:'Water 0,5 liter',
            price: 10.00,
            categoryId: 6
        },
        {
            itemName:'Water 0,5 liter',
            price: 10.00,
            categoryId: 7
        },
        {
            itemName:'Water 0,5 liter',
            price: 10.00,
            categoryId: 8
        },
        {
            itemName:'Coca Cola 0,5 liter',
            price: 20.00,
            categoryId: 6
        },
        {
            itemName:'Coca Cola 0,5 liter',
            price: 20.00,
            categoryId: 7
        },
        {
            itemName:'Coca Cola 0,5 liter',
            price: 20.00,
            categoryId: 8
        }
    ],
    itemIngredients: [
        {
            ingredientName: 'avocado' //1
        },
        {
            ingredientName: 'tomato' //1
        },
        {
            ingredientName: 'pulled veal brisket' //2
        },
        {
            ingredientName: 'creamy horseradish sauce' //2
        },
        {
            ingredientName: 'carrot' //3
        },
        {
            ingredientName: 'earthnut' //3
        },
        {
            ingredientName: 'spaghetti' //4
        },
        {
            ingredientName: 'squash' //4
        },
        {
            ingredientName: 'fried potatoes' //5
        },
        {
            ingredientName: 'cumin' //5
        },
        {
            ingredientName: 'potatoe' //6
        },
        {
            ingredientName: 'peas' //6
        },
        {
            ingredientName: 'tomatoes' //7
        },
        {
            ingredientName: 'rice crispies' //7
        },
        {
            ingredientName: 'manchego cheese' //8
        },
        {
            ingredientName: 'chorizo sausage' //8
        },
        {
            ingredientName: 'beef' //10
        },
        {
            ingredientName: 'chili' //10
        },
        {
            ingredientName: 'iceberg salad' //10
        },
        {
            ingredientName: 'bacon' //10
        }
    ]
}

exports.testRestaurants = [
    {
        id: 1,
        name: 'Test1',
        logoRelativePath: '/restaurantLogos/macro',
        openAtHour: 1200,
        closedAtHour: 2000,
        deliveryPrice: 20,
        deliveryLowerBoundary: 100,
        deliveryUpperBoundary: 250,
        deliveryTimeMinutes: 30,
        rating: 4.9,
        address: 'Jernbanegade 16',
        postalCode: 4700,
        city: 'Næstved'
    },
    {
        id: 2,
        name: 'Test2',
        logoRelativePath: '/restaurantLogos/dhaba',
        openAtHour: 1200,
        closedAtHour: 2200,
        deliveryPrice: 10,
        deliveryLowerBoundary: 0,
        deliveryUpperBoundary: null,
        deliveryTimeMinutes: 30,
        rating: 4.2,
        address: 'Sct. Peders Kirkeplads 1',
        postalCode: 4700,
        city: 'Næstved'
    },
    {
        id: 3,
        name: 'Test3',
        logoRelativePath: '/restaurantLogos/cafeelysia',
        openAtHour: 1600,
        closedAtHour: 2200,
        deliveryPrice: 0,
        deliveryLowerBoundary: 50,
        deliveryUpperBoundary: 150,
        deliveryTimeMinutes: 45,
        rating: 4.6,
        address: 'Jernbanegade 15',
        postalCode: 4700,
        city: 'Næstved'
    }
]

exports.testSingleRestaurant = {
    id: 1,
    name: "Macro",
    logoRelativePath: "/restaurantLogos/macro",
    openAtHour: 1200,
    closedAtHour: 2000,
    deliveryPrice: 20,
    deliveryLowerBoundary: 100,
    deliveryUpperBoundary: 250,
    deliveryTimeMinutes: 30,
    rating: 4.9,
    address: "Jernbanegade 16",
    postalCode: 4700,
    city: "Næstved",
    MenuCategories: [
        {
            id: 1,
            categoryName: "Lunch from 12:00",
            restaurantId: 1,
            MenuItems: [
                {
                    id: 1,
                    itemName: "Mexican inspired salad",
                    price: 70,
                    categoryId: 1,
                    ItemIngredients: [
                        {
                            id: 1,
                            ingredientName: "avocado",
                            MenuItems_ItemsIngredients: {
                                ItemsIngredientsid: 1,
                                MenuItemsid: 1
                            }
                        },
                        {
                            id: 2,
                            ingredientName: "tomato",
                            MenuItems_ItemsIngredients: {
                                ItemsIngredientsid: 2,
                                MenuItemsid: 1
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    itemName: "Smokey brisket sandwich",
                    price: 60,
                    categoryId: 1,
                    ItemIngredients: [
                        {
                            id: 3,
                            ingredientName: "pulled veal brisket",
                            MenuItems_ItemsIngredients: {
                                ItemsIngredientsid: 3,
                                MenuItemsid: 2
                            }
                        },
                        {
                            id: 4,
                            ingredientName: "creamy horseradish sauce",
                            MenuItems_ItemsIngredients: {
                                ItemsIngredientsid: 4,
                                MenuItemsid: 2
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            categoryName: "Dinner from 17:00",
            restaurantId: 1,
            MenuItems: [
                {
                    id: 3,
                    itemName: "Chicken Pesto w/root vegetables",
                    price: 70,
                    categoryId: 2,
                    ItemIngredients: [
                        {
                            id: 5,
                            ingredientName: "carrot",
                            MenuItems_ItemsIngredients: {
                                ItemsIngredientsid: 5,
                                MenuItemsid: 3
                            }
                        },
                        {
                            id: 6,
                            ingredientName: "earthnut",
                            MenuItems_ItemsIngredients: {
                                ItemsIngredientsid: 6,
                                MenuItemsid: 3
                            }
                        }
                    ]
                },
                {
                    id: 4,
                    itemName: "One pot pasta",
                    price: 70,
                    categoryId: 2,
                    ItemIngredients: [
                        {
                            id: 7,
                            ingredientName: "spaghetti",
                            MenuItems_ItemsIngredients: {
                                ItemsIngredientsid: 7,
                                MenuItemsid: 4
                            }
                        },
                        {
                            id: 8,
                            ingredientName: "squash",
                            MenuItems_ItemsIngredients: {
                                ItemsIngredientsid: 8,
                                MenuItemsid: 4
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            categoryName: "Drinks",
            restaurantId: 1,
            MenuItems: [
                {
                    id: 11,
                    itemName: "Water 0,5 liter",
                    price: 10,
                    categoryId: 6,
                    ItemIngredients: []
                },
                {
                    id: 14,
                    itemName: "Coca Cola 0,5 liter",
                    price: 20,
                    categoryId: 6,
                    ItemIngredients: []
                }
            ]
        }
    ]
}

exports.testOrder = {
    cusFirstName: 'Dwight',
    cusSurname: 'Schrute',
    address: 'Some Street 321',
    postalCode: 6500,
    city: 'Paper City',
    phoneNumber: 98765431,
    delivery: 0,
    totalPrice: 210.00,
    orderItems: [
        {
            itemName: 'Eatable item 1',
            quantity: 2,
            price: 20.00
        },
        {
            itemName: 'Expensive eatable item 2',
            quantity: 1,
            price: 170.00
        }
    ]
}