'use strict';


async function data_fetch(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
  

function handleOptions(name, arr) {
    let array = shuffle(arr);
    let options = [];
    options.push(name);
    for(let count = 0; count < 3; count++) {
        let option = array[Math.floor(Math.random() * array.length)]
        while(options.includes(option))
        {
            option = array[Math.floor(Math.random() * array.length)];
        }
        options.push(option);
    }
    return shuffle(options);
}

/*
    Four question categories
        1. flag
        2. continent
        4.capital
*/ 

let raw;

if (!localStorage.raw) {
    raw = await data_fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,continents');

    localStorage.setItem('raw', JSON.stringify(raw));
}else {
    raw = JSON.parse(localStorage.raw).slice(0,50);
}

let countries = raw.map(country => {
    return country.name.common;
})

let continents = raw.map(country => {
    return country.continents[0];
})

let flag = raw.map(country => {
   
    return ({
        query: country.flags.svg,
        answer: country.name.common,
        category: "flag",
        options: handleOptions(country.name.common, countries),
    })
});

let capital = raw.map(country => {

    return ({
        query: country.capital[0],
        answer: country.name.common,
        category: "capital",
        options: handleOptions(country.name.common, countries),
    })
})

let continent = raw.map(country => {
    return ({
        query: country.name.common,
        answer: country.continents[0],
        category: "continent",
        options: handleOptions(country.continents[0], continents),
    })
})



let questions = Array.from([].concat(flag, capital, continent));
questions = questions.filter(question => question.query != undefined);
questions = questions.filter(question => question.category != undefined)

export {questions, shuffle};