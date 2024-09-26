const main_btn = document.querySelector(".main-btn");
main_btn.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/index.html";
});

const countryName = new URLSearchParams(location.search).get("name");
console.log(countryName);
const country_details = document.querySelector(".country-details");
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // Access the first country object from the fetched data
    const country = data[0];
    const cardHTML = ` <img class="country-flag" src=${
      country.flags.svg
    } alt="Country Flag" />
          <div class="country-info">
            <h1>${country.name.common}</h1>
            <div class="country-details-grid">
              <div>
                <p><b>Native Name:</b>${
                  Object.values(country.name.nativeName)[0].common
                }</p>
                <p><b>Population:</b>${country.population.toLocaleString()}</p>
                <p><b>Region:</b>${country.region}</p>
                <p><b>Sub Region:</b>${country.subregion}</p>
                <p><b>Capital:</b>${country.capital}</p>
              </div>
              <div>
                <p><b>Top Level Domain:</b>${country.tld[0]}</p>
                <p><b>Currencies:</b> ${Object.values(country.currencies)[0].name}</p>
                <p><b>Languages:</b> ${Object.values(country.languages).join(', ')}</p>
              </div>
            </div>
             <div class="border-countries">
          <b>Border Countries:</b>
          ${country.borders ? country.borders.map(border => `<button>${border}</button>`).join('') : 'No border countries'}
        </div>
          </div>`;

    country_details.innerHTML = cardHTML;
  });

  const body=document.querySelector("body");
  const theme_change=document.querySelector('.theme-change');
  theme_change.addEventListener('click',()=>{
    
    body.classList.toggle('dark');
    // Change the text and icon based on the current mode
  if (body.classList.contains('dark')) {
    theme_change.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode`;
  } else {
    theme_change.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode`;
  }

  })



  // <i class="fa-solid fa-sun"></i>