<template>
	<div class="weapons">
		<div class="middle">
			<div class="left" style="display: flex">
				<el-tree
					class="dialog-tree bar"
					:data="treeNode"
					:props="defaultProps"
					ref="tree"
					node-key="id"
					:default-checked-keys="[1]"
					:current-node-key="1"
					:default-expand-all="true"
					@node-click="handleNodeClick"
				>
				</el-tree>
				<el-table
                    ref="singleTable"
					:data="tableData"
					border
					class="allTableStyle"
				>
					<el-table-column 
                    property="xh" 
                    type="index" 
                    label="序号" 
                    width="51">
					</el-table-column>
					<el-table-column 
                    property="name" label="名称" width="250">
					</el-table-column>
					<el-table-column property="updateDate" label="发布日期" width="180">
					</el-table-column>
					<el-table-column property="info" label="操作" width="70">
						<template slot-scope="scope">
							<el-button
								@click="rowDetail(scope.row)"
								type="text"
								size="small"
								style="color: #000000 !important"
								>详情</el-button
							>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="right myEchartsStyle allEcharts">
				<div id="chart-01" class="mychart" style="margin: 0 auto">&nbsp;</div>
			</div>
        <Detail v-if="showDetail" :row="rowData"></Detail>
		</div>
	</div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import * as echarts from "echarts";
import Ajax from "@/api/all.js";
import { debounce } from "@/utils/common.js";
import eMapBar from "@/utils/tuGis/eMapBar.js";
import Detail from "@/components/all/model/detail.vue"

export default {
	name: "indexClass",
	components: {
		Detail,
	},
	data() {
		return {
			treeNode: [
				{
					label: "全部课程",
					children: [],
				},
			],
			defaultProps: {
				pid: "pid",
				id: "id",
				children: "children",
				label: "label",
			},
			keyValue: "",
			curSearchKey: "",
			tableData: [], //当前页数据
			allData: [], //查询到的所有数据
			// 默认选中页数
			currentPage4: 1,
			pageIndex: 0,
			rowCount: 0,
			myChart: null,
			showDetail: false, //默认不显示详情页面
			rowData: null,
		};
	},
	watch: {},
	mounted() {
		this.initData();
		window.addEventListener("resize", () => {
			debounce(this.resizeChart());
		});
	},
	beforeDestory() {
		window.removeEventListener("resize", () => {});
	},
	created() {},
	methods: {
		initData() {
			Ajax.getAllJson(null).then((res) => {
				console.log("全部课程001", res);
				if (res.code !== "200") {
					return;
				}
				this.searchData = res.data;
				console.log("this.searchData", this.searchData);
				let arr = [];
				let xAxisData = [];
				let valueData = [];
				for (let i = 0; i < this.searchData.length; i++) {
					//this.searchData[i].type = this.searchData[i].type + "，共(" + this.searchData[i].data.length + ")条";
					arr.push({
						id: i,
						label:
							this.searchData[i].type +
							"，共(" +
							this.searchData[i].data.length +
							")个",
						children: [],
					});
					xAxisData.push(this.searchData[i].type);
					valueData.push(this.searchData[i].data.length);
					this.searchData[i].id = i;
				}
				this.treeNode[0].children = arr;
				this.tableData = this.searchData[0].data;
				this.rowCount = this.tableData.length;
				this.initChart(xAxisData, valueData);
			});
		},
		rowClick(row) {
			//this.currentRow = val;
			console.log("row", row);
		},
		resizeChart() {
			if (this.myChart != null) {
				this.myChart.resize();
			}
		},
		initChart(xAxisData, seriesData) {
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
		handleNodeClick(data) {
			for (let i = 0; i < this.searchData.length; i++) {
				if (this.searchData[i].id == data.id) {
					this.tableData = this.searchData[i].data;
					this.rowCount = this.tableData.length;
					return;
				}
			}
			// this.tableData = this.searchData[parseInt(tab.index)].data;
		},
		rowDetail(row) {
			this.showDetail = true;
			this.rowData = row;
		},
	},
};
</script>
<style scoped>
@import '@/styles/common.css';
.weapons {
	width: 100%;
}
.weapons .middle {
	width: 100%;
	height: calc(100% - 60px);
	display: flex;
}
.weapons .middle .right {
    width: 40%;
    height: 100%;
}
.weapons .middle .allEcharts {
	width: 500px !important;
	height: 570px;
	text-align: center;
	margin-top: 10px !important;
	border: 1px solid #dcdfe5;
	border-radius: 4px;
	margin-left: 10px;
}
.weapons .middle .left {
	width: 60%;
	height: 100%;
}
.weapons .middle .left .allTableStyle {
	border: 1px solid rgba(220, 223, 229, 1) !important;
	border-radius: 4px;
	width: 670px;
	margin-top: 10px;
	height: 570px;
	margin-left: 10px;
}
.weapons .middle .right .mychart {
    width: 300px !important;
    height: 60vh !important;
}
.el-tree-node_content {
    height: 45px !important;
}
</style>

