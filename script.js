const cardArray = []

function display(cardProduct) {
    let totalPrice = 0;
    // console.log(cardProduct);
    const cardbody = document.getElementById("card-product")
    cardbody.innerHTML = "";
    

    for (let i = 0; i < cardProduct.length; i++) {
        const name = cardArray[i].productName;
        const price = cardArray[i].productPrice;

        totalPrice = totalPrice + price;
       


        const tr = document.createElement("tr")
        tr.innerHTML = `
        <tr>
            <th>${i + 1}</th>
            <th>${name}</th>
            <th>${price}</th>
        </tr>
        `
        cardbody.appendChild(tr)

    }

    

    const tr = document.createElement("tr")
    tr.innerHTML = `
        <tr>
        <th></th>
        <th>total price</th>
        <th>${totalPrice}</th>
        </tr>
        `
    cardbody.appendChild(tr)

}



function addToCard(element) {
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObj = {
        productName: productName,
        productPrice:parseFloat (productPrice),

    }



    cardArray.push(productObj)
    // console.log(cardArray.length);
    document.getElementById("total-addad-product").innerText = cardArray.length;

    display(cardArray)
    // console.log(cardArray);

}

