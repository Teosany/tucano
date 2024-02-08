// START

// API

function fetchProductInfo() {
  const eanInput = document.getElementById('eanInput');
  const eanCode = eanInput.value.trim();

  if (eanCode.length !== 13 || !/^\d+$/.test(eanCode)) {
    alert('Veuillez entrer un code EAN-13 valide.');
    return;
  }

  const apiUrl = `https://fr.openfoodfacts.org/api/v0/product/${eanCode}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      window.location.href = `result.html?name=${encodeURIComponent(data.product.product_name)}&brand=${encodeURIComponent(data.product.brands)}&category=${encodeURIComponent(data.product.categories)}&ingredients=${encodeURIComponent(data.product.ingredients_text)}&allergens=${encodeURIComponent(data.product.allergens)}&packaging=${encodeURIComponent(data.product.packaging)}&image=${encodeURIComponent(data.product.image_url)}`;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error);
      alert('Il y à bien 13 chiffres mais le code EAN-13 n\'est pas valide');
    });
}

// FONCTION POUR QUE LE LABEL SOIT EN GRAS
function BoldParagraph(label, text) {
  const boldParagraph = document.createElement('p');
  boldParagraph.innerHTML = `<strong>${label}</strong> ${text}`;
  return boldParagraph;
}

function displayProductInfo() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  const params = new URLSearchParams(window.location.search);

  const productImage = document.createElement('img');
  productImage.src = decodeURIComponent(params.get('image'));
  productImage.alt = 'Image du produit';
  resultDiv.appendChild(productImage);
  resultDiv.appendChild(BoldParagraph('Nom du produit :', params.get('name')));
  resultDiv.appendChild(BoldParagraph('Marque :', params.get('brand')));
  resultDiv.appendChild(BoldParagraph('Catégorie :', params.get('category')));
  resultDiv.appendChild(BoldParagraph('Ingrédients :', params.get('ingredients')));
  resultDiv.appendChild(BoldParagraph('Allergènes éventuels :', params.get('allergens')));
  resultDiv.appendChild(BoldParagraph('Information du packaging :', params.get('packaging')));
}

window.onload = displayProductInfo;

function searchProduct() {
  const searchInput = document.getElementById('searchInput');
  const eanCode = searchInput.value.trim();

  if (eanCode.length !== 13 || !/^\d+$/.test(eanCode)) {
    alert('Veuillez entrer un code EAN-13 valide.');
    return;
  }

  const apiUrl = `https://fr.openfoodfacts.org/api/v0/product/${eanCode}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      window.location.href = `result.html?name=${encodeURIComponent(data.product.product_name)}&brand=${encodeURIComponent(data.product.brands)}&category=${encodeURIComponent(data.product.categories)}&ingredients=${encodeURIComponent(data.product.ingredients_text)}&allergens=${encodeURIComponent(data.product.allergens)}&packaging=${encodeURIComponent(data.product.packaging)}&image=${encodeURIComponent(data.product.image_url)}`;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error);
      alert('Il y à bien 13 chiffres mais le code EAN-13 n\'est pas valide');
    });
}

window.onload = displayProductInfo;














// END

// Vérifier que le code EAN est valide.
// URL de l'API
// Appel à l'API grace à l'aide de Fetch
// Récupérer les paramètres de l'URL
// Créer des éléments HTML pour afficher les informations du produit
// Ajouter les éléments à la div de résultats
// Appeler displayProductInfo au chargement de la page

// Vérifier que le code EAN est valide.
// URL de l'API
// Appel à l'API grace à l'aide de Fetch
// Rediriger vers la page de résultats avec les nouvelles informations
// Appeler displayProductInfo au chargement de la page

// START 

  // Caroussel

  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
  const marqueeContent = document.querySelector("ul.marquee-content");
    
  root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    
  for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }

// END

// RIEN A DIRE !