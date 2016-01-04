module.exports = function(site){
          return require("osmosis")
                .config("user_agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A")
                .get(site)
                .log(console.log)
                .error(console.log);
}
