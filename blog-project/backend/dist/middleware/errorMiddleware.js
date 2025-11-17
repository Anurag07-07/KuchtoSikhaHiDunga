export const errorMiddleware = (req, res, next, err) => {
    console.log(err.stack);
    return res.status(500).json({
        message: err.message
    });
};
//# sourceMappingURL=errorMiddleware.js.map