export class Dog {
  constructor(){
    console.log('Dog constructor');
  }

  public bark(): string {
    return 'bark';
  }

  public woof(): string {
    return 'woof';
  }
}