const { createApp } = Vue
const DateTime = luxon.DateTime;

createApp({
  data() {
    return{
      theme: '',
      splashPage: true,
      welcomePage : true,
      userPicDrop: false,
      showDrop1 : false,
      showDrop2 : false,
      showDropdown : false,
      indexShowDropdown : null,
      showChatDropdown: false,
      indexChatDropdown : null,
      activePerson : 0,
      speech : window.SpeechRecognition,
      badgeMsg : "In ascolto",
      dropdown : "",
      searchQuery : "",
      foundMatch : [],
      sentMsg : "",
      notifyBanner : true,
      lastDropRef : "",
      activePersonMsg : [],
      isSpeaking : false,
      fontIndex: 1,
      fontSizes : [
        'font-sm',
        'font-md',
        'font-lg',
        'font-xl'
      ],
      fakeMsgs : [
        'Hey ciao!',
        'Tutto bene?',
        'Ok Capito!',
        'Tutto chiaro!'
      ],
      user: {
        name: 'Mattia',
        avatar: './img/user_current.png'
      },
      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          currentAction: "",
          lastAccess : "16:15",
          online: false,
          isWriting: false,
          messages: [
                        {
                        date: '15:30',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        read : "read"
                        },
                        {
                        date: '15:50',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        read : "read"
                        },
                        {
                        date: '16:15',
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
          currentAction: "",
          lastAccess : "16:35",
          online: false,
          isWriting: false,
          messages: [
                        {
                        date: '16:30',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        read : "read"
                        },
                        {
                        date: '16:30',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        read : "read"
                        },
                        {
                        date: '16:35',
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
          currentAction: "",
          lastAccess : "16:15",
          online: false,
          isWriting: false,
          messages: [
                      {
                      date: '10:10',
                      message: 'La Marianna va in campagna',
                      status: 'received',
                      read : "read"
                      },
                      {
                      date: '10:20',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '16:15',
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
          currentAction: "",
          lastAccess : "15:50",
          online: false,
          isWriting: false,
          messages: [
                      {
                      date: '15:30',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '15:50',
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
          currentAction: "",
          lastAccess : "15:50",
          online: false,
          isWriting: false,
          messages: [
                      {
                      date: '15:30',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '15:50',
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
          currentAction: "",
          lastAccess : "15:51",
          online: false,
          isWriting: false,
          messages: [
                      {
                      date: '15:30',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '15:50',
                      message: 'Non ancora',
                      status: 'received',
                      read : "read"
                      },
                      {
                      date: '15:51',
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
          currentAction: "",
          lastAccess : "15:50",
          online: false,
          isWriting: false,
          messages: [
                      {
                      date: '15:30',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '15:50',
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
          currentAction: "",
          lastAccess : "15:51",
          online: false,
          isWriting: false,
          messages: [
                      {
                      date: '15:30',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received',
                      read : "read"
                      },
                      {
                      date: '15:50',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent',
                      read : "read"
                      },
                      {
                      date: '15:51',
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
      if(index < 0){
        this.welcomePage = true;
      }else if (index < this.contacts.length){
        this.welcomePage = false;
        this.activePersonMsg = null;
        this.activePerson = index;
        this.activePersonMsg = this.contacts[index].messages;
      }else if(this.contacts.length == 0){
        this.welcomePage = true;
      }else {
        this.welcomePage = false;
        this.activePersonMsg = null;
        this.activePerson = 0;
        this.activePersonMsg = this.contacts[0].messages;
      }
    },

    // Invia messaggio
    sendNewMsg(){
      if (this.sentMsg.replace(/\s/g,"") !== ""){
        this.contacts[this.activePerson].messages.push(
          {
            date: this.getTime(),
            message: this.sentMsg,
            status: 'sent',
            read: ""
          }
        );
        this.currentConversation(this.activePerson);
        
        this.sentMsg = "";

        this.gotoBottom();
        this.fakeWriting();
      }
    },

    // Finto messaggio "sta scrivendo"
    fakeWriting(){
      
      const clock = setTimeout(() => {
        this.contacts[this.activePerson].online = true;
        this.contacts[this.activePerson].isWriting = true;
        this.contacts[this.activePerson].currentAction = "Sta scrivendo...";
        this.fakeResponse();

      },3000);
    },

    // Finta risposta alla chat
    fakeResponse(){

      const clock = setTimeout(() => {

        //Segna msg come letto
        this.contacts[this.activePerson].messages[this.contacts[this.activePerson].messages.length - 1].read = "read";

        // Aggiunge messaggio
        this.contacts[this.activePerson].messages.push(
          {
            date: this.getTime(),
            message: this.randomMsg(),
            status: 'received',
            read : "read"
          }
        );
        
        //Toggle del badge "sta scrivendo"
        this.contacts[this.activePerson].isWriting = false;
      
        this.gotoBottom();
        this.fakeUserStatus();

      },4000);
    },

    fakeUserStatus(){

        const clock = setTimeout(() =>{
            
          this.contacts[this.activePerson].online = false;
          this.contacts[this.activePerson].lastAccess = this.getTime();

        }, 5000);

        
    },

    // Finto accesso notifiche
    requestNotifications(){
      Notification.requestPermission()
      this.notifyBanner = false;
    },

    disposeNotifications(){
      this.notifyBanner = false;
    },

    voiceRecord(){
      //Dettatura Vocale
      //Uso delle Web Speech API !!! VA SOLO SU CHROME, FIXARE !!!
      this.isSpeaking = true;
      let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;    
      let speech = new SpeechRecognition(); //Nuova istanza da classe SpeechRecognition

      this.badgeMsg = "In ascolto"
      this.isSpeaking = true;

      speech.start();

      speech.onresult = (e) => {
            let lastWord = e.resultIndex;       
            let speechResult = e.results[lastWord][0].transcript;
            this.sentMsg = speechResult;
            this.isSpeaking = false;
          }
      
      speech.onerror = (e) => {
            this.badgeMsg = "Non ho capito. Riprova.";
            const clock = setTimeout(() => {this.isSpeaking = false;}, 1000);
      }
    },

    // Ricerca delle chat
    realtimeSearch(){
       if (this.searchQuery != ""){

        let query = this.searchQuery.toLowerCase();
        this.foundMatch = this.contacts.filter(e => e.name.toLowerCase().startsWith(query));

       }
    },

    //Risposta a random
    randomMsg(){

      const n = Math.floor(Math.random() * this.fakeMsgs.length - 1) + 1;
      return this.fakeMsgs[n];

    },

    // Ottiene ora corrente
    getTime(){
      return DateTime.now().setLocale('it').toLocaleString(DateTime.TIME_24_SIMPLE);
    },

    // Handle per i dropdown
    handleDropMsg(index){
        if (this.showDropdown && this.indexShowDropdown == index){
          this.showDropdown = false;
          this.indexShowDropdown = null;
        } else if(this.showDropdown && this.indexShowDropdown != index){
          this.indexShowDropdown = index;
        } else {
          this.showDropdown = true;
          this.indexShowDropdown = index;
        }
    },

    handleDropChat(index){
      if (this.showChatDropdown && this.indexChatDropdown == index){
        this.showChatDropdown = false;
        this.indexChatDropdown = null;
      } else if(this.showDropdown && this.indexChatDropdown != index){
        this.indexChatDropdown = index;
      } else {
        this.showChatDropdown = true;
        this.indexChatDropdown = index;
      }
  },

    handleDrop1(){
     if (this.showDrop1 == false){
      this.showDrop1 = true;
      this.showDrop2 = false;
     } else {
      this.showDrop1 = false;
      this.showDrop2 = false;
     }
    },

    handleDrop2(){
      if (this.showDrop2 == false){
       this.showDrop2 = true;
       this.showDrop1 = false;
      } else {
       this.showDrop2 = false;
       this.showDrop1 = false;
      }
     },

     showPicDrop(){
      if (this.userPicDrop == false){
        this.userPicDrop = true;
       } else {
        this.userPicDrop = false;
       }
     },

     // Rimozione messaggi 
     removeMsg(index){
      const messages = this.contacts[this.activePerson].messages
      messages.splice(index, 1);
      this.showDropdown = false;
      this.indexShowDropdown = null;
     },
     
    //  Rimozione chat
     deleteChat(name){
      this.contacts = this.contacts.filter((e)=>{
          if (e.name != name){
            return true
          }
      })
      this.activePerson = 0;
      this.currentConversation(this.activePerson);
      this.showChatDropdown = false;
      this.indexChatDropdown = null;
     },

    // Splash Page
    loadUI(){
      const clock = setTimeout(()=>{
        this.splashPage = false;
      },2000);
    },

    // Menù Dark
    toggleDark(){
      if(this.theme == ''){
        this.theme = 'dark';
      }else{
        this.theme = '';
      }
    },

    //Auto scroll dopo ogni messaggio
    gotoBottom(){
      const scroll = document.getElementById('auto-scroll');
      const height = scroll.scrollHeight;
      scroll.scrollTo(0, height);
    },

    changeFontSize(val){
      if(val == true && this.fontIndex < this.fontSizes.length -1){
        
        this.fontIndex += 1;

      } else if (val == false && this.fontIndex > 0){

        this.fontIndex -= 1;

      }
    },

  },
  
  mounted(){
    // Imposta la conversazione attuale
    this.loadUI();
    this.currentConversation(-1);

  }
}).mount('#app')