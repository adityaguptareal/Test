const weatherData = document.querySelector(".weatherData")
const alertBox = document.querySelector(".alert")
let container = document.querySelector(".container")
const submit = document.getElementById("cta")
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ad0da940e3mshf923c4477556a95p116985jsn6b6c4bccf566',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

async function getWeather(url, options) {

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const { location: { name, region, country }, current: { last_updated, temp_c, temp_f, humidity, wind_kph, wind_dir }, current: { condition: { text, icon } } } = result
        weatherData.innerHTML = `<div class="updated">Last Updated : ${last_updated}</div>

                <div class="weatherCard">
                    <div class="cardSection">
                        <div class="weatherLocation"><i class="fa-solid fa-location-dot"></i> ${name} ${region}
                            ${country}</div>
                        <div class="dayText">${text}</div>
                    </div>


                    <div class="cardSection">
                        <div class="temperatureDetails"><span class="tempC">${temp_c}</span></div><img src=${icon}
                            alt="" class="weatherImg">
                    </div>
                    <div class="cardSection">
                        <div class="details">
                            <div class="piles"><i class="fa-solid fa-droplet "></i>${humidity}%</div>
                            <span class="sub-heading">Humidity</span>
                        </div>
                        <div class="details">
                            <div class="piles "><i class="fa-solid fa-wind"></i></i>${wind_kph}Km/h</div>
                            <span class="sub-heading">Wind Speed</span>
                        </div>
                        <div class="details">

                            <div class="piles "><i class="fa-regular fa-compass"></i></i>${wind_dir}</div>
                            <span class="sub-heading">Wind Direction</span>
                        </div>
                    </div>
                </div>`


        city.value = " "



    } catch (error) {
        alertBox.innerHTML = `<div class="blackbox">
    <div class="alertBox">something <br>Went wrong ! <img src="cross.png" alt="" class="cross"></div>
    <button id="reload">Reload</button>
</div>`
const reloadButton = document.getElementById("reload")
reloadButton.addEventListener("click",()=>{
   window.location.reload()
})

        console.error(error);
    }
}

submit.addEventListener("click", () => {
    const city = document.getElementById("city").value
    let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    getWeather(url, options)

})

