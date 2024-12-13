const { calculateMean, 
    calculateMedian, 
    calculateMode, 
    parseNumbers } = require('./helpers');


// Test for calculateMean
describe('calculateMean', () => {
    it('should calculate the mean of an array of numbers', () => {
        const numbers = [1, 2, 3, 4, 5];
        expect(calculateMean(numbers)).toBe(3);
    });
    
    it('should return NaN for an empty array', () => {
        expect(calculateMean([])).toBeNaN();
    });
});

// Test for calculateMedian
describe('calculateMedian', () => {
    it('should calculate the median for an odd-length array', () => {
        const numbers = [1, 3, 5];
        expect(calculateMedian(numbers)).toBe(3);
    });
    
    it('should calculate the median for an even-length array', () => {
        const numbers = [1, 2, 3, 4];
        expect(calculateMedian(numbers)).toBe(2.5);
    });
    
    it('should handle an array with a single number', () => {
        const numbers = [7];
        expect(calculateMedian(numbers)).toBe(7);
    });
});

// Test for calculateMode
describe('calculateMode', () => {
    it('should return the mode for an array with the most frequent number', () => {
        const numbers = [1, 2, 2, 3, 4];
        expect(calculateMode(numbers)).toBe(2);
    });
    
    it('should return modes for an array with multiple equally frequent numbers', () => {
        const numbers = [1, 1, 2, 2, 3];
        expect(calculateMode(numbers)).toEqual([1, 2]);
    });
    
    it('should handle an array with no repeated numbers', () => {
        const numbers = [1, 2, 3, 4];
        expect(calculateMode(numbers)).toEqual([1, 2, 3, 4]); // All numbers are modes
    });
});

// Test for parseNumbers
describe('parseNumbers', () => {
    it('should parse a valid comma-separated string of numbers', () => {
        const input = '1,2,3,4,5';
        expect(parseNumbers(input)).toEqual([1, 2, 3, 4, 5]);
    });
    
    it('should throw an error if the input is not an number', () => {
        const input = '1,foo,3';
        expect(() => parseNumbers(input)).toThrow('foo is not a number.');
    });
    
    it('should throw an error if numbers is missing', () => {
        expect(() => parseNumbers()).toThrow('numbers are required.');
    });
    
    it('should handle floating-point numbers', () => {
        const input = '1.5,2.3,3.8';
        expect(parseNumbers(input)).toEqual([1.5, 2.3, 3.8]);
    });
});