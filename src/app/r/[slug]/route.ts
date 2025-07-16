import { NextResponse } from 'next/server';
import registryData from '@/app/registry/registry.json';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug.replace('.json', '');
  
  const item = registryData.items.find(item => item.name === slug);
  
  if (!item) {
    return NextResponse.json({ error: 'Component not found' }, { status: 404 });
  }
  
  return NextResponse.json(item);
} 