import { useState, createContext } from "react";

export const ProjectsContext = createContext({
  projects: [
    {
      projectId: Math.random(),
      title: "",
      desc: "",
      date: "",
      tasks: [
        {
          taskName: "",
        },
      ],
    },
  ],
  selectedProjectId: undefined,
  selectedProject: undefined,
});

export const ProjectsContextProvider = ({ children }) => {
  const [projectsState, setProjectsState] = useState({
    projects: [],
    selectedProjectId: undefined,
    selectedProject: undefined,
  });

  function handleOpenAddForm() {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: null };
    });
  }

  function handleCloseAddForm() {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: undefined };
    });
  }

  function handleAddProject(title, desc, date) {
    let project = {
      projectId: Math.random().toString(36).substr(2, 9),
      title: title,
      desc: desc,
      date: date,
      tasks: [],
    };

    setProjectsState((prev) => {
      const updatedProjects = [project, ...prev.projects];
      const updatedState = {
        ...prev,
        projects: updatedProjects,
        selectedProjectId: undefined,
      };

      return updatedState;
    });
  }

  function handleSave(title, description, dueDate) {
    handleAddProject(
      title.current.value,
      description.current.value,
      dueDate.current.value
    );
  }

  function handleSelectProject(projectId) {
    setProjectsState((prev) => {
      let updatedState = { ...prev, selectedProjectId: projectId };
      const newSelectedProject = projectsState.projects.find(
        (project) => project.projectId === updatedState.selectedProjectId
      );
      updatedState = { ...prev, selectedProject: newSelectedProject };

      return updatedState;
    });
  }

  const projectsCtx = {
    projects: projectsState.projects,
    selectedProjectId: projectsState.selectedProjectId,
    selectedProject: projectsState.selectedProject,
    handleSave: handleSave,
    addProject: handleAddProject,
    selectProject: handleSelectProject,
    handleOpenAddForm: handleOpenAddForm,
    handleCloseAddForm: handleCloseAddForm,
  };

  return (
    <ProjectsContext.Provider value={projectsCtx}>
      {children}
    </ProjectsContext.Provider>
  );
};
