import { countDown, getPercents, repeatWord, createAdder, getMonth } from '../functions';

describe('countDown', () => {
        it('should print numbers from n to 1', () => {
            console.log = jest.fn();
            countDown(3);
            expect(console.log).toHaveBeenCalledWith(3);
            expect(console.log).toHaveBeenCalledWith(2);
            expect(console.log).toHaveBeenCalledWith(1);
        });

        it('should not print anything for n = 0', () => {
            console.log = jest.fn();
            countDown(0);
            expect(console.log).not.toHaveBeenCalled();
        });

        it('should print numbers in reverse order', () => {
            console.log = jest.fn();
            countDown(5);
            expect(console.log.mock.calls).toEqual([[5], [4], [3], [2], [1]]);
        });
    });

describe('getPercents', () => {
        it('should return correct percentage of a number', () => {
            expect(getPercents(25, 100)).toBe(25);
        });

        it('should return 0 for percent = 0', () => {
            expect(getPercents(0, 100)).toBe(0);
        });

        it('should handle decimal percentages', () => {
            expect(getPercents(12.5, 200)).toBe(25);
        });
    });

describe('repeatWord', () => {
        it('should repeat the word the specified number of times', () => {
            console.log = jest.fn();
            repeatWord('слово', 3);
            expect(console.log).toHaveBeenCalledWith('слово1, слово2, слово3');
        });

        it('should handle count = 0', () => {
            console.log = jest.fn();
            repeatWord('слово', 0);
            expect(console.log).not.toHaveBeenCalled();
        });

        it('should handle count = 1', () => {
            console.log = jest.fn();
            repeatWord('слово', 1);
            expect(console.log).toHaveBeenCalledWith('слово1');
        });
    });

describe('createAdder', () => {
        it('should return a function that adds a to the input', () => {
            const add5 = createAdder(5);
            expect(add5(3)).toBe(8);
            expect(add5(7)).toBe(12);
        });

        it('should create a new function for each call', () => {
            const add3 = createAdder(3);
            const add7 = createAdder(7);
            expect(add3(5)).toBe(8);
            expect(add7(5)).toBe(12);
        });
    });

describe('getMonth', () => {
        it('should return correct month name for valid input', () => {
            expect(getMonth(1)).toBe('январь');
            expect(getMonth(6)).toBe('июнь');
            expect(getMonth(12)).toBe('декабрь');
        });

        it('should return "Некорректный номер месяца" for invalid input', () => {
            expect(getMonth(0)).toBe('Некорректный номер месяца');
            expect(getMonth(13)).toBe('Некорректный номер месяца');
            expect(getMonth(-1)).toBe('Некорректный номер месяца');
        });
    });
