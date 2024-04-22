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

    {
      name: "Frieren: Beyond Journey's End",
      auteur: "Kanehito Yamada",
      picture:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dqZENchTd7lp5zht7BdlqM7RBhD.jpg",
      genre: ["Aventure", "Drame", "Combat"],
    },

    {
      name: "My hero Academia",
      auteur: "Kōhei Horikoshi",
      picture:
        "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe",
      genre: ["Aventure", "Action", "Combat"],
    },

    {
      name: "Jujutsu Kaisen",
      auteur: "Gege Akutam",
      picture:
        "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe",
      genre: ["Aventure", "Action", "Combat"],
    },
    {
      name: "Invincible",
      auteur: "Robert Kirkman",
      picture:
        "https://www.comicsblog.fr/images/editeur/Arno/Novembre%202022/Invincible-poster-S2.jpg",
      genre: ["Aventure", "Action", "Combat"],
    },
    {
      name: "Arcane",
      auteur: "Riot Games",
      picture:
        "https://fr.web.img6.acsta.net/pictures/21/11/02/11/12/2878509.jpg",
      genre: ["Aventure", "Action", "Drame"],
    },
    {
      name: "Spider-Man: Across the Spider-Verse",
      auteur: "Brian Michael Bendis",
      picture:
        "https://fr.web.img2.acsta.net/pictures/23/05/11/10/00/1986933.jpg",
      genre: ["Aventure", "Action", "Animation"],
    },
    {
      name: "Hunter x Hunter",
      auteur: "Yoshihiro Togashi",
      picture: "https://media.s-bol.com/x2GVE9zAmRlz/550x824.jpg",
      genre: ["Aventure", "Action", "Animation"],
    },
    {
      name: "Rick & Morty",
      auteur: "Justin Roiland",
      picture: "https://m.media-amazon.com/images/I/71ELRg6+MDL.jpg",
      genre: ["Aventure", "Fiction", "Animation"],
    },
    {
      name: "Ninja Kamui",
      auteur: "PARK Seong Ho",
      picture:
        "https://fr.web.img6.acsta.net/pictures/24/02/05/16/18/1221249.jpg",
      genre: ["Aventure", "Police", "Animation"],
    },
    {
      name: "Wind Breaker",
      auteur: "Yongseok Jo",
      picture:
        "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/16d570ff136955438a3a5bfadbb66eb5.jpe",
      genre: ["Aventure", "Action", "Animation"],
    },
    {
      name: "Spider-Man: New Generation",
      auteur: "Bob Persichetti",
      picture: "https://courte-focale.fr/Images/Spider-Man%20affiche.jpg",
      genre: ["Aventure", "Action", "Animation"],
    },
    {
      name: "Gravity Falls",
      auteur: "Alex Hirsch",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_.jpg",
      genre: ["Aventure", "Comédie", "Animation"],
    },
    {
      name: "L'Attaque des Titans",
      auteur: "Hajime Isayama",
      picture:
        "https://a.storyblok.com/f/178900/889x1200/b278c8af9e/d01b87af96e21f5ca376d7dd273bd2d91655457422_main.jpg/m/filters:quality(95)format(webp)",
      genre: ["Aventure", "Action", "Animation"],
    },
    {
      name: "South park",
      auteur: "Trey Parker",
      picture:
        "https://m.media-amazon.com/images/I/41vtKa917HL._AC_SY780_.jpg",
      genre: ["Comédie", "Animation"],
    },
    {
      name: "Cyberpunk: Edgerunners",
      auteur: "Rafal Jaki",
      picture:
        "https://fr.web.img4.acsta.net/pictures/22/06/09/09/16/1463272.jpg",
      genre: ["Aventure", "Action", "Animation"],
    },
    {
      name: "SPY x FAMILY",
      auteur: "Tatsuya Endō",
      picture:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/snMMS7crJjBr9FUeBjSbSIzMUXx.jpg",
      genre: ["Comédie", "Action", "Animation"],
    },
  ];

  const myheader = document.createElement("header");
  const navbar = document.createElement("nav");
  document.body.appendChild(myheader);
  myheader.appendChild(navbar);

  const mainParent = document.createElement("main");
  document.body.appendChild(mainParent);

  collections.forEach(function (collection) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    mainParent.appendChild(cardContainer);

    const card = createCard(collection);
    cardContainer.appendChild(card);

    const title = document.createElement("h1");
    title.textContent = collection.name;
    title.classList.add("title");
    cardContainer.appendChild(title);
  });

  const footer = document.createElement("footer");
  document.body.appendChild(footer);

  function buttonFilter() {
    const genres = [];

    collections.forEach(function (collection) {
      collection.genre.forEach(function (genre) {
        if (!genres.includes(genre)) {
          genres.push(genre);
        }
      });
    });


    const filterElement = document.createElement("div")
    filterElement.classList.add("filter-container")
    genres.forEach(function(genre){
      const filterButton = document.createElement("button")
      filterButton.textContent = genre
      filterButton.classList.add("filter-button")
      filterButton.addEventListener('click', function(){
        filterCards(genre)
      });
      filterElement.appendChild(filterButton)
    })
return filterElement
  }

  function filterCards(genre) {

    const cards = document.querySelectorAll(".card-container")
    cards.forEach(function(card){
      const badges = card.querySelectorAll(".badge")
      let showCard = false
      badges.forEach(function (badge){
        if (badge.textContent === genre) {
          showCard = true;
        }

      });
      if (showCard) {
        card.style.display = "block"
      }else {
        card.style.display = "none"
      }
    })
   }
   const filterButton = buttonFilter()
   navbar.appendChild(filterButton)
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
