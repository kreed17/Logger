
const Log = require('../models/logger');

// router.get('/', (req, res) => {
//     res.status(200).json(log);
// })

// router.post('/', (req, res) => {
//     const newlog = {
//         message: req.body.message,
//         id: uuidv4()
//     }
//     log.push(newlog)
//     res.status(201).json(log); //succesfully created resourece
// })

exports.getAllLogs = async (req, res) => {
    await Log.find()
        .then((log) => res.json(log))
        .catch((err) => {
            res.status(404)
                .json({ message: "Failed to add Log", error: err.message })
        });
};

exports.postCreateLog = (req, res) => {
    Log.create(req.body)
        .then((data) => res.json({ message: "Log added", data }))
        .catch((err) => {
            res.status(400)
                .json({ message: "Failed to add Log ", error: err.message })
        });       
};

exports.putUpdateLog = (req, res) => {
    Log.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.json({ message: "Updated Log", data })
        })
        .catch((err) => res.status(400).json({ message: "Failed to Update", error: err.message }))
};

exports.deleteLog = (req, res) => {
    Log.findByIdAndRemove(req.params.id, req.body)
        .then((data) => {
            res.json({ message: "Succesfully deleted", data })
        })
        .catch((err) => {
            res.status(400).json({ message: "Log not Found", error: err.message })
        });
};

exports.getOneLog = (req, res) => {
    Log.findById(req.params.id)
        .then((data) => {
            res.json({ message: "Found Log", data });
        })
        .catch((err) => {
            res.status(400).json({ message: "Log not Found", error: err.message })
        });
}