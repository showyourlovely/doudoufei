var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: '后台管理' });
});
router.get('/admin/goods', function(req, res, next) {
  res.render('goods', { title: '后台管理-商品查询' });
});
router.get('/admin/goods_add', function(req, res, next) {
  res.render('goods_add', { title: '后台管理-商品添加' });
});

module.exports = router;
