export const RestaurantMenuData = {
  // Pizza Hut Menuta
  709678: {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "709678",
                name: "Pizza Hut",
                city: "Delhi",
                slugs: {
                  restaurant: "pizza-hut-paharganj",
                  city: "delhi",
                },
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/f9e95640-5b85-4307-9607-34e83c71086a_709678.JPG",
                locality: "Paharganj",
                areaName: "Paharganj",
                costForTwo: "35000",
                costForTwoMessage: "₹350 for two",
                cuisines: ["Pizzas"],
                avgRating: 4.2,
                feeDetails: {
                  restaurantId: "709678",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 3200,
                    },
                    {
                      name: "BASE_TIME",
                    },
                  ],
                  totalFee: 3200,
                },
                parentId: "721",
                avgRatingString: "4.2",
                totalRatingsString: "1.3K+",
                sla: {
                  deliveryTime: 23,
                  lastMileTravel: 1.2,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "1.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2025-12-08 23:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
              },
            },
          },
        },
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Recommended",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "101234567",
                                name: "Margherita Pizza",
                                category: "Pizzas",
                                description:
                                  "Classic delight with 100% real mozzarella cheese",
                                imageId: "pizza_margherita_123",
                                inStock: 1,
                                isVeg: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {
                                  variantGroups: [
                                    {
                                      groupId: "23456789",
                                      name: "Size",
                                      variations: [
                                        {
                                          name: "Regular",
                                          price: 299,
                                          default: 1,
                                          id: "98765432",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Medium",
                                          price: 449,
                                          id: "98765433",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Large",
                                          price: 649,
                                          id: "98765434",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                  pricingModels: [
                                    {
                                      variations: [
                                        {
                                          groupId: "23456789",
                                          variationId: "98765432",
                                        },
                                      ],
                                      price: 29900,
                                    },
                                  ],
                                },
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "256 ratings",
                                    ratingCountV2: "256",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "101234568",
                                name: "Pepperoni Pizza",
                                category: "Pizzas",
                                description:
                                  "Loaded with pepperoni and extra cheese",
                                imageId: "pizza_pepperoni_456",
                                inStock: 1,
                                price: 39900,
                                variants: {},
                                variantsV2: {
                                  variantGroups: [
                                    {
                                      groupId: "23456790",
                                      name: "Size",
                                      variations: [
                                        {
                                          name: "Regular",
                                          price: 399,
                                          default: 1,
                                          id: "98765435",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Medium",
                                          price: 549,
                                          id: "98765436",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Large",
                                          price: 749,
                                          id: "98765437",
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                  pricingModels: [
                                    {
                                      variations: [
                                        {
                                          groupId: "23456790",
                                          variationId: "98765435",
                                        },
                                      ],
                                      price: 39900,
                                    },
                                  ],
                                },
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "189 ratings",
                                    ratingCountV2: "189",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Sides & Beverages",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "101234569",
                                name: "Garlic Breadsticks",
                                category: "Sides",
                                description:
                                  "Freshly baked garlic breadsticks with cheese dip",
                                imageId: "garlic_breadsticks_789",
                                inStock: 1,
                                isVeg: 1,
                                price: 12900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "98 ratings",
                                    ratingCountV2: "98",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "101234570",
                                name: "Pepsi (500ml)",
                                category: "Beverages",
                                description: "Chilled Pepsi bottle",
                                imageId: "pepsi_500ml_012",
                                inStock: 1,
                                isVeg: 1,
                                price: 5900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "45 ratings",
                                    ratingCountV2: "45",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    },
  },

  // Burger King Menu
  8614: {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "8614",
                name: "Burger King",
                city: "Delhi",
                slugs: {
                  restaurant: "burger-king-connaught-place",
                  city: "delhi",
                },
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ee1fdf16-ea5f-4a44-9e58-7b3a9dee2618_8614.jpg",
                locality: "Connaught Place",
                areaName: "Connaught Place",
                costForTwo: "35000",
                costForTwoMessage: "₹350 for two",
                cuisines: ["Burgers", "American"],
                avgRating: 4.4,
                feeDetails: {
                  restaurantId: "8614",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 3500,
                    },
                  ],
                  totalFee: 3500,
                },
                parentId: "166",
                avgRatingString: "4.4",
                totalRatingsString: "44K+",
                sla: {
                  deliveryTime: 21,
                  lastMileTravel: 1.7,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "1.7 km",
                },
                availability: {
                  nextCloseTime: "2025-12-09 03:00:00",
                  opened: true,
                },
                isOpen: true,
              },
            },
          },
        },
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Whopper Range",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "201234567",
                                name: "Whopper",
                                category: "Burgers",
                                description:
                                  "Our signature flame-grilled beef patty with fresh vegetables",
                                imageId: "whopper_classic_123",
                                inStock: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: "34567890",
                                    groupName: "Add Ons",
                                    choices: [
                                      {
                                        id: "45678901",
                                        name: "Extra Cheese Slice",
                                        price: 3900,
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: "45678902",
                                        name: "Extra Patty",
                                        price: 7900,
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "1234 ratings",
                                    ratingCountV2: "1234",
                                  },
                                },
                              },
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "201234568",
                                name: "Veg Whopper",
                                category: "Burgers",
                                description:
                                  "Plant-based patty with fresh vegetables",
                                imageId: "veg_whopper_456",
                                inStock: 1,
                                isVeg: 1,
                                price: 21900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "876 ratings",
                                    ratingCountV2: "876",
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Chicken Burgers",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "201234569",
                                name: "Crispy Chicken Burger",
                                category: "Burgers",
                                description:
                                  "Crispy fried chicken patty with mayo and lettuce",
                                imageId: "crispy_chicken_789",
                                inStock: 1,
                                price: 15900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "567 ratings",
                                    ratingCountV2: "567",
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Sides & Drinks",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "201234570",
                                name: "King Fries (Medium)",
                                category: "Sides",
                                description: "Crispy golden french fries",
                                imageId: "king_fries_012",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {
                                  variantGroups: [
                                    {
                                      groupId: "34567891",
                                      name: "Size",
                                      variations: [
                                        {
                                          name: "Regular",
                                          price: 79,
                                          id: "45678903",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Medium",
                                          price: 99,
                                          default: 1,
                                          id: "45678904",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          name: "Large",
                                          price: 129,
                                          id: "45678905",
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "345 ratings",
                                    ratingCountV2: "345",
                                  },
                                },
                              },
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "201234571",
                                name: "Coca Cola (Regular)",
                                category: "Beverages",
                                description: "Chilled Coca Cola",
                                imageId: "coca_cola_345",
                                inStock: 1,
                                isVeg: 1,
                                price: 7900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "123 ratings",
                                    ratingCountV2: "123",
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    },
  },

  // McDonald's Menu
  253982: {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "253982",
                name: "McDonald's",
                city: "Delhi",
                slugs: {
                  restaurant: "mcdonalds-sansad-marg-connaught-place",
                  city: "delhi",
                },
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/c13d7c34-c64a-4460-9161-5b77537f6742_253982.JPG",
                locality: "Sansad Marg",
                areaName: "Connaught Place",
                costForTwo: "40000",
                costForTwoMessage: "₹400 for two",
                cuisines: ["American"],
                avgRating: 4.6,
                parentId: "630",
                avgRatingString: "4.6",
                totalRatingsString: "4.3K+",
                sla: {
                  deliveryTime: 18,
                  lastMileTravel: 1.2,
                  serviceability: "SERVICEABLE",
                  slaString: "15-20 mins",
                },
                availability: {
                  nextCloseTime: "2025-12-08 23:00:00",
                  opened: true,
                },
                isOpen: true,
              },
            },
          },
        },
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "McSaver Combos",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "301234567",
                                name: "McAloo Tikki Burger Meal",
                                category: "Combos",
                                description:
                                  "McAloo Tikki Burger + Fries (M) + Coke",
                                imageId: "mcaloo_meal_123",
                                inStock: 1,
                                isVeg: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "2345 ratings",
                                    ratingCountV2: "2345",
                                  },
                                },
                              },
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "301234568",
                                name: "McChicken Burger Meal",
                                category: "Combos",
                                description:
                                  "McChicken Burger + Fries (M) + Coke",
                                imageId: "mcchicken_meal_456",
                                inStock: 1,
                                price: 26900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "1876 ratings",
                                    ratingCountV2: "1876",
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Burgers & Wraps",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "301234569",
                                name: "McSpicy Chicken Burger",
                                category: "Burgers",
                                description:
                                  "Spicy fried chicken patty with jalapenos",
                                imageId: "mcspicy_789",
                                inStock: 1,
                                price: 21900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "1234 ratings",
                                    ratingCountV2: "1234",
                                  },
                                },
                              },
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "301234570",
                                name: "McVeggie Burger",
                                category: "Burgers",
                                description:
                                  "Vegetable patty with cheese and mayo",
                                imageId: "mcveggie_012",
                                inStock: 1,
                                isVeg: 1,
                                price: 14900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "987 ratings",
                                    ratingCountV2: "987",
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Desserts & Beverages",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "301234571",
                                name: "McFlurry Oreo (M)",
                                category: "Desserts",
                                description: "Soft serve with Oreo pieces",
                                imageId: "mcflurry_345",
                                inStock: 1,
                                isVeg: 1,
                                price: 12900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.7",
                                    ratingCount: "678 ratings",
                                    ratingCountV2: "678",
                                  },
                                },
                              },
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "301234572",
                                name: "Iced Coffee",
                                category: "Beverages",
                                description: "Chilled coffee with ice",
                                imageId: "iced_coffee_678",
                                inStock: 1,
                                isVeg: 1,
                                price: 9900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "345 ratings",
                                    ratingCountV2: "345",
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    },
  },
};