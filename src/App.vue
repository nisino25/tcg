<template>

  <div class="wrapper">
    <main>
      <div class="playArea">
        <div class="opponentArea"></div>
        <div class="black-belt"></div>
        <!-- <div class="pokeball">

          <div class="top-half">
          </div>
          <div class="center-circle">
            <div class="inner-circle"></div>
          </div>
          <div class="bottom-half">
          </div>
        </div> -->

        <div class="opponentArea">
          <div class="test"></div>

          <div class="battlePokemon">
            <div>
              <img  @click="showImg('https://www.pokemon-card.com/assets/images/card_images/large/S8/040002_P_MYUUVMAX.jpg')" src="https://www.pokemon-card.com/assets/images/card_images/large/S8/040002_P_MYUUVMAX.jpg" alt="">
              <!-- <span> Nozo </span> -->
              </div>
          </div>

          <div class="opponentPile">
            <div class="card-backSide">
              <span>50x left</span>
              <img src="https://www.pokemon-card.com/assets/images/noimage/poke_ura.jpg" alt="">
            </div>
          </div>

          <div class="trash">
            <i class="fa fa-trash-o" style=""></i>
          </div>

          <div class="side">
            <template v-for="(item,i) in sideList" :key="i">
              <div :style="`bottom: ${i * 13.5}px; z-index:${i}`">
                <img src="https://www.pokemon-card.com/assets/images/noimage/poke_ura.jpg" alt="">
              </div>
            </template>
          </div>

          <div class="opponentBench">
            <div class="bench-wrapper">

              <template v-for="(item,i) in benchList" :key="i">
  
                <div class="bench-card">
                  <img src="https://www.pokemon-card.com/assets/images/card_images/large/S8/040031_P_GENOSEKUTOV.jpg" alt="">
                </div>
              </template>
            </div>
          </div>
          
        </div>

        <div class="myArea">

          <div class="battlePokemon">
            <div v-if="myFightingPokemon">
              <img  @click="showImg(myFightingPokemon)" :src="myFightingPokemon.src" alt="">
            </div>
          </div>

          <div class="myPile">
            <div class="card-backSide" >
              <img src="https://www.pokemon-card.com/assets/images/noimage/poke_ura.jpg" alt="" @click="drawMore()" v-if="myPile.length >0">
              <span>{{myPile.length}}x left</span>
            </div>
          </div>

          <div class="trash">
            <i class="fa fa-trash-o" style=""></i>
          </div>

          <div class="side">
            <template v-for="(card,i) in mySide" :key="i">
              <div :style="`top: ${i * 13.5}px; z-index:${i}`">
                <img src="https://www.pokemon-card.com/assets/images/noimage/poke_ura.jpg" alt="">
              </div>
            </template>
          </div>

          <div class="myBench">
            <div class="bench-wrapper">

              <template v-for="(card,i) in myBench" :key="i">
  
                <div class="bench-card" @click="showImg(card)">
                  
                  <img :src="card.src" alt="">
                </div>
              </template>
            </div>
          </div>
          
        </div>
      </div>
      
      <div class="myHands">
        <div class="myHands-card-wrapper">
          <template v-for="(card, i) in myHands" :key="i">
            <!-- <div class="myHands-card">{{i}}</div> -->
            <div @click="showImg(card)" class="myHands-card"><img :src="card.src" alt=""></div>
          </template>
          
        </div>
      </div>

      <!-- <div class="refresh">
        <input type="button" value="reloading" onclick="window.location.reload();" />
      </div> -->
    </main>

    <transition name="fade" >

      <div class='modal-overlay fade-in' v-if="showModal" style="height: 100vh">
        
        <div class="modal" style=" transition : all 0.6s ease 0s;">
          
          <div v-if="modalStatus == 50">
            <img :src="selectedPokemon.src" alt="" class="bigImg">
            <button @click="showModal = false;selectedPokemon.location = 'fighting'" class="create" v-if="fightingJudge()">Use as a battle pokemon</button>
            <button @click="showModal = false;selectedPokemon.location = 'bench' " class="join" v-if="benchJudge()">Use as a bench pokemon</button>

            <button @click="showModal = false" class="close" >Close</button>
          </div>

          <div v-if="modalStatus == 100">
            <img :src="selectedPokemon.src" alt="" class="bigImg">
            <button @click="showModal = false" class="close" >Close</button>
            <!-- <form onsubmit="event.preventDefault()">

              <label>Username</label>
              <input type="text" placeholder="Type username.." v-model="username" >

              <span v-if="modalWarning" class="warning">{{modalWarning}}</span>
              <button @click="signUp()" class="create" >Sign Up</button>
              <button @click="generateRandomUsername()" class="join" >Random name</button>

            </form> -->
          </div>
          

          


        </div>
      </div>

    </transition>
  </div>
  
</template>

<script>
  import {mewDeck} from '../src/const/decks/mew'
  export default {
    name: 'App',
    components: {
    },
    data(){
      return{
        showModal: false,
        modalStatus: 100,
        selectedPokemon: undefined,

        testList: [],
        benchList: [],
        sideList:[],


        mewDeck,
        myDeck: [],

        pickedBattlePokemon: false
        
        // imgClass: ['','','','','','','','','',],
      }
    },
    mounted(){
      console.clear()
      let count = 0
      while(count < 15){
        this.testList.push('test')
        count++
      }

      count = 0
      while(count < 5){
        this.benchList.push('test')
        count++
      }

      count = 0
      while(count < 6){
        this.sideList.push('test')
        count++
      }

      this.distribute()
      // console.log(this.testList)
    },
    methods:{
      sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      },


      showImg(pokemon){
        this.selectedPokemon = pokemon
        this.showModal = true
        this.modalStatus = 100
        if(!this.pickedBattlePokemon){
          this.modalStatus = 50
        }
      },


      distribute(){
        console.log('shuffiling ')
        this.myDeck = this.mewDeck
        // check if any tane pokemon
        let flag = false
        for(let i in this.myDeck){
          let card = this.myDeck[i]
          if(card.isTane) flag = true
        }

        if(!flag) {
          alert('wtf no pokemon?')
          return
        } 

        for (let i = this.myDeck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.myDeck[i], this.myDeck[j]] = [this.myDeck[j], this.myDeck[i]];
        }

        // for(let i in this.myDeck){
        //   console.log(myDeck[i].index)
        // }

        let count = 0
        while(count< 13){
          if(count< 7){
            this.myDeck[count].location = 'hand'
          }else{
            this.myDeck[count].location = 'side'
          }
          count++
        }
      },
      drawMore(){
        this.myPile[0].location = 'hand'
      },

      fightingJudge(){
        if(this.myFightingPokemon) return false
        if(!this.selectedPokemon.isTane) return false
        return true
      },

      benchJudge(){
        if(!this.myFightingPokemon) return false
        if(this.myBench.length >= 5) return false
        if(!this.selectedPokemon.isTane) return false
        // if(this.myBench.) return false
        return true
      },
    },
    computed:{
      myFightingPokemon(){
        for(let i in this.myDeck){
          let card  = this.myDeck[i]
          if(card.location == 'fighting'){
            return card
          }
        }
        return undefined
      },
      myHands(){
        let list =[]
        for(let i in this.myDeck){
          let card  = this.myDeck[i]
          if(card.location == 'hand'){
            list.push(card) 
          }
        }
        return list
      },
      myBench(){
        let list =[]
        for(let i in this.myDeck){
          let card  = this.myDeck[i]
          if(card.location == 'bench'){
            list.push(card) 
          }
        }
        return list
      },

      mySide(){
        let list =[]
        for(let i in this.myDeck){
          let card  = this.myDeck[i]
          if(card.location == 'side'){
            list.push(card) 
          }
        }
        return list
      },

      myPile(){
        let list =[]
        for(let i in this.myDeck){
          let card  = this.myDeck[i]
          if(card.location == 'pile'){
            list.push(card) 
          }
        }
        return list
      },
    },

  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    
    /* margin-top: 60px; */
  }
  body{
    
    background-color: #DCD7C9;
    color: #DCD7C9; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    

    touch-action: manipulation;
    overflow: hidden; 
  }

  .wrapper{
    /* margin: 20px; */
    width: 92.5vw;
    margin: auto auto;
    /* background-color: red; */
    /* height: 50vh; */
    /* background-color: #2C3639; */
    /* color: #DCD7C9; */
  }

  .refresh{
    position: absolute;
    bottom: 0;
    right: 0;
    /* background-color: black; */

  }

  img{
    /* animation: 0.4s ease-in-out; */
    transition: all 0.5s;
    z-index: 10;
    border-radius: 5%;

    -moz-box-shadow: 5px 4px 16px -2px rgba(0, 0, 0, 0.59);
    -webkit-box-shadow: 5px 4px 16px -2px rgba(0, 0, 0, 0.59);
    -ms-box-shadow: 5px 4px 16px -2px rgba(0, 0, 0, 0.59);
    box-shadow: 5px 4px 16px -2px rgba(0, 0, 0, 0.59);
  }

  .bigImg{
    aspect-ratio:  63/88;
    width: 100%;
  }

  .toCenter{
    /* animation: toCenter 2s ease-in-out; */
    transform: scale(2) translateY(-50%);
    background-color: grey;
    /* padding: 20px; */
    /* position: fixed; */
    z-index: 100;
    top: 50%;
    left: 50%;
    /* border-radius: 5%; */

  }


  /* ---------------------------------- */
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    /* bottom: 0; */
    /* height: 667px; */
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .modal {
    color: black;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    
    width: 75%;
    max-width: 400px;
    background-color: #f2f2f2;
    border-radius: 16px;
    
    padding: 25px;
  }

  .modal h1 {
    color: #222;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }
  
  .modal p {
    color: #666;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  .modal strong{
    content:"handsome";
    white-space: pre;
  }

  .fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: .4s;
  }
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }

  input[type=number], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .modal  .create {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 20px 0 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .modal  .join {
    width: 100%;
    background-color: #6495ed;
    color: white;
    padding: 14px 20px;
    margin: 5px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .modal  .close {
    width: 100%;
    background-color: crimson;
    color: white;
    padding: 14px 20px;
    margin: 20px 0 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .modal  .cancel {
    width: 100%;
    background-color: firebrick;
    color: white;
    padding: 14px 20px;
    margin: 20px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .tab-button {
    width: 25%;
    background-color:  #363945;
    color: white;
    padding: 10px 5px;
    margin: 10px 3%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .undo-button{
    float:right;
    margin-right:15px;
    width: auto;
    background-color: grey;
    color: white;
    padding: 4px 5px;
    /* margin: 5px 0; */
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 80px;
    height: 80px;

    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    margin: 30px auto;

    
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }





  .playArea{
    margin: 3px auto;
    width: 100%;
    height: 77vh;
    /* background-color: #DCD7C9; */
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    -moz-box-shadow: 10px 14px 36px -2px rgba(0, 0, 0, 0.59);
    -webkit-box-shadow: 10px 14px 36px -2px rgba(0, 0, 0, 0.59);
    -ms-box-shadow: 10px 14px 36px -2px rgba(0, 0, 0, 0.59);
    box-shadow: 10px 14px 36px -2px rgba(0, 0, 0, 0.59);
  }
  
  .black-belt{
    /* position: absolute;
    top:50%;
    transform: translateY(-50%);
    width: 100%;
    height: 4%; */
    /* background-color: #454545; */
  }

  .opponentArea{
    position: absolute;
    top:0%;
    width: 100%;
    height: 50%;
    background-color: FireBrick;
    /* margin: 0; */
  }

  .myArea{
    position: absolute;
    top:50%;
    width: 100%;
    height: 50%;
    background-color: SteelBlue;
  }

  .test{
    /* position:absolute;
    background-color: red;
    width: 50%;
    left: 0;
    height: 20px; */
  }

  .opponentArea .battlePokemon{
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    /* height: 50%; */
  }


  .myArea .battlePokemon{
    position: absolute;
    top:10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 50%;
  }
  /* ---------------------------------------------------- */
  .opponentPile{
    position: absolute;
    bottom:6px;
    left: 10px;
    width: 20%;
  }

  .opponentPile img{
    aspect-ratio:  63/88;
    width: 100%;
  }

  .myPile{
    position: absolute;
    top:10px;
    right: 10px;
    /* transform: translateX(-50%); */
    width: 20%;
    /* height: 30%; */
    /* background-color: red; */
  }
  
  .myPile img{
    aspect-ratio:  63/88;
    width: 100%;
  }

  /* ---------------------------------------------------- */
  .opponentArea .trash{
    position: absolute;
    bottom:56%;
    left: 10px;
    width: 20%;
    transform: translateY(-50%);
    /* /* right: 10px; */
    /* aspect-ratio: 1/1;
    width: 45px;
    border-radius: 5px;

    background-color: grey;  */
  }
  .myArea .trash{
    position: absolute;
    top:57%;
    right: 10px;
    width: 20%;
    transform: translateY(-50%);
    /* /* right: 10px; */
    /* aspect-ratio: 1/1;
    width: 45px;
    border-radius: 5px;

    background-color: grey;  */
  }

  .trash i{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: grey;  
    padding: 5px 8px;
    border-radius: 8px;
    font-size:28px;
  }

  /* ---------------------------------------------------- */
  .opponentArea .side{
    position: absolute;
    bottom:6px;
    right: 10px;
    /* transform: translateX(-50%); */
    width: 20%;
    /* height: 30%; */
    /* background-color: red; */
  }

  .myArea .side{
    position: absolute;
    top:10px;
    left: 10px;
    /* transform: translateX(-50%); */
    width: 20%;
    /* height: 30%; */
    /* background-color: red; */
  }

  .side img{
    aspect-ratio:  63/88;
    width: 100%;
    
  }

  .side div{
    position: absolute;
    left: 0;
  }




  /* ---------------------------------------------------- */
  .opponentBench{
    position: absolute;
    top:5px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    /* height: 30%; */
    /* background-color: green; */

    
    /* flex-wrap: row; */
  }

  .myBench{
    position: absolute;
    bottom:0px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    /* height: 30%; */
    /* background-color: green; */

    
    /* flex-wrap: row; */
  }
  
  .bench-wrapper{
    display: flex;
    justify-content: space-around;
    width: 98%;
    margin: auto auto;
  }

  .bench-card{
    aspect-ratio:  63/88;
    width: 18%;
    /* border: 2px solid white; */
    border-radius: 5px;
  }

  .bench-card img{
    aspect-ratio:  63/88;
    width: 100%;
  }

  /* ---------------------------------------------------- */
  .battlePokemon img{
    aspect-ratio:  63/88;
    width: 30vw;
  }





  /* ---------------------------------------------------- */

  .pokeball{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%,-54%);
    aspect-ratio: 1/1;
    width: 45%;
    max-width: 500px;
    border-radius: 50%;
    border: 8px solid black;
    overflow: hidden;
    background-color: white;

    -moz-box-shadow: 8px 10px 20px -4px rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: 8px 10px 20px -4px rgba(0, 0, 0, 0.8);
    -ms-box-shadow: 8px 10px 20px -4px rgba(0, 0, 0, 0.8);
    box-shadow: 8px 10px 20px -4px rgba(0, 0, 0, 0.8);
  }

  .top-half  {
    position: absolute;
    bottom: 50%;
    height: 50%;
    width: 100%;
    /* top: -50%;
    left: -25%;
    width: 150%;
    height: 100%; */
    background-color: Crimson;
    /* border-bottom: 10px solid black; */
    z-index: 10;

    /* display: inline-block; */

    
  }

  .center-circle{
    z-index: 11;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%,-55%);
    height: 50%;
    width: 50%;

    background-color: white;
    border: 10px solid black;
    border-radius: 50%;
  }
  .inner-circle{
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%,-60%);
    /* aspect-ratio: 1/1; */
    height: 50%;
    width: 50%;
    background-color: white;
    border: 5px solid black;
    border-radius: 50%;
  }

  .bottom-half  {
    /* position: absolute;
    bottom: -50%;
    left: 0%;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 10px 10px; */
    /* aspect-ratio: 1/1.5; */
    /* width: 100%; */
    /* height: 100%; */
    background-color: white;
    border-bottom: 10px solid black;
    z-index: 10;

    overflow: hidden;

  }

  .myHands{
    margin:  1.5vh auto auto;
    width: 100%;
    height: auto;
    /* background-color: lightgreen; */
    border-radius: 5px;
    position: relative;

    -moz-box-shadow: 10px 14px 36px -2px rgba(0, 0, 0, 0.59);
    -webkit-box-shadow: 10px 14px 36px -2px rgba(0, 0, 0, 0.59);
    -ms-box-shadow: 10px 14px 36px -2px rgba(0, 0, 0, 0.59);
    box-shadow: 10px 14px 36px -2px rgba(0, 0, 0, 0.59);
  }

  .myHands-card-wrapper{
    overflow: auto;
    white-space: nowrap;
    /* background-color: #DCD7C9; */
    border-radius: 8px;
    background-color: #2C3639; 
    /* display: flex; */

    /* justify-content: center; */
    /* justify-content: center; */
    /* margin: 5px auto; */
    /* flex-flow: row wrap;
    margin: auto auto;
    width: 95%; */
    
    /* margin: 0 auto; */
  }

  .myHands-card{
    display: inline-block;
    /* padding: 20px; */
    /* aspect-ratio: 1/100; */
    /* aspect-ratio:  63/88;
    width: 28vw; */
    
    margin: 2% 2vw 1%;
    /* background-color: yellow; */
  }

  .myHands-card img{
    aspect-ratio:  63/88;
    width: 20vw;
  }

  .myHands .line-break {
    width: 100%;
  }



</style>
