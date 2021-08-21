// function and total price

function productPrice(productId, price) {
    const extraMemoryCost = document.getElementById(productId);
    extraMemoryCost.innerText = parseInt(price);
    totalPrice();
}
function totalPrice() {
    const grandTotal = document.getElementById('total');
    const totalPrice = document.getElementById('tprice');
    const extraMemoryCost = document.getElementById('mcost').innerText;
    const extraStorageCost = document.getElementById('scost').innerText;
    const deliveryCharge = document.getElementById('dcharge').innerText;
    totalPrice.innerText = parseInt(extraMemoryCost) + parseInt(extraStorageCost) + parseInt(deliveryCharge) + 1299;
    grandTotal.innerText = totalPrice.innerText;
}


// Memory Cost
document.getElementById('memo').addEventListener('click', function () {
    productPrice('mcost', 0);
})
document.getElementById('unified').addEventListener('click', function () {

    productPrice('mcost', 180);
})

// Stroge Cost
document.getElementById('storage').addEventListener('click', function () {

    productPrice('scost', 0);
})
document.getElementById('storage-1').addEventListener('click', function () {

    productPrice('scost', 100);
})
document.getElementById('storage-2').addEventListener('click', function () {

    productPrice('scost', 180);
})
// Delivery Cost

document.getElementById('delivery-option').addEventListener('click', function () {

    productPrice('dcharge', 0);
})
document.getElementById('free-prime').addEventListener('click', function () {

    productPrice('dcharge', 20);
})

// Add pomo Code
document.getElementById('applyBtn').addEventListener('click', function () {
    const inputFill = document.getElementById('inputFillOut');
    const totalPrice = document.getElementById('tprice').innerText;
    const grandTotal = document.getElementById('total');
    const discount = parseInt(totalPrice) * 0.2;
    if (inputFill.value == 'stevekaku') {
        grandTotal.innerText = parseInt(totalPrice) - discount;
    } else {
        grandTotal.innerText = parseInt(totalPrice);
    }
    inputFill.value = '';

});







