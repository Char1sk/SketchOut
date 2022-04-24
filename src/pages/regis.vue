<template>
  <el-form :model="ruleForm" status-icon 
         :rules="rules" ref="ruleForm" 
         label-width="100px" 
         class="demo-ruleForm center">

    <el-form-item label="电话号码" prop="phonenumber">
      <el-input v-model="ruleForm.phonenumber" placeholder="请输入电话号码"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
    </el-form-item>

    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请确认密码"></el-input>
    </el-form-item>

    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="ruleForm.age" placeholder="请输入年龄"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePhoneNumber = (rule,value,callback) => {
          if(value === ''){
            callback(new Error('请输入电话号码'));
          } else if(value.length != 11){
            callback(new Error('输入错误'));
          } else {
            callback()
          }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          phonenumber: '',
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          phonenumber: [
            { validator: validatePhoneNumber, trigger: 'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(this.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  /* .center {
    width: 600px;
    margin: 0 auto;
  } */
</style>