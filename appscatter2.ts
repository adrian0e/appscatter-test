export interface Stock {
    instrumentName: string;
    ukPrice: number;
    usPrice: number;
    stock: number;
}

export const Instruments: Stock[] = [
    {
        instrumentName: 'Red Guitar',
        ukPrice: 99.99,
        usPrice: 120,
        stock: 5,
    },
    {
        instrumentName: 'Blue Guitar',
        ukPrice: 79.99,
        usPrice: 100,
        stock: 3,
    },
    {
        instrumentName: 'Green Drum Set',
        ukPrice: 255,
        usPrice: 300,
        stock: 1,
    },
    {
        instrumentName: 'Orange Drum Set',
        ukPrice: 300,
        usPrice: 320,
        stock: 1,
    },
    {
        instrumentName: 'Gold Saxophone',
        ukPrice: 185,
        usPrice: 200,
        stock: 2,
    }
];

export class Instrument {
    getStockCount(forInstrument: string): string {
        // Array.prototype.find()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        const instrumentStock = (Instruments as Stock[]).find(instrument => instrument.instrumentName === forInstrument);
        return (instrumentStock.stock + ' ' + instrumentStock.instrumentName + ' in stock');
    }
}

export class RedGuitar extends Instrument {
    redGuitarStock: string = this.getStockCount('Red Guitar');
}

export class BlueGuitar extends Instrument {
    blueGuitarStock: string = this.getStockCount('Blue Guitar');
}

export class GreenDrumSet extends Instrument {
    greenDrumSetStock: string = this.getStockCount('Green Drum Set');
}

export class OrangeDrumSet extends Instrument {
    orangeDrumSetStock: string = this.getStockCount('Orange Drum Set');
}

export class GoldSaxophone extends Instrument {
    goldSaxophoneStock: string = this.getStockCount('Gold Saxophone');
}
