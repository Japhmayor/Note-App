<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar flat>
        <v-icon>arrow_back</v-icon>
        <v-toolbar-title>
          <span style="font-family:cursive">Meyo Notes</span>
        </v-toolbar-title>
      </v-toolbar>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>About</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <notes :pages="pages" @new-note="newNote" @delete-note="deleteNote" />
    </v-main>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>
          <span class="headline">New Note</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  v-model="newTitle"
                  label="Title"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-textarea
                  v-model="newContent"
                  value=""
                  label="Content"
                ></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal()">Close</v-btn>
          <v-btn color="blue darken-1" text @click="saveNotes()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import Notes from "./components/notes.vue";
export default {
  name: "App",

  components: {
    Notes,
  },

  data: () => ({
    pages: [],
    newTitle: "",
    newContent: "",
    index: 0,
    dialog: false,
  }),

  methods: {
    newNote() {
      this.dialog = true;
    },

    saveNotes() {
      this.pages.push({
        title: this.newTitle,
        content: this.newContent,
      });
      this.index = this.pages.length - 1;
      this.resetForm();
      this.closeModal();
    },

    deleteNote(item) {
      this.pages.splice(item, 1);
      this.index = Math.max(this.index - 1, 0);
    },

    resetForm() {
      (this.newTitle = ""), (this.newContent = "");
    },

    closeModal() {
      this.dialog = false;
    },
  },
};
</script>
