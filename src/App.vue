<template>
  <div id="app" class="el-app">

    <header class="el-header">

        <div class="el-header-nav">

            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-sync" mode="horizontal">
                <el-menu-item index="1">

                  <router-link to="/">同步任务</router-link>

                </el-menu-item>
                <el-menu-item index="2">

                  <router-link  to="/editForm">任务日志清单</router-link>

                </el-menu-item>
            </el-menu>

        </div>

    </header>


    <main class="el-main">
        <div class="router-view">

            
            <router-view class="view"></router-view>
            
            
        </div>
    </main>

    



  </div>
</template>

<script>


  export default {

    data () {
      return {
        activeIndex: '1'
      }
    },

    methods: {
        
    }

  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  margin: 0;
}

.el-app {
    width: 90%;
    margin: 0 auto;
}


.el-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 60px;
    color: #cbcfd4;
    z-index: 1000;
}
.el-menu-sync {
    padding: 0 5%;
}


.el-main {
    padding: 15px;
}
.router-view {
  padding-top: 60px;
}


</style>
