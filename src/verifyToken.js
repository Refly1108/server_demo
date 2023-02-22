const jwt = require('jsonwebtoken')
let secret =  '123456';
async function verifyToken(ctx) {
    const dataString = ctx.header.authorization;
    const idcard = ctx.request.body.name+ctx.request.body.password;
    console.log('----------'+idcard);
    console.log('---------- dataString'+dataString);
    try {
        // const dataArr = dataString.split(' ');
        // const token = dataArr[1];
    
        console.log(111111111111);
        let playload = await jwt.verify(dataString, secret);
        console.log("111111111111"+playload);
        const { data } = playload;
        console.log(data);
        if (data === idcard) {
            ctx.status = 200 //这里非常重要，只有设置了status，koa-router才识别请求正确继续进入路由
            ctx.body = {
                status: 0
                
              }
        }else{
            ctx.body = {
                status: 1
                
              }

        }

    } catch (error) {
        console.log(error);
        ctx.body = {
            "error": {
                "type": "LOGIN_FAILED",
                "message": "未知",
            }

        }
    }

}
module.exports = verifyToken