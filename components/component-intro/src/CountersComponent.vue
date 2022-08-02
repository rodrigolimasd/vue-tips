<template>
 <div class="counters">
    <app-counter v-for="c in 5" :key="c"/>
    <button>?</button>
 </div>
</template>

<script>
import CounterComponent from './CounterComponent.vue'

export default {
  components: {
    'app-counter' : CounterComponent
  }
}
</script>

<style>
</style>
