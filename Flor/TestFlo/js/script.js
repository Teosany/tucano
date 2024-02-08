// Start

// function rechercherInformations() {
//     // Récupérer le code EAN-13 saisi par l'utilisateur
//     const codeEAN = document.getElementById('eanInput').value;

//     // Vérifier que le code EAN est valide (13 chiffres sans espace)
//     if (estCodeEANValide(codeEAN)) {
//         // Construire l'URL de l'API Open Food Facts
//         const urlAPI = `https://fr.openfoodfacts.org/api/v0/product/${codeEAN}`;

//         // Appel à l'API avec fetch
//         fetch(urlAPI)
//             .then(response => response.json())
//             .then(data => afficherInformationsProduit(data))
//             .catch(error => console.error('Erreur lors de la récupération des données :', error));
//     } else {
//         alert('Code EAN invalide. Veuillez entrer un code EAN-13 valide.');
//     }
// }

// function estCodeEANValide(codeEAN) {
//     return /^\d{13}$/.test(codeEAN);
// }

// function afficherInformationsProduit(data) {
//     // Afficher les caractéristiques demander du produit
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
