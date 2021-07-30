<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="9" class="pa-10 text-left">
        <v-btn plain sm class="mb-5 px-0" @click="$router.go(-1)">
          <v-icon class="pr-1" size="small"> mdi-arrow-left</v-icon>
          <small>Back</small></v-btn
        >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="pa-5 elevation-1 rounded white"
          @submit.prevent="post"
        >
          <legend>Create post</legend>
          <v-text-field
            v-model="post.title"
            :counter="10"
            :rules="titleRules"
            label="Title"
            class="mb-5"
            required
          ></v-text-field>
          <v-select
            :items="selectitems"
            label="Category"
            class="mb-5"
          ></v-select>
          <v-file-input
            class="mb-5"
            label="Upload cover image"
            filled
            prepend-icon="mdi-camera"
          ></v-file-input>
          <multi-select
            class="mb-5"
            :options="options"
            :selected-options="items"
            placeholder="Choose tag"
            @select="onSelect"
          >
          </multi-select>
          <editor
            v-model="post.content"
            initialValue="<p>Initial editor content</p>"
            apiKey="zryhmo2q30xmcrdy1y7c2u2qbcym44l833uxtw2up6f42ya5"
            :init="{
              height: 500,
              menubar: true,
              plugins: [
                'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export',
              ],
              menubar: 'file edit view insert format tools table tc help',
              toolbar:
                'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
              toolbar_mode: 'sliding',
              autosave_ask_before_unload: true,

              autosave_interval: '30s',
              autosave_prefix: '{path}{query}-{id}-',
              autosave_restore_when_empty: false,
              autosave_retention: '2m',
              image_advtab: true,
              tinycomments_mode: 'embedded',
            }"
          >
          </editor>

          <v-row class="py-10 px-3" justify="end">
            <v-btn
              class="mr-3"
              :loading="loading"
              :disabled="loading"
              color="secondary"
              @click="loader = 'loading'"
            >
              Save to draft
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </template>
            </v-btn>

            <v-btn
              class=""
              :loading="loading1"
              :disabled="loading1"
              color="primary"
              type="submit"
              @click="loader = 'loading1'"
            >
              Publish
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </template>
            </v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Editor from "@tinymce/tinymce-vue";
import { MultiSelect } from "vue-search-select";
export default {
  name: "create",
  components: {
    editor: Editor,
    MultiSelect,
  },
  data() {
    return {
      loader: null,
      loading: false,
      loading1: false,
      selectitems: ["video", "post", "music"],
      post: {
        title: "",
        tags: [],
        content: "",
      },
      valid: true,

      titleRules: [(v) => !!v || "Title is required"],
      options: [
        { value: "1", text: "aa" + " - " + "1" },
        { value: "2", text: "ab" + " - " + "2" },
        { value: "3", text: "bc" + " - " + "3" },
        { value: "4", text: "cd" + " - " + "4" },
        { value: "5", text: "de" + " - " + "5" },
      ],
      searchText: "", // If value is falsy, reset searchText & searchItem
      items: [],
      lastSelectItem: {},
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
  methods: {
    onSelect(items, lastSelectItem) {
      this.items = items;
      this.lastSelectItem = lastSelectItem;
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    createPost() {},
  },
};
</script>