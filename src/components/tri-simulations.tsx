import { ActivitySquareIcon, BookIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const simulados = [
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

export function TRISimulations() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <ActivitySquareIcon className="h-5 w-5 text-primary" />
          Simulados TRI
        </CardTitle>
        <CardDescription>
          Faça simulados exclusivos com o método de avaliação TRI toda semana em cada área de conhecimento.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {simulados.map((simulado, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium text-sm">{simulado.title}</h3>
                    {simulado.status === "iniciado" && (
                      <Badge variant="outline" className="bg-info/20 text-info hover:bg-info/20 border-info/30">
                        Iniciado
                      </Badge>
                    )}
                    {simulado.status === "feito" && (
                      <Badge
                        variant="outline"
                        className="bg-success/20 text-success hover:bg-success/20 border-success/30"
                      >
                        Feito
                      </Badge>
                    )}
                    {simulado.status === "disponivel" && (
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
                      Questões: {simulado.completed} / {simulado.questions}
                    </span>
                  </div>

                  <Button
                    className="w-full text-sm h-9"
                    variant={simulado.status === "feito" ? "outline" : "default"}
                    disabled={simulado.status === "feito"}
                  >
                    {simulado.status === "iniciado" && "Continuar"}
                    {simulado.status === "feito" && "Revisar"}
                    {simulado.status === "disponivel" && "Iniciar"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 