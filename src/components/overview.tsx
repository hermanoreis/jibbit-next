import { CheckCircleIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MySchedule } from "@/components/my-schedule"
import { WeeklyEssay } from "@/components/weekly-essay"
import { PracticeTests } from "@/components/practice-tests"
import { TasksAndReminders } from "@/components/tasks-reminders"
import { Logbook } from "@/components/logbook"

export function Overview() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Olá, Hermano! 👋</h2>
          <p className="text-muted-foreground" id="wisdom-of-the-day">
            Lembre-se: a jornada do conhecimento é longa, mas cada passo vale a pena!
          </p>
        </div>
        <div className="flex items-center">
          <Card className="flex-row items-center gap-4 p-4 w-full lg:w-[380px]">
            <CheckCircleIcon className="w-6 h-6 text-primary" />
            <div className="flex-1 space-y-1">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-medium">Progresso semanal</p>
                <p className="text-2xl font-bold">68%</p>
              </div>
              <div className="flex items-center justify-between">
                <Progress value={68} className="h-2 w-2/3" />
                <p className="text-xs text-muted-foreground">14 de 20 tarefas</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <MySchedule />
        <TasksAndReminders />
      </div>

      <PracticeTests />

      <div className="grid gap-6 lg:grid-cols-2">
        <Logbook />
        <WeeklyEssay />
      </div>
    </div>
  )
}
