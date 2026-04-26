import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState,setProjectState] = useState(
      {
        selectedProject: undefined,
        projects: []
      }
    );

    function handleStartAddProject(){
      setProjectState( prevState=>
      {  
        return {
          ...prevState,
          selectedProject:null,
        }
      }

      );
    }
    function handleAddProject(projectData){
      const projectId = Math.random();
      setProjectState(prevState=>{
        const newProject = {
         ...projectData,
         id:projectId,
      };
        return{
             ...prevState,
             selectedProject:undefined,
             projects:[...prevState.projects,newProject],
        };
      }
      );
    }

    let content;
    if(projectState.selectedProject === null){
      content =<NewProject onAdd={handleAddProject}/>
    }else if(projectState.selectedProject === undefined){
        content =  <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projectss={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
