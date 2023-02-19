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
    response.send('Ajax Test');
    
    
});

//网络延时
app.all("/delay",(request,response) =>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置相应
    // response.send('Ajax dalay');
    setTimeout(() => {
        response.send('Ajax delay time')
    }, 3000);
    
    
});

app.all("/jquery-server",(request,response) =>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置相应
    // response.send('Ajax dalay');
    const data = JSON.stringify({data:'JQuery send'});
    response.send(data);
    
    
});

app.all("/axios-server",(request,response) =>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 判断来源来自ajax还是传统请求
    response.header("Access-Control-Allow-Headers", "*");

    
    //设置相应
    // response.send('Ajax dalay');
    const data = JSON.stringify({data:'Axios send'});
    response.send(data);
    
    
});


// 4. 监听端口服务
app.listen(8000,()=>{
    console.log("service start,8000 port监听中！");
})
