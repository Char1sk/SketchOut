<template>
    <div class="main">
        <el-container class="mainContainer">
            <el-header class="mainHeader" height="10%">
                <div class="mainHeaderTitle">素查SketchOut</div>
                <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        您好，{{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container class="mainNonheader">
                <el-aside class="mainAside" width="200px">
                    <el-menu default-active="/bikeList" background-color="#fbfbfb" router>
                        
                        <!-- <el-menu-item class="mainAsideItem" index="/photoRetrieval">
                            <i class="el-icon-search"></i>
                            <span slot="title">照片检索</span>
                        </el-menu-item> -->
                        <el-menu-item class="mainAsideItem" index="/photoGeneration">
                            <i class="el-icon-user"></i>
                            <span slot="title">照片生成</span>
                        </el-menu-item>
                        <el-menu-item class="mainAsideItem" index="/userGuidance">
                            <i class="el-icon-reading"></i>
                            <span slot="title">使用说明</span>
                        </el-menu-item>
                        <el-menu-item class="mainAsideItem" index="/aboutUs">
                            <i class="el-icon-setting"></i>
                            <span slot="title">关于我们</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                
                <el-main class="mainBody">
                    <router-view></router-view>
                </el-main>
                
            </el-container>
        </el-container>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"

export default {
    computed: {
        ...mapState("user", [
            "isLoading",
            "username"
        ])
    },
    methods: {
        ...mapMutations("user", [
            "logOut"
        ]),
        handleCommand: function(command) {
            console.log(command);
            this.logOut();
            this.$message({
                    message: "注销成功！",
                    type: "success"
            });
            this.$router.push("/login");
        }
    },
}
</script>

<style scoped>
.mainContainer {
    position: absolute;
    height: 100%;
    width: 100%;
}

.mainAsideItem {
    border-bottom: 1px solid #d0d0d0;
}

.mainHeader {
    /* background-color: #B3C0D1; */
    /* text-align: center; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: #409EFF;
    /* height: 60px; */
    padding-left: 50px;
}

.mainHeaderTitle {
    color: #ffffff;
    font-size: 24px;
}

.mainNonheader {
    height: 90%;
}

/* .mainBody {
    position: absolute;
    
} */

/* .mainBodyFooter {
    display: flex;
    justify-content: center;
    align-items: center;
} */
  
.el-aside {
    background-color: #fefefe;
    border-right: 1px solid #d0d0d0;
    /* text-align: center; */
    /* border-right: solid; */
    /* line-height: 200px; */
}
  
.el-main {
    background-color: #E9EEF3;
    text-align: center;
    /* line-height: 160px; */
}

.el-dropdown-link {
    cursor: pointer;
    color: #ffffff;
    font-size: 18px;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>