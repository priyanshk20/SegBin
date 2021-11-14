const inputWaste = document.querySelector('#waste-inp');
const findBtn = document.querySelector('#find-btn')
const output = document.querySelector('#output');
const qrscan = document.querySelector('#scanner');

const recyclable = ["Plastic Bottles","Wrappers","Newspapers", "Cardboard", "Cans", "Batteries","Nails", "Scissors"]

const nonrecyclable = ["Paper Cups","Plates","Rags", "Used T-shirts", "Waste Clothes", "Styrofoam", "Mirror", "Broken Glass", "Broken Mirror","Bubble Wraps","Glass Bottles", "Syringes","Medical Waste"]

findBtn.addEventListener('click',()=>{
   checkInput(inputWaste.value);
})


const checkInput = (value) => {
    if(recyclable.includes(value)){
        output.innerHTML = `Your waste is Recyclable, you should put it in the green bin. Scan QR to avail offer`
        qrscan.disabled = false
    }else if(nonrecyclable.includes(value)){
        output.innerText = `Your waste is Non Recyclable, you should put it in the red bin. Scan QR to avail offer`
        qrscan.disabled = false
    }else{
        output.innerText = `Value not in our database. Try something from the suggestions below`
        qrscan.disabled = true
    }
}