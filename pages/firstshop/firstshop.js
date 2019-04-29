// pages/firstshop/firstshop.js
var dataIndex = require("../../data/localdata.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      images: dataIndex.indexData,
      Index: dataIndex.index
    })
  },

  moretap: function(e) {
    var Jianid = e.currentTarget.dataset.jianid;
    console.log(Jianid);
    this.setData({
      Jianid: Jianid
    })
  },

  historytap: function(e) {
    var Historyid = e.currentTarget.dataset.historyid;
    console.log(Historyid);
    this.setData({
      Historyid: Historyid
    })
  }
})