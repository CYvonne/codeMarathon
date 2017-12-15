<template>
	<div>
		<v-navbar :title="title" :left-options="leftOptions" @on-click-back="back">
		</v-navbar>

		<router-view></router-view>
		
		<v-tabbar>
       <v-tabbar-item selected link="/mainTab1">
        <span slot="icon" class="icon1"></span>
        <span slot="label">导航一</span>
      </v-tabbar-item>
      <v-tabbar-item link="/mainTab2">
        <span slot="icon" class="icon2"></span>
        <span slot="label">导航2</span>
      </v-tabbar-item>
      <v-tabbar-item link="/mainTab3">
        <span slot="icon" class="icon3"></span>
        <span slot="label">导航3</span>
      </v-tabbar-item>
      <v-tabbar-item link="/mainTab4">
        <span slot="icon" class="icon4"></span>
        <span slot="label">导航4</span>
      </v-tabbar-item>
    </v-tabbar>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title:'首页标题',
				footerVisable:true,
				backNum: 1,
			}
		},
		computed: {
			leftOptions() {
				return {
					backText: '返回',
					showBack: this.$route.path == '/mainTab1' || this.$route.path == '/mainTab2' || this.$route.path == '/mainTab3' || this.$route.path == '/mainTab4'? false : true,
					preventGoBack: true,
				}
			},
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
		}
	}
</script>