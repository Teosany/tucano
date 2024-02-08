// document.addEventListener("DOMContentLoaded", function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const codeEAN = urlParams.get('ean');

//     if (codeEAN && estCodeEANValide(codeEAN)) {
//         const urlAPI = `https://fr.openfoodfacts.org/api/v0/product/${codeEAN}`;

//         fetch(urlAPI)
//             .then(response => response.json())
//             .then(data => afficherInformationsProduit(data))
//             .catch(error => console.error('Erreur lors de la récupération des données :', error));
//     } else {
//         alert('Code EAN invalide. Veuillez entrer un code EAN-13 valide.');
//         window.location.href = 'index.html';
//     }
// });

// function afficherInformationsProduit(data) {
//     const resultatsDiv = document.getElementById('resultats');
//     resultatsDiv.innerHTML = `
//         <h2>Informations sur le produit</h2>
//         <p><strong>Nom du produit :</strong> ${data.product.product_name}</p>
//         <p><strong>Marque :</strong> ${data.product.brands}</p>
//         <p><strong>Catégorie :</strong> ${data.product.categories}</p>
//         <p><strong>Ingrédients :</strong> ${data.product.ingredients_text}</p>
//         <p><strong>Allergènes éventuels :</strong> ${data.product.allergens}</p>
//         <p><strong>Information de packaging :</strong> ${data.product.packaging}</p>
//         <p><strong>Photo(s) du produit :</strong> <img src="${data.product.image_url}" alt="Image du produit"></p>
//     `;
// }