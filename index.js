// prototype....
const x = { a: 1 };
const y = Object.create(x);
console.log(y);
x.name = "avish";
y.language = "Punjabi";

// settimeOut

const greet = () => {
  console.log("Hello World");
};
const callDelay = (time, fun) => {
  setTimeout(() => {
    fun();
  }, time * 1000);
};
callDelay(3, greet);

// api calls

function api(url, callback) {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw Error("something went wrong");
      return res.json();
    })
    .then((response) => {
      callback(null, response);
    })
    .catch((error) => {
      callback(error);
    });
}

// calling in Series....
api("https://jsonplaceholder.typicode.com/photos", (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log("response1",response);
    api("https://jsonplaceholder.typicode.com/posts", (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log("response2" , response);
      }
    });
  }
});

// calling in parallel
api("https://jsonplaceholder.typicode.com/photos", (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
api("https://jsonplaceholder.typicode.com/posts", (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log("response2" , response);
  }
});

// Async Series

api.prototype.Series =(arr, callback)=> {
  let i = 0;

  const rec = (i) => {
    if (i === arr.length) {
      callback(null);
      return;
    }
    arr[i]((err) => {
      if (err) {
        callback(err);
      }
      rec(i + 1);
    });
  };
  rec(i);
};

// Async Parallel
api.prototype.Parallel = (arr,callback)=>{
  let i = 0;
  let results = []
  while (i < arr.length) {
    let flag = true;
    arr[i]((err , res) => {
      console.log("err" , err)
      console.log("res" , res)
      if (err) {
        callback(err);
        flag = false;
      }else{
        results.push(res)
      }
    });
    i++;
    if (!flag) break;
  }
}

const Api = new api();

Api.Series(
  [
    function (callback) {
      setTimeout(() => {
        console.log("2sec");
        callback(null , 1);
      }, 3000);
    },
    function (callback) {
      console.log("0sec");
      callback(null , 2);
    },
    function (callback) {
      setTimeout(()=>{
        console.log("1sec")
        callback(null , 3);
      },1000)

    },
  ],
  function (err , results) {
    console.log("err", err);
  }
);

Api.Parallel(
  [
    function (callback) {
      setTimeout(() => {
        console.log("2sec");
        callback(null,1);
      }, 3000);
    },
    function (callback) {
      console.log("0sec");
      callback(null,2);
    },
    function (callback) {
      setTimeout(()=>{
        console.log("1sec")
        callback(null,3);
      },1000)

    },
  ],
  function (err) {
    console.log("err", err);
  }
);

let myPromise = new Promise(function(resolve, reject) {
  setTimeout(()=>{
    resolve('error aaya')
  },2000)
  
  });

  console.log(myPromise)

 myPromise.then(()=>{
  console.log('fulfil hogya')
 })

const apiPromise = (url) => {
  return new Promise((resolve, reject) => {
    api(url, (err, response) => {
      if (err) {
        reject(err)
        console.log(err);
      } else {
        resolve(response)
      }
    });
  });
};
// Promise in Series
apiPromise("https://jsonplaceholder.typicode.com/photos").then((a)=>{
console.log("a1" , a)
apiPromise("https://jsonplaceholder.typicode.com/photos").then((a)=>{
  console.log("a2" , a)
  return a
})
})

// Promise in Parallel

Promise.all([
  apiPromise("https://jsonplaceholder.typicode.com/photos"),
  apiPromise("https://jsonplaceholder.typicode.com/photos"),
]).then((a)=>{
  console.log("ap" , a)
})


// Promise 2 Parallel and 1 After that
Promise.all([
  apiPromise("https://jsonplaceholder.typicode.com/photos"),
  apiPromise("https://jsonplaceholder.typicode.com/photos"),
]).then((a)=>{
  console.log("ap" , a)
  apiPromise("https://jsonplaceholder.typicode.com/photos").then((a2)=>{
    console.log("a3",a2)
  })
})
