document.body.style.backgroundColor = "green";


function showFooter() {
    var el = document.getElementById("f");
    el.style.display = "block";

}

function createProduct() {

    var name = document.getElementById("product_name").value;
    var protein = document.getElementById("product_protein").value;
    var fat = document.getElementById("product_fat").value;
    var carbohydrates = document.getElementById("product_carbohydrates").value;
    var price = document.getElementById("product_price").value;

    if(name === "") {
        var pl = document.getElementById("product_name");
        pl.placeholder = "Вкажіть назву продукту";
    }

    // if(typeof protein === 'number') {
    //     alert(asdfa);
    // }

    var product = {
        name: name,
        prot: protein,
        fat: fat,
        carb: carbohydrates,
        price: price
    }
    
    alert("Створено продукт: " + product.name + "\n" + product.prot + "\n" + product.fat + "\n"  + product.carb + "\n"  + product.price);
    
    addProduct(product);
}

function addProduct(prod) {
    document.getElementsByClassName("main")[0].innerHTML = '<button>' + prod.name + '</button>' + prod.name;
}
