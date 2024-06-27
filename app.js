//Question 1

var array = [];

//Question 2

//Question 3

var stringArr = ["hello"];
document.write(`<h1>${stringArr}</h1>`);

//Question 4

var numArr = 11;
document.write(`<h1>${numArr}</h1>`);

//Question 5

var booleanArr = [stringArr === numArr];
document.write(`<h1>${booleanArr}</h1>`);

//Question 6

var mixedArr = ["hello", "11", "true", "undifined", "null"];
document.write(`${mixedArr}`);

//Question 7

var eduAvailInPAK = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.write(`<h1>Qualifications:</h1>`);
document.write(
  `1) ${eduAvailInPAK[0]} <br> 2) ${eduAvailInPAK[1]} <br> 3) ${eduAvailInPAK[2]} <br> 4) ${eduAvailInPAK[3]} <br> 5) ${eduAvailInPAK[4]}<br> 6) ${eduAvailInPAK[5]} <br> 7) ${eduAvailInPAK[6]} <br> 8) ${eduAvailInPAK[7]}<br>`
);

document.write(`<h1>Question 8</h1>`);

var studentName = ["Moazzam","Asad","Ebad"];
var studentScore = [320,230,480];
document.write(`<bold>Score of ${studentName[0]} is ${studentScore[0]}. Percentage: ${(studentScore[0]/500)*100}%</bold><br>`);
document.write(`<bold>Score of ${studentName[1]} is ${studentScore[1]}. Percentage: ${(studentScore[1]/500)*100}%</bold><br>`);
document.write(`<bold>Score of ${studentName[2]} is ${studentScore[2]}. Percentage: ${(studentScore[2]/500)*100}%</bold><br>`);

//New Work

// document.write(`<h1>Question 9</h1>`);
// document.write("<h2>Part A</h2>");

// var colorName = [ "red", "blue", "green" ];
// document.write(`<b>Color Name : ${colorName}</b><br>` );

// var userColor = prompt("Enter the color name you want add in the begin");
// colorName.unshift(`${userColor}`);
// document.write(`<b>Updated Color Name : ${colorName}</b><br>`);

// document.write("<h2>Part B</h2>");
// var userColor = prompt("Enter the color name you want add in the End");

// colorName.push(`${userColor}`);
// document.write(`<b>Second Updated Color Name : ${colorName}</b><br>`);

// document.write("<h2>Part C</h2>");
// colorName.unshift("Pink","Orange");
// document.write(`<b>Third Updated Color Name : ${colorName}</b><br>`);

// document.write("<h2>Part D</h2>");
// colorName.shift(`${userColor}`);
// document.write(`<b>Fourth Updated Color Name : ${colorName}</b><br>`);

// document.write("<h2>Part E</h2>");
// colorName.pop(`${userColor}`);
// document.write(`<b>Fifth Updated Color Name : ${colorName}</b><br>`);

// document.write("<h2>Part F</h2>");
// var userColorIndex = prompt("Enter the index num you want color ");
// var userColor = prompt("Enter a color Nam");
// colorName.splice(`${userColorIndex}`,0,`${userColor}`);
// document.write(`<b>Sixth Updated Color Name : ${colorName}</b><br>`);

// document.write("<h2>Part G</h2>");
// var userColorIndex = prompt("Enter the index num you want delete color ");
// var userDeletedColor = prompt("Enter how many color you want to delete");
// colorName.splice(`${userColorIndex}`,`${userDeletedColor}`);
// document.write(`<b>Sixth Updated Color Name : ${colorName}</b><br>`);



document.write(`<h1>Question 10</h1>`);

var scoresOfStudent = [320,230,480,120];
document.write(`Scores of Student : ${scoresOfStudent}<br>`);

scoresOfStudent.sort((a ,b) => a-b );
document.write(`Ordered Scores of Student :${scoresOfStudent}`);

document.write(`<h1>Question 11</h1>`);

var cityNames = ["<b>Karachi","Lahore","Islamabad","Quetta","Peshawar</b>"];
document.write(`<h3>Cities List :</h3>`);
document.write(`${cityNames}<br>`);
var selectedCities = cityNames.slice(2,4);
document.write(`<h3>Slelected Cities List :</h3>`);
document.write(`${selectedCities}<br>`);


document.write(`<h1>Question 12</h1>`);

var arr = ["This", "is", "my", "cat"];
document.write(`<h2> Array : <br> ${arr} </h2>`);

var result = arr.join(" ");
document.write(`<h2> String : <br> ${result} </h2>`);

document.write(`<h1>Question 13</h1>`);

var fifoArr = [];

fifoArr.push("Keyboard");
fifoArr.push("Mouse");
fifoArr.push("Printer");
fifoArr.push("Monitor");

document.write(` <h2> Devices : </h2> <h3> ${fifoArr} </h3> `);

var fifo1 = fifoArr.shift();
document.write(` <h2> Out : </h2> <h3> ${fifo1} </h3> `);

var fifo2 = fifoArr.shift();
document.write(` <h2> Out : </h2> <h3> ${fifo2} </h3> `);

var fifo3 = fifoArr.shift();
document.write(` <h2> Out : </h2> <h3> ${fifo3} </h3> `);

var fifo4 = fifoArr.shift();
document.write(` <h2> Out : </h2> <h3> ${fifo4} </h3> `);


document.write(`<h1>Question 14</h1>`);

var lifoArr = [];

lifoArr.push("Keyboard");
lifoArr.push("Mouse");
lifoArr.push("Printer");
lifoArr.push("Monitor");

document.write(` <h2> Devices : </h2> <h3> ${ lifoArr } </h3> `);

var lifo1 = lifoArr.pop();
document.write(` <h2> Out : </h2> <h3> ${lifo1} </h3> `);

var lifo2 = lifoArr.pop();
document.write(` <h2> Out : </h2> <h3> ${lifo2} </h3> `);

var lifo3 = lifoArr.pop();
document.write(` <h2> Out : </h2> <h3> ${lifo3} </h3> `);

var lifo4 = lifoArr.pop();
document.write(` <h2> Out : </h2> <h3> ${lifo4} </h3> `);

document.write(`<h1>Question 15</h1>`);

var phoneManufactures = ["Apple","Samsung","Motrola","Nokia","Sony","Hair"];

document.write(`<select>
  <Option> ${phoneManufactures[0]} </Option>
  <Option> ${phoneManufactures[1]} </Option>
  <Option> ${phoneManufactures[2]} </Option>
  <Option> ${phoneManufactures[3]} </Option>
  <Option> ${phoneManufactures[4]} </Option>
  <Option> ${phoneManufactures[5]} </Option>
</select>`);






























