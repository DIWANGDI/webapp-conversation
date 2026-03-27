import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { client, getInfo, setSession } from '@/app/api/utils/common'

export async function DELETE(request: NextRequest, { params }: {
  params: Promise<{ conversationId: string }>
}) {
  const { sessionId, user } = getInfo(request)
  const { conversationId } = await params

  try {
    const { data }: any = await client.deleteConversation(conversationId, user)
    return NextResponse.json(data, {
      headers: setSession(sessionId),
    })
  }
  catch (error: any) {
    return NextResponse.json({
      error: error?.message || 'Delete conversation failed',
    }, { status: 500 })
  }
}
