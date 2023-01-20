// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud_node$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link href=/styles/global.css rel=stylesheet><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><link rel=\"shortcut icon\" href=/img/favicon.ico type=image/x-icon><title>Cadastro</title></head><body><h1>Cadastro</h1><br><div class=container><form action=/form method=post><label><h5>Dados do avaliador</h5></label><br><i class=\"material-icons prefix\">account_circle</i><input typer=text name=nome placeholder=\"nome do avaliador\"" +
    marko_attr("value", data.NOME) +
    "><input typer=text name=lotacao placeholder=lotação" +
    marko_attr("value", data.LOTACAO) +
    "><i class=\"material-icons prefix\">mail</i><input typer=email name=email placeholder=e-mail" +
    marko_attr("value", data.EMAIL) +
    "><i class=\"material-icons prefix\">phone</i><input typer=tel name=telefone pattern=[0-9]{2}-[0-9]{5}-[0-9]{4} placeholder=81-90000-0000" +
    marko_attr("value", data.TELEFONE) +
    "><br><button href=/  style=\"margin-right: 10pt;\" typer=reset class=\"waves-effect waves-light btn  green darken-1\">Cancelar</button><button typer=submit class=\"waves-effect waves-light btn  green darken-1\">Salvar</button></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "29");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud_node$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
