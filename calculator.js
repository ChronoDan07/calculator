// Variables
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const pi = document.querySelector("#pi");
const euler = document.querySelector("#euler");
const clear = document.querySelector("#clear");
const deleter = document.querySelector("#delete");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const subtraction = document.querySelector("#subtraction");
const addition = document.querySelector("#addition");
const point = document.querySelector("#point");
const result = document.querySelector("#result");
const calcButtons = document.querySelectorAll(".calc-button");
const mainResult = document.getElementById('lower-screen');
const secondResult = document.getElementById('upper-screen');
let mouseDown;
let numberOn;
let operOn = true;
let sign;
let startOn = false;
let index = 0;
let tempRes = 0;
let results;
let resultOn = false;



calcButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      
        button.style.cssText = "background-color: rgba(255, 68, 0, 0.786)";
        
        if (button.id === 'result') {
          button.style.cssText = "background-color: rgba(25, 119, 234, 0.768)"
        }
        if (button.id === 'addition'||button.id === 'subtraction'||button.id === 'multiplication'||button.id === 'division') {
          button.style.cssText = "background-color: rgba(231, 46, 21, 0.768)"
        }
        
        mouseDown = true;
    })

    button.addEventListener('mouseup', () =>{
      
        button.style.cssText = "background-color: orangered";
        
        if (button.id === 'result') {
          button.style.cssText = "background-color: rgba(25, 119, 234, 1)"
        }
        if (button.id === 'addition'||button.id === 'subtraction'||button.id === 'multiplication'||button.id === 'division') {
          button.style.cssText = "background-color: rgba(231, 46, 21, 0.951)"
        }
        mouseDown = false;
    })
})





// Number Buttons
one.addEventListener('mousedown', () => {
   if (!resultOn){ 
    if(mainResult.textContent == "0"){
        mainResult.textContent ="";
    }
     if(numberOn){
        mainResult.textContent ="";
        numberOn = false;
        
     }
    operOn = true;
    mainResult.textContent +=1;
  }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "numpad 1" || event.key === "1") {
      if (!resultOn){ 
        if(mainResult.textContent == "0"){
            mainResult.textContent ="";
        }
        if(numberOn){
            mainResult.textContent ="";
            numberOn = false;
            
         }
        operOn = true;
        mainResult.textContent +=1;
    }
  }
  });


two.addEventListener('mousedown', () => {
  if (!resultOn){ 
    if(mainResult.textContent == "0"){
       mainResult.textContent ="";
   }if(numberOn){
    mainResult.textContent ="";
    numberOn = false;
    
 } 
   operOn = true;
   mainResult.textContent +=2;
}
});
document.addEventListener("keydown", (event) => {
    if (event.key === "numpad 2" || event.key === "2") {
      if (!resultOn){ 
        if(mainResult.textContent == "0"){
            mainResult.textContent ="";
        }if(numberOn){
            mainResult.textContent ="";
            numberOn = false;
         }
        operOn = true;
        mainResult.textContent +=2;
    }
  }
  });

three.addEventListener('mousedown', () => {
  if (!resultOn){ 
    if(mainResult.textContent == "0"){
       mainResult.textContent ="";
   }if(numberOn){
    mainResult.textContent ="";
    numberOn = false;
    
 }  
   operOn = true;
   mainResult.textContent +=3;  
}
});
document.addEventListener("keydown", (event) => {
    if (event.key === "numpad 3" || event.key === "3") {
      if (!resultOn){ 
        if(mainResult.textContent == "0"){
            mainResult.textContent ="";
        }if(numberOn){
            mainResult.textContent ="";
            numberOn = false;
         }
        operOn = true;
        mainResult.textContent +=3;
    }
  }
  });

four.addEventListener('mousedown', () => {
  if (!resultOn){ 
    if(mainResult.textContent == "0"){
       mainResult.textContent ="";
   }if(numberOn){
    mainResult.textContent ="";
    numberOn = false;
 }
   operOn = true;
   mainResult.textContent +=4; 
}
});
document.addEventListener("keydown", (event) => {
    if (event.key === "numpad 4" || event.key === "4") {
      if (!resultOn){ 
        if(mainResult.textContent == "0"){
            mainResult.textContent ="";
        }if(numberOn){
            mainResult.textContent ="";
            numberOn = false;
            
         }
        operOn = true;
        mainResult.textContent +=4;
    }
  }
  });

five.addEventListener('mousedown', () => {
  if (!resultOn){ 
    if(mainResult.textContent == "0"){
       mainResult.textContent ="";
   }if(numberOn){
    mainResult.textContent ="";
    numberOn = false;
    
 }
   operOn = true;
   mainResult.textContent +=5;
}
});
document.addEventListener("keydown", (event) => {
    if (event.key === "numpad 5" || event.key === "5") {
      if (!resultOn){ 
        if(mainResult.textContent == "0"){
            mainResult.textContent ="";
        }if(numberOn){
            mainResult.textContent ="";
            numberOn = false;
         }
        operOn = true;
        mainResult.textContent +=5;
    }
  }
  });

six.addEventListener('mousedown', () => {
  if (!resultOn){ 
    if(mainResult.textContent == "0"){
       mainResult.textContent ="";
   }if(numberOn){
    mainResult.textContent ="";
    numberOn = false;
  
 }
   operOn = true;
   mainResult.textContent +=6; 
} 
});
document.addEventListener("keydown", (event) => {
    if (event.key === "numpad 6" || event.key === "6") {
      if (!resultOn){ 
        if(mainResult.textContent == "0"){
            mainResult.textContent ="";
        }if(numberOn){
            mainResult.textContent ="";
            numberOn = false;
          
         }
        operOn = true;
        mainResult.textContent +=6;
    }
  }
  });

seven.addEventListener('mousedown', () => {
  if (!resultOn){ 
    if(mainResult.textContent == "0"){
       mainResult.textContent ="";
   }if(numberOn){
    mainResult.textContent ="";
    numberOn = false;

 }
   operOn = true;
   mainResult.textContent +=7;
}
});
document.addEventListener("keydown", (event) => {
    if (event.key === "numpad 7" || event.key === "7") {
      if (!resultOn){ 
        if(mainResult.textContent == "0"){
            mainResult.textContent ="";
        }if(numberOn){
            mainResult.textContent ="";
            numberOn = false;
          
         }
        operOn = true;
        mainResult.textContent +=7;
    }
  }
  });

eight.addEventListener('mousedown', () => {
  if (!resultOn){ 
    if(mainResult.textContent == "0"){
       mainResult.textContent ="";
   }if(numberOn){
    mainResult.textContent ="";
    numberOn = false;

 }
   operOn = true;
   mainResult.textContent +=8;
}
});
document.addEventListener("keydown", (event) => {
    if (event.key === "numpad 8" || event.key === "8") {
      if (!resultOn){ 
        if(mainResult.textContent == "0"){
            mainResult.textContent ="";
        }if(numberOn){
            mainResult.textContent ="";
            numberOn = false;
 
         }
        operOn = true;
        mainResult.textContent +=8;
    }
  }
  });
nine.addEventListener('mousedown', () => {
  if (!resultOn){ 
    if(mainResult.textContent == "0"){
       mainResult.textContent ="";
   }if(numberOn){
    mainResult.textContent ="";
    numberOn = false;

 }
   operOn = true;
   mainResult.textContent +=9;
}
});

document.addEventListener("keydown", (event) => {
    if (event.key === "numpad 9" || event.key === "9") {
      if (!resultOn){ 
        if(mainResult.textContent == "0"){
            mainResult.textContent ="";
        }if(numberOn){
            mainResult.textContent ="";
            numberOn = false;
         }
        operOn = true;
        mainResult.textContent +=9;
    }
  }
  });

zero.addEventListener('mousedown', () => {
  if (!resultOn){ 
    if(mainResult.textContent == "0"){
       return;
   }else{
        if(numberOn){
            mainResult.textContent ="";
            numberOn = false;
 
        }
    operOn = true;
    mainResult.textContent +=0;
   }
  }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "numpad 0" || event.key === "0") {
      if (!resultOn){ 
        if(mainResult.textContent == "0"){
            return;
        }else{
            if(numberOn){
                mainResult.textContent ="";
                numberOn = false;
              
             }
         operOn = true;
         mainResult.textContent +=0;
        }  
    }
  }
  });
// Delete Button
deleter.addEventListener('mousedown', () => {
  if (!resultOn){ 
    let mr = mainResult.textContent
    if (mr.length > 1){
    mr=mr.slice(0,-1);
    }else {
        mr= "0";
    }
    mainResult.textContent = mr; 
  }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
      if (!resultOn){ 
        let mr = mainResult.textContent
        if (mr.length > 1){
        mr=mr.slice(0,-1);
        }else {
            mr= "0";
        }
        mainResult.textContent = mr; 
        }
      }
  });

// Clear Button
clear.addEventListener('mousedown', () => {
    mainResult.textContent = "0";
    secondResult.textContent = "";
    operOn=true;
    numberOn = true;
    startOn = false;
    resultOn = false;
    index = 0;
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Delete") {
      mainResult.textContent = "0";
      secondResult.textContent = "";
      operOn=true;
      numberOn = true;
      resultOn = false;
      index = 0;
    }
  });

// Point Button
point.addEventListener('mousedown', () => {
  if (!resultOn){ 
  if(mainResult.textContent.includes(".")){
    return
  }else if (!mainResult.textContent.includes(".")){
      mainResult.textContent += ".";
  }
}
});

document.addEventListener("keydown", (event) => {
    if (event.key === ".") {
      if (!resultOn){ 
        if(mainResult.textContent.includes(".")){
        }else if (!mainResult.textContent.includes(".")){
            mainResult.textContent += ".";
        }
    }
  }
  });

  //E button

  euler.addEventListener('mousedown', () =>{
    if (!resultOn){ 
    mainResult.textContent = "2.7182818284590";
    operOn = true;
    numberOn = true;
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "e") {
      if (!resultOn){ 
      mainResult.textContent = "2.7182818284590";
      operOn = true;
      numberOn = true;
      }
    }
  });
// Pi button
  pi.addEventListener('mousedown', () =>{
    if (!resultOn){ 
    mainResult.textContent = "3.1415926535897";
    operOn = true;
    numberOn = true;
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "p") {
      if (!resultOn){ 
      mainResult.textContent = "3.1415926535897";
      operOn = true;
      numberOn = true;
      }
    }
  });
// Result button
    result.addEventListener('mousedown', () => {
      if (!resultOn){ 
            operate();
            resultOn = true;
      }
          
          
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === "numpad enter") {
          if (!resultOn){ 
           operate();
           resultOn = false;
          }
        }
    });
  if(secondResult.textContent ==="0"){
    startOn = false;
  }
  //Calc function
  
    function calc(a,len){

      if(a ==="+"){
        if(index <= 0){
          results = parseFloat(secondResult.textContent.slice(0,len-1)) + parseFloat(mainResult.textContent);  
          tempRes = results;
          mainResult.textContent = results;
        }else {
          tempRes = results;
          results = parseFloat(tempRes) + parseFloat(mainResult.textContent);

          mainResult.textContent = results;
        }
      }
      if(a ==="-"){
        if(index <= 0){
          results = parseFloat(secondResult.textContent.slice(0,len-1)) - parseFloat(mainResult.textContent);  
          tempRes = results;
          mainResult.textContent = results;
        }else {
          tempRes = results;
          results = parseFloat(tempRes) - parseFloat(mainResult.textContent);

          mainResult.textContent = results;
        } 
      }  
      if(a ==="×"){
        if(index <= 0){
          results = parseFloat(secondResult.textContent.slice(0,len-1)) * parseFloat(mainResult.textContent);  
          tempRes = results;
          mainResult.textContent = results;
        }else {
          tempRes = results;
          results = parseFloat(tempRes) * parseFloat(mainResult.textContent);

          mainResult.textContent = results;
        }
      }   
      if(a ==="÷"){
        if(index <= 0){
          results = parseFloat(secondResult.textContent.slice(0,len-1)) / parseFloat(mainResult.textContent);  
          tempRes = results;
          if(mainResult.textContent == 0){
            resultOn = true;
            return mainResult.textContent = "Division by zero";
          }
          mainResult.textContent = results;
        }else {
          tempRes = results;
          results = parseFloat(tempRes) / parseFloat(mainResult.textContent);
          if(mainResult.textContent == 0){
            resultOn = true;
            return mainResult.textContent = "Division by zero";
          }
          mainResult.textContent = results;
        }
      }   
      }


  //Replace function

    function replace(){
      let leng = secondResult.textContent.length;
      if(secondResult.textContent[leng-1] !== sign){
        secondResult.textContent = secondResult.textContent.slice(0,-1) + sign;
      }
    }



  //Operate function
  function operate(){
    let lengt = secondResult.textContent.length;
  if(index >= 1){
    
    let val = mainResult.textContent;
    if(secondResult.textContent[lengt-1] ==="+"){
      mainResult.textContent = parseFloat(results) + parseFloat(mainResult.textContent);
    }else if(secondResult.textContent[lengt-1] ==="-"){
      mainResult.textContent = parseFloat(results) - parseFloat(mainResult.textContent);
    }
    else if(secondResult.textContent[lengt-1] ==="×"){
      mainResult.textContent = parseFloat(results) * parseFloat(mainResult.textContent);
    }
    else if(secondResult.textContent[lengt-1] ==="÷"){
      if(mainResult.textContent == 0){
        resultOn = true;
        return mainResult.textContent = "Division by zero";
      }
      mainResult.textContent = parseFloat(results) / parseFloat(mainResult.textContent);
      
    }
    secondResult.textContent = secondResult.textContent + val + "=";
  }else{
    let val2 = mainResult.textContent;
    if(secondResult.textContent[lengt-1] ==="+"){
      mainResult.textContent = parseFloat(secondResult.textContent.slice(0,-1)) + parseFloat(mainResult.textContent);
    }else if(secondResult.textContent[lengt-1] ==="-"){
      mainResult.textContent = parseFloat(secondResult.textContent.slice(0,-1)) - parseFloat(mainResult.textContent);
    }
    else if(secondResult.textContent[lengt-1] ==="×"){
      mainResult.textContent = parseFloat(secondResult.textContent.slice(0,-1)) * parseFloat(mainResult.textContent);
    }
    else if(secondResult.textContent[lengt-1] ==="÷"){
      if(mainResult.textContent == 0){
        resultOn = true;
        return mainResult.textContent = "Division by zero";
      }
      mainResult.textContent = parseFloat(secondResult.textContent.slice(0,-1)) / parseFloat(mainResult.textContent);
      
    }
    secondResult.textContent = secondResult.textContent + val2 + "=";
  }

  }

// Addition button
    addition.addEventListener('mousedown', () => {
      if (!resultOn){ 
      if(operOn){
        
          secondResult.textContent += mainResult.textContent + "+";
          
          if(secondResult.textContent === ""){
            secondResult.textContent += mainResult.textContent + "+";
            
          }else if (startOn){
            
            calc(sign,secondResult.textContent.length);
            
            index += 1;
          }
        numberOn=true;
        operOn = false;
        
      }
      sign="+";
      startOn = true
      
      replace()
    }
    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "+") {
          if (!resultOn){   
          if(operOn){
        
            secondResult.textContent += mainResult.textContent + "+";
            if(secondResult.textContent === ""){
              secondResult.textContent += mainResult.textContent + "+";
            }else if (startOn){
              calc(sign,secondResult.textContent.length);
              index += 1;
            }
          numberOn=true;
          operOn = false;
          
        }
        sign="+";
        startOn = true
        replace()
      }
        }
      });
// Subtraction button

    subtraction.addEventListener('mousedown', () => {
      if (!resultOn){ 
      if(operOn){
        
        secondResult.textContent += mainResult.textContent + "-";
        if(secondResult.textContent === ""){
          secondResult.textContent += mainResult.textContent + "-";
        }else if (startOn){
          calc(sign,secondResult.textContent.length);
          index += 1;
        }
      
      numberOn=true;
      operOn = false;
      
    }
    sign="-";
    startOn = true
    replace()
  }
    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "-") {
          if (!resultOn){ 
          if(operOn){
        
            secondResult.textContent += mainResult.textContent + "-";
            if(secondResult.textContent === ""){
              secondResult.textContent += mainResult.textContent + "-";
            }else if (startOn){
              calc(sign,secondResult.textContent.length);
              index += 1;
            }
          
          numberOn=true;
          operOn = false;
          
        }
        sign="-";
        startOn = true
        replace()
        }
      }
      });
// Multiplication button

    multiplication.addEventListener('mousedown', () => {
      if (!resultOn){ 
      if(operOn){
        
        secondResult.textContent += mainResult.textContent + "×";
        if(secondResult.textContent === ""){
          secondResult.textContent += mainResult.textContent + "×";
        }else if (startOn){
          calc(sign,secondResult.textContent.length);
          index += 1;
        }
        
      numberOn=true;
      operOn = false;
      
    }
    sign="×";
    startOn = true
    replace()
  }
    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "*") {
          if (!resultOn){ 
          if(operOn){
            secondResult.textContent += mainResult.textContent + "×";
            if(secondResult.textContent === ""){
              secondResult.textContent += mainResult.textContent + "×";
            }else if (startOn){
              calc(sign,secondResult.textContent.length);
              index += 1;
            }
            
          numberOn=true;
          operOn = false;
          
        }
        sign="×";
        startOn = true
        replace()
        }
      }
      });
// Division button

    division.addEventListener('mousedown', () => {
      if (!resultOn){ 
      if(operOn){
        
        secondResult.textContent += mainResult.textContent + "÷";
        if(secondResult.textContent === ""){
          secondResult.textContent += mainResult.textContent + "÷";
        }else if (startOn){
          calc(sign,secondResult.textContent.length);
          index += 1;
        }
       
      numberOn=true;
      operOn = false;
      
    }
    sign="÷"; 
    startOn = true
    replace()
  }
    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "/") {
          if (!resultOn){  
          if(operOn){
        
            secondResult.textContent += mainResult.textContent + "÷";
            if(secondResult.textContent === ""){
              secondResult.textContent += mainResult.textContent + "÷";
            }else if (startOn){
              calc(sign,secondResult.textContent.length);
              index += 1;
            }
           
          numberOn=true;
          operOn = false;
          
        }
        sign="÷"; 
        startOn = true
        replace()
        }
      }
      });

      
    










