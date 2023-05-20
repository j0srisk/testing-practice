const capitalize = require('../scripts/capitalize');

test('capitalize string', () => {
    expect(capitalize('hello')).toBe('Hello');
});