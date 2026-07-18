<template>
  <div>
    <h1>Other stuff</h1>

    <div style="margin-bottom: 30px;">
      Here are some other projects that I have created on my own time. These projects might not be as polished or game-ready as the ones I have worked on professionally, but they are still a testament to my skills and creativity.
      Each project has a link to the source code on GitHub, and several videos and screenshots of the project in action. I hope you enjoy them!
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
