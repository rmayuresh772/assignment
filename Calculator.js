//  Calculator

// var cal = function calculator() {
//      a = 10;
//      b = 20;
    
//     var add = () => {
//         return (a + b);
//     }
//     return add;

//     var sub = () => {
//         return (a - b);
//     }
//     return sub;

//     var mult = () => {
//         return (a * b);
//     }
//     return mult;

//     var div = () => {
//         return ( a / b);
//     }
//     return div;
   
// };
//  var calObj = cal();
//  console.log(calObj);



//////////////////////////////////////////////////////////////////////////////////////////////////

// Calculate Area of Circle

// var area =  () => {
//     var areaOfCircle = () => {
//         const PI = 3.14;
//         let r = 3;
//         r = 10;
//         return (PI * r * r);
//     }
//     return areaOfCircle;
// }
//  var areaObj = area();
//  console.log(areaObj());

//////////////////////////////////////////////////////////////////////////////////////////

// Assignment-3
var temp = 20;
const outerFunction = () => {1
    var outervar1 = 'javascript';
    console.log(temp);
    var temp = 24;
    function innerFunction() {
        console.log(temp);
        var temp = 345;
        console.log(temp);
    }
    innerFunction();
};
outerFunction();

////////////////////////////////////////////////////////

// var calculator = function cal() {
//      var a = 20;
//      var b = 10;

//     var add = () => {
//       console.log(a + b);
//     }
//     add();

//     var sub = () => {
//         console.log(a - b);
//     }
//     sub();


//     var mult = () => {
//         console.log(a * b);
//     }
//     mult();

//     var div = () => {
//        console.log(a / b);
//     }
//     div();
//     return "mayuresh";
// };

// // cal();

// var calculatorObj = calculator();
// console.log(calculatorObj);

