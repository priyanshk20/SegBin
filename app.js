const inputWaste = document.querySelector('#waste-inp');
const findBtn = document.querySelector('#find-btn')
const output = document.querySelector('#output');
const qrscan = document.querySelector('#scanner');
const plastic = document.querySelector('#plastic');
const paper = document.querySelector('#paper');
const syringe = document.querySelector('#syringe');
const glass = document.querySelector('#glass');
const cloth = document.querySelector('#cloth');
const metal = document.querySelector('#metal');
const scanLink = document.querySelector('#scan-link');

const recyclable = ["Plastic Bottles","Wrappers","Newspapers", "Cardboard", "Cans", "Batteries","Nails", "Scissors"]

const nonrecyclable = ["Paper Cups","Plates","Rags", "Used T-shirts", "Waste Clothes", "Styrofoam", "Mirror", "Broken Glass", "Broken Mirror","Bubble Wraps","Glass Bottles", "Syringe","Medical Waste"]

findBtn.addEventListener('click',()=>{
   checkInput(inputWaste.value);
})


const checkInput = (value) => {
    if(recyclable.includes(value)){
        output.innerHTML = `Your waste is Recyclable, you should put it in the Green bin. Scan QR to avail offer`
        qrscan.disabled = false
        scanLink.href = `./qrcode.html`
    }else if(nonrecyclable.includes(value)){
        output.innerText = `Your waste is Non Recyclable, you should put it in the Red bin. Scan QR to avail offer`
        qrscan.disabled = false
        scanLink.href = `./qrcode.html`
    }else{
        output.innerText = `Input Value is not in our database. Try something from the suggestions below`
        qrscan.disabled = true
    }
}

plastic.addEventListener('click',()=>{
    checkInput("Plastic Bottles");
    inputWaste.value = ""   
})

paper.addEventListener('click',()=>{
    checkInput("Paper Cups")
    inputWaste.value = ""   
})

syringe.addEventListener('click',()=>{
    checkInput("Syringe")
    inputWaste.value = ""   

})

glass.addEventListener('click',()=>{
    checkInput("Broken Glass")
    inputWaste.value = ""   

})

cloth.addEventListener('click',()=>{
    checkInput("Used T-shirts")
    inputWaste.value = ""   

})

metal.addEventListener('click',()=>{
    checkInput("Nails")
    inputWaste.value = ""   

})
