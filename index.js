class RestaurantMenu {
    constructor() {
        this.menus = {
            breakfast: {
                starters: [
                    { name: "Fruit Salad", price: 5 },
                    { name: "Tortillas", price: 4 },
                    { name: "Croissant", price: 4 }
                ],
                mains: [
                    { name: "Pancakes", price: 6 },
                    { name: "Muffin", price: 3 },
                    { name: "Omelette", price: 7 }
                ],
                desserts: [
                    { name: "Cafe", price: 3 },
                    { name: "Zumo", price: 3 },
                    { name: "Infusion", price: 3 }
                ]
            },
            lunch: {
                starters: [
                    { name: "Soup", price: 5 },
                    { name: "Pasta", price: 3 },
                    { name: "Salad", price: 4 }
                ],
                mains: [
                    { name: "Hamburgesa", price: 8 },
                    { name: "Pescado", price: 3 },
                    { name: "Carne", price: 3 },
                    { name: "Grilled Chicken", price: 9 }
                ],
                desserts: [
                    { name: "Ice Cream", price: 4 },
                    { name: "Cafe", price: 3 },
                    { name: "Brownie", price: 5 }
                ]
            },
            dinner: {
                starters: [
                    { name: "Bruschetta", price: 6 },
                    { name: "Gazpacho", price: 3 },
                    { name: "Stuffed Mushrooms", price: 7 }
                ],
                mains: [
                    { name: "Steak", price: 15 },
                    { name: "Pollo", price: 3 },
                    { name: "Salmon", price: 14 }
                ],
                desserts: [
                    { name: "Cheesecake", price: 6 },
                    { name: "Cafe", price: 3 },
                    { name: "Tiramisu", price: 7 }
                ]
            }
        };
        this.comments = [
            "Uhmm...Excellent choice!",
            "A popular item!",
            "You have a great taste!",
            "One of my favorites!",
        ];
    }

    getMenuType(hour) {
        if (hour >= 6 && hour < 11) return 'breakfast';
        else if (hour >= 11 && hour < 17) return 'lunch';
        else if (hour >= 17 && hour < 22) return 'dinner';
        else return 'closed';
    }

    printMenu(menuType) {
        const menu = this.menus[menuType];
        let menuString = `${menuType.charAt(0).toUpperCase() + menuType.slice(1)} Menu:\n\nStarters:\n`;
        menu.starters.forEach(item => {
            menuString += `${item.name}: €${item.price}\n`;
        });
        menuString += `\nMains:\n`;
        menu.mains.forEach(item => {
            menuString += `${item.name}: €${item.price}\n`;
        });
        menuString += `\nDesserts:\n`;
        menu.desserts.forEach(item => {
            menuString += `${item.name}: €${item.price}\n`;
        });
        alert(menuString);
    }

    selectItem(menu, category) {
        let item = null;
        while (!item) {
            let selectionPrompt = `Please select a ${category.slice(0, -1)}:\n`;
            menu[category].forEach(item => {
                selectionPrompt += `${item.name} (€${item.price})\n`;
            });
            const selection = prompt(selectionPrompt);
            item = menu[category].find(item => item.name.toLowerCase() === selection.toLowerCase());
            if (item) {
                const comment = this.comments[Math.floor(Math.random() * this.comments.length)];
                alert(`You selected ${item.name}. ${comment} It costs €${item.price}.`);
            } else {
                alert("Item not found. Please select again.");
            }
        }
        return item;
    }

    getOrder(hour) {
        const menuType = this.getMenuType(hour);
        if (menuType === 'closed') {
            alert("Sorry, the restaurant is closed.");
            return;
        }

        this.printMenu(menuType);

        let total = 0;
        const menu = this.menus[menuType];
        let selectedItems = [];

        // Select starter
        const selectedStarter = this.selectItem(menu, 'starters');
        selectedItems.push(selectedStarter);

        // Select main
        const selectedMain = this.selectItem(menu, 'mains');
        selectedItems.push(selectedMain);

        // Select dessert
        const selectedDessert = this.selectItem(menu, 'desserts');
        selectedItems.push(selectedDessert);

        let orderDetails = "Your order details:\n";
        selectedItems.forEach(item => {
            total += item.price;
            orderDetails += `${item.name}: €${item.price}\n`;
        });

        orderDetails += `\nTotal: €${total}`;
        alert(orderDetails);
    }

    run() {
        const hour = parseInt(prompt("Please enter the current hour (0-23):"));
        if (isNaN(hour) || hour < 0 || hour > 23) {
            alert("Invalid hour entered.");
        } else {
            this.getOrder(hour);
        }
    }
}

// Instantiate and run the RestaurantMenu
const restaurantMenu = new RestaurantMenu();
restaurantMenu.run();
