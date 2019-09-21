import { globalUrls } from "./urls"

const network = {

  getList: function (content, params) {
    var url = '';
    if ("movie" === content) {
      url = globalUrls.movieList
    } else if ("tv" === content) {
      url = globalUrls.tvList
    } else {
      url = globalUrls.showList
    }

    var count = params.count ? params.count : 7;

    wx.request({
      url,
      data: {
        count: count
      },
      success: function (res) {
        var data = res.data.subject_collection_items;
        //console.log(data)
        //通过回调来更改数据
        if (params && params.success) {
          if (count % 3 == 2) data.push({})//由于可能存在最后一行是偶数的数据，需要处理

          params.success(data);
        }
      }
    })
  },
  // 获取详情
  getItemDetail: function (params) {
    var type = params.type;
    var id = params.id;
    var url = "";
    if (type === "movie") {
      url = globalUrls.movieDetail + id;
    } else if (type === "tv") {
      url = globalUrls.tvDetail + id;
    } else {
      url = globalUrls.showDetail + id;
    }

    wx.request({
      url: url,
      success: function (res) {
        if (params && params.success) {
          params.success(res.data);
        }
      }
    })
  },

  getItemTags: function (params) {
    var type = params.type;
    var id = params.id;
    var url = "";
    if (type === "movie") {
      url = globalUrls.movieTags(id)
    } else if (type === "tv") {
      url = globalUrls.tvTags(id)
    } else {
      url = globalUrls.showTags(id)
    }
    wx.request({
      url: url,
      success(res) {
        if (params.success) {
          params.success(res.data.tags);
        }

      }
    })

  },

  //获取短评
  getItemComments: function (params) {
    var type = params.type;
    var id = params.id;
    var start = params.start ? params.start : 0;
    var count = params.count ? params.count : 3;
    
    var url = "";
    if (type === "movie") {
      url = globalUrls.movieComments(id, start,count);
    } else if (type === "tv") {
      url = globalUrls.tvComments(id, start, count);
    } else {
      url = globalUrls.showComments(id, start, count);
    }
    console.log(url)
    wx.request({
      url: url,
      success: function (res) {
        if (params) {

          params.success(res.data)
        }
      }
    })
  },

  //查找功能
  getSearch:function(params){
    var q=params.q;
    var url = globalUrls.searchUrl(q);
    wx.request({
      url,
      success:function(res){
        console.log(res)
        console.log(res.data.subjects)
          params.success(res.data.subjects)
      }
    })
  }
}

export { network }