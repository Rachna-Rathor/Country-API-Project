// const url = "https://restcountries.com/v3.1/all";
// const country_container = document.querySelector(".country-container");

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((counrty) => {
//       console.log(counrty);
//       const a = document.createElement("a");
//       a.classList.add("country-cards");
//       const img = document.createElement("img");
//       img.classList.add("country-img");
//       img.src = counrty.flags.svg;
//       a.appendChild(img);
//       const div = document.createElement("div");
//       div.classList.add("card-text");

//       a.appendChild(div);
//       const h3 = document.createElement("h3");
//       h3.innerText = counrty.name.common;
//       div.appendChild(h3);
//       const p1 = document.createElement("p");
//       p1.innerText = "population :";
//       const span1 = document.createElement("span");
//       span1.innerText = counrty.population;
//       p1.appendChild(span1);
//       div.appendChild(p1);
//       const p2 = document.createElement("p2");
//       p2.innerText = "region :";
//       const span2 = document.createElement("span");
//       span2.innerText = counrty.region;
//       p2.appendChild(span2);
//       div.appendChild(p2);

//       country_container.appendChild(a);
//     });
//   });

// // document.querySelector("body > main > div > a:nth-child(1) > img")
// //
// // population

const country_container = document.querySelector(".country-container");

const filterByRegion=document.querySelector('.filter-by-region')
const searchInput=document.querySelector('.search-container');

let allCountries
filterByRegion.addEventListener('change',(e)=>{
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
  .then((res) => res.json())
  .then(renderCards);

})
const url = "https://restcountries.com/v3.1/all";


fetch(url)
  .then((res) => res.json())
  .then((data)=>{
    renderCards(data);
    allCountries=data;
  });


  function renderCards(data){
    country_container.innerHTML='';
    data.forEach((country) => {
      // console.log(country);
      const counrtyCards = document.createElement("a");
      counrtyCards.classList.add("country-cards");
      counrtyCards.href=`/country.html?name=${country.name.common}`
      const cardHTML = ` <img
            class="counrty-img"
            src=${country.flags.svg}
            alt="flag"
          />
          <div class="card-text">
            <h3>${country.name.common}</h3>
            <p><b>population :</b> <span>${country.population}</span></p>
            <p><b>region :</b><span>${country.region}</span></p>
            <p><b>capital :</b> <span>${country.capital}</span></p>
          </div>`

      counrtyCards.innerHTML = cardHTML;

      country_container.append(counrtyCards);
    });
  }

searchInput.addEventListener('input',(e)=>{
console.log(e.target.value);
  const filteredCountries = allCountries.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))

 console.log(filteredCountries);
 renderCards(filteredCountries)
})

const body=document.querySelector("body");
const theme_change=document.querySelector('.theme-change');
theme_change.addEventListener('click',()=>{
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    theme_change.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode`;
  } else {
    theme_change.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode`;
  }
})