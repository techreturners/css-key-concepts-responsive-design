const cats = [
    {
        "name" : "Little Miss Purrfect",
        "species" : "Cat",
        "favFoods" : ["wet food", "dry food"],
        "birthYear" : 2016,
    },
    {
        "name" : "Mr Gwumpy",
        "species" : "Cat",
        "favFoods" : ["caviar"],
        "birthYear" : 2016
    },
    {
        "name" : "Dopey",
        "species" : "Cat",
        "favFoods" : ["bugs"],
        "birthYear" : 2018
    },
    {
        "name" : "Jumpy",
        "species" : "Scaredy Cat",
        "favFoods" : ["not cucumbers!"],
        "birthYear" : 2008
    },
    {
        "name" : "Meowsalot",
        "species" : "Cat",
        "favFoods" : ["tuna", "catnip", "celery"],
        "birthYear" : 2012
    },
    {
        "name" : "Cindy Clawford",
        "species" : "Cat",
        "favFoods" : ["mice"],
        "birthYear" : 2012
    },
    {
        "name" : "Katy Purry",
        "species" : "Cat",
        "favFoods" : ["cigarettes", "coffee"],
        "birthYear" : 2015
    },
    {
        "name" : "Dr. Von Belly-Rub",
        "species" : "Cat",
        "favFoods" : ["salt"],
        "birthYear" : 2020
    },
    {
        "name" : "Blobby",
        "species" : "Bird?",
        "favFoods" : ["your soul"],
        "birthYear" : 2020
    },
    {
        "name" : "El Taco",
        "species" : "Cat",
        "favFoods" : ["tequila", "bar snax"],
        "birthYear" : 1995
    },
    {
        "name" : "Nibbles",
        "species" : "Hungry Cat",
        "favFoods" : ["blankets", "feet", "tinsel"],
        "birthYear" : 2003
    },
    {
        "name" : "BoopySnoot",
        "species" : "Tiny Cat",
        "favFoods" : ["milk"],
        "birthYear" : 2021
    },
    {
        "name" : "Tiger",
        "species" : "Fearsome Cat",
        "favFoods" : ["anything that moves", "anything else"],
        "birthYear" : 2020
    },
    {
        "name" : "Smushi",
        "species" : "Sushi Cat",
        "favFoods" : ["ramen"],
        "birthYear" : 2000
    },
        
    {
        "name" : "Doughnut",
        "species" : "Party Cat",
        "favFoods" : ["mushrooms"],
        "birthYear" : 2014
    },
    {
        "name" : "Blep",
        "species" : "Cat",
        "favFoods" : ["baked bean juice"],
        "birthYear" : 2016}

];

async function fetchData(apiEndPoint) {
  const response = await fetch(apiEndPoint);
  try {
    const json = await response.json();
    return json;
  } catch {
    console.log(error);
  }
}

const showCats = async (catApi) => {
    const petImage = document.getElementsByClassName("card__image");
    const species = document.getElementsByClassName("card__species");
    const persona = document.getElementsByClassName("card__temperament");
    const country = document.getElementsByClassName("card__origin");
    const myCats = await fetchData(catApi);
    console.log(myCats);
    for (let i = 0; i < myCats.length; i++) {
        const {url, breeds} = myCats[i];
        petImage[i].src = url;  
        const {name, temperament, origin} = breeds[0];
        species[i].innerText = `Species: ${name}`;
        country[i].innerText = `Origin: ${origin}`;
        persona[i].innerText = `Temperament: ${temperament}`;
    }
};
const catApi = "https://api.thecatapi.com/v1/images/search?limit=16&has_breeds=1&api_key=live_7z9YrvTvX0vWxVWX3X4YlwaaLlPMavr2XgxFb9TuucYnRVzsORry3ScJo6W33Uft";
showCats(catApi);

(function () {
    const card = document.getElementsByClassName("card")
    const petNames = document.getElementsByClassName("card__cat-name") 
    const colourWheel = ["red", "red-orange", "orange", "yellow-orange",
    "yellow", "yellow-green", "green", "green-blue", 
    "blue", "blue-purple", "purple", "red-purple"];

    for (let i = 0; i < cats.length; i++) {
        const colIndex = i%colourWheel.length;
        card[i].classList.add(`card--${colourWheel[colIndex]}`);
        card[i].classList.add("card--mode");
        card[i].classList.add("card--color");
        petNames[i].innerText = cats[i].name;
    }
})();



