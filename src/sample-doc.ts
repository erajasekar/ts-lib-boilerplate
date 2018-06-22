//var asciidoctor = require('asciidoctor.js')

import hljs from 'highlight.js'
export namespace SampleDoc {
    export function convert() {
       var asciidoctor = require('asciidoctor.js')();
     //   var content = ":source-highlighter: highlightjs\n" +
     var content = "" + 
        "[source,ruby]\n" +
        ".app.rb\n" +
        "----\n" +
        "require 'sinatra'\n" +
        "get '/hi' do # <1> \n" +
        " \"Hello World!\"\n" +
        "end\n" +
        "----\n" + 
        "<1> test comment";
        var html = asciidoctor.convert(content, {attributes: {'source-highlighter': 'highlightjs', showtitle: true, icons: 'font'}});
     //   var html = asciidoctor.convert(content);
       
        console.log(html);
    }
}
