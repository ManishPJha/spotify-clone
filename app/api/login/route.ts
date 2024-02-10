export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const requestBody = req.body

  console.log('🚀 ~ file: route.ts:6 ~ POST ~ requestBody:', requestBody)

  return Response.json({ message: 'api is working' }, { status: 200 })
}
