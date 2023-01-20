const mysql = require('mysql2');


class AvaliadorDao {

    constructor() {



        this._connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'adp_ifpe'

        });




    }



    ////////////////////////funçoes de dados do avaliador////////////////////////////////////////
    list() {


        return new Promise((resolve, reject) => {


            this._connection.query(
                'SELECT * FROM dadosavaliador',
                function (err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            );
        });

    }


    save(avaliador) {

        return new Promise((resolve, reject) => {


            this._connection.query(
                'INSERT INTO dadosavaliador(NOME,LOTACAO,EMAIL,TELEFONE) VALUES (?,?,?,?)',
                [avaliador.nome, avaliador.lotacao, avaliador.email, avaliador.telefone],
                function (err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            );
        });


    }




    saveDgeral(dGeral) {

        return new Promise((resolve, reject) => {

            this._connection.query(
                'INSERT INTO dadosgerais(INSTITUICAO,CAMPUSDEAD,ENDERECO,DIRETORGERALDEAD,DIRETORDEENSINO,ATOREGULATORIO,EIXOTECNOLOGICO,MODALIDADECURSO,CURSO,COORDENADOR,ASSESSORIAPEDAGOGICA,BIBLIOTECARIO,PORTARIACOMISSAOAVALIACAO) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [dGeral.instituicao, dGeral.campus, dGeral.endereco, dGeral.diretor, dGeral.diretorensino, dGeral.ato, dGeral.eixo, dGeral.modalidade, dGeral.curso, dGeral.coordenador, dGeral.assesoria, dGeral.bibliotecario, dGeral.portaria],


                function (err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            );
        });


    }



    findById(id) {

        return new Promise((resolve, reject) => {
            this._connection.query(
                'select * from dadosavaliador where id =?', [id],
                function (err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }

            );
        });

        /*for (let avaliador of this._avaliador) {
            if (avaliador.id == id)
                return avaliador;
        }

        return null;*/
    }

    /*update(avaliador) {

    return new Promise((resolve, reject) => {


        this._connection.query(
            'INSERT INTO dadosavaliador(NOME,LOTACAO,EMAIL,TELEFONE) VALUES (?,?,?)'[avaliador.NOME, avaliador.LOTACAO, avaliador.EMAIL, avaliador.TELEFONE],
            function (err, results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            }
        );
    });


}*/

}


module.exports = AvaliadorDao;


