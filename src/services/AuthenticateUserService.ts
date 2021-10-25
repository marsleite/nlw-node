import axios from "axios";
/*
  * Receber o code(string)
  * Recuperar o access_token no github
  * Verificar se o usuário existe no banco de dados
  * ---SIM = gerar um token
  * ---NÃO = cria no DB e gerar um token
  * retornar o token com as informções do usuário
*/

interface IAccessTokenResponse {
  access_token: string;
}

class AuthenticateUserService {
  async execute(code: string){
   const url = `https://github.com/login/oauth/access_token`;

    const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, { 
      params: {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
      },
      headers: {  "Accept": "application/json" },
    });

    const response = await axios.get(`https://api.github.com/user`, {
      headers: {  
        "Authorization": `Bearer ${accessTokenResponse.access_token}`,
        "Accept": "application/json",
      },
    });

    return response.data;
  }
}

export { AuthenticateUserService };