
function calculateBuero(calculationSquareMetersBuero) {
    let resultBuero = calculatePrice(calculationSquareMetersBuero, "BR")
    document.getElementById("resultBuero").innerHTML =
        `<div class="alert alert-warning text-center" role="alert">
      <h4>Die Kosten für <strong>${calculationSquareMetersBuero}m<sup>2</sup> Bueroreinigung</strong> betragen <strong>${resultBuero} Euro</strong></h4>
      <p>(Unverbindliches Angebot exklusive MWSt. und ohne unvorhergesehener Komplikationen oder besonders starker Verunreinigung.)</p>
    </div>`
}

document.getElementById("price-calculator-input-buero").addEventListener("keypress", (bueroEvent) => {
    if (bueroEvent.key === 'Enter') {
        bueroEvent.preventDefault()
        let calculationSquareMetersBuero = document.getElementById("price-calculator-input-buero").value;
        calculateBuero(calculationSquareMetersBuero)
    }
});

document.getElementById("calculation-button-buero").addEventListener("click", function () {
    let calculationSquareMetersBuero = document.getElementById("price-calculator-input-buero").value;
    calculateBuero(calculationSquareMetersBuero)
})