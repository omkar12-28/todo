import { Button } from "@/components/ui/button"
import { ArrowUpDown, ClipboardList, Moon, Search, Sun } from "lucide-react"
import { Input } from "./components/ui/input"
import { useMemo, useState } from "react"
import { useTheme } from "./components/theme-provider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import AddTaskDialog from "./components/AddTaskDialog";
import TaskItem from "./components/TaskItem";

export type Priority = "low" | "medium" | "high";
export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  dueDate?: Date;
  tags: string[];
}

type SortOption = "manual" | "priority" | "dueDate";

export function TodoContainer() {
  const { theme, setTheme } = useTheme();
  const [search, setSearch] = useState("");
  // const [tasks, setTasks] = useState<Task[]>([]);
  const [sort, setSort] = useState<SortOption>("manual");

  const tasks: Task[] = useMemo(() => [
    {
      id: "1",
      title: "Build the Todo app UI",
      completed: true,
      priority: "high",
      tags: ["frontend"],
    },
    {
      id: "2",
      title: "Add dark mode support",
      completed: false,
      priority: "medium",
      dueDate: new Date(),
      tags: ["frontend", "design"],
    },
    {
      id: "3",
      title: "Write unit tests",
      completed: false,
      priority: "low",
      tags: ["testing"],
    },
  ],
    []);

  const filteredTasks = useMemo(() => {
    const searchLower = search.toLowerCase();
    const priorityOrder: Record<Priority, number> = {
      low: 0,
      medium: 1,
      high: 2,
    };

    const filtered = tasks.filter((t) => {
      if (search && !t.title.toLowerCase().includes(searchLower) && !t.tags.some((tag) => tag.toLowerCase().includes(searchLower))) return false;
      return true;
    });

    if (sort === "priority") {
      return [...filtered].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }

    if (sort === "dueDate") {
      return [...filtered].sort((a, b) => {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return a.dueDate.getTime() - b.dueDate.getTime();
      });
    }
    return filtered;
  }, [tasks, sort, search]);

  return (
    <div className="min-h-screen bg-background transition-colors">
      <div className="mx-auto max-w-xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <ClipboardList className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Todo App</h1>
          </div>
          <Button size={"icon"} variant={"outline"} onClick={() => { setTheme(theme === "dark" ? "light" : "dark") }}>
            {theme === "dark" ? <Moon /> : <Sun />}
          </Button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by title or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-9 text-sm"
          />
        </div>

        <div className="mb-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
            <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
              <SelectTrigger className="h-8 w-[160px] text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manual">Manual order</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
                <SelectItem value="dueDate">Due date</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <AddTaskDialog />
        </div>

        <div className="space-y-2">
          {filteredTasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
              <ClipboardList className="mb-3 h-10 w-10 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                {tasks.length === 0 && "No tasks yet. Add one to get started!"}
              </p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoContainer
