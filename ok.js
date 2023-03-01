const form = document.querySelector('.form');
const nomeInput = document.getElementById('nome');
const cpfInput = document.getElementById('cpf');
const emailInput = document.getElementById('email');
const cepInput = document.getElementById('cep');
const enderecoInput = document.getElementById('endereco');
const complementoInput = document.getElementById('complemento');
const planoInput = document.getElementById('plano');
const botaoSubmit = document.getElementById('btn_submeter');




    form.addEventListener('submit', (event) => {
        
    
        if ((nomeInput.value.trim() === '')){
            const nomeError = document.createElement('p');
            nomeError.textContent = 'É obrigatório informar o nome';
            nomeError.classList.add('error');
            nomeInput.parentNode.appendChild(nomeError);
            // alert('É obrigatório informar o nome')
            
            
        }
        if ((cpfInput.value.replace(/\D+/g,'') === '')){
            const cpfError = document.createElement('p');
            cpfError.textContent = 'É obrigatório informar o cpf';
            cpfError.classList.add('error');
            cpfInput.parentNode.appendChild(cpfError);
            
            
        }
        if ((emailInput.value.trim() === '')){
            const emailError = document.createElement('p');
            emailError.textContent = 'É obrigatório informar o email';
            emailError.classList.add('error');
            emailInput.parentNode.appendChild(emailError);
            
        }
        if ((cepInput.value.trim() === '')){
            const cepError = document.createElement('p');
            cepError.textContent = 'É obrigatório informar o cep';
            cepError.classList.add('error');
            cepInput.parentNode.appendChild(cepError);
            
        }
        if ((enderecoInput.value.trim() === '')){
            const enderecoError = document.createElement('p');
            enderecoError.textContent = 'É obrigatório informar o endereco';
            enderecoError.classList.add('error');
            enderecoInput.parentNode.appendChild(enderecoError);
            
        }
        if ((planoInput.value === '')){
            const planoError = document.createElement('p');
            planoError.textContent = 'É obrigatório selecionar um plano';
            planoError.classList.add('error');
            planoInput.parentNode.appendChild(planoError);
            
        }
        event.preventDefault();
        // form.submit();
    
        
    })




