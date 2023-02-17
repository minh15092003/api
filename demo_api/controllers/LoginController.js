
module.exports = {
    get: (req, res) => {

        const { username, password } = req.body;
        if (!username || !password) {
            return res
                .json({
                    message: "username hoac password la bat buoc",
                    data: false
                })
                .status(400);
        } else if (username === "minhtv" && password === "9999") {
            return res.json({
                message: "login thanh cong",
                data: true,

            });
        } else {
            return res.json({
                message: "username hoac password khong dung",
                data: false
            });
        }
    }
}

