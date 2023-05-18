const { createApp } = Vue
const DateTime = luxon.DateTime;

createApp({
  data() {
    return {
      theme: '',
      mouseX: 0,
      mouseY: 0,
      logged: false,
      newUserName: '',
      newUserAvatar: '',
      dropPosition: '',
      splashPage: true,
      welcomePage: true,
      userPicDrop: false,
      showDropNewUser: false,
      showEmoji: false,
      showDrop1: false,
      showDrop2: false,
      showDropdown: false,
      indexShowDropdown: null,
      showChatDropdown: false,
      indexChatDropdown: null,
      showMessageDropdown: false,
      activePerson: 0,
      speech: window.SpeechRecognition,
      badgeMsg: "In ascolto",
      dropdown: "",
      searchQuery: "",
      foundMatch: [],
      sentMsg: "",
      notifyBanner: true,
      lastDropRef: "",
      activePersonMsg: [],
      isSpeaking: false,
      emojiList: ['&#128512', '&#128513', '&#128514', '&#128515', '&#128516', '&#128517', '&#128518',
        '&#128519', '&#128520', '&#128521', '&#128522', '&#128523', '&#128524', '&#128525', '&#128526', '&#128527',
        '&#128528', '&#128529', '&#128530', '&#128531', '&#128532', '&#128533', '&#128534', '&#128535', '&#128536',
        '&#128537', '&#128538', '&#128539', '&#128540', '&#128541', '&#128542', '&#128543', '&#128544', '&#128545',
        '&#128546', '&#128547', '&#128548', '&#128549', '&#128550', '&#128551', '&#128552', '&#128553', '&#128554',
        '&#128555', '&#128556', '&#128557', '&#128558', '&#128559', '&#128560', '&#128561', '&#128562', '&#128563',
        '&#128564', '&#128565', '&#128566', '&#128567', '&#128568', '&#128569', '&#128570', '&#128571', '&#128572',
        '&#128573', '&#128574', '&#128575', '&#128576', '&#128577', '&#128578', '&#128579', '&#128580', '&#128581',
        '&#128582', '&#128583', '&#128584', '&#128585', '&#128586', '&#128587', '&#128588', '&#128589', '&#128590',
        '&#128591', '&#128592', '&#128593', '&#128594', '&#128595', '&#128596', '&#128597', '&#128598', '&#128599',
        '&#128600', '&#128601', '&#128602', '&#128603', '&#128604', '&#128605', '&#128606', '&#128607', '&#128608',
        '&#128609', '&#128610', '&#128611', '&#128612', '&#128613', '&#128614', '&#128615', '&#128616', '&#128617',
        '&#128618', '&#128619', '&#128620', '&#128621', '&#128622', '&#128623', '&#128624', '&#128625', '&#128626',
        '&#128627', '&#128628', '&#128629', '&#128630', '&#128631', '&#128632', '&#128633', '&#128634', '&#128635',
        '&#128636', '&#128637', '&#128638', '&#128639', '&#128640', '&#128641', '&#128642', '&#128643', '&#128644',
        '&#128645', '&#128646', '&#128647', '&#128648', '&#128649', '&#128650', '&#128651', '&#128652', '&#128653',
        '&#128654', '&#128655', '&#128656', '&#128657', '&#128658', '&#128659', '&#128660', '&#128661', '&#128662',
        '&#128663', '&#128664', '&#128665', '&#128666', '&#128667', '&#128668', '&#128669', '&#128670', '&#128671',
        '&#128672', '&#128673', '&#128674', '&#128675', '&#128676', '&#128677', '&#128678', '&#128679', '&#128680',
        '&#128681', '&#128682', '&#128683', '&#128684', '&#128685', '&#128686', '&#128687', '&#128688', '&#128689',
        '&#128690', '&#128691', '&#128692', '&#128693', '&#128694', '&#128695', '&#128696', '&#128697', '&#128698',
        '&#128699', '&#128700'],
      fontIndex: 1,
      fontSizes: [
        'font-sm',
        'font-md',
        'font-lg',
        'font-xl'
      ],
      fakeMsgs: [
        'Hey ciao!',
        'Tutto bene?',
        'Ok Capito!',
        'Tutto chiaro!'
      ],
      user: {
        name: 'John Doe',
        avatar: './img/user_current.jpg'
      },
      contacts: [
        {
          name: 'Elon',
          avatar: './img/avatar_1.jpg',
          visible: true,
          currentAction: "",
          lastAccess: "16:15",
          online: false,
          isWriting: false,
          messages: [
            {
              date: '15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
              read: "read"
            },
            {
              date: '15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent',
              read: "read"
            },
            {
              date: '16:15',
              message: 'Tutto fatto!',
              status: 'received',
              read: "read"
            }
          ],
        },
        {
          name: 'Jeff',
          avatar: "./img/avatar_2.jpg",
          visible: true,
          currentAction: "",
          lastAccess: "16:35",
          online: false,
          isWriting: false,
          messages: [
            {
              date: '16:30',
              message: 'Ciao come stai?',
              status: 'sent',
              read: "read"
            },
            {
              date: '16:30',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
              read: "read"
            },
            {
              date: '16:35',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
              read: "read"
            }
          ],
        },
        {
          name: 'Reed',
          avatar: './img/avatar_3.jpg',
          visible: true,
          currentAction: "",
          lastAccess: "16:15",
          online: false,
          isWriting: false,
          messages: [
            {
              date: '10:10',
              message: 'La Marianna va in campagna',
              status: 'received',
              read: "read"
            },
            {
              date: '10:20',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
              read: "read"
            },
            {
              date: '16:15',
              message: 'Ah scusa!',
              status: 'received',
              read: "read"
            }
          ],
        },
        {
          name: 'Zuck',
          avatar: './img/avatar_4.jpg',
          visible: true,
          currentAction: "",
          lastAccess: "15:50",
          online: false,
          isWriting: false,
          messages: [
            {
              date: '15:30',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
              read: "read"
            },
            {
              date: '15:50',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
              read: "read"
            }
          ],
        },
        {
          name: 'Bill',
          avatar: './img/avatar_5.jpg',
          visible: true,
          currentAction: "",
          lastAccess: "15:50",
          online: false,
          isWriting: false,
          messages: [
            {
              date: '15:30',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent',
              read: "read"
            },
            {
              date: '15:50',
              message: 'Va bene, stasera la sento',
              status: 'received',
              read: "read"
            }
          ],
        },
        {
          name: 'Woz',
          avatar: './img/avatar_6.jpg',
          visible: true,
          currentAction: "",
          lastAccess: "15:51",
          online: false,
          isWriting: false,
          messages: [
            {
              date: '15:30',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent',
              read: "read"
            },
            {
              date: '15:50',
              message: 'Non ancora',
              status: 'received',
              read: "read"
            },
            {
              date: '15:51',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent',
              read: "read"
            }
          ],
        },
        {
          name: 'Sundar',
          avatar: './img/avatar_7.jpg',
          visible: true,
          currentAction: "",
          lastAccess: "15:50",
          online: false,
          isWriting: false,
          messages: [
            {
              date: '15:30',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent',
              read: "read"
            },
            {
              date: '15:50',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
              read: "read"
            }
          ],
        },
        {
          name: 'Gabe',
          avatar: './img/avatar_8.jpg',
          visible: true,
          currentAction: "",
          lastAccess: "15:51",
          online: false,
          isWriting: false,
          messages: [
            {
              date: '15:30',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
              read: "read"
            },
            {
              date: '15:50',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent',
              read: "read"
            },
            {
              date: '15:51',
              message: 'OK!!',
              status: 'received',
              read: "read"
            }
          ],
        }
      ]
    }
  },
  methods: {

    // Imposta la conversazione attuale
    currentConversation(index) {
      if (index < 0) {
        this.welcomePage = true;
      } else if (index < this.contacts.length) {
        this.welcomePage = false;
        this.activePersonMsg = null;
        this.activePerson = index;
        if (this.contacts[index].messages.length > 0) {
          this.activePersonMsg = this.contacts[index].messages;
        } else {
          this.activePersonMsg = {};
        }
      } else if (this.contacts.length == 0) {
        this.welcomePage = true;
      } else {
        this.welcomePage = false;
        this.activePersonMsg = null;
        this.activePerson = 0;

        this.activePersonMsg = this.contacts[0].messages;
      }
    },

    // Invia messaggio
    sendNewMsg() {
      if (this.sentMsg.replace(/\s/g, "") !== "") {
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
    fakeWriting() {

      const clock = setTimeout(() => {
        this.contacts[this.activePerson].online = true;
        this.contacts[this.activePerson].isWriting = true;
        this.contacts[this.activePerson].currentAction = "Sta scrivendo...";
        this.fakeResponse();

      }, 3000);
    },

    // Finta risposta alla chat
    fakeResponse() {

      const clock = setTimeout(() => {

        //Segna msg come letto
        this.contacts[this.activePerson].messages[this.contacts[this.activePerson].messages.length - 1].read = "read";

        // Aggiunge messaggio
        this.contacts[this.activePerson].messages.push(
          {
            date: this.getTime(),
            message: this.randomMsg(),
            status: 'received',
            read: "read"
          }
        );

        //Toggle del badge "sta scrivendo"
        this.contacts[this.activePerson].isWriting = false;

        this.gotoBottom();
        this.fakeUserStatus();

      }, 4000);
    },

    fakeUserStatus() {

      const clock = setTimeout(() => {

        this.contacts[this.activePerson].online = false;
        this.contacts[this.activePerson].lastAccess = this.getTime();

      }, 5000);


    },

    // Finto accesso notifiche
    requestNotifications() {
      Notification.requestPermission()
      this.notifyBanner = false;
    },

    disposeNotifications() {
      this.notifyBanner = false;
    },

    voiceRecord() {
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
        const clock = setTimeout(() => { this.isSpeaking = false; }, 1000);
      }
    },

    // Ricerca delle chat
    realtimeSearch() {
      if (this.searchQuery != "") {

        let query = this.searchQuery.toLowerCase();
        this.foundMatch = this.contacts.filter(e => e.name.toLowerCase().startsWith(query));

      }
    },

    //Risposta a random
    randomMsg() {

      const n = Math.floor(Math.random() * this.fakeMsgs.length - 1) + 1;
      return this.fakeMsgs[n];

    },

    // Ottiene ora corrente
    getTime() {
      return DateTime.now().setLocale('it').toLocaleString(DateTime.TIME_24_SIMPLE);
    },

    // Handle per i dropdown
    handleDropMsg(index) {
      if (this.showDropdown && this.indexShowDropdown == index) {
        this.showDropdown = false;
        this.indexShowDropdown = null;
      } else if (this.showDropdown && this.indexShowDropdown != index) {
        this.indexShowDropdown = index;
      } else {
        this.showDropdown = true;
        this.indexShowDropdown = index;
      }
    },

    handleDropChat(index) {
      if (this.showChatDropdown && this.indexChatDropdown == index) {
        this.showChatDropdown = false;
        this.indexChatDropdown = null;
      } else if (this.showDropdown && this.indexChatDropdown != index) {
        this.indexChatDropdown = index;
      } else {
        this.showChatDropdown = true;
        this.indexChatDropdown = index;
      }
    },

    handleDrop1() {
      if (this.showDrop1 == false) {
        this.showDrop1 = true;
        this.showDrop2 = false;
      } else {
        this.showDrop1 = false;
        this.showDrop2 = false;
      }
    },

    handleDrop2() {
      if (this.showDrop2 == false) {
        this.showDrop2 = true;
        this.showDrop1 = false;
      } else {
        this.showDrop2 = false;
        this.showDrop1 = false;
      }
    },

    showPicDrop() {
      if (this.userPicDrop == false) {
        this.userPicDrop = true;
      } else {
        this.userPicDrop = false;
      }
    },

    showNewUser() {
      if (this.showDropNewUser == false) {
        this.showDropNewUser = true;
      } else {
        this.showDropNewUser = false;
      }
    },

    // Aggiunge nuovo utente
    addNewUser(name, url) {

      if (name == "") {
        alert("E' necessario inserire un nome per poter proseguire. Riprova.");
      } else {

        if (url == "") {
          this.newUserAvatar = "./img/user_generic.jpg";
        } else {
          this.newUserAvatar = url;
        }

        this.newUserName = name;


        this.contacts.push(
          {
            name: this.newUserName,
            avatar: this.newUserAvatar,
            visible: true,
            currentAction: "",
            lastAccess: this.getTime(),
            online: false,
            isWriting: false,
            messages: [],
          }
        );


      }

      this.newUserAvatar = "";
      this.newUserName = "";
      this.showDropNewUser = false;

    },

    dropMessage($event) {
      this.mouseX = $event.clientX - 770;
      this.mouseY = $event.clientY - 80;

      if (this.showMessageDropdown == false) {
        this.showMessageDropdown = true;
        this.dropPosition = `top: ${this.mouseY}px!important; left: ${this.mouseX}px!important;`;
      } else {
        this.showMessageDropdown = false;
        this.dropPosition = "";
      }

    },

    openEmoji() {
      if (this.showEmoji == false) {
        this.showEmoji = true;
      } else {
        this.showEmoji = false;
      }
    },

    // Rimozione messaggi 
    removeMsg(index) {
      const messages = this.contacts[this.activePerson].messages
      messages.splice(index, 1);
      this.showDropdown = false;
      this.indexShowDropdown = null;
    },

    //  Rimozione chat
    deleteChat(name) {
      this.contacts = this.contacts.filter((e) => {
        if (e.name != name) {
          return true
        }
      })
      this.activePerson = 0;
      this.currentConversation(this.activePerson);
      this.showChatDropdown = false;
      this.indexChatDropdown = null;
    },

    //  Rimuovi solo messaggi

    deleteMsgOnly(name) {
      this.contacts.forEach((person, index) => {
        if (person.name == name) {
          console.log(person.name);
          this.contacts[index].messages = [];
          this.currentConversation(this.activePerson);
        }

        this.showChatDropdown = false;
      })
    },
    // Splash Page
    loadUI() {
      const clock = setTimeout(() => {
        this.splashPage = false;
      }, 2000);
    },

    // Menù Dark
    toggleDark() {
      if (this.theme == '') {
        this.theme = 'dark';
      } else {
        this.theme = '';
      }
    },

    //Auto scroll dopo ogni messaggio
    gotoBottom() {
      const scroll = document.getElementById('auto-scroll');
      const height = scroll.scrollHeight;
      scroll.scrollTo(0, height);
    },

    // Modifica dimensione dei font
    changeFontSize(val) {
      if (val == true && this.fontIndex < this.fontSizes.length - 1) {

        this.fontIndex += 1;

      } else if (val == false && this.fontIndex > 0) {

        this.fontIndex -= 1;

      }
    },

    addEmoji(index) {

      this.sentMsg += this.emojiList[index];
      this.showEmoji = false;
    }

  },

  mounted() {
    // Imposta la conversazione attuale
    this.loadUI();
    this.currentConversation(-1);

  }
}).mount('#app')