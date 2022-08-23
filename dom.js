const mainDiv = document.getElementById("container");
let data = [];

function addData(e) {
  e.preventDefault();
  let textValue = document.getElementById("inputText").value;
  let colorValue = document.getElementById("inputColor").value;

  let obj = {
    text: textValue,
    color: colorValue,
  };

  data.push(obj);
  showData(data);
}

function showData(newData) {
  mainDiv.innerHTML = null;
  newData.map((d) => {
    let div = document.createElement("div");

    let h1 = document.createElement("h1");
    h1.textContent = d.text;
    h1.setAttribute("class", d.color);

    div.append(h1);
    mainDiv.append(div);
  });
}

function filterData() {
  let filteredData = data.filter((e) => {
    return e.color === "red";
  });
  console.log("filteredData", filteredData);
  showData(filteredData);
}
