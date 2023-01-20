const mysql = require('mysql2');


class QuestionarioDao {

    constructor() {



        this._connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'adp_ifpe'

        });




    }


    //SELECT * FROM dadosavaliador INNER JOIN dadosgerais INNER JOIN dimensao_01 INNER JOIN dimensao_02 INNER JOIN dimensao_03;


    findById1(id1) {

        return new Promise((resolve, reject) => {
            this._connection.query(
                'select * from dadosavaliador join dadosgerais on dadosgerais.IDgeral = dadosavaliador.IDdadosgerais  join dimensao_01 on dimensao_01.D1ID = dadosavaliador.IDdimensao01 join dimensao_02 on dimensao_02.D2ID = dadosavaliador.IDdimensao02 join dimensao_03 on dimensao_03.D3ID = dadosavaliador.IDdimensao03 where IDdadosgerais and IDdimensao01 and IDdimensao02  and IDdimensao03 = ?;',
                [id1],
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



    //'update alunos set nome=?, email=?, curso=? where id=?', [aluno.nome, aluno.email, aluno.curso, aluno.id],

    update(avaliador) {

        return new Promise((resolve, reject) => {
            this._connection.query(
                'update dadosavaliador set IDdimensao01 = ?, IDdimensao02 = ? , IDdimensao03 = ? , IDdadosgerais = ?  where ID = ?', [avaliador, avaliador, avaliador, avaliador, avaliador],
                function (err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            )
        })
    }


    /* delete(id) {
         return new Promise((resolve, reject) => {
             this._connection.query(
                 'UPDATE adp_ifpe.dadosavaliador SET IDdimensao01 =2, IDdimensao02=2, IDdimensao03 =2, IDdadosgerais=3 WHERE ID=3;', [id],
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


    ////////////////////////////LISTAR DADOS DO BANCO///////////////////////////////////////////////

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
    listgeral() {


        return new Promise((resolve, reject) => {


            this._connection.query(
                'SELECT * FROM dadosgerais',
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




    listD1() {


        return new Promise((resolve, reject) => {


            this._connection.query(
                'SELECT * FROM dimensao_01',
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

    listD2() {


        return new Promise((resolve, reject) => {


            this._connection.query(
                'SELECT * FROM dimensao_02',
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

    listD3() {


        return new Promise((resolve, reject) => {


            this._connection.query(
                'SELECT * FROM dimensao_03',
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

    ///////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////SALVAR DADOS/////////////////////////////////////////////////////////
    saveD1(d1) {

        return new Promise((resolve, reject) => {


            this._connection.query(
                'INSERT INTO dimensao_01 (D1Q1,D1C1,D1Q2,D1C2,D1Q3,D1C3,D1Q4,D1C4,D1Q5,D1C5,D1Q6,D1C6,D1Q7,D1C7,D1Q8,D1C8,D1Q9,D1C9,D1Q10,D1C10,D1Q11,D1C11,D1Q12,D1C12,D1Q13,D1C13,D1Q14,D1C14,D1Q15,D1C15,D1Q16,D1C16,D1Q17,D1C17,D1Q18,D1C18,D1Q19,D1C19,D1Q20,D1C20,D1Q21,D1C21,D1Q22,D1C22,D1Q23,D1C23,D1Q24,D1C24 ) VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [d1.q1, d1.c1, d1.q2, d1.c2, d1.q3, d1.c3, d1.q4, d1.c4, d1.q5, d1.c5, d1.q6, d1.c6, d1.q7, d1.c7, d1.q8, d1.c8, d1.q9, d1.c9, d1.q10, d1.c10, d1.q11, d1.c11, d1.q12, d1.c12, d1.q12, d1.c12, d1.q13, d1.c13, d1.q14, d1.c14, d1.q15, d1.c15, d1.q16, d1.c16, d1.q17, d1.c17, d1.q18, d1.c18, d1.q19, d1.c19, d1.q20, d1.c20, d1.q21, d1.c21, d1.q22, d1.c22, d1.q23, d1.c23, d1.q24, d1.c24],
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

    saveD2(d2) {

        return new Promise((resolve, reject) => {


            this._connection.query(
                'INSERT INTO dimensao_02 (D2Q1,D2C1,D2Q2,D2C2,D2Q3,D2C3,D2Q4,D2C4,D2Q5,D2C5,D2Q6,D2C6,D2Q7,D2C7,D2Q8,D2C8,D2Q9,D2C9,D2Q10,D2C10,D2Q11,D2C11,D2Q12,D2C12 ) VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [d2.q1, d2.c1, d2.q2, d2.c2, d2.q3, d2.c3, d2.q4, d2.c4, d2.q5, d2.c5, d2.q6, d2.c6, d2.q7, d2.c7, d2.q8, d2.c8, d2.q9, d2.c9, d2.q10, d2.c10, d2.q11, d2.c11, d2.q12, d2.c12],
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


    saveD3(d3) {

        return new Promise((resolve, reject) => {


            this._connection.query(
                'INSERT INTO dimensao_03 (D3Q1,D3C1,D3Q2,D3C2,D3Q3,D3C3,D3Q4,D3C4,D3Q5,D3C5,D3Q6,D3C6,D3Q7,D3C7,D3Q8,D3C8,D3Q9, D3C9 ) VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [d3.q1, d3.c1, d3.q2, d3.c2, d3.q3, d3.c3, d3.q4, d3.c4, d3.q5, d3.c5, d3.q6, d3.c6, d3.q7, d3.c7, d3.q8, d3.c8, d3.q9, d3.c9],
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




    ///////////////////////////////////////////////////////////////////////////////////////////////







}


module.exports = QuestionarioDao;


