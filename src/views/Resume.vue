<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      My name’s <strong>Nikodemius</strong> but most people call me “Nicke”. 
      I’m a passionate Unreal Engine-focused gameplay & AI programmer with 5 years of game development education & 0.6 years of work experience. 
      I bring a light-hearted and friendly energy to my teams and I believe we do our best work when everyone feels comfortable and at home. 
      In my free time I enjoy gaming, especially competitive shooters, single-player RPGs and racing games.
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Gameplay & AI Programmer Intern - Invisible Walls APS</h3>
      <h4>2025 June - 2025 December</h4>

      <div>Worked on developing a new PvE game mode, including gameplay features, UI features but mostly AI behavior and problem solving</div>

      <div class="tech-stack">UE5, UE4, C++, Blueprints, P4V, UGS, Unreal GAS, Unreal multiplayer & replication, Unreal Behavior Trees </div>

      <h3>Gameplay & AI Programmer Consultant - Invisible Walls APS</h3>
      <h4>2026 February - 2026 March</h4>

      <div>Hired to develop and prototype another new PvE game mode featuring 
        more advanced AI systems and improved gameplay mechanics, including a utility AI to function as a support system and a more sophisticated enemy AI behavior tree.</div>

      <div class="tech-stack">UE5, C++, Blueprints, P4V, UGS, Unreal GAS, Unreal multiplayer & replication, Unreal Behavior Trees </div>

      <h3>Student Assistant - Ängslättskolan, Malmö Stad</h3>
      <h4>2026 March - Current</h4>

      <div>Worked as a student assistant, helping with various tasks and responsibilities although mainly supporting a handicapped child.</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Technical</h3>
        <SkillRate name="Unreal NavMesh" :rate="4" />
        <SkillRate name="Unreal Behavior Trees" :rate="5" />
        <SkillRate name="Unreal GAS" :rate="3" />
        <SkillRate name="UMG Widgets" :rate="2" />
        <SkillRate name="Unreal Multiplayer" :rate="3" />
        <SkillRate name="Unreal EQS" :rate="3" />
        <SkillRate name="Unreal AI Perception" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Software</h3>
        <SkillRate name="UGS" :rate="1" />
        <SkillRate name="Unity" :rate="2" />
        <SkillRate name="Unreal Engine" :rate="3" />
        <SkillRate name="P4V" :rate="3" />
        <SkillRate name="Git" :rate="3" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Spelutveckling - LBS Växjö - 2023</h3>
      <h4>High school diploma</h4>
      <div>Game development high school education, focusing on game design and programming inside the Unity game engine.</div>

      <h3>Gameplay programming - FutureGames Malmö - 2025</h3>
      <h4>Higher vocational diploma</h4>
      <div>Game programming focused higher vocational education, focusing on all aspects of game programming where I specialized in Gameplay & AI programming. 
      Worked with both Unity and Unreal Engine, but mostly Unreal Engine (own choice).</div>
      

      <h2>Languages</h2>

      <h3>Swedish</h3>
      <div>First language</div>

      <h3>English</h3>
      <div>Fluent</div>

      <h3>C++</h3>
      <div>Good knowledge</div>
      <h3>C#</h3>
      <div>Good knowledge</div>
      <h3>UE Blueprints</h3>
      <div>Good knowledge</div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>