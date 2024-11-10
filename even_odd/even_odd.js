class NumberChecker {
    constructor() {}
  
    checkOddEven(input) {

        if(Array.isArray(input)){
          return input.map((num)=> this.checkOddEven(num));
        }
  
        if(typeof input === 'number'){
            if(input % 2 === 0){
              return 'Even';
            }else{
              return 'Odd';
            }
        }
        return 'Invalid input';
    }
}
  
  // Instructor's test cases
  
  const numberChecker = new NumberChecker();
  
  console.log(numberChecker.checkOddEven(5));
  // Expected Output: Odd
  console.log(numberChecker.checkOddEven(10));
  // Expected Output: Even
  console.log(numberChecker.checkOddEven([3, 5, 7, 10]));
  // Expected Output: ['Odd', 'Odd', 'Odd', 'Even']
  console.log(numberChecker.checkOddEven("Hello"));
  // Expected Output: Invalid input