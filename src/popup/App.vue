<template>
  <div class="container">
    <button @click="this.replace">Replace image</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    replace() {
      console.log('replace start');
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        tabs => {
          console.log('ok');
          chrome.tabs.sendMessage(tabs[0].id, 'Replace');
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 150px;
  text-align: center;
}
button {
  background: white;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
}
</style>
