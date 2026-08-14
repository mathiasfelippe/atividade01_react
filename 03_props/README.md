# 03_props — Passagem de propriedades para um componente

## Sobre o projeto

Este projeto apresenta o conceito de **props**, mecanismo utilizado pelo React para enviar dados de um componente pai para um componente filho. A aplicação possui um componente `Pessoa` que recebe informações definidas em `App` e as exibe na interface [1] [2].

## O que foi feito

No componente `App`, foi renderizado o componente `<Pessoa />` com quatro propriedades: `nome`, `idade`, `cidade` e `endereco`. Os valores enviados são `Mathias`, `17`, `São Paulo` e `Rua Suiça, 67`, respectivamente [2].

O componente `Pessoa` recebe essas propriedades por meio do objeto `props` e acessa cada valor com expressões como `props.nome`, `props.idade`, `props.cidade` e `props.endereco`. A interface apresenta os dados sob o título **Dados da Pessoa** [1].

## Fluxo de dados

| Origem | Propriedade | Valor enviado | Exibição no componente |
| --- | --- | --- | --- |
| `App.jsx` | `nome` | `Mathias` | Nome da pessoa |
| `App.jsx` | `idade` | `17` | Idade da pessoa |
| `App.jsx` | `cidade` | `São Paulo` | Cidade da pessoa |
| `App.jsx` | `endereco` | `Rua Suiça, 67` | Endereço da pessoa |

O fluxo é unidirecional: `App` fornece os dados, enquanto `Pessoa` é responsável por recebê-los e renderizá-los. Essa separação torna o componente mais flexível, pois os valores podem ser substituídos sem alterar sua estrutura interna.

## Estrutura da implementação

| Arquivo ou elemento | Responsabilidade |
| --- | --- |
| `src/App.jsx` | Instancia `Pessoa` e envia os valores por meio de props. |
| `src/components/Pessoa.jsx` | Recebe o objeto `props` e exibe os dados recebidos. |
| `Pessoa` | Componente filho responsável pela apresentação das informações. |
| JSX | Combina a marcação da interface com as expressões que acessam as props. |

## Conceitos praticados

A atividade trabalha a criação de componentes, a comunicação entre componentes por meio de propriedades, o uso do objeto `props` e a renderização de dados dinâmicos em JSX. O ponto principal é compreender que um componente não precisa manter todos os dados internamente: ele pode receber informações de quem o utiliza.

> **Props** são valores fornecidos pelo componente pai para configurar o comportamento ou o conteúdo de um componente filho.

## Tecnologias e ferramentas

| Tecnologia | Utilização |
| --- | --- |
| React | Criação dos componentes `App` e `Pessoa`. |
| JavaScript | Definição dos dados enviados e acessados por props. |
| JSX | Estrutura da interface e interpolação das propriedades. |
| Vite | Servidor de desenvolvimento e build. |
| ESLint | Verificação da qualidade do código. |

Os comandos de desenvolvimento estão definidos no `package.json` da atividade [3].

## Resultado esperado

A página deverá apresentar o título **Dados da Pessoa** e os campos de nome, idade, cidade e endereço preenchidos com os valores enviados por `App` ao componente `Pessoa`.

