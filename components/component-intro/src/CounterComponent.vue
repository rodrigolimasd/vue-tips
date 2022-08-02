<template>
 <div class="counter">
    <span>{{ count }}</span>
    <button @click="add">+</button>
    <button @click="minus">-</button>
 </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    add() {
        this.count++
    },
    minus() {
        this.count--
    }
  }

}
</script>

<style>
  .counter span {
    border-bottom: 1px solid #ccc;
    height: 30px;
    padding:  5px 25px;
  }

  .counter button {
    height: 30px;
    width: 30px;
    border-radius:  15px;
    background-color: coral;
    color: #fff;
    margin-left: 10px;
    outline: none;
  }

</style>
