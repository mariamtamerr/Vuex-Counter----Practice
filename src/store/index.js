import axios from "axios";
import { createStore } from "vuex";

const store = createStore({

// state stores universtal state
// also like data : a function that returns things ... the only one , others are objects
state() {
    return {
        counter: 0,
        history: [0],
    }
},

// mutations make effects on state , also synchronous methods 
mutations: {
    addNumber(state, payload) {
        if (payload) {
            state.counter = state.counter + payload;
        } else {
            state.counter++;
        }
        state.history.push(state.counter)
       
    },
    subtractNumber(state, payload) {
        if (payload) {
            state.counter = state.counter - payload;
        } else {
            state.counter--;
        }
        state.history.push(state.counter)
    }
},


// Getters are like computed , manipulates states to appear differently
// its a function that takes an arg that takes another arg that returns an inner function
// ex : the filtertedHistory getter func takes state as an arg and returns searchNumber as another arg that returns an inner function
// this is done to act dynamically instead of writing the searchNUmber statically in templates like this : const searchValue = 5; const highlightedHistory = store.getters.filteredHistory(searchValue);
getters: {
    filteredHistory: (state) => (searchNumber) => {
        return state.history.map((number) => {
           return number === searchNumber ? `<strong>${number}</strong>` : number;
        })
    }
},

// actions are asynchronous methods ,usually api , then callback a mutation after finishing waiting using method called commit
// to use commit --> actions take an object called context as an argument ... context object contains : commit , getters , state , .... 
// you can either call commit using context as arg and below is context.commit('addNumber') .... or desctruce it in argument : ({commit}) and bellow call it directly commit('addNumber')
actions: {
    async addRandomNumber(context) {
        let data = await axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new')
        // console.log(data);
        context.commit('addNumber', data.data);
    },

}
})


    

export default store;