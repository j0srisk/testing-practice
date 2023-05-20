const caesarCipher = require('../scripts/caesarCipher');

test('caesar cipher', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp');
});
