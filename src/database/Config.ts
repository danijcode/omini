import pg from 'pg';
class Config {
    public connection: any;
    constructor() 
    {
        this.connection = this.database();
    }

    private database() : pg.Client
    {
      const client = new pg.Client({
        host: 'localhost',
        user: 'postgres',
        password: '',
        database: 'omini',
        port: 5432
      });

      client.connect(err => {
        if (err) {
          console.error('Erro de conexão -> ', err.stack)
        } else {
          console.log('Conectado a database.')
        }
    });

    return client;
  }

}

export default new Config().connection