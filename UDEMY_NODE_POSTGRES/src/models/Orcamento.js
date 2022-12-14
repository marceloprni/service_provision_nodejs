const {Model, DataTypes} = require('sequelize');

class Orcamento extends Model {
    static init(connection) {

        super.init({
            descricao: DataTypes.STRING,
            idCliente: DataTypes.STRING,
            observacao: DataTypes.TEXT,
            desconto: DataTypes.DOUBLE,
            acrescimo: DataTypes.DOUBLE,
            valorTotal: DataTypes.DOUBLE,
        }, {
            sequelize: connection,
            schema: 'public',
            tableName: 'orcamentos',
            createdAt: 'criadoEm',
            updatedAt: 'atualizadoEm',
            timestamps: true,
            underscored: false
        })
    }
}

module.exports = Orcamento;