function softMiddleWare(req, res, next) {
    res.locals._soft = {
        enabled: false,
        type: "default",
    };

    if (req.query.hasOwnProperty("_soft")) {
        // res.locals._soft.enabled = true;
        // res.locals._soft.type = req.query.type;
        // res.locals._soft.column = req.query.column;

        //assign : hợp nhất Object nếu key trùng sẽ ghi đè(overide) lên.
        Object.assign(res.locals._soft, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }
    next();
}

export default softMiddleWare;