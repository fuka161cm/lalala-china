<template>
  <footer class="footer">all copyrights reserved lala okamoto {{ currentYear() }}</footer>
</template>

<script>
export default {
  methods: {
    currentYear() {
      const date = new Date();
      return date.getFullYear();
    }
  }
}
</script>