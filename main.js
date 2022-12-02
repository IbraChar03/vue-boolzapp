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
                          date: '16:30',
                          message: 'Hai portato a spasso il cane?',
                          status: 'sent'
                      },
                      {
                          date: '16:50',
                          message: 'Ricordati di stendere i panni',
                          status: 'sent'
                      },
                      {
                          date: '17:10',
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
                          date: '18:20',
                          message: 'Ciao come stai?',
                          status: 'sent'
                      },
                      {
                          date: '18:30',
                          message: 'Bene grazie! Stasera ci vediamo?',
                          status: 'received'
                      },
                      {
                          date: '19:00',
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
                          date: '10:10',
                          message: 'La Marianna va in campagna',
                          status: 'received'
                      },
                      {
                          date: '10:12',
                          message: 'Sicuro di non aver sbagliato chat?',
                          status: 'sent'
                      },
                      {
                          date: '15:22',
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
                          date: '15:30',
                          message: 'Lo sai che ha aperto una nuova pizzeria?',
                          status: 'sent'
                      },
                      {
                          date: '15:50',
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
                          date: '15:30',
                          message: 'Ricordati di chiamare la nonna',
                          status: 'sent'
                      },
                      {
                          date: '15:50',
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
                          date: ' 15:30',
                          message: 'Ciao Claudia, hai novità?',
                          status: 'sent'
                      },
                      {
                          date: '15:50',
                          message: 'Non ancora',
                          status: 'received'
                      },
                      {
                          date: '15:51',
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
                          date: '15:30',
                          message: 'Fai gli auguri a Martina che è il suo compleanno!',
                          status: 'sent'
                      },
                      {
                          date: '15:50',
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
                          date: '15:30',
                          message: 'Ciao, andiamo a mangiare la pizza stasera?',
                          status: 'received'
                      },
                      {
                          date: '15:50',
                          message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                          status: 'sent'
                      },
                      {
                          date: '15:51',
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
            date: "15:23",
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
            view.contacts[active].messages[view.contacts[active].messages.length-1].date = today
            
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

        },
        darkMode(){
            let main = document.querySelector("main");
            main.style.backgroundColor="#121b22";

            let header = document.querySelector("header");
            header.style.backgroundColor="#091d1d";

            let profilo = document.getElementsByClassName("profilo");
          for (let index = 0; index < profilo.length; index++) {
            profilo[index].style.backgroundColor="#1f2c34";
            profilo[index].style.border="none";
            
          }

            let notifiche = document.querySelector(".notifiche");
            notifiche.style.backgroundColor="#182329";

            let bell = document.querySelector(".bell");
            bell.style.color="#221b29";

            let ricevi = document.querySelector(".ricevi");
            ricevi.style.color="#fff";

            let imgbell = document.querySelector(".img-bell");
            imgbell.style.backgroundColor="#50c0ec";

            let search = document.querySelector(".search");
            search.style.backgroundColor="#121b22";

            let inputSearch = document.getElementById("search-chat");
            inputSearch.style.backgroundColor="#1f2c34";
            inputSearch.style.border="none";

            let contatto = document.getElementsByClassName("contatto")
            for (let index = 0; index < contatto.length; index++) {
                contatto[index].style.backgroundColor="#121b22"
                
            }
            let chatBackground = document.querySelector(".chat")
            chatBackground.style.backgroundImage = "url(imgs/bool.png)"

            let inputMess = document.querySelector(".input-messaggio")
            inputMess.style.backgroundColor="#1f2c34"
            let inputChat = document.getElementById("input-chat")
            inputChat.style.backgroundColor="#2b3942"
            inputChat.style.color="#fff"
            inputChat.style.border="none"

            let messContatto = document.getElementsByClassName("mess-contatto")
            for (let index = 0; index < messContatto.length; index++) {
                messContatto[index].style.color="black"
                
            }

            let nomeCont = document.getElementsByClassName("nome")
            for (let index = 0; index < nomeCont.length; index++) {
                nomeCont[index].style.color="#fff"
                
            }


            let messUser = document.getElementsByClassName("mess-utente")
            for (let index = 0; index < messUser.length; index++) {
                messUser[index].style.color="black"
                
            }

            let dropdown = document.getElementsByClassName("dropbtn")
            for (let index = 0; index < dropdown.length; index++) {
                dropdown[index].style.backgroundColor="#005e4a"
               
                
            }

            let dropdown2 = document.getElementsByClassName("dropbtn2")
            for (let index = 0; index < dropdown2.length; index++) {
                dropdown2[index].style.backgroundColor="#1f2c34"
               
                
            }
            
                
            
                
           
        }
      
    },
  

  }).mount("#app")


  




