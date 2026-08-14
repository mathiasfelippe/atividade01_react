 # 04_jsx — Renderização de uma lista com JSX

## Sobre o projeto

Este projeto demonstra como utilizar **JSX, arrays de objetos e o método `map()`** para renderizar uma coleção de dados em React. A aplicação apresenta uma lista de carros, exibindo nome, modelo, marca e preço de cada item [1].

## O que foi feito

No componente `Carro`, foi criado um array com cinco objetos. Cada objeto representa um carro e possui as propriedades `nome`, `modelo`, `marca` e `preco`. A lista contém os modelos Versa, Tracker, Civic, Kicks e Taos, com suas respectivas marcas e valores [1].

Para exibir os dados, o código utiliza `carros.map(...)`. A cada iteração, um bloco JSX é criado com o nome do carro, seus detalhes e uma linha divisória. O valor do preço é formatado com `toLocaleString("pt-BR")`, o que apresenta a numeração no padrão brasileiro [1].

O componente `App` renderiza `<Carro />`, conectando o componente de lista à aplicação principal [2].

## Itens cadastrados

| Nome | Modelo | Marca | Preço armazenado |
| --- | --- | --- | ---: |
| Versa | Advance | Nissan | 125000 |
| Tracker | Premier | Chevrolet | 155000 |
| Civic | Type R | Honda | 430000 |
| Kicks | Exclusive | Nissan | 170000 |
| Taos | Highline | Volkswagen | 185000 |

## Estrutura da implementação

| Arquivo ou elemento | Responsabilidade |
| --- | --- |
| `src/App.jsx` | Renderiza o componente `Carro`. |
| `src/components/Carro.jsx` | Declara a lista de carros e cria a interface de cada item. |
| Array `carros` | Mantém os dados estruturados como objetos JavaScript. |
| `map()` | Percorre a lista e gera um bloco JSX para cada carro. |
| `key={index}` | Identifica cada item durante a renderização da lista. |
| `toLocaleString("pt-BR")` | Formata o preço de acordo com a convenção numérica brasileira. |

## Conceitos praticados

A atividade trabalha a integração entre JavaScript e JSX, a criação de arrays de objetos, a renderização de listas com `map()`, a interpolação de propriedades e a formatação de valores numéricos. Também reforça a importância de fornecer uma chave para cada elemento renderizado em uma coleção.

> O método `map()` permite transformar cada objeto do array em uma parte visual da interface, evitando a repetição manual da mesma estrutura para todos os carros.

## Tecnologias e ferramentas

| Tecnologia | Utilização |
| --- | --- |
| React | Construção dos componentes e renderização da lista. |
| JavaScript | Organização dos carros em um array de objetos. |
| JSX | Definição do layout de cada item. |
| Vite | Ambiente de desenvolvimento e build. |
| ESLint | Verificação estática do código. |

Os scripts e as dependências da aplicação estão configurados no `package.json` [3].


## Resultado esperado

A página deverá apresentar o título **Lista de Carros** e cinco blocos de informação. Em cada bloco serão exibidos o nome, o modelo, a marca e o preço formatado em reais, com uma linha horizontal separando os itens.

