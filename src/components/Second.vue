<template>
  <div>
    <div>
      <div v-for="exchange in exchanges" :key="exchange.id">
        <label>
          <input name="exchange"
                 v-model="radioValue"
                 type="radio"
                 :value="{
                  value: exchange.buy,
                  type: 'buy',
                  ccy: exchange.ccy,
                  base_ccy: exchange.base_ccy}">
          Покупка {{exchange.ccy}} за {{exchange.base_ccy}}
        </label>
        <label>
          <input name="exchange" type="radio" v-model="radioValue" :value="{
                  value: exchange,
                  ccy: exchange.ccy,
                  base_ccy: exchange.base_ccy}">
          Продажа {{exchange.ccy}} на {{exchange.base_ccy}}
        </label>
      </div>
      <button @click="saveValue">Продолжить</button>
      <button @click="$router.push({name: 'First'})">Вернуться назад</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Second',
  data () {
    return {
      exchanges: [],
      radioValue: null
    }
  },
  methods: {
    saveValue: function () {
      console.log(1)
      if (!this.radioValue) {
        return null
      }
      let thirdValue =
        this.radioValue.type === 'buy'
          ? this.$store.state.shoooInput / this.radioValue.value
          : this.$store.state.shoooInput * this.radioValue.value
      this.$store.commit('dlsh', thirdValue)
      console.log(this.$store.state.resultValue)
      this.$router.push({name: 'Third', params: {thirdValue: thirdValue}})
    }
  },
  created () {
    this.$store.state.response.then(value => {
      this.exchanges = value
    })
  },
  beforeDestroy () {
    if (!this.$store.state.shoooInput) {
      this.$router.push({name: 'First'})
    }
  }
}
</script>

<style scoped>

</style>
