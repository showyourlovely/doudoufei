var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 创建文档的定义
var User = new Schema({
    username  : String,
    psd       : String,
    detail      : String,
    imgs	    : String,
    create_date : { type: Date, default: Date.now }
});

// 创建model对象，与数据库中的文档（表）映射
var UserModel = mongoose.model('users', User);
// commonJS规范(暴露接口)
module.exports = UserModel;