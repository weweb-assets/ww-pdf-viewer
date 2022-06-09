<template>
  <div
    class="ww-pdf-viewer"
    :class="{ editing: isEditing }"
    ref="pdfContainer"
  ></div>
</template>

<script>
import PDFObject from "PDFObject";

export default {
  props: {
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  data() {
    return {
      resizeObserver: null,
    };
  },
  watch: {
    content: {
      deep: true,
      handler() {
        this.init();
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
    initObserver() {
      this.resizeObserver = new ResizeObserver(() => {
        this.init();
      });

      this.resizeObserver.observe(this.$el);
    },
    clearObserver() {
      this.resizeObserver.disconnect();
    },
    init() {
      PDFObject.embed(this.content.pdf, this.$refs.pdfContainer);
    },
  },
  beforeUnmount() {
    this.resizeObserver.disconnect();
  },
  mounted() {
    this.init();
    this.initObserver();
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
