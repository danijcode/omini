import { Usuario } from "../entidades/Usuario";
import log from "../log/Log";
import  client  from '../database/Config';

class UserRepository
{
    public usuarios: Array<Usuario> = [];
    public usuario: Usuario;
    private inserido: boolean = false;
    private atualizado: boolean = false;
    private excluido: boolean = false;
    public async listUsers(): Promise<Array<Usuario>>
    {   
        try {
            await client.query('SELECT * FROM usuario')
            .then(result => { 
                this.usuarios = result.rows;
            })
        } catch (error) {
            log.gerarLog(error.message);
            throw error
        }

        return this.usuarios;
    }

    public async getUserByID (id : number) : Promise<Usuario>
    {
        try {
            let queryText = 'SELECT * FROM usuario WHERE id = $1';
            await client.query(queryText, [id])
            .then(result => {
                this.usuario = result.rows
            })
        } catch (error) {
            log.gerarLog(error.message);
            throw error
        }

        return this.usuario;
    }

    public async createUser (usuario: any) : Promise<boolean>
    {
        try {
            client.query('BEGIN')
            let queryText = 'INSERT INTO usuario(nome, cpf) VALUES ($1, $2)';
             await client.query(queryText, [usuario.nome, usuario.cpf])
            .then( res => {
                if(res){
                    this.inserido = true;
                }
            })
            client.query('COMMIT')
        } catch (error) {
            client.query('ROLLBACK')
            log.gerarLog(error.message);
            this.inserido = false
        }
        return this.inserido;
    }

    public async updateUser (id: number ,usuario: any) : Promise<boolean>
    {
        try {
            client.query('BEGIN')
            let queryText = 'UPDATE usuario SET nome = $1, cpf = $2 WHERE id = $3';
            await client.query(queryText, [usuario.nome, usuario.cpf, id])
            .then( res => {
                if(res){
                    this.atualizado = true;
                }
            })
            client.query('COMMIT')
        } catch (error) {
            client.query('ROLLBACK')
            log.gerarLog(error.message);
            this.atualizado = false;
        }
        return this.atualizado;
    }
    
    public async deleteUserById (id : number) : Promise<boolean>
    {
        try {
            let queryText = 'DELETE FROM usuario WHERE id = $1';
            await client.query(queryText, [id])
            .then(result => {
                if(result){
                    this.excluido = true;
                }
            })
        } catch (error) {
            log.gerarLog(error.message);
            this.excluido = false;
        }

        return this.excluido;
    }
}

export default new UserRepository()