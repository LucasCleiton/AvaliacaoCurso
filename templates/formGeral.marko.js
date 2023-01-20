// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud_node$1.0.0/templates/formGeral.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link href=/styles/global.css rel=stylesheet><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><link rel=\"shortcut icon\" href=/img/favicon.ico type=image/x-icon><title>Cadastro</title></head><body><h1>Cadastro</h1><br><div class=container><form action=/formGeral method=post><label><h5>Dados do Gerais</h5></label><br><i class=\"material-icons prefix\">location_city</i><input typer=text name=instituicao placeholder=Instituição" +
    marko_attr("value", data.INSTITUICAO) +
    "><input typer=text name=campus placeholder=\"Campus / DEAD\"" +
    marko_attr("value", data.CAMPUSDEAD) +
    "><input typer=text name=endereco placeholder=Endereço" +
    marko_attr("value", data.ENDERECO) +
    "><i class=\"material-icons prefix\">person</i><input typer=text name=diretor placeholder=\"Diretor(a) geral / DEAD\"" +
    marko_attr("value", data.DIRETORGERALDEAD) +
    "><input typer=text name=diretorensino placeholder=\"Diretor(a) de ensino\"" +
    marko_attr("value", data.DIRETORDEENSINO) +
    "><i class=\"material-icons prefix\">assignment</i><input typer=text name=ato placeholder=\"Ato regulatório\"" +
    marko_attr("value", data.ATOREGULATORIO) +
    "><input typer=text name=eixo placeholder=\"Eixo tecnológico do curso\"" +
    marko_attr("value", data.EIXOTECNOLOGICO) +
    "><input typer=text name=modalidade placeholder=\"Modalidade do Curso\"" +
    marko_attr("value", data.MODALIDADECURSO) +
    "><input typer=text name=curso placeholder=Curso" +
    marko_attr("value", data.CURSO) +
    "><i class=\"material-icons prefix\">person</i><input typer=text name=coordenador placeholder=Coordenador(a)" +
    marko_attr("value", data.COORDENADOR) +
    "><input typer=text name=bibliotecario placeholder=Bibliotecário(a)" +
    marko_attr("value", data.BIBLIOTECARIO) +
    "><i class=\"material-icons prefix\">assignment</i><input typer=text name=assesoria placeholder=\"Assesoria pedagógica\"" +
    marko_attr("value", data.ASSESSORIAPEDAGOGICA) +
    "><input typer=text name=portaria placeholder=\"Portaria da comissão de avaliação\"" +
    marko_attr("value", data.PORTARIACOMISSAOAVALIACAO) +
    "><button href=/  style=\"margin-right: 10pt;\" typer=reset class=\"waves-effect waves-light btn  green darken-1\">Cancelar</button><button typer=submit class=\"waves-effect waves-light btn  green darken-1\">Salvar</button></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud_node$1.0.0/templates/formGeral.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
