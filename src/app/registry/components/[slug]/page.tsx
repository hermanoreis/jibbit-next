import type { Metadata } from "next";
import { ComponentCard } from "@/components/design/component-card";
import { notFound } from "next/navigation";

import { demos } from "./(demos)";
import { Button } from "@/components/ui/button";
import { getComponent } from "@/lib/utils";

export async function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const component = getComponent(slug);
  return {
    title: `${component.title} - Jibbit Registry`,
    description: component.description,
  };
}

export default function ComponentPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const demo = demos[slug as keyof typeof demos];

  if (!demo) {
    notFound();
  }

  const component = getComponent(slug);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">{component.title}</h1>
        {component.description && (
          <p className="text-muted-foreground mt-2">{component.description}</p>
        )}
      </div>

      <ComponentCard 
        name={slug} 
        baseUrl="http://localhost:3000"
        components={demo.components}
        title={component.title}
        description={component.description}
      />
    </div>
  );
}
