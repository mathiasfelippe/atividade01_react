function Pessoa(props) {
  return (
    <div>
      <h1>Dados da Pessoa</h1>

      <p><strong>Nome:</strong> {props.nome}</p>
      <p><strong>Idade:</strong> {props.idade}</p>
      <p><strong>Cidade:</strong> {props.cidade}</p>
      <p><strong>Endereço:</strong> {props.endereco}</p>
    </div>
  );
}

export default Pessoa;