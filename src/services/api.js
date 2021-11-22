const url = "http://localhost:3000"

// path is the path including /
// method  GET, POST, PUT
export const call = async(method, path, data) => {
  var bearer = 'Bearer ' + sessionStorage.getItem('jwtToken');
  const init = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': bearer,
    },
    body: JSON.stringify(data),
  }
  try{
    const response = await fetch(url+path, init);
    // in case of no content json response(204 code)
    if(response.status === 204)
      return response.text(); 
    return response.json();
  } catch (err){
    return err;
  }
}
// const data =  {
//   email: "admin@gmail.com",
//   password: "admin1234",
// };
// call("POST", "/users/login", data);