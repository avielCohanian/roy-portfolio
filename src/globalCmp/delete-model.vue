<template>
  <section>
    <div id="myModal" class="delete-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h1>{{ title }}</h1>
        </div>
        <div class="modal-body">
          <div class="btn-cancel" @click="onHandleDelete(false)">
            {{ noBtn }}
          </div>
          <div class="btn-delete" @click="onHandleDelete(true)">
            {{ yesBtn }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'delete-modal',
    props: {
      title: {
        type: String,
        default: 'Delete this item?',
      },
      noBtn: {
        type: String,
        default: 'Cancel',
      },
      yesBtn: {
        type: String,
        default: 'Delete',
      },
    },
    methods: {
      onHandleDelete(ans) {
        this.$emit('onHandleDelete', ans);
      },
    },
  };
</script>

<style></style>
