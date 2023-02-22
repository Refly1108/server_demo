
//const police = require("../../../model/police");
const jwt = require('jsonwebtoken')
 
//let myPolice = new police(); 
let secret =  '123456';
 
async function login(ctx) {
//   let postData = ctx.request.body
//   let selectResult = await myPolice.checkLogin(postData)
//   if (selectResult.err) {
//     ctx.body = {
//       status: 1,
//       message: err
//     }
//   } else if (!selectResult.result) {
//     ctx.body = {
//       status: 1,
//       message: '用户不存在'
//     }
//   } else if (selectResult.result[0].password !== postData.password) {
//     ctx.body = {
//       status: 1,
//       message: '密码错误'
//     }
//   } else {
    // 帐号密码正确  创建token   
    //payload中写入一些值  time:创建日期  timeout：多长时间后过期
    let name = ctx.request.body.name;
    let password = ctx.request.body.password;
    let idcard = name+password;
    console.log(idcard);
    let payload = {data:idcard,time:new Date().getTime(),timeout:30}
    let token = jwt.sign(payload, secret);
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

// async function verifyToken(ctx, next) {
//     const dataString = ctx.header.authorization;
//     const idcard = ctx.request.body.name+ctx.request.password;
//     try {
//         const dataArr = dataString.split(' ');
//         const token = dataArr[1];
    
//         let playload = await jwt.verify(token, priCert)
//         const { data } = playload;
//         if (data === idcard) {
//             ctx.status = 200 //这里非常重要，只有设置了status，koa-router才识别请求正确继续进入路由
//             await next()
//         }

//     } catch (error) {
//         ctx.body = {
//             "error": {
//                 "type": "LOGIN_FAILED",
//                 "message": "未知",
//             }

//         }
//     }

// }
 
module.exports = login
