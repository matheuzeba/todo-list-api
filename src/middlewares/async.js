const asyncWrapper = async (funcao) => {
    try{
        await funcao(req, res, next)
    } catch(error) {
        console.log(error)
    }
}

module.exports = asyncWrapper