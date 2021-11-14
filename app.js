const inputWaste = document.querySelector('#waste-inp');
const findBtn = document.querySelector('#find-btn')


const recyclabe = ["Plastic Bottles", "Newspapers", "Cardboard", "Cans", "Glass Containers", "Batteries"]

const nonrecyclable = ["Rags", "Clothes", "Styrofoam", "Mirror", "Bubble Wraps", "Syringes"]

findBtn.addEventListener('click',()=>{
    console.log(inputWaste.value);
})