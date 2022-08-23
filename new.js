

// console.log(lastTen(12345678901234))
let array = []
const getNumber = (num) =>{
    array.push(num)
}
getNumber(10)
getNumber(9)
getNumber(8)
getNumber(7)
getNumber(11)
getNumber(12)
getNumber(13)

getNumber(89)
getNumber(87)
getNumber(67)
getNumber(15)
getNumber(14)


const topTen = () =>{
    
    console.log(array)
    if(array.length <=10){
        console.log(array)
        return
    }

    // 1,2,3,4,5,6,7,8,9,10,11,12,13,14
    let mid = Math.floor(array.length/2)
    let ans = []
    for(let i=mid-5; i<=mid+4; i++){
        ans.push(array[i])
    }
    console.log(ans)


   
}

topTen()
