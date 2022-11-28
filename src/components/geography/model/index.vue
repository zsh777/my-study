<template>
    <div class="weapons">
        <div class="middle">
            <div class="left" style="display: flex">
                <el-tabs
                :tab-position="tabPosition"
                @tab-click="handleTabClick"
                class="el-tabs"
                >
                <el-tab-pane
                v-for="(item, index) in searchData"
                :key="index"
                :label="item.type"
                >
                <el-table :data="tableData"  border class="allTableStyle">
                <el-table-column prop="number" label="序号" width="100">
                </el-table-column>
                <el-table-column prop="name" label="名称" width="250">
                </el-table-column>
                <el-table-column prop="data" label="发布日期" width="180">
                </el-table-column>
                <el-table-column prop="action" label="操作" width="70">
                </el-table-column>
                </el-table>
                </el-tab-pane>
                </el-tabs>
            </div>
            <div class="right myEchartsStyle">
                <div id="chart-01" class="mychart" style="margin:0 auto">
                &nbsp;
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import * as echarts from 'echarts'
import { debounce } from "@/utils/common.js";
import eMapBar from "@/utils/tuGis/eMapBar.js";
export default {
    name: "allClass",
    comments: {},
    data() {
    return {
        searchData: [
        {
            type: "英语",
            tableData: [
            {
                number: "1",
                name: "Writing an email to Amy",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number: "2",
                name: "Reusing things",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number: "3",
                name: "Children's Day",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number: "4",
                name: "Holidays",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number: "5",
                name: "Writing an email to Amy",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number: "6",
                name: "Writing an email to Amy",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number: "7",
                name: "Writing an email to Amy",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number: "8",
                name: "Writing an email to Amy",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number: "9",
                name: "Writing an email to Amy",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number: "10",
                name: "Writing an email to Amy",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number: "11",
                name: "Writing an email to Amy",
                data: "2022-11-19",
                action: "详情",
            },
            ],
        },
        {
            type: "语文",
            tableData: [
            {
                number:"1",
                name: "少年奇葩说",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number:"2",
                name: "黄河颂",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number:"3",
                name: "插上科学的翅膀飞",
                data: "2022-11-19",
                action: "详情",
            },
            ],
        },
        {
            type: "数学",
            tableData: [
            {
                number:"1",
                name: "整式的除法（一）",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number:"2",
                name: "分式的巧算",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number:"3",
                name: "一分钟有多长",
                data: "2022-11-19",
                action: "详情",
            },
            ],
        },
        {
            type: "政治",
            tableData: [
            {
                number:"1",
                name: "中国有了共产党",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number:"2",
                name: "让我自己来整理",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number:"3",
                name: "试种一粒籽",
                data: "2022-11-19",
                action: "详情",
            },
            ],
        },
        {
            type: "历史",
            tableData: [
            {
                number:"1",
                name: "古代西亚文化",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number:"2",
                name: "香港和澳门回归祖国",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number:"3",
                name: "隋唐时期测评解析",
                data: "2022-11-19",
                action: "详情",
            },
            ],
        },
        {
            type: "地理",
            tableData: [
            {
                number:"1",
                name: "东南亚--中南半岛",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number:"2",
                name: "地理信息技术在城市管理中的应用",
                data: "2022-11-19",
                action: "详情",
            },
            {
                number:"3",
                name: "区域环境的可持续发展",
                data: "2022-11-19",
                action: "详情",
            },
            ],
        },
        ],
        tabPosition: "left",
        tableData: [],
    };
    },
    created() {},
    mounted() {
    this.initData();
    window.addEventListener("resize", () => {
    debounce(this.resizeChart());
    });
    },
    beforeDestory() {
    window.removeEventListener("resize", () => {});
    },
    methods: {
    initData() {
        // console.log("initData")
        for (let i = 0; i < this.searchData.length; i++) {
        // console.log("this.searchData",this.searchData[i].type,this.searchData[i].tableData.length);
        this.searchData[i].type = this.searchData[i].type+"(" + this.searchData[i].tableData.length +
        ")"
    }
    this.initChart();
    },
    handleTabClick(tab) {
        // console.log(111, tab.index);
        this.tableData = this.searchData[parseInt(tab.index)].tableData;
    },
    resizeChart() {
    if (this.myChart != null) {
        this.myChart.resize();
    }
    },
    initChart(xAxisData, seriesData) {
        console.log("initChart",xAxisData)
        this.myChart = new eMapBar({
        targetElement: document.getElementById("chart-01"),
        data: {
            xAxisData: xAxisData,
            seriesData: seriesData,
        },
        xAxisRotate: 30,
    });
        this.myChart.createGraphic();
    },
    },
};
</script>
<style scoped>
.weapons{
    width: 100%;
}
.weapons .middle{
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
}
.weapons .middle .myEchartsStyle{
    width: 500px !important;
    height: 570px;
    text-align: center;
    margin-top: 10px !important;
    border: 1px solid #dcdfe5;
    border-radius: 4px;
    margin-left: 10px;
}
.weapons .middle .left{
    width: 60%;
    height: 100%;
}
.weapons .middle .left .allTableStyle{
    border: 1px solid rgba(220, 223, 229, 1) !important;
    border-radius: 4px;
    width: 670px;
    margin-top: 10px;
    height: 570px;
    margin-left: 10px;
}
</style>>