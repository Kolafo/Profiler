import axios from 'axios';

const GetData = async (login, password) => {
  try {
    const response = await axios.get(`./api/users`, {
      params: {
        login: login,
        password: password
      }
    });
    
    if (response.status !== 200) {
      return false;
    }
    
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error('An error occurred:', error);
    return false;
  }
};

export default GetData;