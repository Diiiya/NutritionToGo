exports.testData = {
    restaurants: [
        {
            name: 'Macro',
            logoRelativePath: '/restaurantLogos/macro',
            openAtHour: 1200,
            closedAtHour: 2000,
            deliveryPrice: 20.00,
            deliveryMinimumOrderAmount: 100,
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
            deliveryPrice: 70.00,
            deliveryMinimumOrderAmount: 150,
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
            deliveryPrice: 50.00,
            deliveryMinimumOrderAmount: 200,
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
            ingredientName: ' bacon' //10
        }
    ]
}