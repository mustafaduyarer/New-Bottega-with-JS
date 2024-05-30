let patronMu = confirm("Patron musunuz?");
if (patronMu) {
    alert("Evet, patronum!");
} else {
    alert("Hayır, çalışanım.");
}

////////////////////////////////////////////////////////////////////////////////////////////////
console.log ("Welcome to HotHamTawk!")
console.log ("Where there are only three options and a few sides but that's it because it's dirt cheap and we don't care. And we don't make change!")
console.log ( "Now pick your first item already, people are waiting!")

const render = type => {
  const output = [`${type} Menu:`];
  Object.values(menu[type]).forEach(({name, price}) => {
    output.push(`${name} => $${price.toFixed(2)}`);
  });
  return output.join('\n');
}

const main = {
  hotdog : {name : "Hotdog" , price : 1},
  hamburger : {name : "Hamburger" , price : 2},
  taco : {name : "Taco" , price : 1}
};

const side = {
  beans : {name : "Beans" , price : 1},
  chili : {name : "Chili" , price : 1},
  soda : {name : "Soda" , price : 1}
};

const menu = {
  'Main' : main,
  'Side' : side
};

console.log(render('Main'));
console.log(render('Side'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Kullanıcıdan saat bilgisini alalım
const saat = prompt("Lütfen saat bilgisini girin (örneğin 12:30):");

// Saat bilgisini ayrıştıralım
const saatParcalari = saat.split(":");
const saatDegeri = parseInt(saatParcalari[0]);

// Yemek menüsünü belirleyelim
let yemekMenu = "";
if (saatDegeri >= 6 && saatDegeri < 12) {
    yemekMenu = "Kahvaltı: Yumurta, peynir, zeytin ve simit";
} else if (saatDegeri >= 12 && saatDegeri < 18) {
    yemekMenu = "Öğle Yemeği: Izgara tavuk, pilav ve sebzeler";
} else {
    yemekMenu = "Akşam Yemeği: Balık, makarna ve salata";
}

// Kullanıcıya sonucu gösterelim
alert(yemekMenu);

////////////////////////////////////////////////////////////////////////////////////////////////////////


  
 // Define the menu items and their prices
const menu = {
    breakfast: {
      pancakes: 8.99,
      omelette: 9.99,
      cereal: 5.99,
    },
    lunch: {
      burger: 10.99,
      salad: 7.99,
      sandwich: 8.49,
    },
    dinner: {
      steak: 15.99,
      pasta: 12.99,
      fish: 14.49,
    },
  };
  
  // Show the entire menu
  alert("Welcome to Bottega Diner!\n\nMain Menu:\n\nBreakfast:\n- Pancakes: $" + menu.breakfast.pancakes + "\n- Omelette: $" + menu.breakfast.omelette + "\n- Cereal: $" + menu.breakfast.cereal + "\n\nLunch:\n- Burger: $" + menu.lunch.burger + "\n- Salad: $" + menu.lunch.salad + "\n- Sandwich: $" + menu.lunch.sandwich + "\n\nDinner:\n- Steak: $" + menu.dinner.steak + "\n- Pasta: $" + menu.dinner.pasta + "\n- Fish: $" + menu.dinner.fish);
  
  // User selects an entree (for example, "steak")
  const selectedEntree = "steak";
  
  // Waitress comment based on the selection
  const waitressComment = "Great choice! Our steak is cooked to perfection.";
  
  // Tell the user the price
  alert(waitressComment + "\n\nPrice: $" + menu.dinner[selectedEntree]);
  
  // Repeat the process for side choices (you can add more options)
  const selectedSide1 = "salad";
  const selectedSide2 = "cereal";
  
  alert("Sides:\n\n- " + selectedSide1 + ": $" + menu.lunch[selectedSide1] + "\n- " + selectedSide2 + ": $" + menu.breakfast[selectedSide2]);
  
  // Calculate the total cost
  const totalCost = menu.dinner[selectedEntree] + menu.lunch[selectedSide1] + menu.breakfast[selectedSide2];
  alert("Total cost: $" + totalCost);
  


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Define menu items and their prices
const menu = {
    breakfast: [
        { name: "Pancakes", price: 8.99 },
        { name: "Omelette", price: 9.99 },
      { name: "Patatas to", price: 9.99 },
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

// Get current time (for demonstration purposes, you can replace this with user input)
const currentTime = new Date();
const hour = currentTime.getHours();

const saat = prompt("Lütfen saat bilgisini girin (örneğin 12:30):");

// Saat bilgisini ayrıştıralım
const saatParcalari = saat.split(":");
const saatDegeri = parseInt(saatParcalari[0]);

// Determine the mealtime based on the current hour
let mealtime;
if (hour >= 6 && hour < 12) {
    mealtime = "breakfast";
} else if (hour >= 12 && hour < 16) {
    mealtime = "lunch";
} else {
    mealtime = "dinner";
}

// Simulate waiter's comment
const waiterComment = `Welcome! It's ${mealtime} time. Our menu includes:`;

// Display menu items
let menuText = `${waiterComment}\n`;
for (const item of menu[mealtime]) {
    menuText += `${item.name} - $${item.price.toFixed(2)}\n`;
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
