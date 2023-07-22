import Persona from '../models/persona.js'

const findAll = async () => {
    try {

        const result = await Persona.findAll();
        console.debug(result)

        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (persona) => {
    try {

        const newpersona = await Persona.create(persona);

        return newpersona;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Persona.findOne({
            where: {
                id
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (persona) => {
    try {
        const foundpersona =  await Persona.findOne({
            where: {
                id: persona.id
            }
        })

        foundpersona.set(persona)

        foundpersona.save()

        return foundpersona;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Persona.destroy({
            where: {
                id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const PersonasRepository = { findAll, create, findOne,update, remove };

export default PersonasRepository; 

