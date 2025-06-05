import { ActivitySquareIcon, BookIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const practiceTests = [
  {
    title: "Linguagens, Códigos e suas Tecnologias",
    status: "iniciado",
    questions: 10,
    completed: 6,
  },
  {
    title: "Matemática e suas Tecnologias",
    status: "feito",
    questions: 10,
    completed: 10,
  },
  {
    title: "Ciências da Natureza e suas Tecnologias",
    status: "disponivel",
    questions: 10,
    completed: 0,
  },
  {
    title: "Ciências Humanas e suas Tecnologias",
    status: "disponivel",
    questions: 10,
    completed: 0,
  },
]

export function PracticeTests() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div>
          <CardTitle className="text-xl flex items-center gap-2">
            <ActivitySquareIcon className="h-5 w-5 text-primary" />
            Simulados ENEM Curtos
            <Badge variant="outline" className="bg-primary/20 text-primary hover:bg-primary/20 border-primary/30 ml-1 text-xs">
              Com TRI
            </Badge>
          </CardTitle>
          <CardDescription>
            Simulados rápidos com apenas 10 questões por área de conhecimento. Inclui cálculo de nota com Teoria de Resposta ao Item (TRI).
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {practiceTests.map((practiceTest, i) => (
            <Card key={i} className="overflow-hidden p-0 py-0">
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-sm">{practiceTest.title}</h3>
                  {practiceTest.status === "iniciado" && (
                    <Badge variant="outline" className="bg-info/20 text-info hover:bg-info/20 border-info/30">
                      Iniciado
                    </Badge>
                  )}
                  {practiceTest.status === "feito" && (
                    <Badge
                      variant="outline"
                      className="bg-success/20 text-success hover:bg-success/20 border-success/30"
                    >
                      Feito
                    </Badge>
                  )}
                  {practiceTest.status === "disponivel" && (
                    <Badge
                      variant="outline"
                      className="bg-secondary/20 text-secondary hover:bg-secondary/20 border-secondary/30"
                    >
                      Disponível
                    </Badge>
                  )}
                </div>

                <div className="flex items-center mb-3 text-sm text-muted-foreground">
                  <BookIcon className="h-4 w-4 mr-1" />
                  <span>
                    Questões: {practiceTest.completed} / {practiceTest.questions}
                  </span>
                </div>

                <div className="mt-auto">
                  <Button
                    className="w-full text-sm h-9"
                    variant={practiceTest.status === "feito" ? "outline" : "default"}
                    disabled={practiceTest.status === "feito"}
                  >
                    {practiceTest.status === "iniciado" && "Continuar"}
                    {practiceTest.status === "feito" && "Revisar"}
                    {practiceTest.status === "disponivel" && "Iniciar"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 