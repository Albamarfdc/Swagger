import { Router } from 'express';
import { isLogin } from '../../middlewares/isLogin.js';

import {
    allSongsPaginator,
    createSong,
    deleteSong,
    filterSongs,
    getAllSong,
    getAllSongsLimit,
    getAllSongsWithHateoas,
    getOrderAndLimitSongs,
    getSongById,
    updateSong,
} from '../../src/api/v1/controllers/songs.controller.js';


const router = Router();


router.get('/songs', isLogin, getAllSong); //3

router.post('/song', createSong);
router.get('/songs/:id', getSongById);
router.put('/songs/:id', updateSong);
router.delete('/songs/:id', deleteSong);

router.get('/songs_with_limit', getAllSongsLimit);
router.get('/song_with_limit_and_order', getOrderAndLimitSongs);
router.get('/songs_with_hateoas', getAllSongsWithHateoas);

router.get('/songs_with_pagination', allSongsPaginator);
router.get('/songs_with_filter', filterSongs);

export default router;
