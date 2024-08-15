import pool from  "../../../../config/db/conectionDb.js";
import format from "pg-format";
import { v4 as uuidv4 } from 'uuid';
import postQuery from '../helpers/filter.js';



// POST
export const createSongModel = async ({ name, artist, gender }) => {
  const newId = uuidv4();
  const result = await pool.query(
    'INSERT INTO song (id,name, artist,gender) VALUES ($1,$2,$3,$4) RETURNING *',
    [newId, name, artist, gender] //
  );
  console.log(result.rows);
  return result.rows[0];
};

// GET ALL SONGS
export const getALlSongModel = async () => {
  const allSongs = await pool.query('SELECT * FROM song');
  console.log(allSongs);
  return allSongs.rows;
};

// GET SONG BY ID
export const getSongByIdModel = async (id) => {
  const result = await pool.query('SELECT * FROM song WHERE id= $1', [id]);
  return result.rows;
};

// PUT
export const updateSongModel = async (id, { name, artist, gender }) => {
  const result = await pool.query(
    'UPDATE song SET name=$1, artist=$2, gender=$3 WHERE id=$4 RETURNING *',
    [name, artist, gender, id]
  );
  return result.rows;
};

// DELETE
export const deleteSongModel = async (id) => {
  const result = await pool.query('DELETE FROM song WHERE id= $1', [id]);
  return result.rows;
};

// LO NUEVO DE ESTA SEMANA
// LIMIT

export const getAllSongsModelLimit = async (limits = 10) => {
  const allSongs = await pool.query(
    'SELECT * FROM song  ORDER BY id DESC LIMIT $1',
    [limits]
  );
  return allSongs.rows;
};


// USO DE PG FORMAT
export const getAllSongsModelLimitFormat = async (
  order_by = 'id_DESC',
  limits = 10,
  page = 0
) => { 

  const [attribute, direction] = order_by.split('_'); 
  const offset = page * limits; 
  const allSongs = format(
    'SELECT * FROM song ORDER BY %s %s LIMIT %s OFFSET %s',
    attribute,
    direction,
    limits,
    offset
  ); 
  console.log('query:', allSongs);
  const response = await pool.query(allSongs);
  return response.rows;
};

//HATEOAS

export const getAllSongsHateoas = async () => {
  const allSongs = await pool.query('SELECT * FROM song');
  return allSongs.rows;
};


// FILTROS
export const getAllSongsModelFilter = async (filters) => {
  const { query, values } = postQuery('song', filters);
  const result = await pool.query(query, values);
  return result.rows;
};