let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let button1 = document.getElementById('button')

function somarNumer(num1, num2) {

    return num1 + num2
}

button1.eddEventListener('click' , ()=>{

    console.log(somarNumer(button1.value , input2.value))
})