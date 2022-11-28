import echarts from "echarts";

function eMapMultiBarH(_opts) {
  let opts = {
    targetElement: undefined,
    data: {
      xAxisData: [],
      seriesData: []
    },
    end: undefined
  };
  Object.assign(opts, _opts);

  this.targetElement = opts.targetElement;
  this.data = opts.data;
  this.end = opts.end;
  this.showScroll = false;
  if (this.end !== 100) {
    this.showScroll = true;
  }
  this.myChart = null;
}

eMapMultiBarH.prototype = {
  createGraphic() {
    if (this.targetElement == undefined || this.targetElement == null) {
      return;
    }
    let arr = [];
    for (let i = 0; i < this.data.seriesData.length; i++) {
      arr.push({
        data: this.data.seriesData[i].data,
        name: this.data.seriesData[i].name,
        type: this.data.seriesData[i].type,
        // data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                // 四个数字分别对应 数组中颜色的开始位置，分别为 右，下，左，上。例如（1,0,0,0 ）代表从右边开始渐
                // 变。offset取值为0~1，0代表开始时的颜色，1代表结束时的颜色，柱子表现为这两种颜色的渐变。
                offset: 0,
                color: "rgba(32, 126, 251, 1)"
              },
              {
                offset: 1,
                color: "rgba(32, 126, 251, 0.5)"
              }
            ])
          }
        },
        label: {
          show: true,
          position: "top",
          textStyle: {
            color: "#000"
          },
          formatter: function(val) {
            if (val.value == 0) {
              return "";
            }
          }
        }
      });
    }
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      grid: {
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: this.data.xAxisData,
        show: true,
        axisLabel: {
          color: "#333333",
          rotate: this.xAxisRotate
        }
      },
      yAxis: {
        type: "value",
        data: this.data.xAxisData
      },
      series: arr,
      dataZoom: [
        {
          type: "slider",
          realtime: true, // 实时显示
          start: 0, // 这俩是一组使用，显示柱状图
          end: this.end, // 这俩是一组使用，显示柱状图
          height: 20,
          left: 5,
          borderColor: "#ff000000",
          // right: 5,
          // bottom: 0,
          show: false, // true滚动条出现
          handleSize: 0, // 两边手柄尺寸
          showDetail: false, // 拖拽时是否展示滚动条两侧的文字
          zoomLock: true, // 是否只平移不缩放
          moveOnMouseMove: false // 鼠标移动能触发数据窗口平移
          // zoomOnMouseWheel: false // 鼠标移动能触发数据窗口缩放
        },
        {
          type: "inside", // 支持内部鼠标滚动平移
          start: 0,
          end: 10,
          zoomOnMouseWheel: true, // 关闭滚轮缩放
          moveOnMouseWheel: true, // 开启滚轮平移
          moveOnMouseMove: true // 鼠标移动能触发数据窗口平移
        }
      ]
    };

    this.myChart = echarts.init(this.targetElement);
    this.myChart.setOption(option);
  },
  resize() {
    if (this.myChart != null) {
      this.myChart.resize();
    }
  }
};
Object.defineProperties(eMapMultiBarH.prototype, {});
export default eMapMultiBarH;
