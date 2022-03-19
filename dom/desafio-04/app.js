new Vue({
	el: '#desafio',
	data: {
		classe1:'destaque',
		minhaClasse:'',
		perigo:'true'

	},
	methods: {
		iniciarEfeito() {

			setInterval(()=>{
				this.classe1= this.classe1=='destaque'? 'encolher':'destaque'
			},1000)

		},
		iniciarProgresso() {

		},

		getPerigo(event){

			if(event.target.value=='true'){

				this.perigo=true
			}else if(event.target.value=='false'){

				this.perigo=false
			}			
		}
	}
})
