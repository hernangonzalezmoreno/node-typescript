import { describe, test, expect } from '@jest/globals';
import { Cat } from './Cat';

describe('Cat', () => {
  describe('Métodos', () => {
    test('Maullar de Cat', async () => {
      const cat: Cat = new Cat();
      expect(cat.meow()).toBe('meow');
    });
    test('Ronronear de Cat', async () => {
      const cat: Cat = new Cat();
      expect(cat.purr()).toBe('purr');
    });
  });
});
