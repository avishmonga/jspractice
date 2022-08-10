function greet(name) {
  name ? console.log(`${name} namaste`) : console.log("namaste");
}
const add = (one, two) => {
  return one + two;
};
const sumAll = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};
const nNumber = (n) => {
  let sum = (n * (n + 1)) / 2;
  return sum;
};

const commonKeys = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  let obj3 = {};
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] === keys2[i]) {
      obj3[keys1[i]] = obj1[keys1[i]];
    }
  }
  return obj3;
};

const incrementGenerator = (x) => {
  return (n)=>{
    return n+x
  };
};

const incrementBy2 = incrementGenerator(2)

const createWrapper = (fun)=>{
   return fun
}
const greet2 = ()=>{
    console.log('hi All')
}
const greetWithLogger = createWrapper(greet2)








greet();
console.log(add(1, 2));
console.log(sumAll([1, 2, 3, 4, 5]));
console.log(nNumber(5));
console.log(
  commonKeys({ name: "avish", age: 10 }, { name: "avish", height: 5.11 })
);

console.log(incrementBy2(9));
console.log(Date.now())
greetWithLogger()
console.log( Date.now())


var a = 10 
{
  let a = 8
  console.log(a)
}
console.log(a)


