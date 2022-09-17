import './baba.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import "waypoints/lib/noframework.waypoints.js";

let options = {
    strings: ['Food ...', 'Drink ...'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 3000,
    loop: true,
};

let typed = new Typed('.element', options);

let toDown = {
    distance: '50px',
    origin: 'top',
    opacity: 0,
    duration: 800,
    interval: 300,
};

ScrollReveal().reveal('.to-down', toDown);

let toLeft = {
    distance: '50px',
    origin: 'right',
    opacity: 0,
    duration: 800,
    interval: 300,
};

ScrollReveal().reveal('.to-left', toLeft);

let toRight = {
    distance: '50px',
    origin: 'left',
    opacity: 0,
    duration: 800,
    interval: 300,
};

ScrollReveal().reveal('.to-right', toRight);

new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
        let old = document.querySelector('.nav-link.active');
        if (old != null) {
            old.classList.remove('active');
        }
        let current = document.querySelector(`[href='#home']`);
        current.classList.add('active');
        console.log("wa");
    },
    offset: '20%'
})

new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        let old = document.querySelector('.nav-link.active');
        old.classList.remove('active');
        let current = document.querySelector(`[href='#about']`);
         current.classList.add('active');
         console.log("Test");
    },
    offset: '20%'
})

new Waypoint({
    element: document.getElementById('menu'),
    handler: function(direction) {
        let old = document.querySelector('.nav-link.active');
        old.classList.remove('active');
        let current = document.querySelector(`[href='#menu']`);
         current.classList.add('active');
         console.log("Test");
    },
    offset: '20%'
})

new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
        let old = document.querySelector('.nav-link.active');
        old.classList.remove('active');
        let current = document.querySelector(`[href='#services']`);
         current.classList.add('active');
         console.log("Test");
    },
    offset: '20%'
})

let menuLists = [
    {
        id : 1,
        img : 'public/img/plate1.png',
        title : "Barbecue Salad",
        description : 'Special Delicious Salad',
        currency : '$',
        price : 22.2
    },
    {
        id : 2,
        img : 'public/img/plate2.png',
        title : "Salad With Fish",
        description : 'Special Delicious Salad',
        currency : '$',
        price : 30.5
    },
    {
        id : 3,
        img : 'public/img/plate3.png',
        title : "Spinach Salad",
        description : 'Special Delicious Salad',
        currency : '$',
        price : 50
    },
    {
        id : 4,
        img : 'public/img/plate3.png',
        title : "Spinach Salad",
        description : 'Special Delicious Salad',
        currency : '$',
        price : 50
    }
]

let menuRow = document.getElementById('menuRow');

menuLists.forEach(menuList => {
    let div = document.createElement('div');
    div.innerHTML = `
                    <div class="card custom-card">
                      <img src="${menuList.img}" class="w-75 mx-auto d-block py-3" alt="">
                      <div class="card-body">
                        <p class="fw-bold">${menuList.title}</p>
                        <p class="text-black-50 description">${menuList.description}</p>
                      </div>
                      <div class="p-3 d-flex justify-content-between align-items-center">
                        <p class="mb-0">${menuList.currency} ${menuList.price}</p>
                        <button class="btn btn-primary"><i class="bi bi-cart"></i></button>
                      </div>
                    </div>
                    `;
    div.classList.add('col-10', 'col-md-4', 'col-lg-2');

    menuRow.append(div)
})