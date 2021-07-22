function Rectangle(a, b) {
    
   
    let object =
  {
      length : a, 
      width : b, 
      perimeter : 2  * (a+b), 
      area : a*b
      
  };
  
  return object
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}