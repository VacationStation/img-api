/**
 * Created by nkrei001 on 26.06.17.
 */
var express = require('express');
var router = express.Router();
var imgController = require('../controller/imgController');

//Check API token
router.use(function(req, res, next){
    console.log("check authorisation");
    //TODO use middleware to check API token
    next();
});


router.route('/img')
/**
 * @api {post} /img Save new image
 * @apiName SaveImage
 * @apiGroup Image
 *
 * @apiSuccess {Number} id Image ID
 */
    .post(function(req, res){
        var id;
        imgController.functions.saveImage(req.body.data, function(err, result){
            if(err){
                console.log(err);
                res.json({success: false, error: err});
            }else{
                id = result;
                console.log(result);
                res.json({success: true, id:id});
            }
        });
    });

router.route('/img/:id')
/**
 * @api {get} /img/:id LoadImage
 * @apiParam {Number} id Image ID
 * @apiName LoadImage
 * @apiGroup Image
 *
 * @apiSuccess {String} image Base 64 encoded Image
 */
    .get(function(req, res){
        var img;
        var error = null;
        imgController.functions.loadImage(req.params.id, function(err, content){
            if(err){
                console.log(err);
                res.json({success: false, error: error});
            }else{
                img = content;
                console.log(content);
                res.json({success: true, data:content});
            }
        });

    });

module.exports = router;
