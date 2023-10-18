const Collection = require('../../models/Collection');


module.exports = {
    index,
    create,
    getId,
    delete: deleteCollection
}

async function index(req, res) {
    try {
        const collections = await Collection.find({
            user: req.user._id
        })
        console.log(req.user)
        res.json(collections)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)}
}

async function create(req, res) {
    console.log(req.user)
    try  {
        req.body.user = req.user._id
        const collection = await Collection.create(req.body);
        console.log(collection)
        res.json(collection);
    } catch  (err) {
        res.status(400).json(err)}
}

async function getId(req, res) {
    try {
        const collection = await Collection.find({ _id: req.params.collection })
        console.log(collection)
        res.json(collection)
    } catch(err)  {
        res.satus(400).json(err)
    }
}
async function deleteCollection(req, res) {
    try {
        // console.log(req.params)
        const deletedCollection = await Collection.findByIdAndDelete(req.params.id);
        res.json(deletedCollection);
    } catch (err) {
        console.log(err)
        res.status(400).json(err)}
}
