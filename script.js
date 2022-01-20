//Exercício 1

function hello() {
    console.log("hello , estou aprendendo a criar e manipular dados nas funções")
}
hello();

// Exercício 2

function seuNome(name) {
    console.log(`Hello, ${name}`)

}
seuNome('Samuel')

// Exercício 3

function meusDados(name, age, music_style) {
    console.log(`Hello, meu nome é ${name}, tenho ${age} anos e meu estilo de música favorito é o ${music_style}!`)

}
meusDados('Samuel', 25, 'Pop rock');

// Exercício 4

function meusGostos(favorite_movie, favorite_song) {
    console.log(`hello, meu filme favorito é ${favorite_movie} e a minha música favorita é ${favorite_song}!`)
}
meusGostos('the Avengers', 'Right Here Waiting');

// Exercício 5 (Bônus)

function Multiplicar(a, b) {
    let multiplicando = 7;
    const multiplicador = 3;
    return `${multiplicando * multiplicador}`


}
console.log(Multiplicar());