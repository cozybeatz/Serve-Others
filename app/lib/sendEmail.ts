import axios from "axios";


const sendEmail = async (name: string, email: string, phone: string) => {
    return axios({
      method: 'post',
      url: '/api/send-mail',
      data: {
        name: name,
        email: email,
        phone: phone
      },
    });
  };
  
  export default sendEmail;