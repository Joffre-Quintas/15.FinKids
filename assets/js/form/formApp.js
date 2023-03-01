import consumocep from "./consumoCEP.js";

consumocep.inputCEP.addEventListener('blur', (input)=> {
    consumocep.findCEP(input)
})