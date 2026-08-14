# ⚛️ React - Atividade prática sobre React 

---

## 📌 Sobre o Projeto
Nesta atividade, colocamos em prática os conhecimentos adquiridos sobre a biblioteca **React**, explorando a criação e utilização de **componentes**. O exercício teve como objetivo compreender melhor a estrutura de uma aplicação React, utilizando **JSX** para organizar e renderizar informações na interface de forma simples e reutilizável.


---

## 🎯 Objetivo gerais

O conjunto de atividades foi criado para consolidar os fundamentos da construção de interfaces com React. Ao longo dos projetos, são praticados a organização de componentes, a interpolação de valores em JSX, a comunicação entre componentes e a geração de elementos de interface a partir de dados estruturados.

| Atividade | Conceito principal | Resultado apresentado |
| --- | --- | --- |
| [`01_variaveis`](./01_variaveis) | Variáveis em componentes e interpolação em JSX | Dados de um produto, como nome, descrição, marca e preço. |
| [`02_components`](./02_components) | Criação e composição de componentes | Dados de um usuário organizados no componente `DadosUsuario`. |
| [`03_props`](./03_props) | Passagem de propriedades entre componentes | Dados de uma pessoa enviados de `App` para `Pessoa`. |
| [`04_jsx`](./04_jsx) | JSX, arrays e renderização com `map()` | Lista de carros com modelo, marca e preço formatado. |

## Descrição de cada projeto

### 01_variaveis — Exibição de dados de um produto

A primeira atividade apresenta um produto por meio do componente `App`. O código declara as variáveis `nome`, `descricao`, `marca` e `preco` e utiliza essas informações dentro do JSX para construir a interface [1].

O projeto introduz a relação entre dados JavaScript e elementos visuais. Seu README específico contém a explicação da implementação, a estrutura dos dados, os conceitos praticados e os comandos de execução.

### 02_components — Componente de dados do usuário

A segunda atividade separa a apresentação dos dados em um componente chamado `DadosUsuario`. Esse componente declara e exibe nome, sobrenome, e-mail, sexo e idade, enquanto o `App` é responsável por renderizá-lo [2].

O foco está na organização da aplicação em componentes menores e com responsabilidades definidas. Essa estrutura facilita a leitura do código e prepara o projeto para a reutilização de partes da interface.

### 03_props — Passagem de propriedades

A terceira atividade mostra como o componente `App` pode enviar informações para `Pessoa` por meio de props. São transmitidos os valores de nome, idade, cidade e endereço, que são acessados no componente filho por meio do objeto `props` [3].

O exercício evidencia o fluxo unidirecional de dados do React: o componente que utiliza `Pessoa` fornece os valores, e `Pessoa` se concentra em apresentá-los. Assim, a estrutura visual do componente pode permanecer a mesma mesmo quando os dados mudam.

### 04_jsx — Renderização de uma lista

A quarta atividade utiliza um array com cinco carros e o método `map()` para gerar a interface de cada item. Cada objeto contém nome, modelo, marca e preço, e o valor é formatado com `toLocaleString("pt-BR")` antes de ser exibido [4].

O projeto reforça a integração entre JavaScript e JSX e mostra como transformar dados estruturados em elementos visuais sem repetir manualmente a mesma marcação para cada carro.


---

## 🛠️ Tecnologias

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" alt="React"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" alt="JavaScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" alt="JSX"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="40" alt="Vite"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="40" alt="NPM"/>
</p>

---

## 🚀 Como Executar

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

## 📚 Aprendizado

A atividade permitiu compreender como criar um **componente independente em React** e utilizá-lo para organizar informações dentro da interface.

---

<div align="center">

**Componentes tornam o React organizado e reutilizável.**

</div>
