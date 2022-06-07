<template>
  <div
    ref="pdf"
    class="ww-pdf-viewer"
    :class="{ editing: isEditing }"
    :key="componentKey"
  />
</template>

<script>
import PDFObject from "pdfobject";

export default {
  props: {
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  watch: {
    content: {
      deep: true,
      handler() {
        this.init();
        console.log("toto");
      },
    },
  },
  computed: {
    isEditing() {
      /* wwEditor:start */
      return (
        this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION
      );
      /* wwEditor:end */
      // eslint-disable-next-line no-unreachable
      return false;
    },
  },
  methods: {
    init() {
      console.log("init");
      console.log(this.content.defaultZoom);
      const container = this.$refs.pdf;
      const options = {
        pdfOpenParams: {
          zoom: `${this.content.defaultZoom}`,
          page: `${this.content.defaultPage}`,
        },
      };
      PDFObject.embed(this.content.file, container, options);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.ww-pdf-viewer {
  width: inherit;
  height: inherit;
  &.editing {
    pointer-events: none;
  }
}
</style>
