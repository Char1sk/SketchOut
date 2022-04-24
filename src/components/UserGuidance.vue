<template>
    <div class="all">
        <div class="title">使用帮助</div>
        <div class="content">
            <el-card class="boxCard" shadow="hover">
                <!-- <div slot="header" class="clearfix">
                    <span>人脸素描图片检索</span>
                </div> -->
                <el-alert slot="header"
                        type="success"
                        center
                        :closable="false">
                    <span class="leftTitle">
                        人脸素描图片检索
                    </span>
                </el-alert>
                <div class="smallContent">
                    1. 点击左侧图片框，选择用于检索的人脸素描图片。                        <br>
                    2. 点击左侧下方按钮，将素描图片上传到服务器进行检索。                   <br>
                    3. 等待服务器在人脸图片库中进行检索操作。                              <br>
                    4. 服务器返回结果图片地址，在右侧图片框中可预览。                       <br>
                    5. 点击右侧图片框，可以进入结果图片的大图预览模式。                     <br>
                    6. 点击右侧下方按钮，将结果图片下载到本地。                            <br>
                    7. 点击中间红色按钮，可以清除已上传图片和结果图片。                     <br>
                </div>
            </el-card>
            <el-card class="boxCard" shadow="hover">
                <!-- <div slot="header" class="clearfix">
                    <span>人脸素描照片生成</span>
                </div> -->
                <el-alert class="rightBack"
                        slot="header"
                        type="success"
                        center
                        :closable="false">
                    <span class="rightTitle">
                        人脸素描照片生成
                    </span>
                </el-alert>
                <div class="smallContent">
                    1. 点击左侧图片框，选择用于生成的人脸素描图片。                        <br>
                    2. 点击左侧下方按钮，将素描图片上传到服务器进行生成。                   <br>
                    3. 等待服务器使用素描图片进行照片生成工作。                            <br>
                    4. 服务器返回结果图片地址，在右侧图片框中可预览。                       <br>
                    5. 点击右侧图片框，可以进入结果图片的大图预览模式。                     <br>
                    6. 点击右侧下方按钮，将结果图片下载到本地。                            <br>
                    7. 点击中间红色按钮，可以清除已上传图片和结果图片。                     <br>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
// Nothing
</script>

<style scoped>
.all {
    position: relative;
    height: 100%;
    
    /* background-color: red; */
}

.all .title {
    font-size: 24px;
}

.all .content {
    
    height: 90%;
    /* Use Flex */
    display: flex;
    display: -webkit-flex;
    /* Main Axis Direction */
    flex-direction: row;
    /* Main Axis Wrap */
    flex-wrap: nowrap;
    /* Main Axis Alignment */
    justify-content: space-around;
    /* Cross Axis Alignment */
    align-items: center;
    
    /* background-color: blue; */
}


.all .content .boxCard {
    width: 40%;
}

.all .content .boxCard .leftTitle {
    font-size: 24px;
}

.all .content .boxCard .rightBack {
    background-color: rgb(215, 234, 255);
}

.all .content .boxCard .rightTitle {
    font-size: 24px;
    color: rgb(64,158,255);
}


.all .content .boxCard .smallContent {
    /* font-size: 24px; */
    text-align: justify;
}

</style>