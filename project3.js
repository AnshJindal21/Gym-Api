const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59b5aa419emsh47b48631092d2e6p196bf2jsnde2d32752267',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};
const getexcersise=(muscle)=>{
fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=' + muscle, options)
	.then(response => response.json())


	.then((response)=>{
		console.log(response);
		mus.innerHTML=muscle;
		name1.innerHTML=response[0].name;
		type1.innerHTML=response[0].type;
		diff1.innerHTML=response[0].difficulty;
		equip1.innerHTML=response[0].equipment;
		exp1.innerHTML=response[0].instructions;

		name2.innerHTML=response[1].name;
		type2.innerHTML=response[1].type;
		diff2.innerHTML=response[1].difficulty;
		equip2.innerHTML=response[1].equipment;
		exp2.innerHTML=response[1].instructions;


		name3.innerHTML=response[2].name;
		type3.innerHTML=response[2].type;
		diff3.innerHTML=response[2].difficulty;
		equip3.innerHTML=response[2].equipment;
		exp3.innerHTML=response[2].instructions;

		name4.innerHTML=response[3].name;
		type4.innerHTML=response[3].type;
		diff4.innerHTML=response[3].difficulty;
		equip4.innerHTML=response[3].equipment;
		exp4.innerHTML=response[3].instructions;

		name5.innerHTML=response[4].name;
		type5.innerHTML=response[4].type;
		diff5.innerHTML=response[4].difficulty;
		equip5.innerHTML=response[4].equipment;
		exp5.innerHTML=response[4].instructions;

		name6.innerHTML=response[5].name;
		type6.innerHTML=response[5].type;
		diff6.innerHTML=response[5].difficulty;
		equip6.innerHTML=response[5].equipment;
		exp6.innerHTML=response[5].instructions;

		name7.innerHTML=response[6].name;
		type7.innerHTML=response[6].type;
		diff7.innerHTML=response[6].difficulty;
		equip7.innerHTML=response[6].equipment;
		exp7.innerHTML=response[6].instructions;

		name8.innerHTML=response[7].name;
		type8.innerHTML=response[7].type;
		diff8.innerHTML=response[7].difficulty;
		equip8.innerHTML=response[7].equipment;
		exp8.innerHTML=response[7].instructions;

		name9.innerHTML=response[8].name;
		type9.innerHTML=response[8].type;
		diff9.innerHTML=response[8].difficulty;
		equip9.innerHTML=response[8].equipment;
		exp9.innerHTML=response[8].instructions;


	})
	.catch(err => console.error(err));
}



submit1.addEventListener("click",(e)=>{
	e.preventDefault();
	getexcersise(muscle.value);
})

getexcersise("biceps");


