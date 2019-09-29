//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 页面初始化数据
      navList:[],
    // 被点击的首页导航的菜单的索引
    currentIndexNav:0,
    swiperList:[],
    movieList:[],
  },
  // 获取首页导航数据
  getNavList(){
    //利用小程序内置发送请求的方法
    let that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      method:'get',
      success(res){
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  // 首页获取轮播图
  getSwiper(){
    let that = this
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      method:"get",
      success(res){
        // console.log(res.data.data.swiperList);
        if (res.data.code === 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },
  // 获取电影列表
  getMovie() {
    let that = this
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
      method: "get",
      success(res) {
        // console.log(res.data.data.videosList);
        if (res.data.code === 0) {
          that.setData({
            movieList: res.data.data.videosList
          })
        }
      }
    })
  },
  // 获取点击下标更改
  clickIndex(e){
      this.setData({
        currentIndexNav:e.target.dataset.index
      })
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    this.getSwiper(),
    this.getMovie(),
    this.getNavList();
  }
})
