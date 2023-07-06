document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".add-recipe")
    .addEventListener("submit", handleSubmit);

  function initialize() {
    getRecipes();
  }
  initialize();
  // Event handler for the event listener
  function handleSubmit(event) {
    event.preventDefault();
    let RecipeId = Math.floor(Math.random() * 1000);
    let recipeObject = {
      id: RecipeId,
      name: event.target.name.value,
      ingredients: event.target.ingredients.value,
      instructions: event.target.instructions.value,
      time_taken: event.target.time_taken.value,
    };
    renderRecipes(recipeObject);
    addRecipe(recipeObject);
    formVisibility();
  }

  // Fetch request for recipes as well as Patch, Post, and Delete
  function getRecipes() {
    fetch("https://json-jzhe.onrender.com/Recipes")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((recipe) => {
          renderRecipes(recipe);
        });
      });
  }

  function addRecipe(recipeObject) {
    fetch("https://json-jzhe.onrender.com/Recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeObject),
    })
      .then((response) => response.json())
      .then((recipe) => console.log(recipe));
  }

  function updateLikes(recipeObject) {
    fetch(`https://json-jzhe.onrender.com/Recipes/${recipeObject.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipeObject),
    })
      .then((response) => response.json())
      .then((recipe) => console.log(recipe));
  }

  function deleteRecipe(id) {
    fetch(`https://json-jzhe.onrender.com/Recipes/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((Response) => Response.json())
      .then((recipe) => console.log(recipe));
  }

  // DOM manipulation functions
  //renders the recipes it has fetched.
  function renderRecipes(recipe) {
    const recipeDeets = document.querySelector(".meal-details");

    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("h2");
    name.innerHTML = recipe.name;
    card.appendChild(name);

    const image = document.createElement("img");
    image.className = "image";
    image.src = recipe.image;
    image.alt = recipe.name;
    image.style.width = "150px";
    image.style.height = "150px";
    card.appendChild(image);

    const ViewRecipebtn = document.createElement("button");
    ViewRecipebtn.innerHTML = "View Recipe";
    ViewRecipebtn.addEventListener("click", () => {
      showRecipeDetails(recipe, card);
    });

    card.appendChild(ViewRecipebtn);
    recipeDeets.appendChild(card);
  }

  //this functions shows the card with the rendered details
  function showRecipeDetails(recipe, card) {
    const modal = document.createElement("div");
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      removeBlur();
    });
    modalContent.appendChild(closeBtn);

    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";
    recipeCard.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" class="image-poster" >
        <h2 id="recipe-name">${recipe.name}</h2>
        <h3> Ingredients:</h3>
        <p id="recipe-ingredients">${recipe.ingredients}</p>
        <h3>Instructions:</h3>
        <p id="recipe-instructions">${recipe.instructions} minutes</p>
        <p id="recipe-time"><strong>Time Needed:</strong> ${recipe.time_taken}</p>
        <span class = "likes">${recipe.likes}</span>
        <button class = "like-button">Like Recipe</button>
        <button class = "Delete" onClick = "(deleteRecipe(${recipe.id}))"> Delete </button>
      `;

    let button = recipeCard.querySelector(".like-button");
    const likesCount = recipeCard.querySelector(".likes");
    button.addEventListener("click", () => {
      recipe.likes += 1;
      likesCount.innerHTML = recipe.likes;
      updateLikes(recipe);
    });

    modalContent.appendChild(recipeCard);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    modal.style.display = "block";
    applyBlur(card);

    //this function removes the blur effect when a card is closed
    function removeBlur() {
      document.querySelectorAll(".card").forEach((cardElement) => {
        cardElement.classList.remove("blur-effect");
      });
      document.querySelector(".add-recipe").classList.remove("blur-effect");
    }
  }

  //this function applies the blur effect on the rest of the page when a card is opened
  function applyBlur(card) {
    document.querySelectorAll(".card").forEach((cardElement) => {
      if (cardElement !== card) {
        cardElement.classList.add("blur-effect");
      }
    });
    document.querySelector(".add-recipe").classList.add("blur-effect");
  }

  const toggleButton = document.querySelector(".form-opener");
  const myForm = document.querySelector(".add-recipe");

  toggleButton.addEventListener("click", formVisibility);

  // Function to toggle the visibility of the form
  function formVisibility() {
    if (myForm.style.display === "none") {
      myForm.style.display = "block";
    } else {
      myForm.style.display = "none";
    }
  }
});
