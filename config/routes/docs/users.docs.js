/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the users
 *         nombre:
 *           type: string
 *           description: The user's name
 *         apellido:
 *           type: string
 *           description: The user's last name
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *         createdAt:
 *           type: string
 *           description: The date of the record's creation
 *         updatedAt:
 *           type: string
 *           description: The date of the record's last update
 *
 *       example:
 *         nombre: Máximo Décimo Meridio
 *         apellido: Décimo Meridio
 *         email: MD@test.com
 *         password: password
 */

/*Mi nombre es Máximo Décimo Meridio, comandante de los ejércitos del norte, general de las Legiones Fénix, fiel servidor del verdadero emperador Marco Aurelio. Padre de un hijo asesinado, esposo de una esposa asesinada y juro que me vengaré, en esta vida o en la otra."  */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 $ref: '#/components/schemas/Users'
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                user:
 *                  $ref: '#/components/schemas/Users'
 *       '400':
 *         description: Error al obtener los usuarios
 */
