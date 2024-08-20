// Инициализация EmailJS с вашим идентификатором пользователя
emailjs.init("dlyM-U-TagMwQoije");

// Функция для отправки данных на почту
function sendEmail2() {
    // Получение данных из формы
    var addressFrom = null;
    var addressTo = null;
    var weight = null;
    var dimensions = null;
    var cargoType = null;
    var lastName = document.querySelector('input[name="26"]').value;
    var firstName = document.querySelector('input[name="27"]').value;
    var price = null;

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