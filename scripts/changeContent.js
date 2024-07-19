function changeContent(h1name, p1, p2, srcimg, altimg) {
    if (h1name != document.getElementsByClassName("h1-transport-block")[0].innerHTML) {
        var paragraphs = document.getElementsByClassName("p-transport-block");
        paragraphs[0].style.opacity = 0;
        paragraphs[1].style.opacity = 0;
        paragraphs[2].style.opacity = 0;
        paragraphs[3].style.opacity = 0;
        setTimeout(function () {
            paragraphs[0].innerHTML = "Грузоподъёмность";
            paragraphs[1].innerHTML = p1;
            paragraphs[2].innerHTML = p2;
            paragraphs[3].innerHTML = "";
            paragraphs[0].style.opacity = 1;
            paragraphs[1].style.opacity = 1;
            paragraphs[2].style.opacity = 1;
            paragraphs[3].style.opacity = 1;
        }, 500);

        document.getElementsByClassName("h1-transport-block")[0].style.opacity = 0;
        setTimeout(function () {
            document.getElementsByClassName("h1-transport-block")[0].innerHTML = h1name;
            document.getElementsByClassName("h1-transport-block")[0].style.opacity = 1;
        }, 500);

        var imgtochange = document.getElementsByClassName("img-transport-block")[0];
        imgtochange.style.opacity = 0;
        setTimeout(function () {
            imgtochange.src = srcimg;
            imgtochange.alt = altimg;
            imgtochange.style.opacity = 1;
        }, 500);
    }
}