
const createHash = require('crypto');
let TOKEN =  'wxa4065fe099206a50';
async function verifyToken(ctx) {
    console.log(ctx.request.url);
   let url = ctx.request.url;


   let signature = getparams(url,'signature');
   let timestamp =getparams(url,'timestamp');
   let nonce  =  getparams(url,'nonce');
   let echostr = getparams(url,'echostr');
   let token = TOKEN;
   let array = [token,timestamp,nonce];
   array.sort();
   let string='';
   for (let index = 0; index < array.length; index++) {
    string += index[index];
   }

//    if(sha1(string)==signature){
    console.log(echostr);
    ctx.body = {
        echostr:echostr
      }
//    }

}
const sha1 = (content) => encrypt('sha1', content)
const encrypt = (algorithm, content) => {
    let hash = createHash(algorithm)
    hash.update(content)
    return hash.digest('hex')
  }

const getparams = (url, key) => {
    let str = url;
    let param = "";
    console.log(url);
    console.log(key);
    param = str.substring(str.indexOf(key) + key.length + 1);
    if (param.indexOf("&") > -1) {
      param = param.substring(0, param.indexOf("&"));
    }
    console.log(param);
    return param;
  };
  
module.exports = verifyToken