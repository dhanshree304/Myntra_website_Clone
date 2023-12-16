function addNumbers(a,b,c,...other){
    console.log(other)
   console.log(a+b+c); 
   let sum = 0
    other.forEach((e)=>{
        sum +=e; 
        
    })
    return sum
  }
  let res = addNumbers(1,2,3,4,5,6,7,8,9,10);
  console.log(res);

  const API = "xyz"

  