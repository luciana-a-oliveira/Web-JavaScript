// Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)
//Executar uma acao
function cloneField() {
   //duplicar os campos, q campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false

    //pegar os campos, que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para os campos, limpar
    fields.forEach(function(field) {
        //pegar o filde do momento e limpa ele
      field.value =""
    })
    
    // colocar na pag, onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

  
}

  
    
    
    
    
        
    