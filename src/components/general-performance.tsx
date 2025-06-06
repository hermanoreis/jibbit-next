import { Button } from "@/components/ui/button"
import { BarChart4Icon, TrendingUpIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function GeneralPerformance() {
  return (
    <Card className="col-span-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <BarChart4Icon className="h-5 w-5 text-primary" />
          Desempenho Geral
        </CardTitle>
        <CardDescription>Seu desempenho nas últimas avaliações por área de conhecimento</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 space-y-4 overflow-y-auto">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Linguagens</span>
              <span className="text-sm font-medium">78%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "78%" }} />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Matemática</span>
              <span className="text-sm font-medium">65%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "65%" }} />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Ciências da Natureza</span>
              <span className="text-sm font-medium">82%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "82%" }} />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Ciências Humanas</span>
              <span className="text-sm font-medium">71%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "71%" }} />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Redação</span>
              <span className="text-sm font-medium">88%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "88%" }} />
            </div>
          </div>
        </div>
        <div className="mt-6 border-t pt-4">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/relatorio">
              <TrendingUpIcon className="h-4 w-4 mr-2" />
              Ver relatório detalhado
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 