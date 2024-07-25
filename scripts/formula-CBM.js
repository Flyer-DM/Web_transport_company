document.getElementById('calc-form-1').addEventListener('submit', function (event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight-1').value);
    let length = parseFloat(document.getElementById('length-1').value);
    let height = parseFloat(document.getElementById('height-1').value);
    let width = parseFloat(document.getElementById('width-1').value);

    let cost = 1000 / (width * length * height);

    let dependency1 = weight < 201 ? 1 : 1.2;
    let dependency2 = length * dependency1;

    let result = width * length * height * dependency1 * dependency2 * cost;

    document.getElementById('result-CBM').value = parseInt(result);
});