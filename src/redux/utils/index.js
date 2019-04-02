export function authHeader() {
  let token = JSON.parse(localStorage.getItem('token'));

  if (user && user.access_token) {
    return { 'Authorization': 'Bearer ' + token };
  } else {
    return {};
  }
}