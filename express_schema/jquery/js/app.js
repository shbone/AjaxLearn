const data={
    name:'shb'
};
function handle(data){
    const result=document.getElementById('result');
    result.innerText=data.name;
}
console.log(data.name)
console.log(data)
handle(data)