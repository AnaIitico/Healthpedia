const express = require('express');
const router = express.Router();
router.use(express.json())
const passport = require('passport');
const db = require('../models');
let requireJwt = passport.authenticate('jwt', {session: false})
//to be changed to add favorites
router.post('/favorites', requireJwt, async(req, res) => {
    let apiId = req.body.apiId;
    let types = req.body.types;
    let title = req.body.title;
    try{
        await db.favorites.create({apiId: apiId, types: types, title: title})
        return res.send("success")
    }
    catch(error){
        return res.send(error)
    }
    // console.log(req.body)
    // res.send('success')
})
// router.get('/favorites/:id', async (req, res) => {
//     let id = req.params.id;
//     let categories = await db.favorites.findAll(id);
//     try{
//         let favorite = await db.favorites.findAll({where:  {categories: categories}});
//     }
//     catch(error){
//         return res.send(error)
//     }
// })
module.exports = router