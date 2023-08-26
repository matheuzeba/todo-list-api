const asyncWrapper = (funcao) => {
    return async(req, res, next) => {
        try{
            await funcao(req, res, next)
        } catch(error) {
            res.status(500).json({message: error})
        }
    }
}

module.exports = asyncWrapper