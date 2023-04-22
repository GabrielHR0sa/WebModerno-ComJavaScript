// função em js é first-class object (citizens)
// higher-order function

// criar de forma literal
function fun1(){

}

//armazenar em uma variável
const fun2 = function(){

}

//armazenar em um array
const array = [function(a, b){ return a + b}, fun1, fun2] 
console.log(array[0](2,3))

//armazenar em u, atributo de objeto
const obj = {}
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

//passar funcao como parametro
function run(fun){
    fun()
}

run(function(){ console.log('Executando...') })
