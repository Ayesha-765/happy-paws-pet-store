// js/pets.js

// ================= PET DATA =================
const petsData = [
  // DOGS
  {
    type: "dog",
    name: "Golden Retriever",
    age: "2 Years",
    breed: "Retriever",
    color: "Golden",
    price: 45000,
    img: "images/pets/dog1.jpg",
    link: "buy.html?pet=Golden+Retriever"
  },
  {
    type: "dog",
    name: "German Shepherd",
    age: "3 Years",
    breed: "Shepherd",
    color: "Black & Tan",
    price: 50000,
    img: "images/pets/shepherd.jpeg",
    link: "buy.html?pet=German+Shepherd"
  },

  // CATS
  {
    type: "cat",
    name: "Persian Cat",
    age: "1 Year",
    breed: "Persian",
    color: "White",
    price: 30000,
    img: "images/pets/cat.png",
    link: "buy.html?pet=Persian+Cat"
  },
  {
    type: "cat",
    name: "British Shorthair",
    age: "2 Years",
    breed: "Shorthair",
    color: "Gray",
    price: 28000,
    img: "images/pets/short hair.png",
    link: "buy.html?pet=British+Shorthair"
  },

  // BIRDS
  {
    type: "bird",
    name: "Parrot",
    age: "6 Months",
    breed: "Parakeet",
    color: "Green",
    price: 12000,
    img: "images/pets/parrot .jpg",
    link: "buy.html?pet=Parrot"
  },
  {
    type: "bird",
    name: "Canary",
    age: "4 Months",
    breed: "Canary",
    color: "Yellow",
    price: 8000,
    img: "images/pets/canary.jpeg",
    link: "buy.html?pet=Canary"
  },

  // FISH
  {
    type: "fish",
    name: "Gold Fish",
    age: "3 Months",
    breed: "Goldfish",
    color: "Golden",
    price: 2000,
    img: "images/pets/Golden-Comet-Goldfish.jpg",
    link: "buy.html?pet=Gold+Fish"
  },
  {
    type: "fish",
    name: "Flowerhorn Fish",
    age: "6 Months",
    breed: "Flowerhorn",
    color: "Red/Gold",
    price: 6000,
    img: "images/pets/fish.webp",
    link: "buy.html?pet=Flowerhorn+Fish"
  }
];


// ================= RENDER PETS =================
const petListContainer = document.querySelector(".pet-list");

function renderPets(pets) {
  petListContainer.innerHTML = ""; // clear container

  pets.forEach(pet => {
    const card = document.createElement("div");
    card.classList.add("pet-card", `pet-${pet.type}`);

    card.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}">
      <div class="pet-info">
        <h3>${pet.name}</h3>
        <p><strong>Breed:</strong> ${pet.breed}</p>
        <p><strong>Age:</strong> ${pet.age}</p>
        <p><strong>Color:</strong> ${pet.color}</p>
        <p><strong>Price:</strong> Rs. ${pet.price.toLocaleString()}</p>
        <a href="${pet.link}" class="btn">Buy Now</a>
      </div>
    `;

    petListContainer.appendChild(card);
  });
}

// ================= FILTER FUNCTION =================
function filterPets(type) {
  if (type === "all") {
    renderPets(petsData);
  } else {
    const filtered = petsData.filter(pet => pet.type === type);
    renderPets(filtered);
  }
}

// ================= INITIAL LOAD =================
document.addEventListener("DOMContentLoaded", () => {
  renderPets(petsData); // show all pets initially
});
