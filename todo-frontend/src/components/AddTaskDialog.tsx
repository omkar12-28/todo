import { Button } from './ui/button'
import { CalendarIcon, Plus, X } from 'lucide-react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import type { Priority } from '@/TodoContainer';

const AddTaskDialog = () => {
    const [open, setOpen] = useState(false);
    const [priority, setPriority] = useState("low");
    const [tagInput, setTagInput] = useState("");
    // const [tags, setTags] = useState([]);
    const tags:string[] = [];
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState<Date | undefined>();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add Task
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                            placeholder="What needs to be done?"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Priority</Label>
                        <Select value={priority} onValueChange={(v) => setPriority(v as Priority)}>
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Tags</Label>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Add a tag..."
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                            // onKeyDown={(e) => {
                            //   if (e.key === "Enter") {
                            //     e.preventDefault();
                            //     addTag();
                            //   }
                            // }}
                            />
                            <Button type="button" variant="outline" size="sm">
                                Add
                            </Button>
                        </div>
                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 pt-1">
                                {tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="gap-1 text-xs">
                                        {tag}
                                        <button type="button"
                                        // onClick={() => removeTag(tag)}
                                        >
                                            <X className="h-3 w-3" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label>Due Date</Label>
                        <div className="flex gap-2">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className={cn("flex-1 justify-start text-left font-normal", !dueDate && "text-muted-foreground")}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {dueDate ? format(dueDate, "PPP") : "No due date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={dueDate}
                                        onSelect={setDueDate}
                                        // initialFocus
                                        className={cn("p-3 pointer-events-auto")}
                                    />
                                </PopoverContent>
                            </Popover>
                            {dueDate && (
                                <Button type="button" variant="ghost" size="icon" onClick={() => setDueDate(undefined)}>
                                    <X className="h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={!title.trim()}>
                            Add
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddTaskDialog;