import { FileTextIcon, TimerIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WeeklyEssay() {
  return (
    <Card className="col-span-1">
      <CardHeader className="pb-2">
        <div>
          <CardTitle className="text-xl flex items-center gap-2">
            <FileTextIcon className="h-5 w-5 text-primary" />
            Redação da Semana
          </CardTitle>
          <CardDescription>
            Escreva redações e receba sua avaliação em tempo real baseado nos mesmos critérios da banca do ENEM.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border p-4 mt-2">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="font-semibold">Tema:</h3>
              <p className="text-sm font-medium">O desafio da mobilidade urbana e os problemas nos centros urbanos</p>
            </div>
            <Badge
              variant="outline"
              className="bg-secondary/20 text-secondary hover:bg-secondary/20 border-secondary/30 flex items-center gap-1"
            >
              <TimerIcon className="h-3 w-3" />
              Disponível
            </Badge>
          </div>

          <div className="mt-4 flex flex-col">
            <div className="grid gap-2 sm:grid-cols-2 mt-4">
              <div className="rounded-md bg-muted p-3">
                <h4 className="text-sm font-medium mb-1">Última pontuação</h4>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold">820</span>
                  <span className="text-sm text-success">+20 pontos</span>
                </div>
              </div>
              <div className="rounded-md bg-muted p-3">
                <h4 className="text-sm font-medium mb-1">Redações enviadas</h4>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold">8</span>
                  <span className="text-sm text-muted-foreground">este mês</span>
                </div>
              </div>
            </div>

            <Button className="mt-6 w-full bg-primary hover:bg-primary/90">Escrever redação</Button>

            <Button variant="outline" className="mt-2 w-full">
              Ver redações anteriores
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 