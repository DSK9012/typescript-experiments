class DataStorage<T extends string | number | boolean>{   // Its always better to define generics with constraints. You know this class won't work with objects.
  data:T[]=[];

  addItem(item:T){
    this.data.push(item);
  }

  getItems(){
    return [...this.data];
  }

  removeItem(item:T){
    const index = this.data.indexOf(item);
    this.data.splice(this.data.indexOf(item),1);
  }
}

const number=new DataStorage<number>();
number.addItem(1)
number.addItem(2)
number.removeItem(2)
number.getItems() // [1]

const string=new DataStorage<string>();
string.addItem('string1')
string.addItem('string2')
string.removeItem('string2')
string.getItems() // ['string1']

// You see the benefit of using generics here. The same class can be used for multiple data types.Awesome na..!

// Comparing to union types, Generic types help us to lock the incoming data at a root level like in above class.
// Assume if you are accepting types using union like string[] | number[], then we will face difficulties in accessing methods. Note it. 