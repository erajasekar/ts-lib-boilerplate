//var asciidoctor = require('asciidoctor.js')

export namespace SampleDoc {
    export function convert() {
       var asciidoctor = require('asciidoctor.js')();
        var content = "http://asciidoctor.org[*Asciidoctor*] " +
            "running on https://opalrb.com[_Opal_] " +
            "brings AsciiDoc to Node.js!";
        var html = asciidoctor.convert(content);
        console.log(html);
    }
}
