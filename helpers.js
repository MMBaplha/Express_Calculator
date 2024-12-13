// Utility functions to calculate mean, median, and mode
function calculateMean(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

function calculateMedian(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid]: (sorted[mid - 1] + sorted[mid]) / 2;
}

function calculateMode(numbers) {
    const freqMap = numbers.reduce((map, num) => (map[num] = (map[num] || 0) + 1, map), {});
    const maxFreq = Math.max(...Object.values(freqMap));
    const mode = Object.keys(freqMap).filter(num => freqMap[num] === maxFreq).map(Number);
    return mode.length === 1 ? mode[0] : mode;
}

// Helper function to parse query params and handle errors
function parseNumbers(nums) {
    if (!nums) {
        throw new Error('numbers required.');
    }
    const numbers = nums.split(',').map(num => {
        const parse = parseFloat(num);
        if (isNaN(parse)) {
            throw new Error(`${num} is not a number.`);
        }
        return parse;
    });
    return numbers;
}

module.exports = {
    calculateMean,
    calculateMedian,
    calculateMode,
    parseNumbers
};