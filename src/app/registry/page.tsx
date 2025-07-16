import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import registryData from './registry.json';

export default function RegistryPage() {
  const components = registryData.items.filter(item => 
    item.type === 'registry:ui' || 
    item.type === 'registry:component' || 
    item.type === 'registry:block'
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Jibbit Component Registry</h1>
        <p className="text-muted-foreground mt-2">
          Browse and copy components built with your project's design system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <Link
            key={component.name}
            href={`/registry/components/${component.name}`}
            className="group"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {component.title || component.name}
                  </CardTitle>
                  <Badge variant="secondary">
                    {component.type.replace('registry:', '')}
                  </Badge>
                </div>
                <CardDescription>
                  {component.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
