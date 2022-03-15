new Vue({
    el: '#desafio',
    data: {
        valor: '',
        data:''
    },
    methods:{

        alerta(){

            alert('estou alertando')
        },
        guardaData(e){

            this.valor=e.target.value
        }
    }
})