
let todaysMenu = [
    { name: 'Honey Almond Granola', description: 'Vanilla Yogurt accompanied with fresh cinnamon granola, honey and an assortment of berries', price: 7.99 },
    { name: 'Sausage Plate', description: 'Turkey sausage links with a slide of 2 scrambled eggs', price: 8.99 },
    { name: 'Chocolate Croissant', description: 'A warm and buttery croissant with melted chocolate on the inside', price: 3.99 },
    { name: 'Cinnamon Panckaes', description: 'A stack of 4 small cinnamon pancakes served our cinnamon sugar butter', price: 8.99 },
    { name: 'Fruit Platter', description: 'An assortment of fruits including melon, strawberries, pineapple and blueberries', price: 4.99 }
];

function setMenu(food) {
    let menu = document.getElementById('eat');
    let menuString = ''

    for (let i = 0; i < food.length; i++) {
        menuString += `<h4 class="menuItem">${food[i].name }</h4>
      <p>${food[i].description}</p> <p>${food[i].price}</p><br>`;
    }

    menu.insertAdjacentHTML('beforeEnd', menuString);
}

function openMenu(evt) {
    // setMenu()
    let x = document.getElementById('eat')
    x.style.display = x.style.display == 'none' ? 'block' : 'none';
}

setMenu(todaysMenu);
document.getElementById("eat").click()