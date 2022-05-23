//store the products array in localstorage as "products"


function obj(t, d, p, i) {
    this.type = t,
        this.desc = d,
        this.price = p,
        this.image = i
}

var arr = JSON.parse(localStorage.getItem("products")) || [];

function submitForm(e) {
    event.preventDefault()
    var form = document.getElementById("products")
    var type = form.type.value;
    var desc = form.desc.value;
    var price = form.price.value;
    var image = form.image.value;

    var project = new obj(type, desc, price, image)
    arr.push(project)

    localStorage.setItem("products", JSON.stringify(arr))

    window.location.reload()
}
