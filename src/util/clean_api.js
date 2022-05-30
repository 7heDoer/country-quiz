'use strict';

console.log('I\'ll fetch from here!');

async function data_fetch(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function handleOptions(name, arr) {
    let options = [];
    options.push(name);
    for(let count = 0; count < 3; count++) {
        let option = arr[Math.floor(Math.random() * arr.length)]
        while(options.includes(option))
        {
            option = arr[Math.floor(Math.random() * arr.length)];
        }
        options.push(option);
    }

    return options
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
    raw = JSON.parse(localStorage.raw).slice(0,5);
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
        options: handleOptions(country.name.common, countries).sort(),
    })
});

let capital = raw.map(country => {

    return ({
        query: country.capital[0],
        answer: country.name.common,
        category: "capital",
        options: handleOptions(country.name.common, countries).sort(),
    })
})

let continent = raw.map(country => {
    return ({
        query: country.name.common,
        answer: country.continents[0],
        category: "continent",
        options: handleOptions(country.continents[0], continents).sort(),
    })
})



let questions = Array.from([].concat(flag, capital, continent));
questions = questions.filter(question => question.query != undefined);

export {questions, countries, continents};