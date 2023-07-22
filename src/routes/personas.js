import express from 'express'
import PersonaController from '../controllers/personaController.js';

const router = express.Router()

router.get("/", PersonaController.findAll)
router.post("/", PersonaController.create)
router.put("/", PersonaController.update)
router.delete("/:id", PersonaController.remove)
router.get("/:id", PersonaController.findOne)

export default router;
