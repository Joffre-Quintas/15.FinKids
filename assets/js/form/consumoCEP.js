const inputCEP = document.querySelector('#cep')

function replaceValue(convertCEP) {
    const inputAdress = document.querySelector('#adress')

    inputAdress.value = convertCEP.logradouro
}

async function findCEP(input) {
    const cep = input.target.value
    if(cep.trim() == '') {
        alert('Preencha todos os campos')
        // inputCEP.style.outline = '2px solid red'
    } else {
        try {
            const correiosAPI = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const convertCEP = await correiosAPI.json()
            console.log(convertCEP)
            if(convertCEP.erro) {
                document.querySelector('#adress').placeholder = ''
                document.querySelector('#adress').value = ''
                alert('CEP não encontrado')
            }else {
                replaceValue(convertCEP)
            }
        }
        catch(e) {

        }
    }
}

// inputCEP.addEventListener('blur', (input)=> {
//     findCEP(input)
// })

export default { findCEP, inputCEP };

