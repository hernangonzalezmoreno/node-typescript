import { describe, test, expect } from '@jest/globals';
import { Cat } from './Cat';

describe('Cat', () => {
  describe('Métodos', () => {
    test('Maullar de Cat', async () => {
      const cat: Cat = new Cat();
      expect('meow').toStrictEqual(cat.meow());
    });
    test('Ronronear de Cat', async () => {
      const cat: Cat = new Cat();
      expect('purr').toStrictEqual(cat.purr());
    });
  });
});
