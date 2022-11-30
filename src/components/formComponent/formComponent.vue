<template>
	<div class="container">
		<el-form
			:model="ruleForm"
			:rules="rules"
			ref="ruleForm"
			label-width="100px"
			class="demo-ruleForm"
			style="margin: 10px"
		>
			<el-form-item label="账号" prop="login">
				<el-col :span="8">
					<el-input v-model="ruleForm.login"></el-input>
				</el-col>
			</el-form-item>
            <!-- <el-form-item label="账号" prop="name">
				<el-col :span="8">
					<el-input v-model="ruleForm.name"></el-input>
				</el-col>
			</el-form-item> -->
			<el-form-item label="密码" prop="password">
				<el-col :span="8">
					<el-input
						type="password"
						v-model="ruleForm.password"
						autocomplete="off"
					></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPassword">
				<el-col :span="8">
					<el-input
						type="password"
						v-model="ruleForm.checkPassword"
						autocomplete="off"
					></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="年龄" prop="age">
                <el-col :span="5">
				<el-input v-model="ruleForm.age"></el-input>
                </el-col>
			</el-form-item>
            <el-form-item label="出生日期" required>
                <el-col :span="11">
                    <el-form-item prop="date">
                        <el-date-picker type="date" placeholder="请选择出生日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="个性签名" prop="signature">
                <el-input type="textarea" v-model="ruleForm.signature"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="register('ruleForm')">立即注册</el-button>
                <el-button @click="reset('ruleForm')">重置</el-button>
            </el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
	name: "formComponent",
	data() {
		var checkAge = (rule, value, callback) => {
			if (!value) {
				return callback(new Error("年龄不能为空"));
			}
			// setTimeout(() => {
			// 	if (!Number.isInteger(value)) {
			// 		callback(new Error("请输入数字值"));
			// 	} else {
			// 		if (value < 18) {
			// 			callback(new Error("必须年满18岁"));
			// 		} else {
			// 			callback();
			// 		}
			// 	}
			// }, 1000);
		};
		var validatePassword = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请输入密码"));
			} else {
				if (this.ruleForm.checkPassword !== "") {
					this.$refs.ruleForm.validateField("checkPassword");
				}
				callback();
			}
		};
		var validatePassword2 = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请再次输入密码"));
			} else if (value !== this.ruleForm.password) {
				callback(new Error("两次输入密码不一致!"));
			} else {
				callback();
			}
		};
		return {
			ruleForm: {
				login: "",
                // name: "",
				password: "",
				checkPassword: "",
                age:"",
                date:"",
                sex:"",
                signature:""
			},
			rules: {
                login: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
				password: [{ validator: validatePassword, trigger: 'blur' }],
				checkPassword: [{ validator: validatePassword2, trigger: 'blur' }],
				age: [{ validator: checkAge, trigger: 'blue' }],
                date: [
                    { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                signature: [
                    { required: true, message: '请写下你的个性签名', trigger: 'change' }
                ],
			},
		};
	},
    methods:{
        register(formName){
            this.$refs[formName].validate((valid) =>{
                if(valid){
                    alert('注册成功')
                }else{
                    console.log('请按照规定注册')
                    return false
                }
            })
        },
        reset(formName){
            this.$refs[formName].resetFields();
        }
    }
};
</script>
<style scoped>
.container {
	width: 40%;
	margin: auto;
	height: 600px !important;
	background: white;
}
</style>
