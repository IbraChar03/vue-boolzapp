const {createApp} = Vue;



 createApp({

    data(){
        return{
            research : "",
          newMessage : "",
            activeContact : 0,
            contacts: [
              {
                name: 'Michele',
                avatar: 'imgs/avatar_1.jpg',
                visible: true,
                messages: [
                      {
                          date: '20/03/2020 16:30:55',
                          message: 'Hai portato a spasso il cane?',
                          status: 'sent'
                      },
                      {
                          date: '20/03/2020 16:30:55',
                          message: 'Ricordati di stendere i panni',
                          status: 'sent'
                      },
                      {
                          date: '20/03/2020 16:30:55',
                          message: 'Tutto fatto!',
                          status: 'received'
                      }
                  ],
              },
              {
                name: 'Fabio',
                avatar: 'imgs/avatar_2.jpg',
                visible: true,
                messages: [
                      {
                          date: '20/03/2020 16:30:55',
                          message: 'Ciao come stai?',
                          status: 'sent'
                      },
                      {
                          date: '20/03/2020 16:30:55',
                          message: 'Bene grazie! Stasera ci vediamo?',
                          status: 'received'
                      },
                      {
                          date: '20/03/2020 16:35:00',
                          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                          status: 'sent'
                      }
                  ],
              },
              {
                name: 'Samuele',
                avatar: 'imgs/avatar_3.jpg',
                visible: true,
                messages: [
                      {
                          date: '28/03/2020 10:10:40',
                          message: 'La Marianna va in campagna',
                          status: 'received'
                      },
                      {
                          date: '28/03/2020 10:20:10',
                          message: 'Sicuro di non aver sbagliato chat?',
                          status: 'sent'
                      },
                      {
                          date: '28/03/2020 16:15:22',
                          message: 'Ah scusa!',
                          status: 'received'
                      }
                  ],
              },
              {
                name: 'Alessandro B.',
                avatar: 'imgs/avatar_4.jpg',
                visible: true,
                messages: [
                      {
                          date: '10/01/2020 15:30:55',
                          message: 'Lo sai che ha aperto una nuova pizzeria?',
                          status: 'sent'
                      },
                      {
                          date: '10/01/2020 15:50:00',
                          message: 'Si, ma preferirei andare al cinema',
                          status: 'received'
                      }
                  ],
              },
              {
                name: 'Alessandro L.',
                avatar: 'imgs/avatar_1.jpg',
                visible: true,
                messages: [
                      {
                          date: '10/01/2020 15:30:55',
                          message: 'Ricordati di chiamare la nonna',
                          status: 'sent'
                      },
                      {
                          date: '10/01/2020 15:50:00',
                          message: 'Va bene, stasera la sento',
                          status: 'received'
                      }
                  ],
              },
              {
                name: 'Claudia',
                avatar: 'imgs/avatar_2.jpg',
                visible: true,
                messages: [
                      {
                          date: '10/01/2020 15:30:55',
                          message: 'Ciao Claudia, hai novità?',
                          status: 'sent'
                      },
                      {
                          date: '10/01/2020 15:50:00',
                          message: 'Non ancora',
                          status: 'received'
                      },
                      {
                          date: '10/01/2020 15:51:00',
                          message: 'Nessuna nuova, buona nuova',
                          status: 'sent'
                      }
                  ],
              },
              {
                name: 'Federico',
                avatar: 'imgs/avatar_3.jpg',
                visible: true,
                messages: [
                      {
                          date: '10/01/2020 15:30:55',
                          message: 'Fai gli auguri a Martina che è il suo compleanno!',
                          status: 'sent'
                      },
                      {
                          date: '10/01/2020 15:50:00',
                          message: 'Grazie per avermelo ricordato, le scrivo subito!',
                          status: 'received'
                      }
                  ],
              },
              {
                name: 'Davide',
                avatar: 'imgs/avatar_4.jpg',
                visible: true,
                messages: [
                      {
                          date: '10/01/2020 15:30:55',
                          message: 'Ciao, andiamo a mangiare la pizza stasera?',
                          status: 'received'
                      },
                      {
                          date: '10/01/2020 15:50:00',
                          message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                          status: 'sent'
                      },
                      {
                          date: '10/01/2020 15:51:00',
                          message: 'OK!!',
                          status: 'received'
                      }
                  ],
              }
          ]
          
        }
    
    },
    methods:{
        ViewContact(indice){
           {
            this.activeContact = indice;
       
          }
        },
        sendMessage(active,ind){
          let mess = {
            date: '10/01/2020 15:51:00',
            message: this.newMessage,
            status: "sent"
          }

           if(/[0-9]/.test(this.newMessage) || /[a-zA-Z]/.test(this.newMessage)){
             this.contacts[active].messages.push(mess);
           }
        
          
          let newMess=this.newMessage
          let view = this
          setTimeout(function(){
            let messOk = {
              date: '10/01/2020 15:51:00',
            message: "ok",
            status: "received"
           
            }
           
             if(/[0-9]/.test(newMess) || /[a-zA-Z]/.test(newMess)){
                view.contacts[active].messages.push(messOk);
            }
            
          }, 1000);

          var today = new Date();
          var hh = today.getHours();
          var mm = today.getMinutes();
          today = hh + ':' + mm;
          this.contacts[active].messages[this.contacts[active].messages.length-1].date = today
          console.log(today)

          this.newMessage=" "
        },   
        deleteMessage(active,index){
            this.contacts[active].messages.splice(index, 1);
          
        },
        searchCont(index){
            nome=this.contacts[index].name.toLowerCase();
            if(nome.includes(this.research)){
                return true;
            }
            else{
                return false;
            }
        },
        dropDownClick(index){
            var elements = document.getElementsByClassName("dropdown-content");          
            elements[index].classList.toggle("block")

        }
      
    },
  

  }).mount("#app")


  




