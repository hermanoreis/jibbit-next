"use client"

import { useState } from "react"
import { ListChecksIcon, PlusIcon, Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import Link from "next/link"

type Task = {
  id: string
  text: string
  completed: boolean
  dueDate?: string // Optional due date
}

const initialTasks: Task[] = [
  { id: "1", text: "Revisar cap. 3 de História", completed: false, dueDate: "2025-06-15" },
  { id: "2", text: "Fazer 10 exercícios de Física (Cinemática)", completed: true },
  { id: "3", text: "Agendar monitoria de Química", completed: false },
  { id: "4", text: "Ler o artigo sobre atualidades", completed: false, dueDate: "2025-06-12" },
]

export function TasksAndReminders() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [newTaskText, setNewTaskText] = useState("")
  const [newTaskDueDate, setNewTaskDueDate] = useState("")

  const handleAddTask = () => {
    if (newTaskText.trim() === "") return
    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText.trim(),
      completed: false,
      dueDate: newTaskDueDate || undefined,
    }
    setTasks([newTask, ...tasks])
    setNewTaskText("")
    setNewTaskDueDate("")
  }

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map((task: Task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task: Task) => task.id !== taskId))
  }

  const pendingTasks = tasks.filter((task: Task) => !task.completed)
  const completedTasks = tasks.filter((task: Task) => task.completed)

  return (
    <Card className="col-span-1 lg:col-span-1 flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <ListChecksIcon className="h-5 w-5 text-primary" />
              Tarefas e Lembretes
            </CardTitle>
            <CardDescription className="mt-1.5">Suas tarefas pendentes e lembretes importantes.</CardDescription>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-2">
                <PlusIcon className="h-3.5 w-3.5" />
                <span>Nova</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Nova Tarefa/Lembrete</DialogTitle>
                <DialogDescription>Adicione uma nova tarefa ou lembrete à sua lista.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Input
                  placeholder="Descrição da tarefa..."
                  value={newTaskText}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTaskText(e.target.value)}
                  className="col-span-3"
                />
                <Input
                  type="date"
                  placeholder="Data de conclusão (opcional)"
                  value={newTaskDueDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTaskDueDate(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <DialogFooter>
                <DialogClose className="px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-colors">
                  Cancelar
                </DialogClose>
                <DialogClose onClick={handleAddTask} className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm font-medium transition-colors">
                  Adicionar
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          {pendingTasks.length === 0 && completedTasks.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">Nenhuma tarefa ou lembrete ainda.</p>
          )}
          {pendingTasks.length > 0 && <h4 className="text-sm font-medium mb-2 text-muted-foreground">Pendentes</h4>}
          <ul className="space-y-2">
            {pendingTasks.map((task: Task) => (
              <li key={task.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 group">
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(task.id)}
                  className="border-primary data-[state=checked]:bg-primary"
                />
                <label htmlFor={`task-${task.id}`} className="flex-1 text-sm cursor-pointer">
                  {task.text}
                  {task.dueDate && (
                    <span className="ml-2 text-xs text-muted-foreground">
                      (Até {new Date(task.dueDate + "T00:00:00").toLocaleDateString("pt-BR")})
                    </span>
                  )}
                </label>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash2Icon className="h-4 w-4" />
                  <span className="sr-only">Excluir</span>
                </Button>
              </li>
            ))}
          </ul>
          {completedTasks.length > 0 && pendingTasks.length > 0 && <hr className="my-4" />}
          {completedTasks.length > 0 && <h4 className="text-sm font-medium my-2 text-muted-foreground">Concluídas</h4>}
          <ul className="space-y-2">
            {completedTasks.map((task: Task) => (
              <li key={task.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 group">
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(task.id)}
                  className="border-gray-300 data-[state=checked]:bg-gray-400"
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className="flex-1 text-sm text-muted-foreground line-through cursor-pointer"
                >
                  {task.text}
                </label>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash2Icon className="h-4 w-4" />
                  <span className="sr-only">Excluir</span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 border-t pt-4">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/tarefas">Ver todas as tarefas</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 