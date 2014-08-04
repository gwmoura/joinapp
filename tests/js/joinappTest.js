j = new joinApp();

QUnit.test( "Tamahos dos resultados", function( assert ) {
	console.log('results',j.results.length);
	assert.ok( j.results.length == 3, "Passed!" );
});

QUnit.test( "Tamahos dos resultados", function( assert ) {
	console.log('Answers',j.answers.length);
	assert.ok( j.answers.length == 0, "Passed!" );
});

QUnit.test("Add respostas", function(assert){
	
	for(i=0;i<10;i++){
		answer = Math.floor((Math.random() * 3) + 0);
		j.addAnswer(i+1,answer);
	}
	console.log(j.answers);
	assert.ok(j.answers.length>0, "Menor que zero");
});

QUnit.test("Mostrar Resultados",function(assert){
	console.log('Resposta: ',j.showResult());
	console.log('Pontos: ',j.total);
	console.log('Seu desempenho foi de:',j.calculatePoints()+'%');
	assert.ok(j.total>0, "Menor que zero");
});