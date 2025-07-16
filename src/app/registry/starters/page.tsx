import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";

import { ComponentCard } from "@/components/design/component-card";
import { Button } from "@/components/ui/button";

const starters = [
  {
    title: "Blank",
    name: "blank",
  },
  {
    title: "Dashboard",
    name: "dashboard",
    url: "/starters/dashboard",
  },
  {
    title: "Store",
    name: "store",
    url: "/starters/store",
  },
];

export default function StartPage() {
  return (
    <div className="container p-5 md:p-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="font-bold text-3xl tracking-tight">Starters</h1>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {starters.map((starter) => (
          <ComponentCard
            key={starter.name}
            name={starter.name}
            baseUrl={process.env.VERCEL_BRANCH_URL ?? ""}
            title={starter.title}
            promptTitle={`${starter.title} Starter Kit`}
            previewUrl={starter.url}
          />
        ))}
      </div>
    </div>
  );
}
