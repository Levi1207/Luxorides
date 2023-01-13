document.querySelector(".main-btn").onclick = function () {
    document.querySelector(".auto").scrollIntoView({behavior:"smooth"})
}
const auto_btns = document.querySelectorAll(".auto-btn")
for (var i = 0; i < auto_btns.length; i++){
    auto_btns[i].onclick = function () {
        document.querySelector(".form-btn").scrollIntoView({ behavior: "smooth" });
    };
};  

document.querySelector(".form-btn").onclick = function () {
    if (document.querySelector('#name').value === '') {
        alert('Заполните поле имя!');
    }else if (document.querySelector('#tel').value === '') {
        alert('Заполните поле телефон!');
    }else if (document.querySelector('#auto').value === '') {
        alert('Заполните поле автомобиль!');
    }
    else {
        alert('Ваши данные были отправлены с вами свяжется наш консюльтант');
    }
}


document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector(".price-image");
    document.addEventListener("mousemove", (event) => {
        layer.style.transform =
            "translate3d(" +
            (event.clientX * 0.3) / 8 +
            "px," +
            (event.clientY * 0.3) / 8 +
            "px,0px)";
    });

    const elem = document.querySelector(".main");
    document.addEventListener("scroll", () => {
        elem.style.backgroundPositionX = "0" + 0.8 * window.pageYOffset + "px";
    });
});