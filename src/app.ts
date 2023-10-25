import dotenv from 'dotenv';

dotenv.config();
const helloWorld: string = process.env.HELLO;
console.log('Hey', helloWorld);