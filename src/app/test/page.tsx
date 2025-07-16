"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TestPage() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Teste de Hydratação</h1>
      <p>Se você conseguir ver este contador e clicar no botão, o JavaScript está funcionando:</p>
      
      <div style={{ margin: "20px 0" }}>
        <p>Contador: <strong>{count}</strong></p>
        <Button onClick={() => setCount(count + 1)}>
          Incrementar (+1)
        </Button>
        <Button 
          onClick={() => setCount(0)} 
          variant="outline" 
          style={{ marginLeft: "10px" }}
        >
          Reset
        </Button>
      </div>
      
      <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
        <h3>Status de hydratação:</h3>
        <p>✅ React está renderizando</p>
        <p>✅ useState está funcionando</p>
        <p>✅ Event handlers estão ativos</p>
      </div>
    </div>
  )
} 