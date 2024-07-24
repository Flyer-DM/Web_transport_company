document.getElementById('calc-form-3').addEventListener('submit', function (event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight-3').value);

    let dependency1 = weight > 2000 ? 2.7 : 3;

    let result = weight * dependency1;

    document.getElementById('result-KG').textContent = "Итоговая стоимость: " + parseInt(result);
});