let now = new Date();

    let h5 = document.querySelector("h5");

    let day = now.getDay();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (day === 1) {
        day = "Monday";
    }

    h5.innerHTML = `${day}, ${hours}:${minutes}:${seconds}`;

    function search(event) {
        event.preventDefault();
    let searchInput = document.querySelector("#search-input");

    console.log(searchInput.value);
        let h1 = document.querySelector("h1");
        h1.innerHTML = `${searchInput.value}`;
    }

    let form = document.querySelector("#search-form");
    form.addEventListener("submit", search);

    const convertBtn = document.getElementById("convert");

    convertBtn.addEventListener("click", function () {
        // Celsius to Fahrenheit conversion formula
        // (°C × 9/5) + 32 = °F
        const celsius = parseFloat(prompt("Enter a temperature in Celsius"));
        const fahrenheit = (celsius * 9 / 5) + 32;
    })
