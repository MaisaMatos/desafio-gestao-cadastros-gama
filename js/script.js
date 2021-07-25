const form1 = document.getElementById('form1')//seleção do formulário

form1.addEventListener('submit', (e) => {//"escutando" o evento (e) do botão "cadastrar"
  e.preventDefault();//como a pag sempre é recarregada, não quero isso, previno esse evento padrão
  let nome = document.getElementById('nome').value;//captando o valor dos inputs e armazenando em vars
  let cpf = document.getElementById('cpf').value;//captando o valor dos inputs e armazenando em vars
  let endereco = document.getElementById('endereco').value;//captando o valor dos inputs e armazenando em vars
  let numero = document.getElementById('numero').value;//captando o valor dos inputs e armazenando em vars
  let complemento = document.getElementById('complemento').value;//captando o valor dos inputs e armazenando em vars
  let bairro = document.getElementById('bairro').value;//captando o valor dos inputs e armazenando em vars
  let cidade = document.getElementById('cidade').value;//captando o valor dos inputs e armazenando em vars
  let estado = document.getElementById('estado').value;//captando o valor dos inputs e armazenando em vars
  let cep = document.getElementById('cep').value;//captando o valor dos inputs e armazenando em vars
  let tel = document.getElementById('tel').value;//captando o valor dos inputs e armazenando em vars
  let email = document.getElementById('email').value;//captando o valor dos inputs e armazenando em vars
  let dataCli = {//transformando as vars em objeto
    nome,
    cpf,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    cep,
    tel,
    email,
  }
  let convertDataCli = JSON.stringify(dataCli);//convertendo o objeto numa string

  localStorage.setItem('lead', convertDataCli)//invoca localStorage, "lead" é a chave e "convertData" é o valor

  let content1 = document.getElementById('content1')//captando a div "content", que é o formulário

  let carregando1 = `<img src="./assets/loader2.gif" >`

  let pronto1 = `<p>Cliente cadastrado com sucesso!</p>`

  content1.innerHTML = carregando1//nova atribuição de "content"


  setTimeout(() => {
    content1.innerHTML = pronto1
  }, 1000)

})

const form2 = document.getElementById('form2')//seleção do formulário

form2.addEventListener('submit', (e) => {//"escutando" o evento (e) do botão "cadastrar"
  e.preventDefault();//como a pag sempre é recarregada, não quero isso, previno esse evento padrão
  let categoria = document.getElementById('categoria').value;//captando o valor dos inputs e armazenando em vars
  let produto = document.getElementById('produto').value;//captando o valor dos inputs e armazenando em vars
  let descricao = document.getElementById('descricao').value;//captando o valor dos inputs e armazenando em vars
  let quantidade = document.getElementById('quantidade').value;//captando o valor dos inputs e armazenando em vars
  let preco = document.getElementById('preco').value;//captando o valor dos inputs e armazenando em vars
  let dataProd = {//transformando das duas vars em objeto
    categoria,
    produto,
    descricao,
    quantidade,
    preco,    
  }
  let convertDataProd = JSON.stringify(dataProd);//convertendo o objeto numa string

  localStorage.setItem('lead1', convertDataProd)//invoca localStorage, "lead" é a chave e "convertData" é o valor

  let content2 = document.getElementById('content2')//captando a div "content", que é o formulário

  let carregando2 = `<img src="./assets/loader2.gif" >`

  let pronto2 = `<p>Produto inventariado com sucesso!</p>`

  content2.innerHTML = carregando2//nova atribuição de "content"


  setTimeout(() => {
    content2.innerHTML = pronto2
  }, 1000)

})