class Log {
    private writer : any;
    gerarLog(erro: string ) : void 
    {
        const level = "info";
        const path = require("path");
        var bunyan = require('bunyan');
        
        var log = bunyan.createLogger({name: "Omini Log", 
            streams:[
                {level, stream: process.stdout},
                {level, path: path.resolve(__dirname, "..","..","logs.json")}
            ]
        });

        log.info(erro);
    }
  }

  export default new Log()