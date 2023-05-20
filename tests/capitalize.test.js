const capitalize = require('../scripts/capitalize.js');

test('capitalize string', () => {
    expect(capitalize('hello')).toBe('Hello');
});