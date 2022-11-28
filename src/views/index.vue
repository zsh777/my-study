<template>
<!-- 头部 -->
  <div class='bar-box' id="indexDiv">
    <div class='bar'>
        <div class='container' >
        <AllClass v-if="type === 'all'"></AllClass>
        <ChineseClass v-if="type === 'chinese'"></ChineseClass>
        <EnglishClass v-if="type === 'english'"></EnglishClass>
        <MathClass v-if="type === 'math'"></MathClass>
        <HistoryClass v-if="type === 'history'"></HistoryClass>
        <PoliticsClass v-if="type === 'politics'"></PoliticsClass>
        <GeographyClass v-if="type === 'geography'"></GeographyClass>
        <Class v-if="type === 'class'"></Class>
        <BasicComponent v-if="type === 'basicComponent'"></BasicComponent>
        <Css v-if="type ==='css'"></Css>
        </div>
    </div>
  </div>
</template>
 
<script>
import AllClass from '../components/all/index.vue'
import ChineseClass from '../components/chinese/index.vue'
import EnglishClass from '../components/english/index.vue'
import MathClass from '../components/math/index.vue'
import HistoryClass from '../components/history/index.vue'
import PoliticsClass from '../components/politics/index.vue'
import GeographyClass from '../components/geography/index.vue'
import Class from '../components/search/byClass/index.vue'
import BasicComponent from '../components/basicComponent/index.vue'
import Css from '../components/css/index.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'index',
    components: {
    AllClass,
    ChineseClass,
    EnglishClass,
    MathClass,
    HistoryClass,
    PoliticsClass,
    GeographyClass,
    Class,
    BasicComponent,
    Css
    },
    data () {
    return {
      type: '',
      showModal: false,
    }
    },
    mounted () {
    },
    methods: {
    handleActive (type) {
      // console.log("type",type)
      this.type = type;
      this.showModal = false
    },
    }
}
</script>
<style scoped>
.bar-box{
  position: relative; 
  padding: 24px 24px 24px 24px;
  width: calc(100% - 48px);
  height: calc(100% - 84px);
  overflow: hidden;
  background: url('../assets/image/bg1.jpg');
  background-size: 100% 100%;
}
.bar-box .bar {
  width: 100%;
  height: calc(100% - 24px);
  overflow: hidden;
}
.bar-box .bar .container {
  position: relative;
  height: 100%;
}
</style>
