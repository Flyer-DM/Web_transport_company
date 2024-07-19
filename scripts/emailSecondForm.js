// Инициализация EmailJS с вашим идентификатором пользователя
emailjs.init("dlyM-U-TagMwQoije");

// Функция для отправки данных на почту
function sendEmail2() {
    // Получение данных из формы
    var addressFrom = document.querySelector('input[name="21"]').value;
    var addressTo = document.querySelector('input[name="22"]').value;
    var weight = document.querySelector('input[name="23"]').value;
    var dimensions = document.querySelector('input[name="24"]').value;
    var cargoType = document.querySelector('input[name="25"]').value;
    var lastName = document.querySelector('input[name="26"]').value;
    var firstName = document.querySelector('input[name="27"]').value;
    var price = document.querySelector('input[name="28"]').value;

    // Отправка данных на почту
    emailjs.send("service_gx0xo5q", "template_s4beto9", {
        addressFrom: addressFrom,
        addressTo: addressTo,
        weight: weight,
        dimensions: dimensions,
        cargoType: cargoType,
        price: price,
        lastName: lastName,
        firstName: firstName
    })
        .then(function (response) {
            console.log("Письмо успешно отправлено!", response.status, response.text);
            // Показать сообщение об успешной отправке
            alert("Ваша заявка успешно отправлена!");
        }, function (error) {
            console.log("Ошибка при отправке письма:", error);
            // Показать сообщение об ошибке
            alert("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
        });
}