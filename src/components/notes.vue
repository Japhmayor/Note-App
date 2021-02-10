<template>
  <div class="notes">
    <v-card v-for="(page, index) in pages" :key="index">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-o">{{ page.title }}</h3>
          <div>{{ page.content }}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn text @click="deleteNote(index)" color="orange">Delete</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn fab dark color="indigo" class="floatButton" @click="newNote()">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  //   name: Notes,
  props: ["pages"],
  methods: {
    newNote() {
      this.$emit("new-note");
    },

    deleteNote(item) {
      this.$emit("delete-note", item++);
    },
  },
};
</script>

<style scoped>
.floatButton {
  float: right;
  margin: 20px;
}
</style>
