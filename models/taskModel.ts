export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export let tasks: Task[] = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Build modular routes", completed: false },
];
