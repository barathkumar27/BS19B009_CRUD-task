const express =require('express');
require('./db.js')
const Product = require('./models')

const app =express();
app.use(express.json());

app.get('/', (req,res) =>{
    return res.send('hidff');
})

app.post('/api/products', async (req,res) => {
    //console.log(req.body);
    //console.log(req.body.title)
    try{
        const product = new Product({
            name: req.body.name,
            email: req.body.email
        })
        await product.save();
        return res.status(201).send(product);
    } catch (e) {
        return res.status(500).send(e)
    }
});

app.get('/api/products', async (req,res) => {
    try{
        const products = await Product.find();
        return res.status(200).send(products)
    } catch (e) {
        return res.status(500).send(e)
    }
});


app.get('/api/products/:id', async (req,res) =>{
    const _id = req.params.id;
    try{
        const products = await Product.findById(_id);
        return res.status(200).send(products)
    } catch (e) {
        return res.status(500).send(e)
    }
});

app.patch('/api/products/:id', async (req,res) =>{
    const _id = req.params.id;
    try{
        const products = await Product.findByIdAndUpdate(_id, req.body);
        if(products) {
            const upproduct = await Product.findById(_id)
            return res.send(upproduct)
        }
        else{
            return res.send("update failed")
        }
    } catch (e) {
        return res.status(500).send(e)
    }
});

app.delete('/api/products/:id', async (req,res) =>{
    const _id = req.params.id;
    try{
        const products = await Product.findByIdAndDelete(_id);
        if(products) {
            // console.log('ttty')
            return res.send("product deleted")
        }
        else{
            return res.send("product not deleted")
        }
    } catch (e) {
        return res.status(500).send(e)
    }
});

app.listen(3000, ()=>{console.log('listening to 3000')})