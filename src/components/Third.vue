<template>
  <div>
    <h1>Результат конвертации: {{this.$store.state.resultValue}}</h1>

    <button @click="$router.push({name: 'Second'})">Вернуться</button>
    <button @click="$router.push({name: 'First'})">Вернуться на главную страницу</button>
  </div>
</template>

<script>
export default {
  name: 'Third'
}
</script>

<style scoped>

</style>
