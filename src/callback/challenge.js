const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlApi, callback) => {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = (e) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    } 
  }
  xhttp.send();
}

fetchData(`${API}/products`, (error1, data) => {
  if(error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
    if(error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
      if(error3) return console.error(error3);
      console.log(data[0]);
      console.log(data2.title);
      console.log(data3.name);
    })
  })
})