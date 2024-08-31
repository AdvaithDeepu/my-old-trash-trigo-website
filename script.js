let currentRatio, currentValue,z,x;
//let answer = document.getElementById("numerator").value+"/"+document.getElementById("denominator").value;

const angles =["0", "30", "45", "60", "90"];
const ratio_strings = ["sin", "cos", "tan", "cosec", "sec" , "cot"];

const ratios  ={
    sin: {
        0: "0",
        30: "1/2",
        45: "1/√2",
        60: "√3/2",
        90: "1"
    },
    cos: {
        0: "1",
        30: "√3/2",
        45: "1/√2",
        60: "1/2",
        90: "0/"
    },    
    tan: {
        0: "0",
        30: "1/√3",
        45: "1",
        60: "√3",
        90: "N"
    },    
    cosec: {
        0: "N",
        30: "2",
        45: "√2",
        60: "2/√3",
        90: "1"
    },    
    sec: {
        0: "1",
        30: "2/√3",
        45: "√2",
        60: "2",
        90: "N"
    },    
    cot: {
        0: "N",
        30: "√3",
        45: "1",
        60: "1/√3",
        90: "1"
    }
}
function Question(){
    currentValue = angles[Math.floor(Math.random()*5)];
    currentRatio = ratio_strings[Math.floor(Math.random()*6)];
    document.getElementById("Question").innerHTML= currentRatio +" "+currentValue+"°";
    document.getElementById("denominator").value = '';
    document.getElementById("numerator").value = '';

}
window.onload= function(){
    Question();
};

function root1(){
    document.getElementById("numerator").value += "√";
}
function root2(){
    document.getElementById("denominator").value += "√";
}
function submit(){
        numer = document.getElementById("numerator").value;
        deno = document.getElementById("denominator").value;
        correct= (ratios[currentRatio])[currentValue];
        if (document.getElementById("denominator").value==''){
           answer= document.getElementById("numerator").value;
        }else{
           answer = document.getElementById("numerator").value+"/"+document.getElementById("denominator").value;
        }       

        if (answer == correct ){
            document.getElementById("test").innerHTML = "Correct Answer!!";
        }else if(answer != correct){
            document.getElementById("test").innerHTML = "Incorrect, The Answer is: "+ correct;
        }else{
            document.getElementById("test").innerHTML = "Error"
        }
        Question();        

}
  
function ShowTable(){
    let i;
    z= "<table><tr><th>Ratio</th><th>0°</th><th>30°</th><th>60°</th><th>45°</th><th>90°</th></tr><tr>"+ratio_strings[i];
    for (i=1; i<6; i++) {
        x= (ratios[ratio_strings[i]])[angles[i]] //(ratios[currentRatio])[currentValue]
        z+= "<td>"+x+"</td>";
    }z+="</tr></table>"
    document.getElementById("table").innerHTML= z;
}
