<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

// computed for state
// commit for mutations
// dispatch for actions

const counter = computed(() => store.state.counter);
const inputNumber = ref("");

const addCounter = () => {
  store.commit("addNumber", inputNumber.value);
   inputNumber.value = ''; // empty the input after
};

const subtractCounter = () => {
    store.commit("subtractNumber", inputNumber.value);
    inputNumber.value = '';
}

const addRandomNumber = () => {
    store.dispatch('addRandomNumber')
}
</script>

<template>
  <div>
    <h1>Vuex Counter</h1>
    <h1>{{ counter }}</h1>

    <button 
        @click="subtractCounter" 
        class='subtract'
        style="color: black; margin-right: 1rem"
        >
        -
    </button>
    <input v-model="inputNumber" type="number" />
    <button
      @click="addCounter"
      class="add"
      style="color: black; margin-left: 1rem"
    >
      +
    </button>
<br/>
<br/>
<br/>
    <button 
        @click="addRandomNumber"
        class="random">Add a random number</button>
  </div>
</template>


<style scoped>
.random {
background-color: rgb(9, 105, 9);
border: 1px solid  rgb(9, 105, 9);
color: white;
padding: 0.7rem;
border-radius: 5%;
cursor: pointer;
}

.random:hover {
    background-color: rgba(58, 92, 6, 0.671);
    border: 1px solid rgba(58, 92, 6, 0.671);
}

.subtract, .add {
cursor: pointer;
height: 1.6rem;
width: 1.6rem;
}
</style>