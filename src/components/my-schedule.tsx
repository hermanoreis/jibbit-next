"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, PencilIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]
const days = [5, 6, 7, 8, 9, 10, 11]

const tasks = [
  {
    subject: "Português",
    topic: "Variação linguística",
    duration: "10min",
  },
  {
    subject: "Geografia",
    topic: "Meio ambiente, impactos e sustentabilidade",
    duration: "20min",
  },
  {
    subject: "Biologia",
    topic: "Sistema circulatório",
    duration: "30min",
  },
  {
    subject: "Matemática",
    topic: "Porcentagem",
    duration: "25min",
  },
]

export function MySchedule() {
  const [currentDay, setCurrentDay] = useState(9)

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Meu cronograma
          </CardTitle>
          <CardDescription>Junho 2025</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="h-8 gap-2">
          <PencilIcon className="h-3.5 w-3.5" />
          <span>Editar</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Anterior</span>
          </Button>
          <div className="flex space-x-1">
            {weekdays.map((day, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-1">{day}</span>
                <button
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${
                    days[i] === currentDay ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                  onClick={() => setCurrentDay(days[i])}
                >
                  {days[i]}
                </button>
              </div>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Próximo</span>
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Tarefas do dia {currentDay}</h3>
            <span className="text-sm text-muted-foreground">0 / 4</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Seu cronograma é atualizado semanalmente com os assuntos que você mais precisa estudar e revisar.
          </p>
        </div>

        <div className="mt-4 space-y-3">
          {tasks.map((task, i) => (
            <div key={i} className="rounded-lg border p-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">{task.subject}</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  {task.duration}
                </span>
              </div>
              <p className="text-sm font-medium">{task.topic}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t pt-4">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/cronograma">Ver cronograma completo</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
