import Url from "../models/url.model.js";

async function getAllUrls(req, res) {
    const urls = await Url.find();
    return res.json(urls);
}

async function getUrlById(req, res) {
    const id = req.params.id;
    const url = await Url.findById(id)

    if (!url) {
        return res.status(404).json({"message": "Url not found"});
    }

    return res.json(url);
}

export {
    getAllUrls,
    getUrlById
}