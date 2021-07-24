const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/commontask', 
{useNewUrlParser: true, useUnifiedTopology: true}
) .then(()=>{console.log('Database connected')})
.catch((e) =>{console.log('Database connectio error'+ e)});
