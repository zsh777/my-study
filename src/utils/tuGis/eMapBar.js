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
                    //?????????
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
            //????????????
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
                realtime: true, // ????????????
                start: 0, // ???????????????????????????????????????
                end: this.end, // ???????????????????????????????????????
                height: 20,
                left: 5,
                borderColor:"#ff000000",
                // right: 5,
                // bottom: 0,
                show: false, // true???????????????
                handleSize: 0, // ??????????????????
                showDetail: false, // ?????????????????????????????????????????????
                zoomLock: true, // ????????????????????????
                moveOnMouseMove: false, // ???????????????????????????????????????
                // zoomOnMouseWheel: false // ???????????????????????????????????????
            },
            {
                type: "inside", // ??????????????????????????????
                start: 0,
                end: 10,
                zoomOnMouseWheel: true, // ??????????????????
                moveOnMouseWheel: true, // ??????????????????
                moveOnMouseMove: true, // ???????????????????????????????????????
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