**# Exercise: Create a prototype of a Pokedex**

Você vai implementar de forma simplificada uma [Pokedex!!](https://bulbapedia.bulbagarden.net/wiki/Pokédex) Para os que não estão familiarizados com o universo `Pokemon`, a `Pokedex` é uma enciclopédia de todos os pokemons na natureza. Para o seu caso, a sua aplicação precisa mostrar todos os pokemons presentes no arquivo `data.js` mencionado acima.

**### Instructions:**

1. **<u>Pokemon</u>**: como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando *PropTypes*:

  * nome do pokemon;

  * tipo do pokemon;

  * peso médio do pokemon, acompanhado da unidade de medida usada;

  * imagem do pokemon.



2. **<u>Pokedex</u>**: esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, **Pokedex** chama o componente **Pokemon**.

</br>

![Gif exibindo uma sugestão de implementação da aplicação my-pokedex](https://course.betrybe.com/front-end/react/components/my-pokedex-project.gif)
