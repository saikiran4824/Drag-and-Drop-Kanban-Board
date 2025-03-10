export const initialData = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "task-1",
        title: "Design Homepage",
        description: "Create the wireframe and UI design for the homepage.",
        columnId: "todo"
      },
      {
        id: "task-4",
        title: "Research Competitors",
        description: "Analyze features and UX of competitor products.",
        columnId: "todo"
      },
      {
        id: "task-5",
        title: "Write Product Documentation",
        description: "Prepare an initial draft for the user manual and API documentation.",
        columnId: "todo"
      },
      {
        id: "task-6",
        title: "Plan Marketing Strategy",
        description: "Outline a digital marketing campaign for product launch.",
        columnId: "todo"
      }
    ]
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "task-2",
        title: "Develop API Endpoints",
        description: "Build RESTful API endpoints for user authentication and data retrieval.",
        columnId: "in-progress"
      },
      
    ]
  },
  {
    id: "review",
    title: "Review",
    tasks: [
      {
        id: "task-9",
        title: "Code Review for Backend",
        description: "Ensure API endpoints follow best practices and security guidelines.",
        columnId: "review"
      },
      {
        id: "task-10",
        title: "UI/UX Testing",
        description: "Conduct usability tests and gather feedback for design improvements.",
        columnId: "review"
      }
    ]
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "task-3",
        title: "Set Up Database",
        description: "Configured PostgreSQL and created required schemas.",
        columnId: "done"
      },
      {
        id: "task-11",
        title: "Deploy Staging Environment",
        description: "Set up the application on a staging server for internal testing.",
        columnId: "done"
      },
      {
        id: "task-12",
        title: "Optimize Performance",
        description: "Improved application load time and reduced API response delays.",
        columnId: "done"
      }
    ]
  }
];
