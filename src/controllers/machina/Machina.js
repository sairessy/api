import db from "../../services/nedb/index.js"

export const create = async (req, res) => {}

export const set = (req, res) => {
    const data = req.body
    const id = data._id
    delete data._id

    console.log(data)
    res.json({_id: id, ...data})
    // db.update({_id: id}, {$set: {data}}, (err, doc) => {
    //     res.json(doc)
    // })
}

export const get = (req, res) => {
    const id = req.params.id
    db.findOne({_id: id}, (err, doc) => {
        res.json(doc)
    })
}

export const remove = (req, res) => {
    const id = req.params.id
}