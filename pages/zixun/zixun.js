var config = require("../../config.js");
var app = getApp();
Page({
    data: {

    },
    onLoad: function (options) {
        var that = this;
        that.setData({
            zixun: config.zixun[options.id - 1]
        });
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    }
})