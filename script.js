//Targetting the simple colors button.
const simple_colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'purple', 'brown', 'gold', 'aqua', 'blueviolet', 'coral', 'crimson', 'fuchsia'];
const btn_simple = document.getElementById('btn-simple')
const heading_2 = document.getElementById('heading-2')


//Function to generate random simple colors.
const getRandom = () => Math.floor(Math.random()*simple_colors.length)


btn_simple.addEventListener('click', function () {
    //The code below caused the colors for the background, text, and buttons to be different at every click. hence, i had to save the function in one variable (randomColors) so that at every click, the same color will be generated all through the page.

    // body.style.backgroundColor = simple_colors[getRandom()]
    // btn_simple.style.backgroundColor = simple_colors[getRandom()]
    // heading_2.style.color = simple_colors[getRandom()]

    const randomColors = getRandom()

    console.log(document.body);

    document.body.style.backgroundColor = simple_colors[randomColors]
    btn_simple.style.backgroundColor = simple_colors[randomColors]
    btn_simple.textContent = simple_colors[randomColors]
    heading_2.style.color = simple_colors[randomColors]
})
