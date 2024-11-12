const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    // execute the callback
    doThis(data);
  }
}

function doStuff(data) {
  console.log("Do Stuff: ", data);
  document.querySelector("#output").innerHTML = pokemonTemplate(data);
}

function pokemonTemplate(pokemon) {
  return `
    <img src="${pokemon.sprites.other.home.front_shiny}" alt="${pokemon.name}">
    <h2>${pokemon.name}</h2>
  `
}

function doStuffList(data) {
  console.log("Do Stuff List", data);
  const pokeList = data.results;
  sortedPokeList = sortPokemon(pokeList);
  sortedPokeList.forEach((currentItem) => {
    const html = `<li data-url="${currentItem.url}">${currentItem.name}</li>`;
    document.querySelector("#outputList").innerHTML += html;
  });
}

// I do not understand the sorting and why we have to create 
// a compare function for it to work
function compare(a, b) {
  if (a.name > b.name) {
    // sort b before a
    return 1;
  } else if (a.name < b.name) {
    // a and b different but unchanged (already in the correct order)
    return -1;
  } else return 0; // a and b are equal
}

function sortPokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}

getPokemon(url, doStuff);
getPokemon(urlList, doStuffList);