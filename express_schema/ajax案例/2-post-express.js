// 1.引入express
// const { response } = require('express');
const express= require('express');

// 2. 实例化
const app =express();
// 3. 创建路由规则
app.get("/server",(request,response) =>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置相应
    response.send('Ajax Test edit');
    
    
});

app.post("/server",(request,response) =>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置相应
    response.send('Ajax Test Post');
    
    
});

// 4. 监听端口服务
app.listen(8000,()=>{
    console.log("service start,8000 port监听中！");
})
