import axios from 'axios';

/*export default axios.create({    //dynamically generated URL by ngrok and can change every time you start ngrok or restart your server.
  
    baseURL :'https://0010-2409-408c-8d12-f082-64f3-61fd-d61c-e6f6.ngrok-free.app',
   // headers:{'Access-Control-Allow-Origin':"true"},
    
});*/
/*const api = axios.create({
    baseURL: '',
    withCredentials: true,
  });
 */

const api= axios.create({
  baseURL:'https://d95e-2409-408c-8d12-f082-64f3-61fd-d61c-e6f6.ngrok-free.app',
});
  export default api;
  