const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao);
    }
}
pessoa.falar();

const falar = pessoa.falar;
falar(); // conflito entre paradigma funcional e orientado a objetos

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

