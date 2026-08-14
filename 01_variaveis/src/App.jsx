import './App.css'

function App() {
  const nome = "Samsung Buds"
  const descricao = "Fones de ouvido sem fio que oferecem som imersivo, microfones para chamadas nítidas, cancelamento ativo de ruído e modo som ambiente."
  const marca = "SAMSUNG"
  const preco = 279.99

  return (
    <div className='produto'>
      <h2>FONES DE OUVIDO</h2>
      <p><strong>Nome: </strong>{nome}</p>
      <p><strong>Descrição: </strong>{descricao}</p>
      <p><strong>Marca: </strong>{marca}</p>
      <p><strong>Preço: </strong> {preco}</p>
      <br  />
    </div>
  )
}

export default App
