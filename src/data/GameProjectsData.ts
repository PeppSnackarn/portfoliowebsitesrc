import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Neighbors: Suburban Warfare", "img/projects/Neighbors/nswico.png", 
    `
    <div class="paragraph">
     Most of my time at Invisible Walls was spent working on <strong>Neighbors: Suburban Warfare</strong>, the point of my internship was to work on their new PvE gamemode "Robot Invasion",
     AI Behavior for said gamemode, and to assist with the development of the game in general. I worked on a variety of tasks, from creating new AI behaviors, to fixing bugs, to creating new features for the game.
     Mostly limited to the Robot Invasion gamemode which I eventually took major ownership of but I also worked with general gamplay bug-fixes and minor tasks for the game.
     <br/>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/RnaG10bsArI?si=UmX4zugUhkjfJu6K" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://www.youtube.com/@PeppSnackarn" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
    </div>

    <div class="paragraph">
        Worked with :
        <ul>
        <li>Taking major ownership of the Robot Invasion gamemode</li>
        <li>Creating new AI behaviors</li>
        <li>Fixing bugs and implementing new features</li>
        <li>Creating world subsystems to easierly handle nav-mesh updates during gameplay</li>
        <li>Creating the building-stones for the Practice vs AI mode</li>
        <li>Working with general bug-fixes with "Unreal Multiplayer" and "Unreal GAS"</li>
        </ul>
    </div>
        </ul>
    </div>

    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Deep Rock Galactic: S6", "img/projects/DRG/DRG_Season06_KeyArtTeaser_FINAL_01.png", `
    <div class="paragraph">
        During my time with Deep Rock Galactic (DRG), I worked with creating the behavior tree for the season 6 event creature. Using tools and systems developed by Ghost Ship Games (GSG),
        I created an enemy that fled from players when attacked and dug a hole to then expose a tunnel for the players to enter. 
        When developing this creature I had to quickly learn to adapt to GSG's custom nav-system and AI framework along with figuring out how most of the DRG enemies solve certain problems.

         </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/isaOditbLPg?si=ilmUOY19Lbmrz4L5" frameborder="0" allowfullscreen></iframe>
    </div>

        <br/>
        <br/>
        I also worked on assisting another developer with bugs found with the season 6 enemy "Ossirian Scrab".
        <br/>
        <br/>
        Since this project is owned by Ghost Ship Games, I cannot provide any source code or assets from the project. However, I can provide a video of the creature in action from a live build of the game (my own recorded gameplay).

    <div class="paragraph">
        I worked on :
        <ul>
        <li>Created behavior for the "Bone Collector"</li>
        <li>Assisted in bug-fixing and debugging "Ossirian Scrab" behavior</li>
        </ul>
    </div>

    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "Unannounced Prototype", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        This was an internal prototype worked on at Invisible Walls. I worked on this project intermittenly during my internship, when "Robot Invasion" was not being worked on.
        Working on this project gave me the oppurtunity to experiment with new and more advanced AI behavior and systems along with theorycrafting new ideas for the prototype along with the project lead.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/tHHJ6pXBOUA?si=cM-44bNVympijwiW" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        I worked on / with :
        <ul>
        <li>Created advanced AI behavior and enemy concepts</li>
        <li>Worked with GAS & AI Perception</li>
        <li>Created a stalking enemy</li>
        <li>Created a blind enemy</li>
        </ul>
    </div>

    </div>
    `, "#383838")];