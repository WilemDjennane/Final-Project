<template>
  <section>
    <Choice :page="page" />
  </section>
</template>

<script>
import Choice from '../../components/Choice'

const data = require('./deux-resistantes-deux-destins-differents.json')

export default {
  transition: {
    name: 'slide',
    duration: 500
  },
  components: {
    Choice
  },
  data() {
    return {
      page: data
    }
  }
}
</script>
