# 02_components — Componente de dados do usuário

## Sobre o projeto

Este projeto demonstra a criação e a utilização de um **componente React independente**. A atividade organiza os dados de uma pessoa em um componente chamado `DadosUsuario`, que é renderizado pela aplicação principal para apresentar as informações de forma estruturada [1].

## O que foi feito

Foi criado o componente `DadosUsuario`, responsável por declarar e exibir cinco informações: nome, sobrenome, e-mail, sexo e idade. Os dados são armazenados em constantes locais e apresentados em uma interface com o título **Dados do Usuário**, seguido por parágrafos identificados por seus respectivos rótulos [1].

O componente principal `App` utiliza `<DadosUsuario />` para inserir esse conteúdo na aplicação. Dessa forma, a atividade evidencia que uma tela React pode ser dividida em partes menores e reutilizáveis, em vez de concentrar toda a marcação em um único arquivo.

## Estrutura da implementação

| Arquivo ou elemento | Responsabilidade |
| --- | --- |
| `src/App.jsx` | Componente de entrada que renderiza `DadosUsuario`. |
| `src/components/DadosUsuarios.jsx` | Componente que concentra os dados e a marcação das informações do usuário. |
| `DadosUsuario` | Componente funcional reutilizável. |
| JSX | Estrutura a interface e interpola as constantes dentro dos parágrafos. |

## Dados apresentados

| Campo | Exemplo utilizado |
| --- | --- |
| Nome | Mathias |
| Sobrenome | Gomes |
| E-mail | mathias@email.com |
| Sexo | Masculino |
| Idade | 17 |

## Conceitos praticados

A atividade trabalha a criação de componentes funcionais, a organização de arquivos em uma pasta `components`, a importação e renderização de um componente em `App` e a interpolação de valores JavaScript em JSX. O principal aprendizado é perceber como a **composição de componentes** contribui para tornar uma aplicação React mais organizada e fácil de manter.

> Um componente pode encapsular uma responsabilidade específica e ser utilizado pela aplicação principal sempre que essa parte da interface for necessária.

## Tecnologias e ferramentas

| Tecnologia | Utilização |
| --- | --- |
| React | Construção do componente e da interface. |
| JavaScript | Declaração das informações do usuário. |
| JSX | Definição da estrutura renderizada pelo componente. |
| Vite | Ambiente de desenvolvimento e build. |
| ESLint | Análise estática do código. |

O projeto utiliza os scripts padrão de desenvolvimento, build, lint e preview configurados no `package.json`.

## Resultado esperado

A aplicação deverá apresentar o título **Dados do Usuário** e, abaixo dele, os campos de nome, sobrenome, e-mail, sexo e idade preenchidos com os valores definidos no componente `DadosUsuario`.
