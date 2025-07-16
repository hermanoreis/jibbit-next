import { NextResponse } from 'next/server';
import registryData from '@/app/registry/registry.json';

export async function GET() {
  return NextResponse.json(registryData);
} 