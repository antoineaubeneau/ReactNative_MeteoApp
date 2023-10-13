import add from '../src/Helpers/calculation';

describe('Test : Ajouter une function', () => {
    it('La somme des deux nombres', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 2)).toBe(1);
        expect(add(0, 0)).toBe(0);
    });
});
