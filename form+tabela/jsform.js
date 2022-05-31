var pessoas, index;

function cadastrar(nome, email, sexo, profissao){
    /*alert("Comuniquei !!!!!");*/
    pessoas = document.getElementById("tabelaform");
    var qtlinhas = pessoas.rows.length;
    var linha = pessoas.insertRow(qtlinhas);

    var colunaCodigo = linha.insertCell(0);
    var colunaNome = linha.insertCell(1);
    var colunaEmail = linha.insertCell(2);
    var colunaSexo = linha.insertCell(3);
    var colunaProfissao = linha.insertCell(4);

    colunaCodigo.innerHTML = qtlinhas;
    colunaNome.innerHTML = nome;
    colunaEmail.innerHTML = email;
    colunaSexo.innerHTML = sexo;
    colunaProfissao.innerHTML = profissao;

    preenchercampos()
}

function preenchercampos(){
    for(var i=0; i < pessoas.rows.length; i++){
        pessoas.rows[i].onclick = function(){
            index = this.rowIndex;
            document.getElementById("codigo").value = pessoas.rows[index].cells[0].innerText;
            document.getElementById("nome").value = pessoas.rows[index].cells[1].innerText;
            document.getElementById("email").value = pessoas.rows[index].cells[2].innerText;
            document.getElementById("sexo").value = pessoas.rows[index].cells[3].innerText;
            document.getElementById("profissao").value = pessoas.rows[index].cells[4].innerText;
        }
    }
}