function Item(place, weight, price) {
    this.place  = place;
    this.weight = weight;
    this.price  = price;
};

Item.prototype.getPrice = function () {
    return this.price;
}

Item.prototype.getWeight = function () {
    return this.weight;
}

function setPlace(placeArr) {
    var randomPlace = placeArr[Math.floor(Math.random() * placeArr.length)];
    return randomPlace;
};

function setWeight() {
    var randomWeight = Math.floor(1 + Math.random() * 9);
    return randomWeight;
};

function setPrice() {
    var randomPrice = Math.floor(Math.random() * 1000);
    return randomPrice;
};

(function () {
    var placeArr = ['grocery', 'greengrocers', 'butchers', 'fishmongers', 'liquor store'];
    var pricesArr = [];
    var weightArr = [];

    for (var i = 0; i < 15; i++) {
        var item = new Item(setPlace(placeArr), setWeight(), setPrice());
        pricesArr.push(item.getPrice());
        weightArr.push(item.getWeight());
        console.log(item);
    }
    console.log('All your items prices: ' + pricesArr);
    console.log('All your items weights: ' + weightArr);

    var totalSpent = pricesArr.reduce(
        function (sum, current) {
            return sum + current;
        }, 0);
    console.log('You total spent: ' + totalSpent + ' UAH');
})();
