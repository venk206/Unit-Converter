/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const oneMeterToFeet = 3.281 //foot
const oneLiterToGallons = 0.264 //gallons
const oneKilogramToPounds = 2.204 //pounds
const inputValue = document.getElementById("inputNumber")
const inputBtn = document.getElementById("btn")
let array = []
let convertSectionCode = ""

inputBtn.addEventListener("click",function(){
    conversion()
    codeHTML()
    document.getElementById("convertSection").innerHTML = convertSectionCode
    console.log(array)
    }
    )

function conversion(){
    array = [`${inputValue.value} meters = ${parseFloat(inputValue.value * oneMeterToFeet).toFixed(3)} feet | ${inputValue.value} feet = ${parseFloat(inputValue.value / oneMeterToFeet).toFixed(3)} meters`,
    `${inputValue.value} litres = ${parseFloat(inputValue.value * oneLiterToGallons).toFixed(3)} gallons | ${inputValue.value} gallons = ${parseFloat(inputValue.value / oneLiterToGallons).toFixed(3)} litres`,
    `${inputValue.value} Kilos = ${parseFloat(inputValue.value * oneKilogramToPounds).toFixed(3)} pounds | ${inputValue.value} pounds = ${parseFloat(inputValue.value / oneMeterToFeet).toFixed(3)} kilos`]
}

function codeHTML(){
    convertSectionCode = ` 
            <div id="length">
                <p>Length (Meter/Feet)</p>
                <p id = "conversionText">${array[0]}</p>
            </div>
            
            <div id="Volume">
                <p>Volume (Litres/Gallons)</p>
                <p id= "conversionText">${array[1]}</p>
            </div>
            
            <div id="Mass">
                <p>Mass (Kilograms/Pounds)</p> 
                <p id= "conversionText">${array[2]}</p>  
            </div>`
}