import { CheckCircleIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MySchedule } from "@/components/my-schedule"
import { GeneralPerformance } from "@/components/general-performance"
import { TasksAndReminders } from "@/components/tasks-reminders"
import { Logbook } from "@/components/logbook"

export function Overview() {
  return (
    <div className="grid gap-6 max-w-full overflow-x-hidden">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between max-w-full overflow-x-hidden">
        <div className="min-w-0">
          <h2 className="text-3xl font-bold tracking-tight">Olá, Hermano! 👋</h2>
          <p className="text-muted-foreground" id="wisdom-of-the-day">
            Lembre-se: a jornada do conhecimento é longa, mas cada passo vale a pena!
          </p>
        </div>
        <div className="flex items-center min-w-0 w-full lg:w-auto lg:pl-8">
          <Card className="flex-row items-center gap-4 p-4 w-full max-w-full lg:w-[380px]">
            <CheckCircleIcon className="w-6 h-6 text-primary" />
            <div className="flex-1 space-y-1 min-w-0">
              <div className="flex items-baseline justify-between min-w-0">
                <p className="text-sm font-medium">Progresso semanal</p>
                <p className="text-2xl font-bold">68%</p>
              </div>
              <div className="flex items-center justify-between min-w-0">
                <Progress value={68} className="h-2 w-2/3 min-w-0" />
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

      <div className="grid gap-6 lg:grid-cols-2">
        <Logbook />
        <GeneralPerformance />
      </div>
    </div>
  )
}
