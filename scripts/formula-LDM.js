document.getElementById('calc-form-2').addEventListener('submit', function (event) {
    event.preventDefault();

    let length = parseFloat(document.getElementById('length-2').value);

    let result = length * 1200;

    document.getElementById('result-LDM').value = parseInt(result);
});