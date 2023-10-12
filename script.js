const dados = {
  nome: "Ada Lovelace",
  email: "ada@email.com",
  telefones: [
    {
      numero: "(11) 99123-4567",
      tipo: "casa",
    },
  ],
  endereco: {
    logradouro: "Rua das programadoras",
    cidade: "Vale do Silício",
    estado: "Codefornia",
    cep: "10100-100",
    pais: "Programaland",
  },
};

document.getElementById("nome").value = dados.nome;
document.getElementById("email").value = dados.email;
document.getElementById("telefone").value = dados.telefones[0].numero;
document.getElementById("tipoTelefone").value = dados.telefones[0].tipo;
document.getElementById("logradouro").value = dados.endereco.logradouro;
document.getElementById("cidade").value = dados.endereco.cidade;
document.getElementById("estado").value = dados.endereco.estado;
document.getElementById("cep").value = dados.endereco.cep;
document.getElementById("pais").value = dados.endereco.pais;

function atualizarValores() {
  dados.nome = document.getElementById("nome").value;
  dados.email = document.getElementById("email").value;
  dados.telefones[0].numero = document.getElementById("telefone").value;
  dados.telefones[0].tipo = document.getElementById("tipoTelefone").value;
  dados.endereco.logradouro = document.getElementById("logradouro").value;
  dados.endereco.cidade = document.getElementById("cidade").value;
  dados.endereco.estado = document.getElementById("estado").value;
  dados.endereco.cep = document.getElementById("cep").value;
  dados.endereco.pais = document.getElementById("pais").value;

  console.log(dados);
}
