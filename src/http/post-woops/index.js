// learn more about http functions here: https://arc.codes/guides/http
exports.handler = async function http() {
  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body: '<b>POST WOOPS<b>'
  }
}
