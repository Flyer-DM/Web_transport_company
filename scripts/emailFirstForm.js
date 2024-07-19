// Инициализация EmailJS с вашим идентификатором пользователя
emailjs.init("dlyM-U-TagMwQoije");

// Функция для отправки данных на почту
function sendEmail() {
    // Получение данных из формы
    var addressFrom = document.querySelector('input[name="11"]').value;
    var addressTo = document.querySelector('input[name="12"]').value;
    var weight = document.querySelector('input[name="13"]').value;
    var dimensions = document.querySelector('input[name="14"]').value;
    var cargoType = document.querySelector('input[name="15"]').value;
    var lastName = document.querySelector('input[name="16"]').value;
    var firstName = document.querySelector('input[name="17"]').value;
    var price = document.querySelector('input[name="18"]').value;

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