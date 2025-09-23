let listingsData = [];

async function loadListings() {
  try {
    const response = await fetch("./airbnb_sf_listings_500.json");
    const data = await response.json();
    listingsData = data.slice(0, 50); // first 50
    displayListings(listingsData);
  } catch (err) {
    console.error("Error loading listings:", err);
  }
}

function displayListings(listings) {
  const listingsContainer = document.getElementById("listings");
  listingsContainer.innerHTML = "";

  listings.forEach(listing => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${listing.picture_url || 'https://via.placeholder.com/300'}" alt="Thumbnail">
      <h3>${listing.name}</h3>
      <p><strong>Price:</strong> $${listing.price || "N/A"}</p>
      <p>${listing.description || "No description available."}</p>
      <div class="host">
        <img src="${listing.host_picture_url || 'https://via.placeholder.com/50'}" alt="Host">
        <span><strong>${listing.host_name || "Unknown"}</strong></span>
      </div>
    `;

    listingsContainer.appendChild(card);
  });
}

// Sort by price
document.getElementById("sortPrice").addEventListener("click", () => {
  const sorted = [...listingsData].sort((a, b) => (a.price || 0) - (b.price || 0));
  displayListings(sorted);
});

loadListings();
