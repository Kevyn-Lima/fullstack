

function Carro(velociadadeMaxima = 200, delta = 5){ //Criamos uma função construtora com parametros padronizados.

    //Atributo Privado, pois não é possivel acessar fora da função.
    let velocidadeAtual = 0

    // metodo publico, pois com o this, é permitido puxar de alguma forma, vista que está sendo uma função.
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velociadadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velociadadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){ // publica por estar recebendo o this, ele é uma função que vai retornar o velocidadeAtual, atraves do Get.
        return velocidadeAtual
    }
}

const uno = new Carro // Estamos instânciando um novo carro aqui, para acionar as funções do This como mencionado acima.

//Aqui estamos utilizando a função para que ele possa somar e ser colocado na velocidade atual
uno.acelerar() 
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidadeAtual()) //Estamos pegando(get) a velocidade atual e imprimindo no console.

const ferrari = new Carro(350,50) // Unica diferença que estamos passando os parametros de velocidade atual e do Delta, ao inves de usar o padrão.
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
