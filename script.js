function clickItem(src) {
    localStorage.setItem("srcItem", src);
    console.log(localStorage.getItem("srcItem"));
    window.location.href = "telaItem.html"
}