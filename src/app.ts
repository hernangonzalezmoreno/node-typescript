import dotenv from 'dotenv';
import { Cat } from './Cat/Cat.js';

dotenv.config();
const helloWorld: string | undefined = process.env.HELLO;
console.log('Hey', helloWorld);

const cat: Cat = new Cat();
console.log(cat.meow());