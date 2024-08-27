const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();

app.use(history())
app.use(express.static(`${__dirname}/static`));


app.listen(5003,(err) => {
    if(!err){
        console.log('服务器启动成功了');
    }
});

app.get('/person',(req,res) => {
    res.status(200).json({
        name: 'py',
        age: 21
    })
});