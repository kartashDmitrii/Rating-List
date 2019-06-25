 <template>
	<div class="container">
		<div class="religion row align-items-center justify-content-between">
			<p class="col-md-auto h5">Religion<br>(the most common)</p>
			<p class="col-md-auto h4 font-weight-bolder">{{$store.getters.someNationality($store.getters.currentNationality).religion}}</p>
		</div>
		<div class="rating">
			<div v-for="(item,name,index) in $store.getters.getRating">
				<div class="row align-items-center justify-content-between">
					<p class="col-md-auto h5">{{item}}</p>
					<p class="col-md-auto h3 font-weight-bolder">{{$store.getters.someNationality($store.getters.currentNationality)[name]}}</p>
				</div>
				<div class="progress">
				  <div class="progress-bar bg-info" role="progressbar" :style="{width: $store.getters.someNationality($store.getters.currentNationality)[name]*10+'%'}" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
		</div>
		<div class="row justify-content-between">
			<p class="col-md-auto h5">Overall rating <br>(10-max)</p>
			<div class="star row align-items-center col-md-auto h1 font-weight-bolder">
				<p>{{$store.getters.summ($store.getters.currentNationality)}}</p>
				<img :src="'./src/img/star.svg'" alt="star">
			</div>
		</div>
	</div>
 </template>
 <script>
	export default {
	props: ['list'],
  data(){
    return{
      rel: 'lalala'
      }
   },
   methods: {

   },
   computed: {
   }
}
 </script>

<style scoped>
.rating {
	margin: 20px 0;
}
.star {
	color: #fdc54f;
	margin-bottom: 50px;
}
.star p{
	display: inline-block;
	margin: 0;
}
.star img {
	width: 30px;
	height: 30px;
	display: inline-block;
}
 </style>
