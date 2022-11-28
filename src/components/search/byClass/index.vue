<template>
	<div class="search-content gradient-width" v-drag>
		<div class="top">
			<span>按年级查询</span>
			<div class="icon">
				<span @click="miniDiv"><img class="buttonIcon" src="../../../assets/button/min.png"
				/></span>
				<span @click="maxiDiv"
					><img class="buttonIcon" src="../../../assets/button/max.png"
				/></span>
				<span @click="close"
					><img class="buttonIcon" src="../../../assets/button/close.png"
				/></span>
			</div>
		</div>
		<div class="dialog-box">
			<div v-bar style="width: 100%; height: 100%; overflow: hidden">
				<div style="overflow: hidden">
					<ByClass></ByClass>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ByClass from "@/components/search/byClass/model/index.vue";
import $ from "jquery";

export default {
	name: "byClass",
	components: {
		ByClass,
	},
	data() {
		return {
			dialogEdit: false,
			activeName: "first",
			// 分页
			currentPage4: 1,
		};
	},
	mounted() {},
	beforeDestory() {},
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
		close() {
			document.getElementById("indexDiv").__vue__.handleActive("");
		},
		miniDiv() {
			let dom = this.$el;
			let box = document.getElementById("dialog-box");
			$(box).width("0px");
            console.log(box)
			$(box).height("0px");
			$(dom).width("320px");
			$(dom).height("40px");
		},
		maxiDiv() {
			let dom = this.$el;
			$(dom).width("100%");
			$(dom).height("100%");
			let box = document.getElementById("dialog-box");
			$(box).width("100%");
			$(box).height("100%");
		},
	},
};
</script>

<style scoped>
.top {
	height: 46px;
	background-color: #ffffff;
	/* border: 1px solid #dcdfe5;
	border-radius: 8px 8px 0px 0px; */
	display: flex;
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
.search-content {
	position: absolute;
	max-width: 80%;
	background: #ffffff;
}
.gradinet-width {
	animation: animateWidth 0.5s linear 1;
}

</style>
