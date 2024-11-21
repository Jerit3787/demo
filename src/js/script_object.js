var Fruit = {
    name: "Guava",
    color: "Green",
    isRipe: false,
    getFruitInfo: function () {
        return `Fruit: ${this.name}, Color: ${this.color}, Ripeness: ${this.isRipe ? "ripe" : "not ripe"}`;
    }
}

function displayFruitInfo() {
    document.querySelector('#output').textContent = Fruit.getFruitInfo();
}

function ripenFruit() {
    Fruit.isRipe = true;
    Fruit.color = "Ripe Yellow";
}