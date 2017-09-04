var app = function(){

    // addList("Geza", "Fish", "something")

    for (var i = 0; i < CATS_ARRAY.length; i++) {
        addList(CATS_ARRAY[i].name, CATS_ARRAY[i].favFoord, CATS_ARRAY[i].image )
    }

}

addList = function(name, favFoord, image){

    var ul = document.createElement('ul');
    ul.classList.add('cat');

    var li1 = document.createElement('li');
    li1.innerText = name;

    var li2 = document.createElement('li');
    li2.innerText = favFoord;

    var img = document.createElement('img');
    img.src = image;
    img.width = "500";

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(img);
    var section = document.querySelector('#cats');
    cats.appendChild(ul);

}

var CATS_ARRAY = [
    { name: 'Boba', favFoord: 'Sock fluff', image:'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg' },
    { name: 'Barnaby', favFoord: 'Tuna', image:'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg' },
    { name: 'Max', favFoord: 'Whiskas Temptations', image:'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg' }
]

window.onload = app;
