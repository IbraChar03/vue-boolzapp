const {createApp} = Vue;

 createApp({

    data(){
        return{
          click : false,
            error : false,
            newTask : "",
            playInterval : "",
            tasks: [
              { 
                text: 'Fare i compiti', 
                done: false 
              }, 
              { 
                text: 'Fare la spesa', 
                done: false 
              }, 
              { 
                text: 'Fare il bucato', 
                done: false 
              }
              ]
           
        }
    
    },
    methods:{
        
        }
            
   }

).mount("#app")








