<template>
    <div class="login">
        <div class="loginBody">
            <span class="loginTitle">素查SketchOut</span>
            <el-input class="loginItem" v-model="username" placeholder="请输入用户名"
                    prefix-icon="el-icon-user" clearable></el-input>
            <el-input class="loginItem" v-model="password" placeholder="请输入密码"
                    prefix-icon="el-icon-lock" show-password></el-input>
            <div class="buttons">
                <el-button class="buttonItem" type="primary" @click="handleLogin">登录</el-button>
                <el-button class="buttonItem" type="success" @click="dialogVisible = true">注册</el-button>
            </div>
        </div>
        <el-dialog title="注册"
                :visible.sync="dialogVisible">
            <span>本系统暂不开放注册功能。如有需要请联系系统管理员，账号将在审核后发放。</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {mapMutations} from "vuex"

export default {
    name: "login",
    data() {
        return {
            username: "",
            password: "",
            accounts: [],
            dialogVisible: false
        }
    },
    methods: {
        ...mapMutations("user", [
            "logIn"
        ]),
        handleLogin: function() {
            // log in successfully
            // go to main page
            if (this.username === "" || this.password === "") {
                console.log("no");
                this.$message.error("请输入用户名和密码！");
                return;
            }
            
            let isRight = false;
            for (let account of this.accounts) {
                if (account.username === this.username && account.password === this.password) {
                    isRight = true;
                    break;
                }
            }
            if (isRight) {
                console.log("yes");
                this.logIn(this.username);
                this.$message({
                    message: "登陆成功！",
                    type: "success"
                });
                this.$router.push("/main");
            } else {
                console.log("no");
                this.username = "";
                this.password = "";
                this.$message.error("用户名或密码错误！");
            }
        },
        
    },
    created() {
        // this.axios.get("/accounts.json")
        //     .then(response => {
        //         this.accounts = response.data;
        //     })
        //     .catch(error => alert(error));
        this.accounts = [{
            username: "admin",
            password: "123"
        }]
    },
}
</script>

<style scoped>
.login {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #6eb7ff;
}
.loginBody {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 400px;
    width: 600px;
    /* border-style: double; */
    border-radius: 1%;
    background-color: #99CCFF;
    
    box-shadow: -2px 2px 10px 0 rgba(0, 0, 0, 0.5),
            2px -2px 10px 0 rgba(255, 255, 255, 0.5);
}
.loginTitle {
    /* font-family: 'Courier New', Courier, monospace; */
    /* top: 10px; */
    font-size: 36px;
    margin-bottom: 20px;
}
.loginItem {
    width: 400px;
    margin-top: 20px;
}

.buttons {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    margin-top: 20px;
}

.buttonItem {
    width: 195px;
}
</style>