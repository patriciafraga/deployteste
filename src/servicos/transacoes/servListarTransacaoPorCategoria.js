const repositorioTransacoes = require("../../repositorios/transacoes");

const servListarTransacoesPorCategoria = {
  async execute(id, filtro) {
    try {
      
      const trasacoesPorCategoria =
        await repositorioTransacoes.findTransPorCategoria(
          id,
          filtro
        );
    
      if (!trasacoesPorCategoria) return Error("Transações não encontradas!");

      return trasacoesPorCategoria;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  },
};
module.exports = servListarTransacoesPorCategoria;
