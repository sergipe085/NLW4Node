import { Router } from 'express'

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: "Bem vindo à NLW #4! 🚀" });
})

routes.post('/', (req, res) => {
    return res.json({message: "Dados salvos com sucesso!"});
})

export default routes;