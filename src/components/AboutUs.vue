<template>
    <div class="total">
        <el-image class="logo"
                src="logo.png"
                fit="scale-down">
        </el-image>
        <div class="content">
            
            <el-divider class="divider" content-position="left">
                <span class="dividerText">
                    项目简介
                </span>
            </el-divider>
            
            <span class="description">
                本项目响应国家重点推动人工智能战略中的建设安全便捷的智能社会的号召，致力于推进社会治理智能化，提升公共安全保障能力。项目着手解决目前公安追查嫌疑人的刑事记忆画像存在的缺陷：考察画者本身水平、画像噪声较大、筛选匹配效率过低，实现素描图像生成人脸图像、素描图像对比识别人脸两大核心功能，针对公安的直接需求和工作痛点提供辅助功能，构建完整Web系统，为公安提供一站式智能辅助平台，协助提高办案效率和准确率。
            </span>
            
            <el-divider class="divider" content-position="left">
                <span class="dividerText">
                    创新意义
                </span>
            </el-divider>
            
            <span class="creativity">
                <!-- <ul>
                    <li>1. 解决刑事记忆画像难点，辅助警方办案。</li>
                    <li>2. 综合生成识别两大核心功能和辅助功能，构建一站式服务平台。</li>
                    <li>3. 融合改进新兴高效算法模型，提升算法效率和准确率。</li>
                    <li>4. 提供交互界面，用户微调选择结果，助力反馈改进算法。</li>
                </ul> -->
                
                1. 解决刑事记忆画像难点，辅助警方办案。                        <br>
                2. 综合生成识别两大核心功能和辅助功能，构建一站式服务平台。      <br>
                3. 融合改进新兴高效算法模型，提升算法效率和准确率。             <br>
                4. 提供交互界面，用户微调选择结果，助力反馈改进算法。           <br>

            </span>
            
            <el-divider class="divider" content-position="left">
                <span class="dividerText">
                    社会价值
                </span>
            </el-divider>
            
            <span class="description">
                立足于《国务院关于印发新一代人工智能发展规划的通知》，响应国家重点推动人工智能战略中的建设安全便捷的智能社会的号召，致力于推进社会治理智能化和提升公共安全保障能力。帮助公安在面对棘手的刑事案件中，难以对凶手容貌进行直观清晰判别时，通过素描生成人脸技术更快更精准地寻找到犯罪嫌疑人。
            </span>
            
        </div>
    </div>
</template>

<script>
// Nothing
</script>

<style>
.el-divider__text {
    background-color: rgb(233,238,243);
}
</style>

<style scoped>
.total {
    position: relative;
    height: 100%;
    /* Use Flex */
    display: flex;
    display: -webkit-flex;
    /* Main Axis Direction */
    flex-direction: row;
    /* Main Axis Wrap */
    flex-wrap: nowrap;
    /* Main Axis Alignment */
    justify-content: center;
    /* Cross Axis Alignment */
    align-items: center;
    
    /* background-color: red; */
}

.total .logo {
    /* flex-basis: 50%; */
    margin-right: 100px;
    height: 300px;
    width: 300px;
}

.total .content {
    flex-basis: 50%;
    
    /* Use Flex */
    display: flex;
    display: -webkit-flex;
    /* Main Axis Direction */
    flex-direction: column;
    /* Main Axis Wrap */
    flex-wrap: nowrap;
    /* Main Axis Alignment */
    justify-content: center;
    /* Cross Axis Alignment */
    align-items: center;
    
    /* background-color: blue; */
}

.total .content .description {
    text-indent: 2em;
    text-align: justify;
    font-size: 18px;
}

.total .content .creativity {
    text-align: justify;
    font-size: 18px;
}


.total .content .divider {
    height: 4px;
    background-color: rgb(64,158,255);
}

.dividerText {
    /* font-family: '黑体'; */
    font-size: 20px;
    font-weight: 800;
}
</style>