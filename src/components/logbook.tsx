import { BookOpenIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const entries = [
  {
    date: "09/01",
    content:
      "Revisei todo o conteúdo de variação linguística e fiz os exercícios do caderno. Estou melhorando bastante na identificação dos diferentes tipos de linguagem.",
  },
  {
    date: "08/01",
    content:
      "Estudei geometria espacial. Ainda tenho dificuldade com prismas e pirâmides. Preciso revisar as fórmulas de volume.",
  },
  {
    date: "07/01",
    content:
      "Fiz um simulado completo de Ciências da Natureza. Acertei 32 de 45 questões. Preciso revisar o conteúdo sobre Termoquímica.",
  },
]

export function Logbook() {
  return (
    <Card className="col-span-1">
      <CardHeader className="pb-2">
        <div>
          <CardTitle className="text-xl flex items-center gap-2">
            <BookOpenIcon className="h-5 w-5 text-primary" />
            Diário de Bordo
          </CardTitle>
          <CardDescription>Anotações sobre seu progresso nos estudos</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {entries.map((entry, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                  {entry.date}
                </div>
                {i < entries.length - 1 && <div className="w-0.5 h-full bg-muted/70 mt-2" />}
              </div>
              <div className="bg-muted rounded-lg p-3 flex-1">
                <p className="text-sm">{entry.content}</p>
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
          <PlusIcon className="h-4 w-4 mr-2" />
          Nova anotação
        </Button>
      </CardContent>
    </Card>
  )
} 