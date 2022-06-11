const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const Bloglist = require('./models/blog');

// express app
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//link to db


const dburl = 'mongodb+srv://sneakad:blog1234@blogitsite.cq7lq.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dburl, { useNewUrlParser: true }).then(() => app.listen(4000))
    .catch((err) => console.log(err))


app.get('/', (req, res) => {
    res.status(200).send("app is running")
})

app.post('/insert', async (req, res) => {
    const title = req.body.title;
    const snippet = req.body.snippet;
    const desc = req.body.desc;

    const blog = new Bloglist({ title: title, snippet: snippet, body: desc });

    try {
        await blog.save()
        res.status(200).send("data inserted");
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
})

app.get('/read', async (req, res) => {
    try {
        const blogs = await Bloglist.find();
        res.status(200).send(blogs);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});

app.post('/getbyid', async (req, res) => {
    const id = req.body.id;
    console.log(req.body)
    try {
        const blog = await Bloglist.findById(id);
        res.status(200).send(blog);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
})

app.post('/delete', (req, res) => {
    const id = req.body.id;

    try {
        Bloglist.findByIdAndDelete(id).then((blog) => {
            res.status(200).send("data deleted");
        })
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
    // var ObjectId = require('mongodb').ObjectID;
    // console.log(id)
    // Bloglist.deleteOne({ "_id": ObjectId(id) }, (err) => {
    //     console.log(err)
    // })
})

app.patch('/updated', async (req, res) => {
    const title = req.body.utitle;
    const snippet = req.body.usnippet;
    const desc = req.body.udesc;
    const id = req.body.id;
    console.log(req.body);

    try {
        const blog = await Bloglist.findByIdAndUpdate(id, { $set: { title: title, snippet: snippet, body: desc } }, { new: true });
        res.status(200).send(blog);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }

    // try {
    //     await Bloglist.findById(id, (err, result) => {
    //         result.title = title;
    //         result.snippet = snippet;
    //         result.body = desc;
    //         result.save();
    //     })
    // } catch (err) {
    //     console.log(err)
    // }
})