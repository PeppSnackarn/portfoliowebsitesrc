<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Nikodemius Ivarsson</strong>, an educated and passionate game developer.<br/>
        I have studied for 5.5 years unbroken in <strong>Unity & Unreal Engine</strong> as a <strong>Gameplay & AI Programmer</strong>.
      </div>

      <div style="margin-top: 20px;"> I have also worked at <strong>Invisible Walls APS</strong>. Where I got the oppurtunity to work on games such as <a href="https://store.steampowered.com/app/1732430/Neighbors_Suburban_Warfare/" target="_blank">Neighbors: Suburban Warfare</a> and <a href="https://www.deeprockgalactic.com/season-06" target="_blank">Deep Rock Galactic: Season 6</a>. 
        Gaining valuable Unreal Engine experience and knowledge about working in a professional game studio environment.
      </div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a <strong>Gameplay & AI Programmer</strong>. You can reach me at <a href="mailto:NikodemiusIvarsson@outlook.com">NikodemiusIvarsson@outlook.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/jurassicparaknicke.png" alt="Picture of Nicke" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 30px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>