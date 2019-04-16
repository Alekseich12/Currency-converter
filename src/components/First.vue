<template>
  <div>
    <div>
      <h1>Введите вашу сумму!</h1>
      <input type="number" placeholder="0" v-model="clrValue">
      <button @click="clrValue = null">Очистить</button>
      <button @click="saveValue(clrValue)">Продолжить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      clrValue: this.$store.state.shoooInput
    }
  },
  methods: {
    saveValue: function () {
      this.$store.commit('setshoooInput', this.clrValue)
      this.$router.push({name: 'Second'})
    }
  },
  beforeDestroy () {
    this.$store.commit('setshoooInput', this.clrValue)
    console.log(this.$store.state.shoooInput)
  }
}
</script>

<style scoped>
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

</style>
