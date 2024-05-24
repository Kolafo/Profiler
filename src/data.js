import axios from 'axios';

export default async function GetData(login, password){
  try {
    const response = await axios.get(`./api/users`, {
      params: {
        login: login,
        password: password
      }
    })
    
    if (response.status !== 200) {
      return false;
    }
    
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error('An error occurred:', error);
    return false;
  }
}

// const SendData = async (name, e_mail, phone, isBoss, login, password, company) => {

// }