"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  IconPlus,
  IconMessage,
  IconDots,
  IconTrash,
  IconEdit,
  IconSearch,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ChatHistory {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  isActive?: boolean;
}

const mockChatHistory: ChatHistory[] = [
  {
    id: "1",
    title: "Dúvidas sobre Matemática",
    lastMessage: "Como resolver equações de segundo grau?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 min ago
    isActive: true,
  },
  {
    id: "2",
    title: "História do Brasil",
    lastMessage: "Explique a Proclamação da República",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: "3",
    title: "Química Orgânica",
    lastMessage: "Diferenças entre aldeídos e cetonas",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
  },
  {
    id: "4",
    title: "Literatura Brasileira",
    lastMessage: "Características do Romantismo",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
  },
  {
    id: "5",
    title: "Física - Mecânica",
    lastMessage: "Leis de Newton explicadas",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
  },
  {
    id: "6",
    title: "Redação ENEM",
    lastMessage: "Como estruturar uma dissertação",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 1 week ago
  },
];

export function ChatSidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [chatHistory, setChatHistory] =
    useState<ChatHistory[]>(mockChatHistory);

  const filteredHistory = chatHistory.filter(
    (chat) =>
      chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const groupChatsByDate = (chats: ChatHistory[]) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    const groups = {
      today: [] as ChatHistory[],
      yesterday: [] as ChatHistory[],
      lastWeek: [] as ChatHistory[],
      older: [] as ChatHistory[],
    };

    chats.forEach((chat) => {
      if (chat.timestamp >= today) {
        groups.today.push(chat);
      } else if (chat.timestamp >= yesterday) {
        groups.yesterday.push(chat);
      } else if (chat.timestamp >= lastWeek) {
        groups.lastWeek.push(chat);
      } else {
        groups.older.push(chat);
      }
    });

    return groups;
  };

  const groupedChats = groupChatsByDate(filteredHistory);

  const handleDeleteChat = (chatId: string) => {
    setChatHistory((prev) => prev.filter((chat) => chat.id !== chatId));
  };

  const handleRenameChat = (chatId: string) => {
    // TODO: Implement rename functionality
    console.log("Rename chat:", chatId);
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60),
    );

    if (diffInMinutes < 60) {
      return `${diffInMinutes}m`;
    } else if (diffInMinutes < 24 * 60) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours}h`;
    } else {
      const days = Math.floor(diffInMinutes / (24 * 60));
      return `${days}d`;
    }
  };

  const ChatGroup = ({
    title,
    chats,
  }: {
    title: string;
    chats: ChatHistory[];
  }) => {
    if (chats.length === 0) return null;

    return (
      <div className="mb-4">
        <h3 className="text-xs font-medium text-muted-foreground mb-2 px-3">
          {title}
        </h3>
        <div className="space-y-1">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={cn(
                "group relative mx-2 rounded-lg px-3 py-2 cursor-pointer hover:bg-muted/50 transition-colors",
                chat.isActive && "bg-muted",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2 min-w-0 flex-1">
                  <IconMessage className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">{chat.title}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted-foreground">
                    {formatTime(chat.timestamp)}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <IconDots className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem
                        onClick={() => handleRenameChat(chat.id)}
                        className="gap-2"
                      >
                        <IconEdit className="h-4 w-4" />
                        Renomear
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteChat(chat.id)}
                        className="gap-2 text-destructive focus:text-destructive"
                      >
                        <IconTrash className="h-4 w-4" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-80 border-l bg-background flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Conversas</h2>
          <Button size="sm" className="h-8 w-8 p-0">
            <IconPlus className="h-4 w-4" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar conversas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9"
          />
        </div>
      </div>

      {/* Chat History */}
      <ScrollArea className="flex-1">
        <div className="py-4">
          <ChatGroup title="Hoje" chats={groupedChats.today} />
          <ChatGroup title="Ontem" chats={groupedChats.yesterday} />
          <ChatGroup title="Últimos 7 dias" chats={groupedChats.lastWeek} />
          <ChatGroup title="Mais antigos" chats={groupedChats.older} />

          {filteredHistory.length === 0 && (
            <div className="text-center py-8 px-4">
              <IconMessage className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                {searchQuery
                  ? "Nenhuma conversa encontrada"
                  : "Nenhuma conversa ainda"}
              </p>
              {!searchQuery && (
                <p className="text-xs text-muted-foreground mt-1">
                  Inicie uma nova conversa para começar
                </p>
              )}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
