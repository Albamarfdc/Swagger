import {
    createSongModel,
    getALlSongModel,
    getSongByIdModel,
    deleteSongModel,
    updateSongModel,
    getAllSongsModelLimit,
    getAllSongsModelLimitFormat,
    getAllSongsHateoas,
    getAllSongsModelFilter,
} from '../models/songs.model.js';

import { findError } from '../utils/utils.js';
import pagination from '../helpers/paginator.js';
import HATEOAS from '../helpers/hateoas.js';

// POST
export const createSong = async (req, res) => {
    try {
        const { song } = req.body;
        if (!song) {
            return res.status(400).json({ error: 'Song is required' });
        }
        const songs = await getALlSongModel();
        const songExists = songs.find(
            (s) => s.name === song.name && s.artist === song.artist
        );
        if (songExists) {
            return res.status(400).json({ error: 'Song already exists' });
        }

        const newSong = await createSongModel(song);
        res.status(201).json({ song: newSong });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log('Error al procesar la solicitud:', error);
    }
};

//GET
export const getAllSong = async (req, res) => {
    try {
        const songs = await getALlSongModel();
        res.status(200).json({ songs: songs });
    } catch (error) {
        res.send(error.message);
    }
};

//GET BY ID
export const getSongById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Song ID is required' });
        }
        const songs = await getSongByIdModel(id);
        res.status(!songs ? 404 : 200).json(
            !songs ? { error: 'Song not found' } : { songs: songs }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PUT
export const updateSong = async (req, res) => {
    try {
        const { id } = req.params;
        const { song } = req.body;
        const songs = await updateSongModel(id, song);
        res.status(200).json({ songs: songs });
    } catch (error) {
        const errorFound = findError(error.code);
        return res
            .status(errorFound[0].status)
            .json({ error: errorFound[0].message });
    }
};

//DELETE
export const deleteSong = async (req, res) => {
    try {
        const { id } = req.params;
        const songs = await deleteSongModel(id);
        if (songs === 0) {
            return res.status(404).json({ error: 'Song not found' });
        }
        res.status(204).json({ message: 'Song deleted' });
    } catch (error) {
        const errorFound = findError(error.code);
        return res
            .status(errorFound[0].status)
            .json({ error: errorFound[0].message });
    }
};

// LO NUEVO  DE ESTA SEMANA

//LIMIT
export const getAllSongsLimit = async (req, res) => {
    try {
        const { limit } = req.query;
        const result = await getAllSongsModelLimit(limit);
        res.status(200).json({ song: result });
    } catch (error) {
        const errorFound = findError(error.code);
        return res
            .status(errorFound[0].status)
            .json({ error: errorFound[0].message });
    }
};

//PG FORMAT

export const getOrderAndLimitSongs = async (req, res) => {
    try {
        const { order_by, limit, page } = req.query;
        const songs = await getAllSongsModelLimitFormat(order_by, limit, page);
        res.status(200).json({ song: songs });
    } catch (error) {
        console.log('error', error);
        const errorFound = findError(error.code);
        return res
            .status(errorFound[0].status)
            .json({ error: errorFound[0].message });
    }
};

export const getAllSongsWithHateoas = async (req, res) => {
    try {
        const allSongs = await getAllSongsHateoas(); // AQUI LLAMO AL MODELO
        const allSongsWithHateoas = await HATEOAS('songs', allSongs);
        res.status(200).json({ song: allSongsWithHateoas });
    } catch (error) {
        const errorFound = findError(error.code);
        return res
            .status(errorFound[0].status)
            .json({ error: errorFound[0].message });
    }
};

//PAGINATOR
export const allSongsPaginator = async (req, res) => {
    try {
        const { items, page } = req.query;
        const allSong = await getALlSongModel();

        const isPage = /^[1-9]\d*$/.test(page);
        if (!isPage) {
            return res.status(400).json({ message: 'Invalid page number' }); // ESTA AQUI
        }
        const pageData = pagination(allSong, items, page);
        res.status(200).json(pageData);
    } catch (error) {
        const errorFound = findError(error.code);
        return res
            .status(errorFound[0].status)
            .json({ error: errorFound[0].message });
    }
};

// FILTROS
export const filterSongs = async (req, res) => {
    try {
        const { items, page, filters } = req.body;
        console.log('filter', filters);
        const allSongs = await getAllSongsModelFilter(filters);
        console.log('allSongs', allSongs);
        const pageData = pagination(allSongs, items, page);
        console.log('pageData', pageData);
        res.status(200).json(pageData);
    } catch (error) {
        const errorFound = findError(error.code);
        return res
            .status(errorFound[0].status)
            .json({ error: errorFound[0].message });
    }
};
