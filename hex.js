//Targetting the hex color button
const btn_hex = document.getElementById('btn-hex')
const hex_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const heading_2 = document.getElementById('heading-2')


// Function to generate random hex color.
const getRandomHex = () => Math.floor(Math.random() * hex_values.length)

btn_hex.addEventListener('click', function () {

    console.log(btn_hex);
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        hex += hex_values[getRandomHex()];
    
    }

    document.body.style.backgroundColor = hex
    btn_hex.style.backgroundColor = hex
    btn_hex.textContent = hex
    heading_2.style.color = hex

})