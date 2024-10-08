
/** 
 * @swagger 
 * tags: 
 *   name: Login 
 *   description: autenticación de usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *       example:
 *         email: MD@test.com
 *         password": password
 */


/**
 * @swagger
 * /auth_user:
 *   post:
 *     summary: Autenticar un usuario
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 $ref: '#/components/schemas/Login'
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The user's token
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4NzU1MjIyfQ.2cQ8V2X4cXyK7KbXvZIc3q5jRrFq3Zb8w7q0wJxX1mM"
 *       '400':
 *         description: Bad Request
 */