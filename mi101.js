// let arr = [[1,2,3],[4,5,6],[7,8,9]]

// let n = arr.length

// for(let i=0; i<n; i++){

//     let newArray = arr[i]
//     console.log("newArray" , newArray)
//     for(let j=0; j<newArray.length; j++){
//         console.log(newArray[j]);
//     }

// }
// i=0 true newArray= arr[0] => j=0 true prints 1 => j=1 true print 2 => j=2 true print 3 =>j=3 false 
// i=1  true newArray = arr[1]


// let arr= [1,3,4,5,6,7,8]

// Array.map((a)=>{   //here a = arr[index]
//     console.log(a)
// })

// let filteredArray = arr.filter((a)=>{
//     return a<6
// })
// =>  a = arr[0] = 1 return true => [1]
// => a = arr[1] = 3 return true => [1,3]
// => a = arr[2] = 4 return true =>  [1,3,4]
// => a = arr[3] = 5 return true => [1,3,4,5]
//  => a = arr[4] = 6 return false => [1,3,4,5]
//  => a = arr[5] = 7 retun false => [1,3,4,5]
// => a = arr[6] = 8 return false => [1,3,4,5]
// console.log('fileredArray' , filteredArray)

// let obj = {
//     name:"Avish",
//     age:[20,21,22],
//     profesion:"Software Engineer"
// }
// for(let key in obj){
//     console.log(key, obj[key])
// }


// let arrayOfObjects = [{name:'Avish',age:21} , {name:"Rahul" , age:17} , {name:"Karan" , age:20}]
// let filteredArrayOfObjects = arrayOfObjects.filter((a)=>{
//     return a["age"] >18
// })
// console.log(filteredArrayOfObjects)