"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useIsMobile } from "@/hooks/use-mobile"
import { IconSend, IconPlus, IconMessageCircle, IconUser, IconRobot, IconLayoutSidebarRight, IconLayoutSidebarRightCollapse } from "@tabler/icons-react"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

interface Conversation {
  id: string
  title: string
  lastMessage: string
  timestamp: Date
}

export function ChatInterface() {
  const isMobile = useIsMobile()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Olá! Sou o Jibbit, seu assistente de estudos. Como posso te ajudar hoje?",
      isUser: false,
      timestamp: new Date(),
    }
  ])
  
  const [inputValue, setInputValue] = useState("")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(isMobile)
  const [conversations] = useState<Conversation[]>([
    {
      id: "1",
      title: "Dúvidas sobre Matemática",
      lastMessage: "Como resolver equações de segundo grau?",
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
    },
    {
      id: "2", 
      title: "Ajuda com Português",
      lastMessage: "Explique sobre figuras de linguagem",
      timestamp: new Date(Date.now() - 172800000), // 2 days ago
    },
    {
      id: "3",
      title: "Física - Mecânica",
      lastMessage: "Lei de Newton explicada",
      timestamp: new Date(Date.now() - 259200000), // 3 days ago
    },
    {
      id: "4",
      title: "Química Orgânica",
      lastMessage: "Reações de substituição",
      timestamp: new Date(Date.now() - 345600000), // 4 days ago
    },
    {
      id: "5",
      title: "História do Brasil",
      lastMessage: "Era Vargas resumo",
      timestamp: new Date(Date.now() - 432000000), // 5 days ago
    },
    {
      id: "6",
      title: "Inglês - Gramática",
      lastMessage: "Present perfect tense",
      timestamp: new Date(Date.now() - 518400000), // 6 days ago
    },
  ])

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Obrigado pela sua pergunta! Como seu assistente de estudos, estou aqui para te ajudar. Poderia dar mais detalhes sobre o que você gostaria de aprender?",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const createNewConversation = () => {
    setMessages([
      {
        id: "1",
        content: "Olá! Sou o Jibbit, seu assistente de estudos. Como posso te ajudar hoje?",
        isUser: false,
        timestamp: new Date(),
      }
    ])
  }

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="m-2 flex flex-1 rounded-xl border bg-card shadow-sm overflow-hidden relative">
      <div className="flex flex-1 flex-col">
        {/* Chat Header */}
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/jibbit-bot.png" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <IconRobot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">Tutor Jibbit</h2>
                <p className="text-sm text-muted-foreground">Assistente de estudos</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={createNewConversation}
                className="gap-2"
              >
                <IconPlus className="h-4 w-4" />
                Nova conversa
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={toggleSidebar}
              >
                {sidebarCollapsed ? (
                  <IconLayoutSidebarRight className="h-4 w-4" />
                ) : (
                  <IconLayoutSidebarRightCollapse className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle chat sidebar</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src="/avatars/jibbit-bot.png" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <IconRobot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg px-4 py-2 max-w-[70%] ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                {message.isUser && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src="/avatars/user.png" />
                    <AvatarFallback className="bg-secondary">
                      <IconUser className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2">
              <Input
                placeholder="Digite sua mensagem..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1"
              />
              <Button onClick={sendMessage} size="icon">
                <IconSend className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              O Jibbit pode cometer erros. Considere verificar informações importantes.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobile && !sidebarCollapsed && (
        <div 
          className="absolute inset-0 bg-black/20 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Conversations Sidebar */}
      {!sidebarCollapsed && (
        <div className={`w-80 border-l transition-all duration-200 ${
          isMobile 
            ? 'absolute inset-y-0 right-0 z-50 bg-background shadow-lg' 
            : 'bg-muted/30'
        }`}>
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2">
                <IconMessageCircle className="h-4 w-4" />
                Conversas Anteriores
              </h3>
              {isMobile && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={toggleSidebar}
                >
                  <IconLayoutSidebarRightCollapse className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="p-2 space-y-1">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="px-3 py-2 cursor-pointer hover:bg-muted/50 transition-colors rounded-md"
                >
                  <h4 className="font-medium text-sm truncate">
                    {conversation.title}
                  </h4>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  )
} 