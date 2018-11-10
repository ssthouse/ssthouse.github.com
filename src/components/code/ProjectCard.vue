<template>
  <v-card class="project-card">
    <div class="img-container">
      <img :src="project.img" height="100%" />
    </div>
    <div class="project-title">
      <a :href="project.href" target="_blank">
        <span>
          {{project.title}}
        </span>
      </a>
      <a target="_blank" class="github-link" :href="project.sourceCodeHref">
        <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
      </a>
    </div>

    <span class="project-description" v-if="project.description">
      {{project.description}}
    </span>
  </v-card>
</template>
<script>
export default {
  props: ['project'],
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.project-card {
  padding: 0;
  margin: 16px;
  position: relative;
  width: 360px;
  height: 480px !important;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  .project-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    width: 100%;
    text-align: left;
    justify-self: flex-start;
    font-size: 1.6rem;
    z-index: 1;
    background-color: rgba(238, 238, 238, 0.746);

    .github-link {
      margin-left: 8px;

      img {
        transition-property: box-shadow;
        transition-duration: 1s;
        border-radius: 50%;
        width: 32px;
        height: 32px;
      }
    }

    .github-link:hover {
      img {
        box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2),
          0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 2px 3px 0 rgba(0, 0, 0, 0.12);
      }
    }
  }

  .project-description {
    justify-self: flex-end;
    padding: 4px;
    width: 100%;
    text-align: left;
    z-index: 1;
    transition-property: opacity, background-color;
    transition-duration: 1s;
    background-color: transparent;
    font-size: 1.4rem;
    opacity: 0;
  }
}

.project-card:hover {
  .project-description {
    opacity: 1;
    background-color: rgba(238, 238, 238, 0.746);
  }
}
</style>
