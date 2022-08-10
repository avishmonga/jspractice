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

const api = (url, callback) => {
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
};

//calling in Series....
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
api("https://jsonplaceholder.typicode.com/photos" , (err,response)=>{
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
})
api("https://jsonplaceholder.typicode.com/posts", (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log("response2" , response);
  }
});

// Async Series
function fun() {}

fun.prototype.Series =(arr, callback)=> {
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

fun.prototype.Parallel = (arr,callback)=>{
  let i = 0;
  while (i < arr.length) {
    let flag = true;
    arr[i]((err) => {
      if (err) {
        callback(err);
        flag = false;
      }
    });
    i++;
    if (!flag) break;
  }
}

const Api = new fun();




Api.Series(
  [
    function (callback) {
      setTimeout(() => {
        console.log("2sec");
        callback(null);
      }, 3000);
    },
    function (callback) {
      console.log("0sec");
      callback(null);
    },
    function (callback) {
      setTimeout(()=>{
        console.log("1sec")
        callback(null);
      },1000)

    },
  ],
  function (err) {
    console.log("err", err);
  }
);



Api.Parallel(
  [
    function (callback) {
      setTimeout(() => {
        console.log("2sec");
        callback(null);
      }, 3000);
    },
    function (callback) {
      console.log("0sec");
      callback(null);
    },
    function (callback) {
      setTimeout(()=>{
        console.log("1sec")
        callback(null);
      },1000)

    },
  ],
  function (err) {
    console.log("err", err);
  }
);