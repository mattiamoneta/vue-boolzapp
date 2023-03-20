const { createApp } = Vue
const DateTime = luxon.DateTime;

createApp({
  data() {
    return{
      activePerson : 0,
      now : DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
      speech : window.SpeechRecognition,
      searchQuery : "",
      foundMatch : [],
      sentMsg : "",
      notifyBanner : true,
      lastDropRef : "",
      activePersonMsg : [],
      isWriting : false,
      whoIsWriting : "",
      isSpeaking : false,
      fakeMsgs : [
        'Hey ciao!',
        'Tutto bene?',
        'Ok Capito!',
        'Tutto chiaro!'
      ],
      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        read : "read"
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        read : "read"
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        read : "read"
                        }
                    ],
        },
        {
          name: 'Fabio',
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        read : "read"
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        read : "read"
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        read : "read"
                        }
                    ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
                      {
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received',
                      read : "read"
                      },
                      {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received',
                      read : "read"
                      }
                    ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
                      {
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received',
                      read : "read"
                      }
                    ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
                      {
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received',
                      read : "read"
                      }
                    ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
                      {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received',
                      read : "read"
                      },
                      {
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent',
                      read : "read"
                      }
                    ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
                      {
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received',
                      read : "read"
                      }
                    ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
                      {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received',
                      read : "read"
                      },
                      {
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received',
                      read : "read"
                      }
                    ],
        }
      ]
    }
  },
  methods: {

    // Imposta la conversazione attuale
    currentConversation(index){
      this.activePersonMsg = null;
      this.activePerson = index;
      this.activePersonMsg = this.contacts[index].messages;
    },

    // Finto messaggio "sta scrivendo"
    fakeWriting(){
      const clock = setTimeout(() => {
        this.isWriting = true;
        this.whoIsWriting = this.contacts[this.activePerson].name;
        this.fakeResponse();
      },3000);
    },

    // Finta risposta alla chat
    fakeResponse(){
      const clock = setTimeout(() => {

        this.contacts[this.activePerson].messages[this.contacts[this.activePerson].messages.length - 1].read = "read";

        this.contacts[this.activePerson].messages.push(
          {
            date: this.now,
            message: this.randomMsg(),
            status: 'received',
            read : "read"
          }
        );
        
        this.isWriting = false;
        this.whoIsWriting = "";

      },4000);
    },

    // Invia messaggio
    sendNewMsg(){
      if (this.sentMsg != ""){
        this.contacts[this.activePerson].messages.push(
          {
            date: this.now,
            message: this.sentMsg,
            status: 'sent',
            read: ""
          }
        );
        this.currentConversation(this.activePerson);
        this.sentMsg = "";

        this.fakeWriting();
      }
    },

    // Apertura dropdown via REF
    handleDropdown(selector){
      
      if((this.lastDropRef != selector) && (this.lastDropRef != "")){
        this.$refs[this.lastDropRef].classList.remove('show');
      }

      console.log(this.$refs[selector]);
      this.$refs[selector].classList.toggle('show');

      this.lastDropRef = selector;
    },

    // Chiusura dropdown all'uscita del mouse
    disposeDropdown(){
      const clock = setTimeout(() => {
      this.$refs[this.lastDropRef].classList.remove('show');
    }, 300);
    },

    // Finto accesso notifiche
    requestNotifications(){
      Notification.requestPermission()
      this.notifyBanner = false;
    },

    voiceRecord(){
      //Uso delle Web Speech API !!! VA SOLO SU CHROME, FIXARE !!!
      this.isSpeaking = true;
      let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;    
      let speech = new SpeechRecognition(); //Nuova istanza da classe SpeechRecognition

      this.isSpeaking = true;

      speech.start();

      speech.onresult = (e) => {
            let lastWord = e.resultIndex;         
            let speechResult = e.results[lastWord][0].transcript;
            this.sentMsg = speechResult;
            this.isSpeaking = false;
          }
    },

    // Ricerca delle chat
    realtimeSearch(){
       if (this.searchQuery != ""){
          this.foundMatch = this.contacts.filter(e => e.name.startsWith(this.searchQuery));
       }
    },

    //Risposta a random
    randomMsg(){

      const n = Math.floor(Math.random() * this.fakeMsgs.length - 1);
      
      return this.fakeMsgs[n];

    }
  
  },
  
  mounted(){
    // Imposta la conversazione attuale
    this.currentConversation(this.activePerson);
  }
}).mount('#app')