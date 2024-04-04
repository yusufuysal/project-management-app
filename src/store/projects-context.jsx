//create the context
import { createContext } from "react";

export const ProjectsContext = createContext({
  projects: [
    {
      projectName: "",
      projectId: Math.random(),
      tasks: [
        {
          taskName: "",
        },
      ],
    },
  ],
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
