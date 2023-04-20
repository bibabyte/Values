
let value_here = document.getElementById('value_here');

// create array with values
const values = "boldness, autonomy, hard work, challenge, self-control, virtue, honesty, dependability, adventure, creativity, openness, growth, beauty, ecology, health, humor, knowledge, curiosity, passion, rationality, simplicity, spirituality, tradition, commitment, responsibility, fun, leisure, non-conformity, genuineness, connection, romance, intimacy, respect, generosity, compassion, peace, justice, helpfulness, contribution, problem solving, piety, competition, community, creation, security, loyalty, loving, competent, authority, courage".split(", ");



// random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


addEventListener('click', (ran_value) => {} );

// makes the button work
// SHOULD make the text appear on the webpage
onclick = (ran_value) => {
    let value = values[getRandomInt(values.length-1)];
    // alert(value);    <-- this is a test
    // document.body.innerHTML = value;    <-- this works. it replaces everything in the body.
    // document.querySelector(#value_here) = value;    <-- this breaks the button.
    value_here.innerHTML = value;
} 


// Test the button
// alert(values[getRandomInt(values.length-1)]);