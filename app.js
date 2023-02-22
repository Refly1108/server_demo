var Koa=require('koa');
var cors = require('koa2-cors');
var router = require('koa-router')();  /*引入是实例化路由** 推荐*/
const login = require('./src/login');
const verifyToken = require('./src/verifyToken');
var koaBody = require('koa-body');
var sn = 0;

//实例化
var app=new Koa();


router.post('/login', async (ctx) => {
  console.log(ctx.request.body);
    login(ctx);
  
});
router.post('/useinfo', async (ctx) => {
    console.log(ctx.request.body);
    verifyToken(ctx);
    
  });



router.get('/sn',async (ctx)=>{
  sn = sn +1;
  ctx.body = {
    sn: sn
  }

})



app.use(cors());
app.use(koaBody());
app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

app.listen(3001);