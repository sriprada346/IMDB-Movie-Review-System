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
  /*baseURL:'https://utor.serveo.net/api/vl/movies',*/
  /*baseURL:'https://1290-2409-408c-8e92-db5c-42b-b9be-f735-2d34.ngrok-free.app',*/
 baseURL:'http://localhost:8080',
  withCredentials: false,
  headers: {
    
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Add the allowed HTTP methods
    'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Add any necessary headers
  },
  
});
  export default api;
  