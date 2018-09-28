interface shopStock {
    instrumentName: string,
    ukPrice: number,
    usPrice: number,
    numberInStock: number
}

class Instrument {
    public instrumentName: string;
    public ukPrice: number;
    public usPrice: number;
    public stock: number;

    constructor(instrumentName: string, ukPrice: number, usPrice: number, stock: number) {
        this.instrumentName = instrumentName;
        this.ukPrice = ukPrice;
        this.usPrice = usPrice;
        this.stock = stock;
    }
    getStockCount(): shopStock {
        console.log(`${this.stock} ${this.instrumentName} in stock.`);
        return {instrumentName: this.instrumentName, ukPrice: this.ukPrice, usPrice: this.usPrice, numberInStock: this.stock };
    }
}

class Guitar extends Instrument {
    constructor(instrumentName: string, ukPrice: number, usPrice: number, stock: number) {
        super(instrumentName, ukPrice, usPrice, stock);
    }
    getStockCount() {
        super.getStockCount();
    }
}

class Saxophone extends Instrument {
    constructor(instrumentName: string, ukPrice: number, usPrice: number, stock: number) {
        super(instrumentName, ukPrice, usPrice, stock);
    }
    getStockCount() {
        super.getStockCount();
    }}

class Drums extends Instrument {
    constructor(instrumentName: string, ukPrice: number, usPrice: number, stock: number) {
        super(instrumentName, ukPrice, usPrice, stock);
    }
    getStockCount() {
        super.getStockCount();
    }
}


let redGuitar = new Guitar('Red Guitar', 99.99, 102, 5);
let blueGuitar = new Guitar('Red Guitar', 79.99, 100, 3);
let greenDrums = new Drums('Green Drum Set', 255, 300, 1);
let orangeDrums = new Drums('Orange Drum Set', 300, 320, 1);
let goldSaxophone = new Drums('Gold Saxophone', 185, 200, 2);



redGuitar.getStockCount();
blueGuitar.getStockCount();
greenDrums.getStockCount();
orangeDrums.getStockCount();
goldSaxophone.getStockCount();
