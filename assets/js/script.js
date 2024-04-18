document.addEventListener("DOMContentLoaded", function () {
  const collections = [
    {
      name: "Bleach",
      auteur: "Tite Kubo",
      picture:
        "https://media.senscritique.com/media/000021282252/0/bleach_thousand_year_blood_war.png",
      genre: ["Action", "Aventure", "Combat"],
    },
    {
      name: "Naruto",
      auteur: "Masashi Kishimoto",
      picture:
        "https://image.animationdigitalnetwork.fr/license/naruto/tv/web/affiche_500x0.jpg",
      genre: ["Action", "Drame", "Combat"],
    },
    {
      name: "Solo Leveling",
      auteur: "Chu-Gong",
      picture:
        "https://cdn-bgp.bluestacks.com/BGP/fr/gametiles_SoloLevelingArise.jpg",
      genre: ["Action", "Rpg", "Combat"],
    },

    {
      name: "Vinland Saga",
      auteur: "Makoto Yukimura",
      picture:
        "https://fr.web.img4.acsta.net/pictures/19/09/16/17/09/4903250.jpg",
      genre: ["Action", "Drame", "Combat"],
    },
  ];

  collections.forEach(function (collection) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    document.body.appendChild(cardContainer);

    const card = createCard(collection);
    cardContainer.appendChild(card);

    const title = document.createElement("h1");
    title.textContent = collection.name;
    title.classList.add("title");
    cardContainer.appendChild(title);
  });
});

function createCard(collection) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url('${collection.picture}')`;

  const acteurBadge = document.createElement("p");
  acteurBadge.textContent = collection.auteur;
  acteurBadge.classList.add("acteurbadge");
  card.appendChild(acteurBadge);

  collection.genre.forEach(function (genre) {
    const badge = document.createElement("p");
    badge.textContent = genre;
    badge.classList.add("badge");
    badge.classList.add(genre.toLowerCase());
    card.appendChild(badge);
  });

  return card;
}
