var ss = require('../core/ss');

module.exports = function(config){
  return (new ss(__filename.slice(__dirname.length + 1, -3)))
          .paginate(".ileri a@href", 1)
          .find(".index-orta ul li")
          .set({
             title: '.dty a',
             date: ".dty span.trh @title",
             type: ".dty span:starts-with('Türkçe')",
             image: 'img.afis @src',
             link: "a.izle-btn @href"
           })
}
