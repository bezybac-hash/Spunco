import { NextResponse } from 'next/server';
import { mockCreators } from '@/lib/creators';

export async function GET() {
  return NextResponse.json({ creators: mockCreators });
}
