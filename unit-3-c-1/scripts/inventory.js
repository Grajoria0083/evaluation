var getData = JSON.parse(localStorage.getItem("products"))

console.log(getData)

getData.map(function (el, ind) {
    var box = document.createElement("div")

    var Type = document.createElement("p")
    Type.innerText = `Type : ${el.type}`

    var Desc = document.createElement("p")
    Desc.innerText = `Description : ${el.desc}`

    var Price = document.createElement("p")
    Price.innerText = `Price : ${el.price}`

    var Image = document.createElement("img")
    Image.src = el.image

    var btn = document.createElement("button")
    btn.innerText = "remove"
    btn.setAttribute("id", "remove_product")
    btn.addEventListener("click", function () {
        remove(el, ind);
    })

    box.append(Image, Type, Desc, Price, btn)

    document.getElementById("all_products").append(box)

})

function remove(el, ind) {
    getData.splice(ind, 1)
    localStorage.setItem("products", JSON.stringify(getData))
    window.location.reload()
}