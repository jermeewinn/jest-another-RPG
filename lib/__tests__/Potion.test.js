const { TestWatcher } = require('@jest/core');
const Potion = require('../Potion.js');

test ('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toBe(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});