

var http = require('http');
var querystring = require('querystring');
var URL = require('url');
let config = require('./config/config')
const APPID = "wx9b2307fa4514e09b";
const SECRET = "8ca6fd3d66a9127d6af9c35e2f5e362b";
const GRANT_TYPE = "authorization_code";
async function getinfo(ctx) {

    let code = ctx.params.code;
    let url = config.wxurl.access_token;
  url = url + "appid=" + APPID;
  url = url + "&secret=" + SECRET;
  url = url + "&code=" + code;
  url = url + "&grant_type=" + GRANT_TYPE;
  var options = new URL(url);
    // var options = {
    //     hostname: '127.0.0.1',
    //     port: 3000,
    //     path: '/pay/pay_callback?' + content,
    //     method: 'GET'
    //   };
    var req = http.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        });
      });
      req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
      });
      req.end()

    ctx.body = {
      status: 0,
      message: '登录成功',
      data:{
        token
      }
    }
    //await next();
 // }
}




 
module.exports = getinfo
