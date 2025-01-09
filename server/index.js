const express = require('express');
const PORT =5500;
const app = express();

app.get('/', (req ,res)=>{
    res.send('welcome to backend !')
})

app.listen(PORT, ()=>{
    console.log(`Back-end is running`);
})