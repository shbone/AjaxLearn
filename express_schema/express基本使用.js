// 1.引入express
// const { response } = require('express');
const express= require('express');

// 2. 实例化
const app =express();

// 3. 创建路由规则
app.get("/",(request,response) =>{
    //设置相应
    response.send('Hello Express');
    
});
// 4. 监听端口服务
app.listen(8000,()=>{
    console.log("service start,8000 port监听中！");
})
