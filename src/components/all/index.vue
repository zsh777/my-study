<template>
    <div class="search-content gradinet-width" v-drag style="z-index:1111;top:30px;left:118px">
        <div class="top">
            <span>全部课程</span>
            <div class="icon">
            <span @click="miniDiv"><img class="buttonIcon" src="../../assets/button/min.png"></span>
            <span @click="maxiDiv"><img class="buttonIcon" src="../../assets/button/max.png"></span>
            <span @click="close"><img class="buttonIcon" src="../../assets/button/close.png"></span>
        </div>
    </div>
        <div class="dialog-box" id="dialog-box">
            <AllClass></AllClass>
        </div>
    </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import AllClass from '@/components/all/model/index.vue'
import $ from 'jquery'
export default {
    name: "indexClass",
    components: {
    AllClass,
},
    data() {
        return {
        dialogEdit: false,
        labelPosition: "right",
        // 详情输入信息
        formLabelAlign: {
        name: "",
        age: "",
        national: "",
        adress: "",
        phone: "",
    },
        activeName: "first",
      // 分页
        currentPage4: 1,
    };
    },
    mounted() {
    },
    beforeDestory() {
    },
  // 自定义指令 实现可拖动
    directives: {
        drag(el) {
        el.onmousedown = function (e) {
            var disx = e.pageX - el.offsetLeft;
            var disy = e.pageY - el.offsetTop;
            document.onmousemove = function (e) {
            el.style.left = e.pageX - disx + "px";
            el.style.top = e.pageY - disy + "px";
        };
        document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
        };
        };
    },
    },
    methods: {
    // 切换
    close(){
        document.getElementById("indexDiv").__vue__.handleActive("");
    },
    miniDiv(){
        let dom = this.$el;
        let box=document.getElementById("dialog-box");
        $(box).width("0px");
        $(box).height("0px");
        $(dom).width("250px");
        $(dom).height("40px");
    },
    maxiDiv(){
        let dom = this.$el;
        $(dom).width("100%");
        $(dom).height("100%");
        let box=document.getElementById("dialog-box");
        $(box).width("100%");
        $(box).height("100%");
    }
    },
}
</script>
<style>
.top {
  height: 46px;
  background-color: #ffffff;
  border: 1px solid #dcdfe5;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  -webkit-box-align: center;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-weight: 700;
  font-family: "Microsoft YaHei";
  overflow: hidden;
}

.top .icon {
  display: flex;
}

.top .buttonIcon {
  width: 44px;
  height: 40px;
  cursor: pointer;
}

.top .buttonIcon:hover {
  background-color: #e6e6e6;
}
.search-content{
  position: absolute;
  max-width: 80%;
  background: #ffffff;
}
.gradinet-width{
  animation: animateWidth 0.5s linear 1;
}
.search-content > .dialog-box {
  background: #f5f7fa;
  padding-bottom: 10px;
  overflow: hidden;
}


</style>