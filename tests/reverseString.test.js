const reverseString = require('../scripts/reverseString');

test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
});