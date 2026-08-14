function Carro() {
  const carros = [
    {
      nome: "Versa",
      modelo: "Advance",
      marca: "Nissan",
      preco: 125000
    },
    {
      nome: "Tracker",
      modelo: "Premier",
      marca: "Chevrolet",
      preco: 155000
    },
    {
      nome: "Civic",
      modelo: "Type R",
      marca: "Honda",
      preco: 430000
    },
    {
      nome: "Kicks",
      modelo: "Exclusive",
      marca: "Nissan",
      preco: 170000
    },
    {
      nome: "Taos",
      modelo: "Highline",
      marca: "Volkswagen",
      preco: 185000
    }
  ];

  return (
    <div>
      <h1>Lista de Carros</h1>

      {carros.map((carro, index) => (
        <div key={index}>
          <h2>{carro.nome}</h2>
          <p><strong>Modelo:</strong> {carro.modelo}</p>
          <p><strong>Marca:</strong> {carro.marca}</p>
          <p>
            <strong>Preço:</strong> R$ {carro.preco.toLocaleString("pt-BR")}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Carro;