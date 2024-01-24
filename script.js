// Audio Setup

document.addEventListener("DOMContentLoaded", () => {
  // Initialize audio elements for different Pokémon

  const charmanderAudio = document.getElementById("sound-charmander");
  const squirtleAudio = document.getElementById("sound-squirtle");
  const bulbasaurAudio = document.getElementById("sound-bulbasaur");

  // Set the audio volume for each Pokémon

  charmanderAudio.volume = 0.1;
  squirtleAudio.volume = 0.1;
  bulbasaurAudio.volume = 0.1;
});

// Pokémon Selection and Interaction

document.addEventListener("DOMContentLoaded", () => {
  // Select various elements needed for Pokémon interaction

  const pokeballs = document.querySelectorAll(".pokemon");
  const selectionMenu = document.getElementById("selection-menu");
  const gameContainer = document.getElementById("game-container");
  const selectedPokemonContainer = document.querySelector(".selected-pokemon-container");
  const selectedPokemonName = document.getElementById("selected-pokemon-name");
  const selectedPokemonImage = document.getElementById("selected-pokemon-image");
  const selectedPokemonTypes = document.getElementById("selected-pokemon-types");

  let currentPokemon = null;

  // Iterate through each pokeball element

  pokeballs.forEach((pokeball) => {
    const infoBox = pokeball.querySelector(".pokemon-info");
    const pokemonName = pokeball.getAttribute("data-pokemon");
    const audioElement = document.getElementById(`sound-${pokemonName}`);

    // Event listeners for mouse hover and click interactions

    pokeball.addEventListener("mouseenter", () => {
      showInfoBox(infoBox);
    });

    pokeball.addEventListener("mouseleave", () => {
      hideInfoBox(infoBox);
    });

    pokeball.addEventListener("click", () => {
      // Handle Pokémon selection

      if (currentPokemon !== pokemonName) {
        currentPokemon = pokemonName;
        updateSelectedPokemonInfo(pokemonName, audioElement);
        hideSelectionMenu();
        showGameContainer();
      }
    });

    // Prevent click on info box from propagating

    infoBox.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  // Functions for showing/hiding info box, selection menu, and game container

  const showInfoBox = (infoBox) => {
    infoBox.style.opacity = "1";
    infoBox.style.visibility = "visible";
  };

  const hideInfoBox = (infoBox) => {
    infoBox.style.opacity = "0";
    infoBox.style.visibility = "hidden";
  };

  const hideSelectionMenu = () => {
    selectionMenu.style.display = "none";
  };

  const showGameContainer = () => {
    gameContainer.style.display = "block";
  };

  // Function to update selected Pokémon information

  const updateSelectedPokemonInfo = (pokemonName, audioElement) => {
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    selectedPokemonName.textContent = pokemonName;
    selectedPokemonImage.src = `img/${pokemonName}.png`;
    selectedPokemonImage.alt = pokemonName;

    selectedPokemonTypes.innerHTML = "";

    const types = document.querySelector(`.pokemon[data-pokemon="${pokemonName.toLowerCase()}"] .pokemon-types`);

    if (types) {
      types.querySelectorAll("li").forEach((type) => {
        const typeCopy = type.cloneNode(true);
        selectedPokemonTypes.appendChild(typeCopy);
      });
    }

    audioElement.currentTime = 0;
    audioElement.play();

    selectedPokemonContainer.style.display = "block";
  };

  // Functions for Pokémon interactions

  const feedPokemon = () => {
    console.log("Feeding the Pokemon.");
  };

  const playPokemon = () => {
    console.log("Playing with the Pokemon.");
  };

  const trainPokemon = () => {
    console.log("Training the Pokemon.");
  };

  const evolvePokemon = () => {
    console.log("Evolving the Pokemon.");
  };

  const healPokemon = () => {
    console.log("Healing the Pokemon.");
  };
});
