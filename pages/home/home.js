// pages/home/home.js
import {
  getMultiData
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[], 
    recommends:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //请求数据(封装到service/home.js)
  onLoad: function (options) {
    //1.请求轮播图数据
    getMultiData().then(res=>{
      //取出轮播图数据和推荐数据
      const banners= res.data.data.banner.list;
      const recommends= res.data.data.recommend.list;
      //打印轮播图数据
      console.log(res)
      //将banner数据放到data中
      this.setData({
        banners,
        recommends
      })
    })
  }

})