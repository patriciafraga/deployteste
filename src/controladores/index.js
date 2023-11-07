const controladorListarCategorias = require("./categorias/controlCategorias");

const controladorAlterarTransacao = require("./transacoes/controlAlterarTransacao");

const controlCadastrarTransacao = require("./transacoes/controlCadastrarTransacao");

const controlExcluirTransacao = require("./transacoes/controlExcluirTransacao");

const controladorListarPorCategoriaouUsuario = require("../controladores/transacoes/controlListarTransacaoPorCategoria");

const controladorObterExtratoPorUsuario = require("./transacoes/controlObterExtrato");

const controladorListarPorIdTransacao = require("./transacoes/controlListarIdTransacao");

const validarUsuario = require("../controladores/login");

const controladorAtualizarUsuario = require("../controladores/usuarios/controlAtualizarUsuario");

const controladorCriarUsuario = require("../controladores/usuarios/controlCriarUsuario");

module.exports = {
  controladorListarCategorias,
  controladorAlterarTransacao,
  controlCadastrarTransacao,
  controlExcluirTransacao,
  controladorListarPorCategoriaouUsuario,
  controladorListarPorIdTransacao,
  controladorObterExtratoPorUsuario,
  validarUsuario,
  controladorCriarUsuario,
  controladorAtualizarUsuario,
};
