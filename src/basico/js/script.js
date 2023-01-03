/* Nas funções abaixo resolvi aplicar classe e arrow functions, agilizando o processo de executar a função e passar as variáveis necessárias para realizar o cálculo.
* Para inserir os valores, pode seguir o exemplo: 
    const pv01 = new Prova('primeira unidade', 10)
    const pv02 = new Prova('segunda unidade', 8)
    const pv03 = new Prova('terceira unidade', 9.5)

    bol01.novaNota(pv01, pv02, pv03)

    const bol01 = new Boletim('aluno', 2022)
    console.log(bol01.registroBoletim())
*/
class Prova {
    constructor (unidade = '', nota = 0){
        this.unidade = unidade,
        this.nota = nota
    }
}

class Boletim {
    constructor(aluno = '',ano = 0){
        this.aluno = aluno,
        this.ano = ano,
        this.notas = []
    }

    novaNota(... prova){
        prova.forEach(
            nota => this.notas.push(nota)
        )
    }

    registroBoletim(){
        let totalNotas = 0;
        let media = 0
        this.notas.forEach( prova => {
            totalNotas += prova.nota
            media = (totalNotas/this.notas.length).toFixed(2)
        })
        const condicao = media >=8 ? "aprovado" : "reprovado"
        return `${this.aluno} no ano de ${this.ano} obteve a média de ${media} e foi ${condicao}`
    }
}


// Função Recursivas
// Só transformei a função em arrow function, não tinha muito o que fazer aqui
const contagemRegressiva = numero => {

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

/* 
 * Formulário envio de dados para cálculo da média 
 */


// Transformei as funções em arrow function

const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit',  evento => {

        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


const validaCampo = elemento => {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

const validaCampoNumerico = elemento =>{

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


const validaEmail = elemento =>{

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

// Apliquei o conceito de objeto nas variáveis abaixo para facilitar o entendimento

const campos = new Object() 
campos.obrigatorios = document.querySelectorAll('input.obrigatorio');
campos.numericos = document.querySelectorAll('input.numero');
campos.email = document.querySelectorAll('input.email');

for( let emFoco of campos.obrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of campos.numericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of campos.email) {
    validaEmail(emFoco);
}

