// Define menu items and their prices
const menu = {
  breakfast: [
    { name: "Pancakes", price: 8.99 },
    { name: "Omelette", price: 5.99 },
    { name: "Patatas Tortilla", price: 5.99 },
    { name: "Cafe", price: 1.99 },
    // Add more breakfast items here
  ],
  lunch: [
    { name: "Burger", price: 10.99 },
    { name: "Salad", price: 7.99 },
    { name: "Gazpacho", price: 8.99 },
    { name: "Beer", price: 1.99 },
    // Add more lunch items here
  ],
  dinner: [
    { name: "Steak", price: 19.99 },
    { name: "Pasta", price: 14.99 },
    { name: "Churros con chocolate", price: 9.99 },
    { name: "Vino", price: 5.99 },
    // Add more dinner items here
  ],
};

function askToWish() {
  while (true) {
    const userHour = prompt("Please enter the current time (e.g., 14:30):");
    const hourParts = userHour.split(":");
    const hour = parseInt(hourParts[0]);

    if (hour >= 6 && hour < 12) {
      return "breakfast";
    } else if (hour >= 12 && hour < 18) {
      return "lunch";
    } else if (hour >= 18 && hour < 21) {
      return "dinner";
    } else {
      alert("Invalid time. Please enter a valid time.");
    }
  }
}

const mealtime = askToWish();
alert(`It's currently ${mealtime} time.`);

// Simulate waiter's comment
const waiterComment = `Welcome! It's ${mealtime} time. Our menu includes:`;

// Display menu items
let menuText = `${waiterComment}\n`;
for (const item of menu[mealtime]) {
  menuText += `${item.name} - €${item.price.toFixed(2)}\n`;
}

// Confirm selection
const confirmSelection = confirm(
  menuText + "\nWould you like to proceed with this menu?"
);
if (confirmSelection) {
  const totalPrice = menu[mealtime].reduce(
    (total, item) => total + item.price,
    0
  );
  alert(`Total price: €${totalPrice.toFixed(2)}`);
} else {
  alert("Thank you for visiting! Have a great day!");
}
