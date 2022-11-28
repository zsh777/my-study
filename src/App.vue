<template>
  <div id="app">
    <div class="main-container">
      <div class="top-title">
        <div class="topbar-title">
        <img :src="require('@/assets/image/logo.png')" style="margin-top:10px;margin-right:10px;width:36px;height:34px">
      <div>百家课堂</div>
        </div>
        <div class="table-nav1">
          <nav>
            <ul>
              <li>
                <a>课程统计</a>
                <ul>
                  <li><a @click='changeMenu("all")'>全部</a></li>
                  <li><a @click='changeMenu("english")'>英语</a></li>
                  <li><a @click='changeMenu("math")'>数学</a></li>
                  <li><a @click='changeMenu("chinese")'>语文</a></li>
                  <li><a @click='changeMenu("history")'>历史</a></li>
                  <li><a @click='changeMenu("geography")'>地理</a></li>
                  <li><a @click='changeMenu("politics")'>政治</a></li>
                </ul>
              </li>
              <li>
                <a>课程查询</a>
                <ul>
                  <li><a @click='changeMenu("class")'>按年级查询</a></li>
                  <li><a @click='changeMenu("politics")'>政治</a></li>
                </ul>
              </li>
              <li>
                <a>功能待定</a>
                <ul>
                  <li><a @click='changeMenu("history")'>历史</a></li>
                  <li><a @click='changeMenu("geography")'>地理</a></li>
                  <li><a @click='changeMenu("politics")'>政治</a></li>
                </ul>
              </li>
              <li>
                <a>练习</a>
                  <ul>
                  <li><a @click='changeMenu("basicComponent")'>组件练习1</a></li>
                  <li><a @click='changeMenu("css")'>样式练习1</a></li>
                  <li><a @click='changeMenu("politics")'>政治</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div class="table-nav2">
          <span v-for="(item,index) in manyMenu" :key="index" @click='goHref()'>{{item.name}}</span>
        </div>
      </div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App',
  components: {
    // Views,
    // Views2
  },
  data(){
  return {
    manyMenu:[
      {
        name:"英语"
      },
      {
        name:"数学"
      },
      {
        name:"语文"
      }
    ]
  }
  },
  mounted(){
    $(function(){
      var $li = $('nav>ul>li');
      // console.log($li)
      $li.mouseenter(function(){
        // console.log("$$$$",$(this).parent().children('li').children('ul'),$(this).children('ul'))
        $(this).parent().children('li').children('ul').css('display','none');
        $(this).children('ul').css('display','block');
      });
      var $li2 = $('nav>ul>li>ul');
      $li2.mouseleave(function(){
        $(this).css('display','none');
      });
    })
  },
  methods:{
    changeMenu(menuCode){
      // console.log("_vue_",document.getElementById("indexDiv").__vue__)
      document.getElementById("indexDiv").__vue__.handleActive(menuCode);
      var $li = $('nav>ul>li');
      $($li).parent().children('li').children('ul').css('display','none');
    },
    goHref(){
      window.location.href = "http://baidu.com"
    }
  }
}
</script>

<style>
@import '@/styles/common.css';
#app {
  font-family: "Microsoft YaHei", Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.main-container {
  padding: 0;
  height: 100%;
  width: 100%;
}
.main-container .top-title {
  width: 100%;
  height: 48px;
  width: 100%;
  vertical-align: middle;
  background-color: #0a4c88;
  /* background-image: url("./assets/images/nav.png") !important; */
  background-size: 100% 122%;
  display: flex;
}
.main-container .top-title .topbar-title {
  padding-left: 19px;
  display: flex;
  margin: 0;
  color: #fff;
  font-weight: bold;
  line-height: 48px;
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold, 微软雅黑, Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  height: 48px;
}
.main-container .table-nav1 {
  padding-left: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  margin-left: 250px;
  height: 26px;
  line-height: 26px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.main-container .table-nav2 {
  padding-left: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  height: 26px;
  line-height: 26px;
  margin-top: 15px;
  margin-bottom: 10px;
  border-left: 1px solid #ffffff;
}
.main-container .table-nav2 span {
  text-align: center;
  width: 84px;
}
nav {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  position: relative;
}

nav ul li {
  /*line-height: 40px;*/
  float: left;
}

nav > ul > li {
  width: 100px;
  list-style: none;
}

nav ul li a {
  display: block;
  width: 100%;
  float: left;
  color: #ffffff;
  text-align: center;
}

nav > ul > li:hover > a {
  /*background-color: #00ffff;*/
  color: #fff53b;
}

nav ul li ul {
  padding: 0;
  display: none;
  width: 134px;
  position: relative;
  top: -2px;
  left: -18px;
  overflow: hidden;
  z-index: 9999999;
  background-color: RGB(123,104,238);
  border: 1px solid #66a7ff;
}

nav ul li ul li {
  float: left;
  border-bottom: 1px solid #66a7ff;
  width: 134px;
  height: 36px;
  line-height: 36px;
  margin-top: 1px;
  list-style: none;
}

nav ul li ul li:last-child {
  border: none;
}

nav > ul > li > ul > li:hover a {
  background-color: #66a7ff;
  width: 134px;
  color: #ffffff;
}
</style>
