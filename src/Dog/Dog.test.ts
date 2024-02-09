import { describe, test, expect } from '@jest/globals';
import { Dog } from './Dog';

describe('Dog', () => {
  describe('Métodos', () => {
    test('Ladrar de Dog', async () => {
      const dog: Dog = new Dog();
      expect(dog.bark()).toBe('bark');
    });
  });
});