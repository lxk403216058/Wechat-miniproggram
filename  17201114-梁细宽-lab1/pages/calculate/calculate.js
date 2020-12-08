// pages/calculator/calcultor.js
let rpn = require('../../utils/rpn.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    displayValue:"0",
    step:"0",
    sz:[]

  },
  tap: function(e){
    let viewDataSet = e.currentTarget.dataset.value;
    let viewText = viewDataSet;
    let sz = this.data.sz;
    sz.push(viewText);
    let str = sz.join('');
    let fontSize = this.data.fontSize;
    this.setData({
      step: str,
    });
    if (sz.length > 5 && sz.length < 12) {
      this.setData({
        fontSize: this.data.fontSize - 20
      })
    } else {
      fontSize: this.data.fontSize
    }
  },

  del: function(){
    let st = this.data.step
    if (st.length > 1){
      st=st.slice(0,st.length-1)
      this.data.sz=this.data.sz.slice(0, this.data.sz.length - 1)
      this.setData({
        step: st,
      });
    }else{
      this.data.sz.length = 0
      this.setData({
        step: "0",
      });
    }
  },
  ac: function(){
    this.setData({
      step: '0',
      sz: [],
      displayValue:'0'
    })
  },
equal: function(e){
  let d = this.data.step
  this.setData({
    displayValue: d
  })
  let num = rpn.calCommonExp(this.data.sz.join(''))
  this.data.sz.length=0
  this.data.sz.push(num)
  this.setData({
    step:num
  });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})