const reverseString = require('../scripts/reverseString.js');

test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
});