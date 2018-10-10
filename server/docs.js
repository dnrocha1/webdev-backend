/**
 * @swagger
 * 
 * tags:
 *   - name: "auth"
 *     description: "Operações para autenticação"
 *   - name: "user"
 *     description: "Operações para usuários"
 *   - name: "group"
 *     description: "Operações para grupos"
 *   - name: "member"
 *     description: "Operações para membros"
 *   - name: "transaction"
 *     description: "Operações para transações"
 * 
 * /:
 *   get:
 *     summary: "Exibe a homepage"
 *     description: Página inicial da aplicação
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 * /auth:
 *   post:
 *     tags:
 *     - "auth"
 *     summary: "Autentica um usuário"
 *     description: Produz um token para que o usuário seja autorizado a utilizar recursos do sistema
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 * 
 * /user:
 *   get:
 *     tags:
 *     - "user"
 *     summary: "Retorna todos os usuários"
 *     description: Retorna uma lista com todos os usuários cadastrados
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   post:
 *     tags:
 *     - "user"
 *     summary: "Cadastra um usuário"
 *     description: Cadastra um novo usuário no sistema e retorna o usuário cadastrado
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   delete:
 *     tags:
 *     - "user"
 *     summary: "Deleta todos os usuários"
 *     description: Deleta todos os usuários cadastrados no sistema
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 * 
 * /user/{userId}:
 *   get:
 *     tags:
 *     - "user"
 *     summary: "Retorna usuário pelo Id"
 *     description: Retorna o objeto do tipo Usuário que foi encontrado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   put:
 *     tags:
 *     - "user"
 *     summary: "Atualiza o usuário pelo Id"
 *     description: Retorna o objeto do tipo Usuário que foi atualizado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   delete:
 *     tags:
 *     - "user"
 *     summary: "Deleta o usuário pelo Id"
 *     description: Retorna o objeto do tipo Usuário que foi deletado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 * 
 * 
 * /group:
 *   get:
 *     tags:
 *     - "group"
 *     summary: "Retorna todos os grupos"
 *     description: Retorna uma lista com todos os grupos cadastrados
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   post:
 *     tags:
 *     - "group"
 *     summary: "Cadastra um grupo"
 *     description: Cadastra um novo grupo no sistema e retorna o grupo cadastrado
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 * 
 * /group/{groupId}:
 *   get:
 *     tags:
 *     - "group"
 *     summary: "Retorna grupo pelo Id"
 *     description: Retorna o objeto do tipo Grupo que foi encontrado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   put:
 *     tags:
 *     - "group"
 *     summary: "Atualiza o grupo pelo Id"
 *     description: Retorna o objeto do tipo Grupo que foi atualizado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   delete:
 *     tags:
 *     - "group"
 *     summary: "Deleta o grupo pelo Id"
 *     description: Retorna o objeto do tipo Grupo que foi deletado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 * 
 * /member:
 *   get:
 *     tags:
 *     - "member"
 *     summary: "Retorna todos os membros"
 *     description: Retorna uma lista com todos os membros cadastrados
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   post:
 *     tags:
 *     - "member"
 *     summary: "Cadastra um membro"
 *     description: Cadastra um novo membro no sistema e retorna o membro cadastrado
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 * 
 * /member/{memberId}:
 *   get:
 *     tags:
 *     - "member"
 *     summary: "Retorna membro pelo Id"
 *     description: Retorna o objeto do tipo Membro que foi encontrado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   put:
 *     tags:
 *     - "member"
 *     summary: "Atualiza o membro pelo Id"
 *     description: Retorna o objeto do tipo Membro que foi atualizado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   delete:
 *     tags:
 *     - "member"
 *     summary: "Deleta o membro pelo Id"
 *     description: Retorna o objeto do tipo Membro que foi deletado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 * 
 * /transaction:
 *   get:
 *     tags:
 *     - "transaction"
 *     summary: "Retorna todos as transações"
 *     description: Retorna uma lista com todos as transações cadastradas
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   post:
 *     tags:
 *     - "transaction"
 *     summary: "Cadastra uma transação"
 *     description: Cadastra uma nova transação no sistema e retorna o transação cadastrada
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 * 
 * /transaction/{transactionId}:
 *   get:
 *     tags:
 *     - "transaction"
 *     summary: "Retorna transação pelo Id"
 *     description: Retorna o objeto do tipo Transação que foi encontrado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   put:
 *     tags:
 *     - "transaction"
 *     summary: "Atualiza transação pelo Id"
 *     description: Retorna o objeto do tipo Transação que foi atualizado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 *   delete:
 *     tags:
 *     - "transaction"
 *     summary: "Deleta transação pelo Id"
 *     description: Retorna o objeto do tipo Transação que foi deletado, de acordo com o parametro na requisição
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
 * 
 */