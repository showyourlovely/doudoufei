var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 创建文档的定义
var Goods = new Schema({
    goods_name  : String,
    price       : String,
    detail      : String,
    img	        : String,
    create_date : { type: Date, default: Date.now }
});

// 创建model对象，与数据库中的文档（表）映射
var GoodsModel = mongoose.model('goods', Goods);
// commonJS规范(暴露接口)
module.exports = GoodsModel;