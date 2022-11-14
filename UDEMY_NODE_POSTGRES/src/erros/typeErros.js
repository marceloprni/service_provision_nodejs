const ModeloInvalidoErro = class ModeloInvalidoErro {

    /**
     * Class utilizada para execeções de modelos e dtos.
     * @param {Number} status 
     * @param {String} mensagem 
     */

    constructor(status, mensagem) {

        this.status = status || 400;
        this.message = mensagem || `O modelo informado é inválido`;
        this.name = 'ModeloInvalido';
        this.stack = (new Error()).stack;
    }
}

const NaoAutorizadoErro = class NaoAutorizadoErro {

    /**
     * Class utilizada para execeções de acesso não autorizados.
     * @param {Number} status 
     * @param {String} mensagem 
     */

    constructor(status, mensagem) {

        this.status = status || 403;
        this.message = mensagem || `Não autorizado`;
        this.name = 'NaoAutorizado';
        this.stack = (new Error()).stack;
    }
}

const NaoEncontradoErro = class NaoEncontradoErro {

    /**
     * Class utilizada para execeções de acesso não autorizados.
     * @param {Number} status 
     * @param {String} mensagem 
     */

    constructor(status, mensagem) {

        this.status = status || 404;
        this.message = mensagem || `Não encontrado`;
        this.name = 'NaoEncontrado';
        this.stack = (new Error()).stack;
    }
}

const AplicacaoErro = class AplicacaoErro {

    /**
     * Class utilizada para execeções de acesso não autorizados.
     * @param {Number} status 
     * @param {String} mensagem 
     */

    constructor(status, mensagem) {

        this.status = status || 500;
        this.message = `Erro interno na aplicação ${mensagem && '- ' + mensagem}`;
        this.name = 'Aplicacao';
        this.stack = (new Error()).stack;
    }
}

module.exports = {
    ModeloInvalidoErro,
    NaoAutorizadoErro,
    NaoEncontradoErro,
    AplicacaoErro
}