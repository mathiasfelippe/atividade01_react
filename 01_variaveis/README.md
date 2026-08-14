# 01_variaveis — Exibição de dados de um produto

## Sobre o projeto

Este projeto é uma atividade introdutória de React criada para demonstrar como **variáveis JavaScript podem ser declaradas dentro de um componente funcional e interpoladas em JSX**. A aplicação apresenta informações de um produto diretamente na interface, permitindo observar a relação entre os dados definidos no código e o conteúdo renderizado no navegador [1].

## O que foi feito

O componente principal `App` foi estruturado para representar um produto. Foram declaradas as variáveis `nome`, `descricao`, `marca` e `preco`, que armazenam, respectivamente, o nome do produto, sua descrição, a marca e o valor. Em seguida, esses valores são exibidos em elementos HTML por meio da sintaxe `{variavel}` do JSX [1].

O exemplo utilizado representa fones de ouvido sem fio da Samsung, com informações sobre som imersivo, microfones, cancelamento ativo de ruído e modo ambiente. O preço é mantido como um valor numérico, o que reforça a diferença entre dados e sua apresentação na interface.

## Estrutura da implementação

| Elemento | Função |
| --- | --- |
| `App` | Componente funcional responsável pela tela da atividade. |
| `nome` | Armazena o nome do produto. |
| `descricao` | Armazena o texto descritivo do produto. |
| `marca` | Identifica a fabricante. |
| `preco` | Armazena o preço como número. |
| JSX | Organiza os rótulos e insere os valores das variáveis no HTML renderizado. |

## Conceitos praticados

A atividade trabalha a criação de componentes funcionais, a declaração de constantes em JavaScript, a interpolação de expressões em JSX e a renderização de dados em elementos como `h2` e `p`. Também introduz a ideia de separar os **dados do produto** da **estrutura visual** que os apresenta.

> O objetivo central é compreender que valores definidos no componente podem ser utilizados dinamicamente na interface por meio do JSX.

## Tecnologias e ferramentas

| Tecnologia | Utilização |
| --- | --- |
| React | Criação do componente e da interface. |
| JavaScript | Declaração e armazenamento das informações do produto. |
| JSX | Combinação da estrutura HTML com expressões JavaScript. |
| Vite | Servidor de desenvolvimento e processo de build. |
| ESLint | Verificação estática do código. |

As dependências e os scripts disponíveis estão definidos no `package.json` do projeto [2].

## Resultado esperado

Ao abrir a aplicação no navegador, será exibido um bloco com o título **FONES DE OUVIDO** e os campos de nome, descrição, marca e preço preenchidos a partir das variáveis declaradas no componente `App`.