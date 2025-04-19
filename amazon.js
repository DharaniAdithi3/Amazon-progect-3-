const products=[{
    image:'https://supersimple.dev/project/amazon/images/products/athletic-cotton-socks-6-pairs.jpg',
    name:'Black and Gray Athletic Cotton Socks - 6 pairs',
    ratings:{
        stars:4.5,
        count:87
    },
    priceCents:1090
},
{
    image:'https://supersimple.dev/project/amazon/images/products/intermediate-composite-basketball.jpg',
    name:'Intermediate Size Basketball',
    ratings:{
        stars:4,
        count:127
    },
    priceCents:2095
},
{
    image:'https://supersimple.dev/project/amazon/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name:'Adults Plain Cotton T-Shirt-2 Pack',
    ratings:{
        stars:4.5,
        count:56
    },
    priceCents:799
}
];
let productsHTML='';
products.forEach((product)=>{
let html=`
                <div class="flex">
                    <div class="image-container">
                        <img class="socks-image" src="${product.image}">
                    </div>
                    <div class="para-1">
                        <p class="description">
                            ${product.name}
                        </p>
                    </div>
                    <div class="rate">
                    <div>
                        <img class="star-image" src="https://supersimple.dev/project/amazon/images/ratings/rating-${product.ratings.stars*10}.png">
                    </div>
                    <div>
                        <p class="number">
                            ${product.ratings.count}
                        </p>
                    </div>
                    </div>
                    <div class="price-container">
                        <p class="price">
                            $${(product.priceCents/100).toFixed(2)}
                        </p>
                    </div>
                    <div class="select-container">
                    <select class="selector">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    </div>
                    <div>
                        <button class="add-to-cart">
                            Add to Cart
                        </button>
                    </div>
                </div>
`
productsHTML+=html;
}
);
document.querySelector('.js-grid').innerHTML=productsHTML;
// console.log(productsHTML);
