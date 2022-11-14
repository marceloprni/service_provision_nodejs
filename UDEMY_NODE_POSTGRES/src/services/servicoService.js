const Servico = require("../models/Servico")
const ServicoDTO = require("../dtos/ServicoDTO")
const { NaoAutorizadoErro, NaoEncontradoErro, AplicacaoErro } = require('../erros/typeErros');


async function obterPorId(id) {
    let servico = await Servico.findByPk(id);

    if(!servico) {
        throw new NaoEncontradoErro(404, 'Não foi possivel encontrar um servico com id ' + id);
    }

    return new ServicoDTO(servico);
}

async function obterTodos() {
    let servicos = await Servico.findAll();

    return servicos && servicos.map(c => new ServicoDTO(c)) || [];
}

async function cadastrar(servicoDTO) {
    let servico = await Servico.create(servicoDTO);

    if(!servico) {
        throw new AplicacaoErro(500, 'Não foi possivel cadastrar o servico')
    }

    return new ServicoDTO(servico);
   
}

async function atualizar(servicoDTO) {
    
    servico.id = parseInt(servico.id);
    let servico = await Servico.findByPk(servicoDTO.id);

    if(!servico) {
        throw new NaoEncontradoErro(404, 'Não foi encontrado um servico com o id ' + servico.id )
    }

    let atualizado = await Servico.update(servicoDTO, { where: { id: servico.id }})

    if(!atualizado) {
        throw new AplicacaoErro(500, 'Não foi possivel atualizar o servico.')
    }

    return servicoDTO
}

module.exports = {
    cadastrar,
    atualizar,
    obterPorId,
    obterTodos
}
