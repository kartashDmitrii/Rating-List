import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		bridesList: [
			{
				nationality: 'Russian',
				religion: 'Christian',
				girl_beauty: 9.1,
				fam_orient: 8.6,
				dat_old_guy: 7.3,
				ease_sed: 8.6,
				eng_speak: 7.3
			},
			{
				nationality: 'Ukrainian',
				religion: 'Christian',
				girl_beauty: 9.3,
				fam_orient: 8.6,
				dat_old_guy: 8.3,
				ease_sed: 9.6,
				eng_speak: 8.3
			},
			{
				nationality: 'Brazilian',
				religion: 'Christian',
				girl_beauty: 8.8,
				fam_orient: 5.6,
				dat_old_guy: 9.6,
				ease_sed: 7.6,
				eng_speak: 3.3
			},
			{
				nationality: 'Venezuelan',
				religion: 'Christian',
				girl_beauty: 8.2,
				fam_orient: 8.7,
				dat_old_guy: 9.3,
				ease_sed: 5.6,
				eng_speak: 7.8
			},
			{
				nationality: 'Chinese',
				religion: 'Buddhism',
				girl_beauty: 7.9,
				fam_orient: 8.6,
				dat_old_guy: 3.3,
				ease_sed: 5.6,
				eng_speak: 7.3
			},
			{
				nationality: 'Thai',
				religion: 'Buddhism',
				girl_beauty: 8.1,
				fam_orient: 8.6,
				dat_old_guy: 8.3,
				ease_sed: 9.6,
				eng_speak: 1.3
			},
			{
				nationality: 'American',
				religion: 'Christian',
				girl_beauty: 8.8,
				fam_orient: 8.6,
				dat_old_guy: 6.3,
				ease_sed: 5.6,
				eng_speak: 10
			},
			{
				nationality: 'Australian',
				religion: 'Christian',
				girl_beauty: 8.7,
				fam_orient: 8.6,
				dat_old_guy: 9.3,
				ease_sed: 3.2,
				eng_speak: 8.6
			},
			{
				nationality: 'UK brides',
				religion: 'Christian',
				girl_beauty: 8.9,
				fam_orient: 8.6,
				dat_old_guy: 8.3,
				ease_sed: 7.6,
				eng_speak: 10
			},
			{
				nationality: 'Filipino',
				religion: 'Christian',
				girl_beauty: 8.2,
				fam_orient: 8.6,
				dat_old_guy: 9.3,
				ease_sed: 8.6,
				eng_speak: 3.3
			},
			{
				nationality: 'Colombian',
				religion: 'Christian',
				girl_beauty: 8.7,
				fam_orient: 8.6,
				dat_old_guy: 5.3,
				ease_sed: 9.6,
				eng_speak: 6.9
			},
		],
		ratingList: {
			girl_beauty: 'Girls` Beauty',
			fam_orient: 'Family oriented',
			dat_old_guy: 'Dating older guy',
			ease_sed: 'Ease of seduction',
			eng_speak: 'English speaking'
		},
		currentNationality: 'Thai'
	},
	getters: {
		getBrides: state => {
			return state.bridesList
		},
		getRating: state => {
			return state.ratingList
		},
		currentNationality: state => {
			return state.currentNationality
		},
		someNationality: state => filter => {
			let Nationality
			for (let i = 0; i<state.bridesList.length; i++){
				if (state.bridesList[i].nationality == filter){
					Nationality = state.bridesList[i]
					continue;
				}
			}
			if (typeof(Nationality) == undefined){
				console.log('Error! 404')
			} else {
				return Nationality
			}
		},
		summ: state => filter => {
			let obj
			for (let i = 0; i<state.bridesList.length; i++){
				if (state.bridesList[i].nationality == filter){
					obj = state.bridesList[i]
					continue;
				}
			}
   		let summ = 0
   		let count = 0
   		for (let prop in obj) {
   			if(typeof(obj[prop]) == 'number'){
   				summ+=obj[prop]
   				count++
   			}
   		}
   		return (summ/count).toFixed(1)
		}
	},
	mutations: {
		changeCurrentNationality(state, value){
			state.currentNationality = value
		}
	},
	actions: {

	}
});