<template>
    <div class="main">
        <el-container>
            <el-header>
                <i class="el-icon-house">主页</i>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    侧边栏
                </el-aside>
                <el-container>
                    <el-main>
                        <el-row type="flex" class="row-bg">
                            <el-col :span="6"><div class="grid-content bg-purple"><el-link>查看<i class="el-icon-view el-icon--right"></i></el-link></div></el-col>
                            <el-col :span="6"><div class="grid-content bg-purple-light"><el-link type="primary">主要链接</el-link></div></el-col>
                            <el-col :span="6"><div class="grid-content bg-purple-light"><el-link type="danger" disabled>危险链接</el-link></div></el-col>
                        </el-row>
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="6"><div class="grid-content bg-purple"><el-link :underline="false">无下划线查看<i class="el-icon-view el-icon--right"></i></el-link></div></el-col>
                            <el-col :span="6"><div class="grid-content bg-purple-light"><el-link type="primary">主要链接</el-link></div></el-col>
                            <el-col :span="6"><div class="grid-content bg-purple-light"><el-link type="danger" disabled>危险链接</el-link></div></el-col>
                        </el-row>
                        <el-row type="flex" class="row-bg" justify="end">
                            <el-col :span="6"><div class="grid-content bg-purple"><el-link>查看<i class="el-icon-view el-icon--right"></i></el-link></div></el-col>
                            <el-col :span="6"><div class="grid-content bg-purple-light"><el-link type="primary">主要链接</el-link></div></el-col>
                            <el-col :span="6"><div class="grid-content bg-purple-light"><el-link type="danger" disabled>危险链接</el-link></div></el-col>
                        </el-row>
                    </el-main>
                    <el-footer>
                        <el-button-group>
                            <el-button type="primary" icon="icon-el-arrow-left">上一页</el-button>
                            <el-button type="primary">下一页<i class="el-arrow-right el-icon--right"></i></el-button>
                        </el-button-group>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    name:'modelIndex'
}
</script>
<style scoped>
.el-container{
    background: white;
    width: 875.38px;
    height: 500px;
}
.el-header{
    background: #409EFF;
}
.el-aside{
    background: #67C23A;
    font-family: Arial;
    font-size: 20px;
    line-height:1.7
}
.el-main{
    background: #303133;
}
.el-footer{
    background: #E4E7ED;
}
.el-col{
    border-radius: 30px;
}
</style>