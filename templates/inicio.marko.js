// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud_node$1.0.0/templates/inicio.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_escapeScript = require("marko/src/runtime/html/helpers/escape-script-placeholder"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title> ADP | IFPE</title><link rel=\"shortcut icon\" href=/favicon.ico type=image/x-icon><link href=/styles/global.css rel=stylesheet><script defer src=dao/script.js></script><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><link rel=\"shortcut icon\" href=/favicon.ico></head><body class=\" grey lighten-2\"><div class=\"container green lighten-1\" style=\"border-radius: 10px 20px;\"><h1>Bem vindo!</h1><h5>selecione o botão para cadastrar o avaliador</h5><a href=/form class=\"waves-effect waves-light btn-large  green darken-1\">Novo</a><table class=highlight><thead class=\" grey lighten-2\"><th>Id</th><th>nome</th><th>lotação</th><th>email</th><th>telefone</th><th>opção</th></thead>");

  var $for$0 = 0;

  marko_forOf(data.results, function(avaliador, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr class=\"grey lighten-3\"><td>" +
      marko_escapeXml(avaliador.ID) +
      "</td><td>" +
      marko_escapeXml(avaliador.NOME) +
      "</td><td>" +
      marko_escapeXml(avaliador.LOTACAO) +
      "</td><td>" +
      marko_escapeXml(avaliador.EMAIL) +
      "</td><td>" +
      marko_escapeXml(avaliador.TELEFONE) +
      "</td><td><a id=questionario style=\"margin-right: 10pt;\" href=/questionario1 class=\"waves-effect waves-light btn  green darken-1\"><i class=\"material-icons right\">content_paste</i>INICIAR</a><a id=resultado style=\"margin-right: 10pt;\"" +
      marko_attr("href", "/resultado/" + (avaliador.ID == null ? "" : avaliador.ID)) +
      " class=\"waves-effect waves-light btn  green darken-1\"><i class=\"material-icons right\">assignment_turned_in</i>RESULTADO</a></td></tr>");
  });

  out.w("</table></div>");

  marko_forOf(data.error_messages, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("M.toast({ html: '" + message) + "' })") +
      "</script>");
  });

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "36");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud_node$1.0.0/templates/inicio.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
