<template>
    <div class="wrap">
    	<y-form>
		    <y-switch label="开关" @change=""></y-switch>
		</y-form>
		<y-form>
		    <y-textarea label="多行输入框" placeholder="placeholder" :limit="20" @change=""></y-textarea>
		</y-form>
        <y-search text="搜索" placeholder="输入以搜索" @search=""></y-search>
        <y-button>Root</y-button>
		<y-popup title="标题" content="文本内容">
		    <y-button-group slot="buttonGroup">
		        <y-tab-item title="取消">213</y-tab-item>
		        <y-tab-item class="active" title="确认">423</y-tab-item>
		    </y-button-group>
		</y-popup>
		<!--路由配置的组件将会渲染在这里-->
        <router-view></router-view>
    </div>
</template>

<script>
    import router from 'src/router'
    import store from 'src/vuex'
    import filters from 'filters'

    export default {
        router,
        store,
        filters,
        name: 'root',
        components: {}
    }
</script>
