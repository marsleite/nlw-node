/*
  * Receber o code(string)
  * Recuperar o access_token no github
  * Verificar se o usuário existe no banco de dados
  * ---SIM = gerar um token
  * ---NÃO = cria no DB e gerar um token
  * retornar o token com as informções do usuário
*/

class AuthenticateUserService {
  async execute(code: string){
   
  }
}

export { AuthenticateUserService };