// Create a AreaCalculator module which calculates areas of multiple shapes such as
//  rectangle, triangle, circle, etc. Export these modules using ES6 notation. 
// Import the functions defined in this module in another file and use them.


export default class areacCalculator {
    rectangle(l,b) {
    return l * b; 
  }
  
    triangle(baseValue , heightValue) {
      return (baseValue * heightValue) / 2;
    }
  
    circle(PI ,r) {
      return PI * r * r; 
    }
  
  }
  
export{areacCalculator};