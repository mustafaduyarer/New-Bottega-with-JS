  // Define menu items and their prices
  const menu = {
    breakfast: [
        { name: "Pancakes", price: 8.99 },
        { name: "Omelette", price: 9.99 },
      { name: "Patatas tortilla", price: 9.99 },
        // Add more breakfast items here
    ],
    lunch: [
        { name: "Burger", price: 10.99 },
        { name: "Salad", price: 7.99 },
        // Add more lunch items here
    ],
    dinner: [
        { name: "Steak", price: 19.99 },
        { name: "Pasta", price: 14.99 },
        // Add more dinner items here
    ],
};

// Kullanıcıdan saat bilgisini al
const userHour = prompt("Lütfen saat bilgisini girin (örn. 14:30):");

// Saati ayrıştır ve saat kısmını al
const hourParts = userHour.split(":");
const hour = parseInt(hourParts[0]);

let mealtime;
if (hour >= 6 && hour < 12) {
    mealtime = "breakfast";
} else if (hour >= 12 && hour < 18) {
    mealtime = "lunch";
} else if (hour >= 18 && hour < 21) {
        mealtime = 'dinner';
 } else {
   mealtime = 'Bu saatte özel bir menü yok.';
    
}

// Kullanıcıya öğünü bildir
alert(`Şu an ${mealtime} zamanıdır.`);


// Determine the mealtime based on the current hour

// Simulate waiter's comment
const waiterComment = `Welcome! It's ${mealtime} time. Our menu includes:`;

// Display menu items
let menuText = `${waiterComment}\n`;
for (const item of menu[mealtime]) {
    menuText += `${item.name} - €${item.price.toFixed(2)}\n`;
}

// Confirm selection
const confirmSelection = confirm(menuText + "\nWould you like to proceed with this menu?");
if (confirmSelection) {
    // Calculate total price
    const totalPrice = menu[mealtime].reduce((total, item) => total + item.price, 0);
    alert(`Total price: $${totalPrice.toFixed(2)}`);
} else {
    alert("Thank you for visiting! Have a great day!");
}
