const calculate = document.querySelector("#calculate");



calculate.addEventListener("click", bmiResult);


function bmiResult(){
    const result = document.querySelector("#result");
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;
    const squareHeight = height * height;
    const total = Math.floor(weight / squareHeight);

    result.textContent = `Your BMI is ${total} kg/\u33A1`;
}