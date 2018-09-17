const express = require('express');
const router = express.Router();

const controller = require('./conta.controller');

/**
 * @swagger
 * /conta:
 *   post:
 *     description: Rota referente ao recurso de contas
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: conta
 */
router.route('/')
    .get(controller.getConta)
    .post(controller.novaConta);

router.route('/:idConta')
    .get(controller.getContaById);

module.exports = router;