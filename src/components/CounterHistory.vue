<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

// Get the store instance
const store = useStore();

// Reference for the input value
const value = ref('');

// Compute filtered history based on the input value
const filteredHistory = computed(() => store.getters.filteredHistory(value.value));
</script>

<template>
  <div>
    <h2 style="margin-top: 4rem;">History</h2>

    <!-- Display history -->
    <div class="numbers">
      <p v-for="(number, index) in filteredHistory" :key="index" v-html="number">
      </p>
    </div>

    <!-- Input for searching a number -->
    <input type="number" v-model="value" placeholder="Search for a number..." />
  </div>
</template>

<style scoped>
.numbers {
  width: 25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
}

input {
    padding: 0.4rem;
}

</style>
