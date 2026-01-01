import Url from "../models/url.model.js";
import crypto from "crypto";

function shortCode(url, length = 8) { // function to hash urls and return shortcode
  return crypto.createHash("sha256").update(url).digest("hex").slice(0, length);
}

async function getAllUrls(req, res) {
    const urls = await Url.find();
    return res.json(urls);
}

async function getInfoUrlById(req, res) {
    const id = req.params.id;
    const url = await Url.findById(id)

    if (!url) {
        return res.status(404).json({"message": "Url not found"});
    }

    return res.json(url);
}

async function postUrl(req, res) {
    const { url } = req.body;

    if (!url || url === undefined) {
        return res.json({"message": "invalid input"});
    }

    const code = shortCode(url);
    const result = await Url.create({
        original_url: url,
        short_code: code
    });
    return res.json(result);
}

async function redirectByShortCode(req, res) {
    const { short_code } = req.params;

    if (!short_code) {
        return res.json({"message": "invalid input"});
    }

    const result = await Url.findOne({short_code});
    if (!result) {
        return res.json({"message": "Url Not Found"});
    }

    result.click_times.push(Date.now());
    await result.save();

    return res.redirect(result.original_url);
}

export {
    getAllUrls,
    getInfoUrlById,
    postUrl,
    redirectByShortCode
}