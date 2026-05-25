import { Checkbox } from './ui/checkbox'
import { format } from 'date-fns';
import { Badge } from './ui/badge';
import { Calendar, Flag, Tag} from 'lucide-react';
import type { Task } from '@/TodoContainer';
import DeleteTaskDialog from './DeleteTaskDialog';
import EditTaskDialog from './EditTaskDialog';

const isOverdue = "";
const isDueToday = "";

interface TaskItemProps {
    task: Task
}

const TaskItem = ({task}: TaskItemProps) => {
    return (
        <div className="group rounded-lg border bg-card transition-shadow hover:shadow-sm">
            <div className="flex items-center gap-2 p-4">
                <Checkbox
                    checked={task.completed}
                    //   onCheckedChange={() => onToggle(task.id)}
                    className="h-5 w-5"
                />
                <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span
                            className={`text-sm transition-all ${task.completed
                                    ? "text-muted-foreground line-through"
                                    : "text-card-foreground"
                                }`}
                        >
                            {task.title}
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className={`text-xs px-1.5 py-0`}>
                            <Flag className="mr-1 h-3 w-3" />
                            {task.priority.charAt(0).toLocaleUpperCase() + task.priority.slice(1)}
                        </Badge>
                        {task.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">
                                <Tag className="mr-1 h-3 w-3" />
                                {tag}
                            </Badge>
                        ))}
                        {task.dueDate && (
                            <span
                                className={`flex items-center gap-1 text-xs ${isOverdue
                                        ? "text-destructive font-medium"
                                        : isDueToday
                                            ? "text-primary font-medium"
                                            : "text-muted-foreground"
                                    }`}
                            >
                                <Calendar className="h-3 w-3" />
                                {isOverdue ? "Overdue · " : isDueToday ? "Today · " : ""}
                                {format(task.dueDate, "MMM d")}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <EditTaskDialog />
                    <DeleteTaskDialog />
                </div>
            </div>
        </div>
    )
}

export default TaskItem