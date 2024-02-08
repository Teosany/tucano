// animation

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '#wrapper',
    content: '#content',
    smooth: 1.3,
    effects: true
})

if (window.location.pathname == 'https://tucano.zeabur.app/' && ScrollTrigger.isTouch !== 1) {
    gsap.fromTo('.main-header', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.menu',
            start: 'center',
            end: '400',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery .left, .gallery .bottom')

    itemsL.forEach(item => {
        gsap.fromTo(item, {x: -100, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: '-100',
                scrub: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery .right, .gallery .center')

    itemsR.forEach(item => {
        gsap.fromTo(item, {x: 50, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: '-100',
                scrub: true
            }
        })
    })
}


// GSAP

function archive() {
    const nombre = document.getElementById('nbr');
    const eanCode = nombre.value.trim();
    const apiUrl = `https://fr.openfoodfacts.org/api/v0/product/${eanCode}`;

    if (window.location.pathname == 'https://tucano.zeabur.app/') {
        const nombreTwo = document.getElementById('nbrTwo');
        const eanCodeTwo = nombreTwo.value.trim();
        const apiUrlTwo = `https://fr.openfoodfacts.org/api/v0/product/${eanCodeTwo}`;

        if (eanCodeTwo.length > 1) {
            fett(apiUrlTwo)
        }
        fett(apiUrl)
    } else {
        fett(apiUrl)
    }
}

function archive3() {
    const nombreTwo = document.getElementById('nbrTwo');
    const eanCodeTwo = nombreTwo.value.trim();
    const apiUrlTwo = `https://fr.openfoodfacts.org/api/v0/product/${eanCodeTwo}`;
        fett(apiUrlTwo)
}


function archiveTwo() {
    const params = new URLSearchParams(window.location.search);
    const nutr = params.get('nutrition_grade_fr').trim()
    const prName = params.get('product_name').trim()
    const generic_name = params.get('generic_name').trim()

    document.getElementById('brands').textContent = params.get('brand');
    document.getElementById('quantity').textContent = params.get('quantity');
    document.getElementById('imgItem').src = params.get('image');
    document.getElementById('barcode').textContent = params.get('code');
    document.getElementById('packaging').textContent = params.get('packaging');
    document.getElementById('categories').textContent = params.get('categories');
    document.getElementById('labels').textContent = params.get('labels');
    document.getElementById('link').textContent = params.get('link');


    if (prName.length > 1) {
        document.getElementById('name').textContent = params.get('product_name') + ' - ' + params.get('brand') + ' - ' + params.get('quantity');
    } else {
        document.getElementById('name').textContent = params.get('brand') + ' - ' + params.get('quantity');
    }

    if (nutr == "a") {
        document.getElementById('nutriScore').src = "img/Nutri-score-A.svg";
    } else if (nutr == "b") {
        document.getElementById('nutriScore').src = "img/Nutri-score-B.svg";
    } else if (nutr == "c") {
        document.getElementById('nutriScore').src = "img/Nutri-score-C.svg";
    } else if (nutr == "d") {
        document.getElementById('nutriScore').src = "img/Nutri-score-D.svg";
    } else if (nutr == "e") {
        document.getElementById('nutriScore').src = "img/Nutri-score-E.svg";
    }

    if (generic_name.length > 1) {
        document.getElementById('commonTwo').textContent = "Common name: ";
        document.getElementById('common').textContent = params.get('generic_name');
    } else {
        document.getElementById('commonTwo').textContent = "";
        document.getElementById('common').textContent = "";
    }
}

function error() {
    document.querySelector(".error").innerHTML = "Please enter a EAN-13";
    document.querySelector(".error").style.display = "block";
    setTimeout(() => {
        document.querySelector(".error").style.display = "none"
    }, 2000)
}

function errorx() {
    document.querySelector(".errorx").innerHTML = "Please enter a EAN-13";
    document.querySelector(".errorx").style.display = "block";
    setTimeout(() => {
        document.querySelector(".errorx").style.display = "none"
    }, 2000)
    document.querySelector(".errorx").style.color = "red"
    document.querySelector(".errorx").style.width = "200px"
}

function fett(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.status == 0) {
                error()
                errorx()
                return
            }
            window.location.href = `item.html?name=${encodeURIComponent(data.product.product_name)}
        &brand=${encodeURIComponent(data.product.brands)}
        &quantity=${encodeURIComponent(data.product.packagings[0].quantity_per_unit)}
        &product_name=${encodeURIComponent(data.product.product_name)}
        &nutrition_grade_fr=${encodeURIComponent(data.product.nutrition_grade_fr)}
        &code=${encodeURIComponent(data.product.code)}
        &generic_name=${encodeURIComponent(data.product.generic_name)}
        &packaging=${encodeURIComponent(data.product.packaging)}
        &categories=${encodeURIComponent(data.product.categories)}
        &labels=${encodeURIComponent(data.product.labels)}
        &link=${encodeURIComponent(data.product.link)}
        &image=${encodeURIComponent(data.product.image_front_url)}`;
        });
}