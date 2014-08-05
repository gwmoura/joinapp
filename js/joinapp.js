var joinApp = function(){
	this.questions = [
		//Q 1
		{
			id:1,
			text:'Como sua empresa identifica oportunidades em seu ambiente de negócios?',
			answers:[
				{
					text:'Por contatos informais e sondagem de informações sobre empreendedorismo e inovação',
					value:1
				},
				{
					text:'Direcionando a observação para dentro da empresa',
					value:0
				},
				{
					text:'Utilizando uma rede de clientes, funcionários, fornecedores e parceiros para observar, entre outros aspectos, a dinâmica dos concorrentes',
					value:2
				}
			]
		},
		//Q 2
		{
			id:2,
			text:' Como sua empresa encara os riscos de inovação?',
			answers:[
				{
					text:'A empresa evita arriscar devido a experiências anteriores que não deram certo',
					value:0
				},
				{
					text:'Mesmo quando não dá certo, a empresa avalia as mudanças e aguarda um novo momento ou ideia para investir',
					value:2
				},
				{
					text:'A empresa sempre aposta em novas ideias',
					value:1
				}
			]
		},
		//Q 3
		{
			id:3,
			text:'Em que tipos de inovação sua empresa acredita poder inovar?',
			answers:[
				{
					text:'No processo de produção e nas vendas, porque nossos produtos (bens e serviços) carecem de pouca inovação',
					value:0
				},
				{
					text:'Em nossos produtos (bens ou serviços), porque o cliente percebe a inovação imediatamente nestes aspectos',
					value:1
				},
				{
					text:'Em qualquer esfera da empresa a inovação pode ser bem-vinda',
					value:2
				}
			]
		},
		//Q 4
		{
			id:4,
			text:'Como sua empresa busca apoio para inovar?',
			answers:[
				{
					text:'Observando como outras empresas lidam com inovação',
					value:0
				},
				{
					text:'Fazendo contato com a rede de relacionamentos para ouvir sugestões e novas ideias',
					value:1
				},
				{
					text:'Além dos círculos de contato, consultando organizações que oferecem serviços personalizados, parcerias e mantém o diálogo entre academia e os setores produtivos',
					value:2
				}
			]
		},
		//Q 5
		{
			id:5,
			text:'Como sua empresa analisaria se desenvolveu uma inovação importante?',
			answers:[
				{
					text:'Ao apresentar um produto novo que aumentasse os lucros',
					value:1
				},
				{
					text:'Ao ser reconhecida como inovadora pela rede de relacionamentos',
					value:0
				},
				{
					text:'Ao construir boas ideias de forma colaborativa com algum impacto na empresa',
					value:2
				}
			]
		},
		//Q 6
		{
			id:6,
			text:'Como sua empresa aproveita e observa a recepção de inovações no seu ambiente de negócios?',
			answers:[
				{
					text:'Verificando o impacto nos lucros',
					value:0
				},
				{
					text:'Colhendo informações com questionários de avaliação, pesquisas de mercado e movimentando a comunicação',
					value:1
				},
				{
					text:'Consultando e interagindo com a rede de rede de clientes, funcionários, fornecedores e parceiros para fortalecer as oportunidades e manter a inovação como rotina da empresa',
					value:2
				}
			]
		},
		//Q 7
		{
			id:7,
			text:'De que forma os funcionários da sua empresa são aproveitados na busca pela inovação?',
			answers:[
				{
					text:'Todos podem interagir e as ideias são registradas para o momento adequado de serem amadurecidas e aproveitadas',
					value:2
				},
				{
					text:'Ocasionalmente a empresa consulta os funcionários',
					value:1
				},
				{
					text:'Apenas a diretoria é responsável por mudanças e novidades',
					value:0
				}
			]
		},
		//Q 8
		{
			id:8,
			text:'Como é o ambiente de trabalho proporcionado aos seus funcionários em sua empresa?',
			answers:[
				{
					text:'A empresa oferece a possibilidade de organizar espaços de trabalho e conforto para o funcionário poder criar e trabalhar com mais criatividade',
					value:2
				},
				{
					text:'A empresa experimenta algumas tendências, mas apenas em setores específicos',
					value:1
				},
				{
					text:'A empresa mantém a formalidade e os padrões para evitar riscos na imagem',
					value:0
				}
			]
		},
		//Q 9
		{
			id:9,
			text:'Ao montar uma equipe estratégica para o desenvolvimento de um trabalho muito importante, como sua empresa lidaria com a situação?',
			answers:[
				{
					text:'Recrutaria os profissionais mais organizados da empresa',
					value:1
				},
				{
					text:'Selecionaria profissionais de diversos setores, com potencial inovador e criativo, para aturem de forma colaborativa',
					value:2
				},
				{
					text:'Contrataria consultoria especializada ou com experiência em inovação',
					value:0
				}
			]
		},
		//Q 10
		{
			id:10,
			text:'Imagine sua empresa com alguns anos de mercado e necessitando reposicionamento: qual caminho possível de ser seguido?',
			answers:[
				{
					text:'Realizar consultas na rede de clientes',
					value:1
				},
				{
					text:'Investir em marketing, marca, campanhas, ações de mídia e redes sociais',
					value:0
				},
				{
					text:'Ampliar o diálogo com os funcionários, interagir com a rede de relacionamentos e construir as mudanças de forma colaborativa',
					value:2
				}
			]
		},
	],
	//variavel com as respostas finais
	this.results = [
		{
			name:'Não sabe nada',
			description:'Sua empresa precisa conhecer mais sobre inovação porque boas ideias e talentos podem estar sendo desperdiçados. Quer fazer uma análise detalhada? Cadastre-se gratuitamente no Portal JOIN e responda à Matriz JOIN, que vai indicar o grau de maturidade de inovação da sua empresa. Aproveite para conhecer a Tecnologia JOIN e contratá-la imediatamente!',
			score:[0.0,50.0]
		},
		{
			name:'Sabe alguma coisa',
			description:'Sua empresa teve um bom desempenho mas precisa investir mais em inovação. Quer fazer uma análise detalhada? Cadastre-se gratuitamente no Portal JOIN e responda à Matriz JOIN, que vai indicar o grau de maturidade de inovação da sua empresa. Aproveite para conhecer a Tecnologia JOIN e contratá-la imediatamente!',
			score:[51.0,79.0]
		},
		{
			name:'Sabe muuuito',
			description:'Parabéns! Sua empresa possui uma excelente relação com inovação. Mas será que tudo está sendo perfeitamente aproveitado? Aproveite para fazer uma análise detalhada cadastrando-se gratuitamente no Portal JOIN e respondendo à Matriz JOIN, que vai indicar o grau de maturidade de inovação da sua empresa. Conheça a Tecnologia JOIN e faça a adesão imediatamente!',
			score:[80.0,100.0]
		},
	],
	this.answers = [],
	this.total = 0,
	
	this.calculatePoints = function(){
		this.total=0;
		questions = this.answers.length-1;
		for(i=1;i<=questions;i++){
			this.total += this.answers[i];
		}
		points = (this.total/(questions*2))*100;
		return points.toFixed(1);
	},

	this.nextQuestion = function(){
		questionid = $("#actual_question").val();

		if($("#question_"+questionid+".answers input[type=radio]")){

		}
		console.log('Question id',questionid);
		questionid=parseInt(questionid)+1;
		console.log('New value',questionid);
		console.log('Question',$("#question_"+questionid));


		if(questionid<11){
			$(".question").hide();
			$("#question_"+questionid).show();
			$(".progress-bar").width((questionid*10)+'%');
			$("#actual_question").val(questionid);
			$(".legend-question").text("Questão "+questionid+" de "+this.questions.length);
		}else{
			this.gameOver();
		}
	},

	this.addAnswer = function(questionid,answer){
		return this.answers[questionid]=answer;
	},

	this.showResult = function(){
		result = {}
		points = this.calculatePoints();
		for(i=0;i<this.results.length;i++){
			console.log(points + '>=' + this.results[i].score[0] + '&&' + points + '<=' + this.results[i].score[1]);
			if(points >= this.results[i].score[0] && points <= this.results[i].score[1]){
				result=this.results[i];
			}
		}
		return result
	},

	this.questionsTemplate = function(){
		questionstpl = '';

		for(i=0;i<this.questions.length;i++){
			q = this.questions[i];
			questionstpl += ''+
			'<div class="question" id="question_'+q.id+'" style="display:none;">'+
	          '<p class="lead">'+q.text+'</p>'+
	          '<div class="answers">';
	        	for(a=0;a<q.answers.length;a++){
	        		an = q.answers[a];
	        		questionstpl  += ''+
	        		'<div class="answer">'+
		             '<input id="answer_'+a+'_'+q.id+'" name="'+q.id+'" type="radio" value="'+an.value+'">'+
		             '<label for="answer_'+a+'_'+q.id+'"><span>'+an.text+'</span></label>'+
		            '</div>';
	        	}
	        questionstpl += ''+
	          '</div>'+
	        '</div>';
		}

		return questionstpl;	
	},

	this.gameOver = function(){
		alert('Geme Over');
	}
}
