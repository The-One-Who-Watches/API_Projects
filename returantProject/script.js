const API =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";
let card0 = document.getElementById("card0");
let image0 = document.getElementById("img0");
let address0 = document.getElementById("address0");
let name0 = document.getElementById("name0");

let card1 = document.getElementById("card1");
let image1 = document.getElementById("img1");
let address1 = document.getElementById("address1");
let name1 = document.getElementById("name1");

let card2 = document.getElementById("card2");
let image2 = document.getElementById("img2");
let address2 = document.getElementById("address2");
let name2 = document.getElementById("name2");

let card3 = document.getElementById("card3");
let image3 = document.getElementById("img3");
let address3 = document.getElementById("address3");
let name3 = document.getElementById("name3");

let card4 = document.getElementById("card4");
let image4 = document.getElementById("img4");
let address4 = document.getElementById("address4");
let name4 = document.getElementById("name4");

let card5 = document.getElementById("card5");
let image5 = document.getElementById("img5");
let address5 = document.getElementById("address5");
let name5 = document.getElementById("name5");

let card6 = document.getElementById("card6");
let image6 = document.getElementById("img6");
let address6 = document.getElementById("address6");
let name6 = document.getElementById("name6");

let card7 = document.getElementById("card7");
let image7 = document.getElementById("img7");
let address7 = document.getElementById("address7");
let name7 = document.getElementById("name7");

let card8 = document.getElementById("card8");
let image8 = document.getElementById("img8");
let address8 = document.getElementById("address8");
let name8 = document.getElementById("name8");

let des0 = document.getElementById("des0");
let des1 = document.getElementById("des1");
let des2 = document.getElementById("des2");
let des3 = document.getElementById("des3");
let des4 = document.getElementById("des4");
let des5 = document.getElementById("des5");
let des6 = document.getElementById("des6");
let des7 = document.getElementById("des7");
let des8 = document.getElementById("des8");

fetch(API)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject.business);
    image0.setAttribute("src", jsObject.business[0].imageurl);
    address0.textContent = jsObject.business[0].address;
    name0.textContent = jsObject.business[0].name;
    image1.setAttribute("src", jsObject.business[1].imageurl);
    address1.textContent = jsObject.business[1].address;
    name1.textContent = jsObject.business[1].name;
    image2.setAttribute("src", jsObject.business[2].imageurl);
    address2.textContent = jsObject.business[2].address;
    name2.textContent = jsObject.business[2].name;
    image3.setAttribute("src", jsObject.business[3].imageurl);
    address3.textContent = jsObject.business[3].address;
    name3.textContent = jsObject.business[3].name;
    image4.setAttribute("src", jsObject.business[4].imageurl);
    address4.textContent = jsObject.business[4].address;
    name4.textContent = jsObject.business[4].name;
    image5.setAttribute("src", jsObject.business[5].imageurl);
    address5.textContent = jsObject.business[5].address;
    name5.textContent = jsObject.business[5].name;
    image6.setAttribute("src", jsObject.business[6].imageurl);
    address6.textContent = jsObject.business[6].address;
    name6.textContent = jsObject.business[6].name;
    image7.setAttribute("src", jsObject.business[7].imageurl);
    address7.textContent = jsObject.business[7].address;
    name7.textContent = jsObject.business[7].name;
    image8.setAttribute("src", jsObject.business[8].imageurl);
    address8.textContent = jsObject.business[8].address;
    name8.textContent = jsObject.business[8].name;
    des0.textContent = jsObject.business[0].description;
    des1.textContent = jsObject.business[1].description;
    des2.textContent = jsObject.business[2].description;
    des3.textContent = jsObject.business[3].description;
    des4.textContent = jsObject.business[4].description;
    des5.textContent = jsObject.business[5].description;
    des6.textContent = jsObject.business[6].description;
    des7.textContent = jsObject.business[7].description;
    des8.textContent = jsObject.business[8].description;
  });
