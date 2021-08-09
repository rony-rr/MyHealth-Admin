import axios from "axios";

import { Globalvars } from '../Golbalvars';

const API_URL = Globalvars.urlapi;

const useRegister = (
  username, email, password, nameuser,
  cardnumber, phoneuseradd ) => {
  return axios.post(API_URL + "/register-api.php", {
    obj:{
      username: username,
      password: password,
      mailuser: email,
      usernamecompleteadd: nameuser,
      cardnumber,
      typeuser: "usuario",
      birthday: null,
      country: null, 
      phoneuseradd,
      entry: "89784udewuifniunoef25dft5t3.0x32yhfhhuoromcy367cv.ewiuifheucbchirzcxqhbc"
    }
  });
};

const useLogin = (usernameornumberormail, password) => {
  return axios
    .post(API_URL + "/login-api.php", {
      obj: {
        usernameormailornumber : usernameornumberormail,
        password : password,
        entry : "89784udewuifniunoef25dft5t3.0x32yhfhhuoromcy367cv.ewiuifheucbchirzcxqhbc"
      }
    })
    .then((response) => {
      if (response.data.respuesta === 'done' && response.data.token ) {
        let objres = {
          username: response.data.username,
          tokenAccess: response.data.token,
          userID: response.data.currentuserid[0].iduser
        };
        localStorage.setItem("user", JSON.stringify(objres));
      }

      return response.data;
    });
};

const useLogout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  let recoveredUser = localStorage.getItem('user');
  return recoveredUser;
};

export default {
  useRegister,
  useLogin,
  useLogout,
  getCurrentUser
};