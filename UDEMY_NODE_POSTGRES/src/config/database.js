/* ARQUIVO DE PUBLICAÇÃO */
let ambiente = undefined;

switch(process.env.PUBLICAR) {
    case 'HML':
        ambiente = configurar_hml();
        break;
    case 'PROD':
        ambiente = configurar_produ();
        break;
    default:
        ambiente = configurar_local();
       
}

function configurar_hml(){
    return {
        dialect:process.env.HML_DIALECT,
        host:process.env.HML_HOST,
        port:process.env.HML_PORT,
        username:process.env.HML_USER_NAME,
        password:process.env.HML_PASSWORD,
        database:process.env.HML_DATABASE,
        define:{
            timestamps: true,
            underscored: true,
        }
    }
}

function configurar_produ(){
    return {
        dialect:process.env.PROD_DIALECT,
        host:process.env.PROD_HOST,
        port:process.env.PROD_PORT,
        username:process.env.PROD_USER_NAME,
        password:process.env.PROD_PASSWORD,
        database:process.env.PROD_DATABASE,
        define:{
            timestamps: true,
            underscored: true,
        }
    }
}

function configurar_local(){
    return {
        dialect:process.env.LOCAL_DIALECT,
        host:process.env.LOCAL_HOST,
        port:process.env.LOCAL_PORT,
        username:process.env.LOCAL_USER_NAME,
        password:process.env.LOCAL_PASSWORD,
        database:process.env.LOCAL_DATABASE,
        define:{
            timestamps: true,
            underscored: true,
        }
    }   

}

module.exports = ambiente
