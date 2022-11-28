import echarts from "echarts";

function eMapBar(_opts){
    let opts = {
        targetElement: undefined,
        data: {
            xAxisData: [],
            seriesData: []
        },
        xAxisRotate:0,
        end:undefined,
        color:undefined
    }
    Object.assign(opts, _opts);

    this.targetElement = opts.targetElement;
    this.data = opts.data;
    this.xAxisRotate = opts.xAxisRotate ? opts.xAxisRotate : 0;
    this.end = opts.end;
    this.color = opts.color ? opts.color : "#000";
    
    console.log('x-rotate',this.xAxisRotate);
    this.showScroll = false;
    if(this.end  !== 100){
        this.showScroll= true;
    }
    this.myChart = null;
}

eMapBar.prototype = {
    createGraphic(){
        if( this.targetElement == undefined || this.targetElement == null){
            return;
        }
        let option = {
            title : this.data.title ? this.data.title: "",
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            grid: {
                top:'3%',
                left: "1%",
                right: "0%",
                bottom: "1%",
                containLabel: true,
            },
            xAxis: {
                type: "category",
                data: this.data.xAxisData,
                axisLabel: {
                    interval:0,
                    formatter:function(value){
                    return value.split('').join('\n')
                    }
                },
            },
            yAxis: {
                type: "value",
                show: true,
                data: this.data.xAxisData,
            },
            series: [{
                data: this.data.seriesData,
                type: "bar",
                boundaryGap:[0, 0],
                itemStyle:{
                normal:{
                    barBorderColor:'#207efb',
                    barBorderWidth:'1',
                    barBorderRadius:[1,1,1,1],
                    //渐变色
                    color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                        offset:0,
                        color:'rgba(32, 126, 251, 0.5)'
                    },{
                        offset:1,
                        color:'rgba(32, 126, 251, 1)'
                    }]),
                }
                },
                label: {
                    show: true,
                    position:'top',
                    textStyle: {
                        color: this.color
                    },
                    formatter: function(val){
                        if(val.value == 0){
                            return ''
                        } 
                    }
                }
            },
            {
            //阴影设置
            type:'bar',
            itemStyle:{
                normal:{color:'rgba(216, 216, 216, 0.5)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data:[10,10,10,10,10,10]
            }],
            dataZoom: [{
                type: "slider",
                realtime: true, // 实时显示
                start: 0, // 这俩是一组使用，显示柱状图
                end: this.end, // 这俩是一组使用，显示柱状图
                height: 20,
                left: 5,
                borderColor:"#ff000000",
                // right: 5,
                // bottom: 0,
                show: false, // true滚动条出现
                handleSize: 0, // 两边手柄尺寸
                showDetail: false, // 拖拽时是否展示滚动条两侧的文字
                zoomLock: true, // 是否只平移不缩放
                moveOnMouseMove: false, // 鼠标移动能触发数据窗口平移
                // zoomOnMouseWheel: false // 鼠标移动能触发数据窗口缩放
            },
            {
                type: "inside", // 支持内部鼠标滚动平移
                start: 0,
                end: 10,
                zoomOnMouseWheel: true, // 关闭滚轮缩放
                moveOnMouseWheel: true, // 开启滚轮平移
                moveOnMouseMove: true, // 鼠标移动能触发数据窗口平移
            }
            ]
        };

        this.myChart = echarts.init(this.targetElement);
        this.myChart.setOption(option)
    },
    resize(){
        if(this.myChart != null){
            this.myChart.resize();
        }
    }
}
Object.defineProperties(eMapBar.prototype,{})
export default eMapBar