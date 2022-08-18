function calculateWohnung(calculationSquareMetersWohnung) {
    let resultWohnung = calculatePrice(calculationSquareMetersWohnung, "WN")
    document.getElementById("resultWohnung").innerHTML =
        `<div class="alert alert-warning text-center" role="alert">
      <h4>Die Kosten für <strong>${calculationSquareMetersWohnung}m<sup>2</sup> Wohnungsreinigung</strong> betragen <strong>${resultWohnung} Euro</strong></h4>
      <p>(Unverbindliches Angebot exklusive MWSt. und ohne unvorhergesehener Komplikationen oder besonders starker Verunreinigung.)</p>
    </div>`
}

document.getElementById("price-calculator-input-wohnung").addEventListener("keypress", (wohnungEvent) => {
    if (wohnungEvent.key === 'Enter') {
        wohnungEvent.preventDefault()
        let calculationSquareMetersWohnung = document.getElementById("price-calculator-input-wohnung").value;
        calculateWohnung(calculationSquareMetersWohnung)
    }
});


document.getElementById("calculation-button-wohnung").addEventListener("click", function () {
    let calculationSquareMetersWohnung = document.getElementById("price-calculator-input-wohnung").value;
    calculateWohnung(calculationSquareMetersWohnung)
})

