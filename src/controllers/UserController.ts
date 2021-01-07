import { Request, Response } from 'express'
import user from '../repositorios/UserRepository';
import validadores from '../utils/validate';
class UserController {
  public async index (req: Request, res: Response): Promise<Response> 
  {
    const users = await user.listUsers();
    return res.json(users)
  }

  public async getUser (req: Request, res: Response): Promise<Response> 
  {
    const usuario = await user.getUserByID(req.params.id);
    return res.json(usuario)
  }

  public async store (req: Request, res: Response): Promise<Response> 
  {
    if(!validadores.validaCPF(req.body.cpf)){
      res.status(400);
      return res.json({mensagem: "CPF invalido."})
    }
    
    if(!validadores.validaTamanhoNome(req.body.nome)){
      res.status(400);
      return res.json({mensagem: "Nome maior que 20 caracteres nao permitido."})
    }

    const result = await user.createUser(req.body)
    
    if(result){
        res.status(201);
        return res.json({mensagem: "Usuario cadastrado com sucesso."})
    }
    res.status(422);
    return res.json({mensagem: "Erro ao cadastrar usuario."})
  }

  public async update (req: Request, res: Response): Promise<Response> 
  {
    const result = await user.updateUser( req.params.id ,req.body)
    
    if(result){
        res.status(200);
        return res.json({mensagem: "Usuario atualizado com sucesso."})
    }
    res.status(422);
    return res.json({mensagem: "Erro ao atualizar usuario."})
  }

  public async delete (req: Request, res: Response): Promise<Response> 
  {
    const result = await user.deleteUserById(req.params.id);
    
    if(result){
      res.status(200);
      return res.json({mensagem: "Usuario excluido com sucesso."})
    }

    res.status(400);
    return res.json({mensagem: "Erro ao excluir usuario."})
  }
}

export default new UserController()