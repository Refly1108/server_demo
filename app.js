var Koa=require('koa');
var cors = require('koa2-cors');
var router = require('koa-router')();  /*引入是实例化路由** 推荐*/
const login = require('./src/login');
const verifyToken = require('./src/verifyToken');
const getToken = require('./src/getToken')
const getinfo = require('./src/getinfo');
var koaBody = require('koa-body');
var list = [];

//实例化
var app=new Koa();


// router.post('/login', async (ctx) => {
//   console.log(ctx.request.body);
//     login(ctx);
  
// });
// router.post('/useinfo', async (ctx) => {
//     console.log(ctx.request.body);
//     verifyToken(ctx);
    
//   });

  router.get('/login', async (ctx) => {
    console.log('login');
    verifyToken(ctx);
    
  });
  router.get('/info/:code', async (ctx) => {
    console.log(ctx.params);
    getinfo(ctx);
    
  });
  router.get('/saveprdata/:data', async (ctx) => {
    console.log(ctx.params);
    list.push(ctx.params.data);
    ctx.body = {
      status: 0,
      message: '加入队列成功！',
      
    }
    
  });
  router.get('/getlist', async (ctx) => {
    console.log('getlist');
    ctx.body = {
      status: 0,
      message: '获取队列成功！',
      data:{
        list
      }
    }
    
  });

  router.get('/gettoken/:code', async (ctx) => {
    console.log('gettoken');
    let info = await getToken(ctx);
    ctx.body =info;
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