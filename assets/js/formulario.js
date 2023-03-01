const form = document.querySelector('.form');
const nomeError = document.querySelector("small.name_error");
const cpfError = document.querySelector("small.cpf_error");
const emailError = document.querySelector("small.email_error");
const cepError = document.querySelector("small.cep_error");
const planoError = document.querySelector("small.plano_error");

const nomeInput = document.getElementById('name');
const cpfInput = document.getElementById('cpf');
const emailInput = document.getElementById('email');
const cepInput = document.getElementById('cep');
const planoInput = document.getElementById('plano');



const arrInput =[nomeInput, cpfInput, emailInput, cepInput, planoInput];
const arrError = [nomeError, cpfError, emailError, cepError,planoError];


function inputOk(event) {
    event.preventDefault();
    let output = true;
    arrInput.forEach((input)=>{
        input.addEventListener("click", () =>{
            arrInput.forEach((element) =>{
                element.classList.remove("error")
            })
            arrError.forEach((error) =>{
                error.innerHTML = "";
            })
        })

        let inputValue = input.value;
        let inputId = input.getAttribute("id");
        if (inputValue.length === 0){
            output = false;
            if (inputId === "nome"){
                nomeError.innerHTML = "É obrigatório informar o nome";
                nomeError.classList.add("error");
            }else if(inputId === "cpf"){
                cpfError.innerHTML = "É obrigatório informar o cpf";
                cpfError.classList.add("error");
                
            }else if(inputId === "email"){
                emailError.innerHTML = "É obrigatório informar o email";
                emailError.classList.add("error");
            }else if(inputId === "cep"){
                cepError.innerHTML = "É obrigatório informar o cep";
                cepError.classList.add('error');
            } else if (inputId === "plano") {
                if (planoInput.selectedIndex === 0) {
                    planoError.innerHTML = "Selecione um plano";
                    planoError.classList.add('error');
                    
                }
            }
            
        } else if (inputId === "cep") {
            if(inputValue.length !== 8){
            cepError.innerHTML = "O CEP deve ter 8 caracteres";
            cepError.classList.add('error');
            }
        }else if (inputId === "cpf") {
            if(inputValue.length !== 11){
            cpfError.innerHTML = "O CPF deve ter 11 caracteres";
            cpfError.classList.add('error');
            }
        }else if (inputId === "email") {
            let valicacaoCaracteres = /[A-Z]/.test(inputValue);
            let extencao = ".com";
            let arroba = "@";
            if (
              valicacaoCaracteres ||
              !inputValue.includes(extencao) ||
              !inputValue.includes(arroba)
            ) {
              emailError.innerHTML = "Formato do email inválido";
              emailError.classList.add("error");
              output = false;
            }
          }

    })


    if (output) {
        form.submit();
    }
}


form.addEventListener('submit', (event) => {
    inputOk(event);
});




