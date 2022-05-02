// quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar
// o cartao correspondente ao que foi selecionado

// pra isso vamos precisar trabalhar com dois elementos
// 1-listagem
// 2-cartao pokemon

// precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

// vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemon
// -remover a classe aberto so do cartao q esta aberto
// -ao clicar em um pokemon da listagem pegamos o id dele para saber qual cartao mostrar
// -remover a classe ativo que marca o pokemon selecionado
// -adicionar a classe ativo no item da lista selecionado

// ---------------------------------------------------------------------------------------------------------

// precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela
 const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
 const pokemonCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {       //Evento de clique
        const cartaoPokemonAberto = document.querySelector('.aberto')  // remove "aberto" da classe pokemon
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value    // pega o id de todos os pokemon

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir) // adicionar aberto da classe pokemon
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo') // remove "ativo" da classe pokemon
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
