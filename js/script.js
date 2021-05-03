/*
Attraverso l'apposita API di Boolean
generare 10 indirizzi email e stamparli in pagina all'interno di una lista con Vue JS e Axios.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const mail = new Vue ({
    el: '#app',
    data: {
        //array da popolare
        mail: [],
    },

    methods: {
      newMail() {
        for (let i = 0; i < 10; i++) {
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((element) => {
            this.mail.push(element.data.response)
          });
        }
      },
  
      deleteMail() {
        this.mail = [];
      }
  
    }
});