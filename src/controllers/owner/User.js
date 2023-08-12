import User from "../../models/owner/User.js"

export const create = async (req, res) => {
    const {full_name, email, phone1, phone2, pass} = req.body;
    const user = new User(full_name, email, phone1, phone2, pass);

    res.json({
        success: false
    });
}

export const update = async (req, res) => {
    const {full_name, email, phone1, phone2} = req.body;
    const user = new User(full_name, email, phone1, phone2);
}

export const login = async (req, res) => {
    const {email, pass} = req.body;

    res.json({
        success: false
    });
}