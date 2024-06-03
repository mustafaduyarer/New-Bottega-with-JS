class RestaurantMenu {
  constructor() {
      this.menus = {
          breakfast: {
              starters: [
                  { name: "Fruit Salad", price: 5 },
                  { name: "Yogurt Parfait", price: 4 }
              ],
              mains: [
                  { name: "Pancakes", price: 6 },
                  { name: "Omelette", price: 7 }
              ],
              desserts: [
                  { name: "Muffin", price: 3 },
                  { name: "Croissant", price: 3 }
              ]
          },
          lunch: {
              starters: [
                  { name: "Soup", price: 5 },
                  { name: "Salad", price: 4 }
              ],
              mains: [
                  { name: "Burger", price: 8 },
                  { name: "Grilled Chicken", price: 9 }
              ],
              desserts: [
                  { name: "Ice Cream", price: 4 },
                  { name: "Brownie", price: 5 }
              ]
          },
          dinner: {
              starters: [
                  { name: "Bruschetta", price: 6 },
                  { name: "Stuffed Mushrooms", price: 7 }
              ],
              mains: [
                  { name: "Steak", price: 15 },
                  { name: "Salmon", price: 14 }
              ],
              desserts: [
                  { name: "Cheesecake", price: 6 },
                  { name: "Tiramisu", price: 7 }
              ]
          }
      };
      this.comments = [
          "Excellent choice!",
          "A popular item!",
          "You have a great taste!",
          "One of my favorites!"
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
          menuString += `${item.name}: $${item.price}\n`;
      });
      menuString += `\nMains:\n`;
      menu.mains.forEach(item => {
          menuString += `${item.name}: $${item.price}\n`;
      });
      menuString += `\nDesserts:\n`;
      menu.desserts.forEach(item => {
          menuString += `${item.name}: $${item.price}\n`;
      });
      alert(menuString);
  }

  selectItem(menu, category, selection) {
      const item = menu[category].find(item => item.name.toLowerCase() === selection.toLowerCase());
      if (item) {
          const comment = this.comments[Math.floor(Math.random() * this.comments.length)];
          alert(`You selected ${item.name}. ${comment} It costs $${item.price}.`);
          return item;
      } else {
          alert("Item not found.");
          return null;
      }
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
      const starter = prompt("Please select a starter:");
      const selectedStarter = this.selectItem(menu, 'starters', starter);
      if (selectedStarter) selectedItems.push(selectedStarter);

      // Select main
      const main = prompt("Please select a main:");
      const selectedMain = this.selectItem(menu, 'mains', main);
      if (selectedMain) selectedItems.push(selectedMain);

      // Select dessert
      const dessert = prompt("Please select a dessert:");
      const selectedDessert = this.selectItem(menu, 'desserts', dessert);
      if (selectedDessert) selectedItems.push(selectedDessert);

      let orderDetails = "Your order details:\n";
      selectedItems.forEach(item => {
          total += item.price;
          orderDetails += `${item.name}: $${item.price}\n`;
      });

      orderDetails += `\nTotal: $${total}`;
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
