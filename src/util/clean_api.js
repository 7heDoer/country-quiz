'use strict';

console.log('I\'ll fetch from here!');
async function data_fetch(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

let raw;

if (!localStorage.raw) {
    raw = await data_fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,continents');

    localStorage.setItem('raw', JSON.stringify(raw));
}else {
    raw = JSON.parse(localStorage.raw).slice(0,5);
}


export {raw};