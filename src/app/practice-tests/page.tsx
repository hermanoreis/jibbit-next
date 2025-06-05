import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { PracticeTests } from "@/components/practice-tests"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ActivitySquareIcon, BookIcon, ClipboardCheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconReport } from "@tabler/icons-react"

// Full ENEM practice tests data
const fullPracticeTests = [
  {
    title: "Simulado ENEM 2023",
    status: "disponivel",
    questions: 90,
    completed: 0,
    date: "15/10/2023",
  },
  {
    title: "Simulado ENEM 2022",
    status: "feito",
    questions: 90,
    completed: 90,
    date: "20/09/2022",
  },
  {
    title: "Simulado ENEM 2021",
    status: "disponivel",
    questions: 90,
    completed: 0,
    date: "10/10/2021",
  },
]

// Future practice tests (Provão Paulista)
const futurePracticeTests = [
  {
    title: "Provão Paulista 2023",
    status: "em-breve",
    questions: 60,
    completed: 0,
    date: "Em breve",
  },
]

function FullPracticeTests() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div>
          <CardTitle className="text-xl flex items-center gap-2">
            <ClipboardCheckIcon className="h-5 w-5 text-primary" />
            Simulados ENEM Completos
            <Badge variant="outline" className="bg-primary/20 text-primary hover:bg-primary/20 border-primary/30 ml-1 text-xs">
              Com TRI
            </Badge>
          </CardTitle>
          <CardDescription>
            Simulados completos com 90 questões, simulando o dia da prova oficial. Inclui cálculo de nota com Teoria de Resposta ao Item (TRI).
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {fullPracticeTests.map((practiceTest, i) => (
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
                  {practiceTest.status === "em-breve" && (
                    <Badge
                      variant="outline"
                      className="bg-muted/20 text-muted-foreground hover:bg-muted/20 border-muted/30"
                    >
                      Em Breve
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <BookIcon className="h-4 w-4 mr-1" />
                    <span>
                      Questões: {practiceTest.completed} / {practiceTest.questions}
                    </span>
                  </div>
                  <span className="text-xs">{practiceTest.date}</span>
                </div>

                <div className="mt-auto">
                  <Button
                    className="w-full text-sm h-9"
                    variant={practiceTest.status === "feito" ? "outline" : "default"}
                    disabled={practiceTest.status === "feito" || practiceTest.status === "em-breve"}
                  >
                    {practiceTest.status === "iniciado" && "Continuar"}
                    {practiceTest.status === "feito" && "Ver Resultados"}
                    {practiceTest.status === "disponivel" && "Iniciar"}
                    {practiceTest.status === "em-breve" && "Em Breve"}
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

function FuturePracticeTests() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div>
          <CardTitle className="text-xl flex items-center gap-2">
            <ActivitySquareIcon className="h-5 w-5 text-primary" />
            Outros Simulados
            <Badge variant="outline" className="bg-muted/20 text-muted-foreground hover:bg-muted/20 border-muted/30 ml-1 text-xs">
              Em Breve
            </Badge>
          </CardTitle>
          <CardDescription>
            Simulados específicos para outros vestibulares e exames, como o Provão Paulista. Disponíveis em breve na plataforma.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {futurePracticeTests.map((practiceTest, i) => (
            <Card key={i} className="overflow-hidden p-0 py-0">
              <div className="p-4 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-sm">{practiceTest.title}</h3>
                  {practiceTest.status === "em-breve" && (
                    <Badge
                      variant="outline"
                      className="bg-muted/20 text-muted-foreground hover:bg-muted/20 border-muted/30"
                    >
                      Em Breve
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <BookIcon className="h-4 w-4 mr-1" />
                    <span>
                      Questões: {practiceTest.completed} / {practiceTest.questions}
                    </span>
                  </div>
                  <span className="text-xs">{practiceTest.date}</span>
                </div>

                <div className="mt-auto">
                  <Button
                    className="w-full text-sm h-9"
                    variant="outline"
                    disabled={true}
                  >
                    Em Breve
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

export default function PracticeTestsPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 60)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-6 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
                  <IconReport className="h-6 w-6 text-primary" />
                  Simulados
                </h1>
                <p className="text-muted-foreground">
                  Pratique com simulados para se preparar melhor para o ENEM e outros vestibulares. Todos os simulados do ENEM incluem cálculo de nota com TRI.
                </p>
              </div>
              
              <PracticeTests />
              <FullPracticeTests />
              <FuturePracticeTests />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 