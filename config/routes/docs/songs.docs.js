/**
 * @swagger
 * tags:
 *   name: Songs
 *   description: Endpoints for song management
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *   schemas:
 *     Songs:
 *       type: object
 *       required:
 *         - name
 *         - artist
 *         - gender
 *       properties:
 *         id:
 *          type: string
 *          format: uuid
 *          description: The auto-generated id of the song
 *         name:
 *           type: string
 *           description: The song's name
 *         artist:
 *           type: string
 *           description: The artist of the song
 *         gender:
 *           type: string
 *           description: Gender of the song
 *       example:
 *         id: "c2f1a568-fd6e-46c9-95d7-e6aafd6d56bd"
 *         name: "Don't Stop Me Now"
 *         artist: "Queen"
 *         gender: "Rock"
 */

/**
 * @swagger
 * /songs:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     summary: Obtener todas las canciones
 *     tags: [Songs]
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 songs:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Songs'
 *       '400':
 *         description: Error al obtener las canciones
 */

/**
 * @swagger
 * /song:
 *   post:
 *     summary: Crear una nueva canción
 *     tags: [Songs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                song:
 *                  $ref: '#/components/schemas/Songs'
 *     responses:
 *       '201':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 song:
 *                   $ref: '#/components/schemas/Songs'
 *       '400':
 *         description: Error al crear una cancion
 */

/**
 * @swagger
 * /songs/{id}:
 *   put:
 *     summary: Actualizar una canción
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The song's id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               song:
 *                 $ref: '#/components/schemas/Songs'
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 song:
 *                   $ref: '#/components/schemas/Songs'
 *       '400':
 *         description: Error al actualizar una cancion
 */

/**
 * @swagger
 * /songs/{id}:
 *   delete:
 *     summary: Eliminar una canción
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The song's id
 *     responses:
 *       '204':
 *         description: Success
 *       '400':
 *         description: Error al eliminar una canción
 */
