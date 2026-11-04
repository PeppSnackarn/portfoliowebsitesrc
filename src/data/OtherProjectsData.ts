import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "AI Director", "img/projects/project-6-icon.png", `
    <div class="paragraph">
      <strong>AI Director</strong> This project is currently being worked on in private and is not available for public viewing. I will be releasing more information about this project in the future.
            </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>Modular AI Director game-state component</li>
            <li>"Utility AI" director modifying enemy AI decision making</li>
            <li>"Dummy enemy AI" for easier testing purposes for future AI development</li>
            </ul>

        </div>
    `, "#c10606", false, true),
    new ProjectData("project-7", "Moody AI", "img/projects/project-7-icon.png", `
    <div class="paragraph">
                <strong>Moody AI</strong> Is a project I worked on as a side project for fun during my specialized gameplay programming course at FutureGames. The project is a small learning project for me where I learnt about doing Unreal BT's entirely in C++,
                and creating a small AI "attack token" system seen in games such as Doom 2016.
            </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>Unreal Behavior Tree written entirely in C++</li>
              <li>AI "attack token" system</li>
              </ul>
          </div>
            </div>`, "#1ca1e2"),];