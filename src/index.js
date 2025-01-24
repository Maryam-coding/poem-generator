function displayPoem(response){
    console.log("Poem Generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}
    
function generatePoem(event) {
    event.preventDefault();

    let instructionInput = document.querySelector("#user-instruction");
    let apiKey = "c474d77002fc0f7bt699a6356o32d5ad";
    let context = "You are a poem expert and you love to write short poems, your mission is to generate a four line poem. Make sure to follow user instrctions";
    let prompt = `User instructions are: Generate a poem about ${instructionInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">Generating a poem about ${instructionInput.value}</div>`;

    console.log("Generating poem");
    console.log(`Context: ${context}`);
    console.log(`Prompt: ${prompt}`);

    axios.get(apiUrl).then(displayPoem);
}    

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);