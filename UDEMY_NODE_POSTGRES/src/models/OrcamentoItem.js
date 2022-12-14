const {Model, DataTypes} = require('sequelize');

class OrcamentoItem extends Model {
    static init(connection) {

        super.init({
            idOrcamento: DataTypes.BIGINT,
            idServico: DataTypes.BIGINT,
            idPrestador: DataTypes.BIGINT,
            desconto: DataTypes.DOUBLE,
            acrescimo: DataTypes.DOUBLE,
            valorTotal: DataTypes.DOUBLE,
        }, {
            sequelize: connection,
            schema: 'public',
            tableName: 'orcamento-item',
            createdAt: 'criadoEm',
            updatedAt: 'atualizadoEm',
            timestamps: true,
            underscored: false
        })
    }
}

module.exports = OrcamentoItem;