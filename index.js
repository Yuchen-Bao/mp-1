function plus() {
    if(ifEmpty()){return;}
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    console.log(typeof num1, typeof num2)
    console.log(num1, num2)
    let result = Number(num1) + Number(num2);

    result = String(result);
    displayResult(result);
}

function minus() {
    if(ifEmpty()){return;}
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    console.log(typeof num1, typeof num2)
    let result = Number(num1) - Number(num2);

    result = String(result);
    displayResult(result);
}

function multiply() {
    if(ifEmpty()){return;}
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    console.log(typeof num1, typeof num2)
    let result = Number(num1) * Number(num2);

    result = String(result);
    displayResult(result);

    return 0;
}

function divide() {
    if(ifEmpty()){return;}
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    console.log(typeof num1, typeof num2)
    let result = Number(num1) / Number(num2);

    //remain five digits, output of toFixed is String
    result = result.toFixed(5);
    displayResult(result);

    return 0;
}

function pow() {
    if(ifEmpty()){return;}
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    console.log(typeof num1, typeof num2)

    let sum = 1;
    if (num2 >= 0) {
        for (let i = 1; i <= num2; i++) {
            sum *= num1;
        }
    }
    else{
        for(let i=1;i<=-num2;i++){
            sum /= num1;
        }
    }

    let result = String(sum);
    displayResult(result);

    return 0;
}

function displayResult(result) {
    let displayPosition = document.getElementById("output");
    console.log(result);
    if(result>=0){
        displayPosition.style.color = "black";
        displayPosition.innerHTML = `${result}`;
    }
    else{
        displayPosition.style.color = "red";
        displayPosition.innerHTML = `${result}`;
    }

}

function clearAll(){
    let num1 = document.getElementById("first-number");
    let num2 = document.getElementById("second-number");
    let displayPosition = document.getElementById("output");

    num1.value=``;
    num2.value=``;
    displayPosition.innerHTML = `0`;
}

function ifEmpty(){
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;

    if(num1==="" || num2===""){
        displayResult("0")
        console.log("Notice : empty input!")
        return true;
    }
    return false;
}
