jest.unmock('../index');

import * as Mod from '../index';

describe('flipArray()', () => {
    it('Should flip an array in reverse', () => {
        const arr = [1,2,3,4,5];
        expect(Mod.flipArray(arr)).toEqual([5,4,3,2,1]);
    });
});

describe('getLargest()', () => {
    it('Should return the largest number in an array', () => {
        const arr = [1000, 5, 23, 234];
        expect(Mod.getLargest(arr)).toBe(1000);
    });
});

describe('getSmallest()', () => {
    it('Should return the smallest number in an array', () => {
        const arr = [1000, 5, 23, 234];
        expect(Mod.getSmallest(arr)).toBe(5);
    });
});

describe('findIndex()', () => {
    const arr = ['a', 'b', 'f', 'w'];

    it('Should be able to find the index of an element', () => {
        expect(Mod.findIndex(arr, 'a')).toBe(0);
    });

    it('Should return -1 if the element does not exist in the array', () => {
        expect(Mod.findIndex(arr, 'x')).toBe(-1);
    });
});

describe('removeDuplicates()', () => {
    const arr = [1,1,2,3,3,3,4,5,6,6,6,7,9];
    const strArr = ['a', 'b', 'd', 'd', 'd', 'f', 'a', 'w', 'x'];
    const boolArr = [true, false, true, false, true, undefined, undefined, null, null];
    it('Should remove all duplicates', () => {
        expect(Mod.removeDuplicates(arr)).toEqual(
            [1,2,3,4,5,6,7,9]
        );
    });

    it('Should work with strings and numbers', () => {
        expect(Mod.removeDuplicates(strArr)).toEqual(
            ['a', 'b', 'd' ,'f', 'w', 'x']
        );
    });

    it('Should work with booleans, null, and undefined', () => {
        expect(Mod.removeDuplicates(boolArr)).toEqual(
            [true, false, undefined, null]
        );
    });
});

describe('callOnArray()', () => {
    const arr = [10,20,30];
    const double = (item) => { return item * 2};

    it('Should run a function on every item in an array', () => {
        let answer = Mod.callOnArray(arr, double);
        expect(answer).toEqual([20,40,60]);
        expect(Array.isArray(answer)).toBe(true);
    });
});

describe('sumOfObjectValues()', () => {
    const obj = {
        'hello': 10,
        'goodbye': 50,
        'honk': 5,
        'zing': 20
    };

    it('Should return sum of an objects\' values', () => {
        expect(Mod.sumOfObjectValues(obj)).toBe(85);
    });
});

describe('Your own tests here', () => {

    describe('capitalize()', () => {

        it('What should be here?', () => {

        });

        it('How about here?', () => {

        });

    });
});

describe('onlyThese()', () => {
    it('Should filter through values', () => {
        const filter = (val) => {
            return val > 10;
        };

        const obj = {
            first: 15,
            second: 5,
            third: 8,
            fourth: 99
        };

        expect(Mod.onlyThese(obj, filter)).toBe({
            first: 15,
            fourth: 99
        });
    });

    it('Should filter with strings', () => {
        const fil = val =>  val.match(/dogs/g);
        const obj = {
            one: 'dogs',
            two: 'cats',
            thing: 'dogs are cool'
        };

        expect(Mod.onlyThese(obj, filter)).toBe({
            one: 'dogs'
            thing: 'dogs are cool'
        });
    });
});
