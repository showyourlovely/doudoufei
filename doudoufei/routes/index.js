var express = require('express');
var router = express.Router();
var md5 = require('md5');
var multiparty = require('multiparty');
var UserModel = require('../model/UserModel');
var GoodsModel = require('../model/GoodsModel');
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session && req.session.username!=null){
    res.render('index', { title: '首页' });
  }else{
    res.redirect('/login')
  }
  
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});
// 用post接收，并在数据库查找
router.post('/api/login', function(req,res,next) {
	var username = req.body.username;
	var psd = req.body.psd;
  var result = {
    status : 1,
    message : "登陆成功"
  }
  UserModel.find({"username":username,"psd":psd},function (err,docs) {
    // 返回result...
    if(!err && docs.length>0){
      req.session.username = username;
      res.send(result);
    }else{
      result.status = -999;
      result.message = "您的账号跟密码有问题，跟我去警察局一趟";
      res.send(result);
    }
  })
})
router.get('/admin', function(req, res, next) {
  if(req.session && req.session.username!=null){
    res.render('admin', { title: '后台管理' }); 
  }else{
    res.redirect('/login')
  }
});
router.get('/admin/goods', function(req, res, next) {
  GoodsModel.find({},function (err,docs) {
    // body...
    res.render('goods', { list: docs});
  })
});
router.get('/admin/goods_add', function(req, res, next) {
  res.render('goods_add', { title: '后台管理-商品添加' });
});
router.post('/api/goods_add', function(req,res,next) {
  var form = new multiparty.Form({
  	uploadDir:"./public/download"
  });
  form.parse(req,function(err,fields,files){
  	var goods_name = fields.goods_name[0];
  	var price = fields.price[0];
  	var imgsPath = files.imgs[0].path;
  	var imgsName = imgsPath.substr(imgsPath.lastIndexOf("\\")+1);
  	var gm = new GoodsModel();
  	gm.goods_name = goods_name;
  	gm.price = price;
  	gm.imgs = imgsName;
  	gm.save(function(err){
  		if(!err){
  			res.send("成功");
  		}else{
    		res.send("失败");
      }
  	})
  })
})
router.post("/api/shiyan",function (req,res,next) {
  // body...
  GoodsModel.find({},function (err,docs) {
    // body...
    if(!err){
      res.send(docs);
    }
  })
})
module.exports = router;
