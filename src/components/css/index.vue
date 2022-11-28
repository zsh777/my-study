<template>
    <div class="container1">
        <div class="top1">
        </div>
        <div class="main1">
            <h1>提莫简介</h1>
            <p>不惧艰难险阻、不惧坎坷危途，提莫怀着无比的热情和欢欣的精神探索着整个世界。作为一个约德尔人，他对自己的道德观坚定不移，同时对班德尔斥候的信条感到自豪，有的时候，他的热忱甚至会让他无法看到，自己行为会在更大的意义上导致什么样的后果。虽然有的人认为这支斥候小队是否真正存在还有待商榷，但有一件事是肯定的：提莫的信念是绝不容小觑的。</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"cssIndex"
}
</script>
<style scoped>
.container1{
    background-color: white;
    width: 1000px;
    height: 600px;
    border: 1px solid #A7C942;
    padding: 1px 1px 1px 1px;
    margin: 10px;
    outline-style:dotted;
    outline-color:blue;
}
.top1{
    background-color:violet;
    height: 70px;
}
.main1{
    background-image: url('../../assets/lol/timo.png');
    height: 530px;
    background-size: 40% 40%;
    background-repeat: no-repeat;
    background-position: center;
}
h1{
    color:#A7C942;
    text-align: center;
    letter-spacing: 8px;
}
p{
    letter-spacing: 2px;
    line-height:20px;
    text-indent: 37px;
    text-shadow: 2px 2px gold;
    font-family:"Times New Roman", Times, serif;
    font-style:italic;
    font-weight: bold;
}
</style>