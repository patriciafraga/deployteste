const servListarTransacoesPorCategoria = require("../../servicos/transacoes/servListarTransacaoPorCategoria");

const controladorListarPorCategoriaouUsuario = {
  async handle(req, res) {
    try {
      const { id } = req.perfilUsuario;

      const { filtro } = req.query;

      const transacaoEncontrada =
        await servListarTransacoesPorCategoria.execute(id, filtro);

      return res.status(200).json(transacaoEncontrada);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
  },
};
module.exports = controladorListarPorCategoriaouUsuario;
