new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado:''
    },
    watch:{

        resultado(){
         setTimeout(()=>{

            this.valor=0
         },5000)   
        }
        
      

}
});