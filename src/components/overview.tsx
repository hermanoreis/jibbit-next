import { CalendarIcon, CheckCircleIcon, ClockIcon, PenLineIcon, TrendingUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MySchedule } from "@/components/my-schedule"
import { WeeklyEssay } from "@/components/weekly-essay"
import { TRISimulations } from "@/components/tri-simulations"
import { TasksAndReminders } from "@/components/tasks-reminders"
import { Logbook } from "@/components/logbook"

export function Overview() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Olá, Hermano! 👋</h2>
          <p className="text-muted-foreground" id="wisdom-of-the-day">
            Lembre-se: a jornada do conhecimento é longa, mas cada passo vale a pena!
          </p>
        </div>
        <div className="flex items-center gap-2">
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <MySchedule />
        <TasksAndReminders />
      </div>

      <div className="grid gap-6 pb-4 md:grid-cols-2 lg:grid-cols-3 max-w-full overflow-x-hidden">
        <Card className="min-w-0 max-w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-primary" />
              Tempo de estudo hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1h 25min</div>
            <p className="text-xs text-muted-foreground">de 3h planejadas</p>
            <Progress value={33} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card className="min-w-0 max-w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />
              Progresso semanal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">14 de 20 tarefas concluídas</p>
            <Progress value={68} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card className="min-w-0 max-w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <PenLineIcon className="h-5 w-5 text-primary" />
              Última redação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">820</div>
            <p className="text-xs text-muted-foreground">Pontuação (850 máx.)</p>
            <Progress value={96} className="mt-2 h-2" />
          </CardContent>
        </Card>
      </div>

      <TRISimulations />

      <div className="grid gap-6 lg:grid-cols-2">
        <Logbook />
        <WeeklyEssay />
      </div>
    </div>
  )
}
