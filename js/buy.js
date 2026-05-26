// js/buy.js

// Get query param from URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
const petNameParam = getQueryParam("pet");
const pet = petsData.find(p => p.name === petNameParam);
// Prefill pet details
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem('loggedIn') !== 'true') {
    const redirectUrl = encodeURIComponent(window.location.href);
    alert('Please log in to buy a pet.');
    window.location.href = `loginSignUp.html?redirect=${redirectUrl}`;
    return;
  }

  if (petNameParam) {
    console.log(pet, 'pet')
    if (pet) {
      // Wrap details and image in a flex container
      document.getElementById("petDetails").innerHTML = `
        <div class="pet-info-container">
          <div class="pet-text">
            <p><strong>Breed:</strong> ${pet.breed}</p>
            <p><strong>Age:</strong> ${pet.age}</p>
            <p><strong>Color:</strong> ${pet.color}</p>
            <p><strong>Price:</strong> Rs. ${pet.price.toLocaleString()}</p>
          </div>
          <div class="pet-image">
            <img src="${pet.img}" alt="${pet.name}">
          </div>
        </div>
      `;
      document.getElementById("petName").textContent = `Pet Name: ${pet.name}`;
    }
  }

  // Handle form submission
  const form = document.getElementById("buyForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const orderData = {
      pet_name: petNameParam,
      buyer_name: document.getElementById("buyerName").value,
      buyer_email: document.getElementById("buyerEmail").value,
      buyer_phone: document.getElementById("buyerPhone").value,
      buyer_address: document.getElementById("buyerAddress").value,
      buyer_experience: document.getElementById("petExperience").value,
      breed: pet.breed,
      age: pet.age,
      price: pet.price,
    };
    console.log("Order Submitted:", orderData);
    try {
      const response = await fetch('php/saveOrder.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      const result = await response.json();

      if (result.success) {
        alert(`Thank you! Your order for ${orderData.pet_name} has been submitted.`);
        form.reset();
      } else {
        alert("Sorry, something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to the server.");
    }


    form.reset();
  });
});


