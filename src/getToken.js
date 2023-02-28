let appid = "wxa4065fe099206a50";
let SECRET = "468b71d17fea3019082a739ef388c13a";
// const axios = require('axios');
var OAuth = require("wechat-oauth");
var client = new OAuth(appid, SECRET);

const getToken = async (ctx) => {
  console.log(ctx.params.code);

  let useinfo = await getuserinfo(ctx);
  // client.getAccessToken(ctx.params.code, function (err, result) {
  //   console.log(result);
  //   var accessToken = result.data.access_token;
  //   var openid = result.data.openid;

  //   client.getUser(openid, function (err, result) {
  //     console.log(result);
  //     console.log(ctx);
  //     var userInfo = result;
   return useinfo;
  //   });
  // });
};

const getuserinfo =  (ctx) => {
  return new Promise((resolve, reject) => {
    client.getAccessToken(ctx.params.code, function (err, result) {
      console.log(result);
      if (err) {
        console.log(err);
      }
      if(result.data){
        var accessToken = result.data.access_token;
        var openid = result.data.openid;
  
        client.getUser(openid, function (err, result) {
          console.log(err);
          console.log(result);
          var userInfo = result;
          resolve(userInfo);
        });
      }else{
        resolve(false);
      }
      
    });
  });
};
// async function getToken(ctx) {
//   console.log(ctx.request.url);
//    let code = ctx.params.code;
//    console.log(code);
//    let url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid="+appid+"&secret="+SECRET+"&code="+code+"&grant_type=authorization_code";

// axios.get(url)
//   .then(res => {
//     console.log(res.data);

//   })
//   .catch(err => {
//     console.log(err);
//   });

//     ctx.body = 11111

// }

module.exports = getToken;
