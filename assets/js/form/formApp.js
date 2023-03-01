import consumocep from "./consumoCEP.js";
import formulario from "./formulario.js";

consumocep.inputCEP.addEventListener('blur', (input)=> {
    consumocep.findCEP(input)
})

formulario.form.addEventListener('submit', (event) => {
    formulario.inputOk(event);
});