<template>
  <div id="app">
  	<rating-app></rating-app>
  <div class="list container">
  	<h1>Brides` comparisons</h1>
  	<table class="table table-sm">
  		<thead>
	  		<tr>
	  			<th>Ethnic group</th>
	  			<th>Overall rating<br>(1-10)</th>
	  			<th v-for="(item,name,index) in $store.getters.getRating">{{item}}<br>(1-10)</th>
	  		</tr>
  		</thead>
  		<tbody>
	  		<tr v-for="(item,index) in $store.getters.getBrides" class="item" @click="$store.commit('changeCurrentNationality',$store.getters.getBrides[index].nationality)">
	  			<td><img :src="'./src/img/'+$store.getters.getBrides[index].nationality+'.png'" :alt="$store.getters.getBrides[index].nationality">{{$store.getters.getBrides[index].nationality}}</td>
	  			<td class="star"><img :src="'./src/img/star.svg'" alt="star">{{$store.getters.summ($store.getters.getBrides[index].nationality)}}</td>
	  			<td v-for="(item,name,index) in $store.getters.getBrides[index]" class="td">{{item}}</td>
	  		</tr>
  		</tbody>
  	</table>
  </div>
  </div>
</template>

<script>
	import ratingApp from './components/Rating'


export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
	  	ratingApp
	}
}
</script>

<style>
	h1 {
		margin-left: 70px;
	}
	.list .table .td:nth-child(-n+4){
		display: none
	}
	.list {
		overflow-x: scroll;
	}
	.list .table {
		min-width: 1000px;
		box-sizing: border-box;
		text-align: center;
	}
	.table img {
		width: 40px;
		height: 40px;
		margin-right: 10px;
	}
	.table thead th,.table td {
		border: none
	}
	.table thead th {
		color: #c5c9cd;
		padding-bottom: 30px;
		font-size: .95em;
		vertical-align: top;
	}
	.table td {
		font-weight: 700;
		vertical-align: middle;
	}
	.table tr {
		cursor: pointer;
	}

	.table th:first-child {
		text-align: left;
	}
	.table td:first-child {
		text-decoration: underline;
		text-align: left;
	}
	.table .star {
		color: #fdc54f;
	}
	.table .star img {
		width: 20px;
		height: 20px;
		margin: 0 5px 5px 0;
	}

	.table tr:hover {
		color: #9a9a9a;
		background-color: rgba(110,191,245,.1);
	}
	.table tr:hover td:first-child {
		text-decoration: none;
	}

</style>
