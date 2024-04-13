//create the context
import { createContext } from "react";

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

//project1: {
//"name": "Learn react",
//projectId: Math.random()...,
//tasks: [
//{ "name": "create project" },
//{..}, ...
//]
//}

//project2: {
//"name": "Learn vue js",
//projectId: Math.random()...,
//tasks: [
//{ "name": "make vue project" },
//{..}, ...
//]
//}
