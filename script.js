/******************************************** Declaration************************************************ */
// Les constantes 
const prixUnitaire1 = 8;
const prixUnitaire2 = 13;
const prixUnitaire3 = 17;




// Produits
// let produit_1 = document.getElementById('product1');
// let produit_2 = document.getElementById('product2');
// let produit_3 = document.getElementById('product3');
// Bouton souhait
let trash_1 = document.getElementById('trash1');
let trash_2 = document.getElementById('trash2');
let trash_3 = document.getElementById('trash3');

let heart_1 = document.getElementById('heart1');
let heart_2 = document.getElementById('heart2');
let heart_3 = document.getElementById('heart3');
// Nombre article
let nb1 = document.getElementById('nbre-article1')
let nb2 = document.getElementById('nbre-article2')
let nb3 = document.getElementById('nbre-article3')

// Price
let price_1 = document.getElementById('price1');
let price_2 = document.getElementById('price2');
let price_3 = document.getElementById('price3');

// Facture
let prixHt = document.getElementById('prix-ht')
let prixTtc = document.getElementById('prix-ttc')
let shipping = document.getElementById('shipping')


/******************************************** Functions************************************************ */
window.onload = () =>{
    price_1.value = prixUnitaire1;
    price_2.value = prixUnitaire2;
    price_3.value = prixUnitaire3;
    prixHt.value = parseFloat(price_1.value) + parseFloat(price_2.value) + parseFloat(price_3.value);
    shipping.value = prixHt.value * 0.01;
    prixTtc.value = parseFloat(prixHt.value) + parseFloat(shipping.value);
}

// Remove items
// trash_1.onclick = () =>{
//     produit_1.remove();
// }
// trash_2.onclick = () =>{
//     produit_2.remove();
// }
// trash_3.onclick = () =>{
//     produit_3.remove();
// }

// Add au souhait
heart_1.onclick = () =>{
    alert('Vous avez ajouté ceci à vos souhaits !');
    heart_1.classList.remove("btn-danger") ;
    heart_1.classList.add("btn-success") ;
}
heart_2.onclick = () =>{
    alert('Vous avez ajouté ceci à vos souhaits !');
    heart_2.classList.remove("btn-danger") ;
    heart_2.classList.add("btn-success") ;
}
heart_3.onclick = () =>{
    alert('Vous avez ajouté ceci à vos souhaits !');
    heart_3.classList.remove("btn-danger") ;
    heart_3.classList.add("btn-success") ;
}

// Prix unitaire


// moins1.onclick = ()=>{
//     moins1.parentNode.querySelector('input[type=number]').stepDown();
//     price_1.value = prixUnitaire1 * nb1.value;
// }

document.onclick = () =>{
    price_1.value = prixUnitaire1 * nb1.value;
    price_2.value = prixUnitaire2 * nb2.value;
    price_3.value = prixUnitaire3 * nb3.value;

    prixHt.value = parseFloat(price_1.value) + parseFloat(price_2.value) + parseFloat(price_3.value);
    shipping.value = prixHt.value * 0.01;
    prixTtc.value = parseFloat(prixHt.value) + parseFloat(shipping.value);
}
/******************************************** Functions ************************************************ */

