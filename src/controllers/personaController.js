import PersonasRepository from "../repository/personaRepository.js";

const findAll = (req, res) => {
    const result = PersonasRepository.findAll();

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const findOne = (req, res) => {
    const id = req.params.id;
    const result = PersonasRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const create = (req, res) => {
    
    const result = PersonasRepository.create(req.body);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const update = (req,res) => {
    PersonasRepository.update(req.body)

    return res.status(200).json(req.body);
}

const remove = (req, res) => {

    const id = req.params.id;

    const result = PersonasRepository.remove(id)

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const PersonaController = { findAll, create, findOne, update, remove }

export default PersonaController;
