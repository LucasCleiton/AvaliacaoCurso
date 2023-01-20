const mysql = require('mysql2');


class testedao {

    constructor() {



        this._connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'adp_ifpe'

        });




    }



    //funçoes de dados do avaliador

    save() {

        return new Promise((resolve, reject) => {


            this._connection.query(
                'INSERT INTO dadosavaliador(NOME,LOTACAO,EMAIL,TELEFONE) VALUES (teste,teste,teste,12345',
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

}


module.exports = testedao;


