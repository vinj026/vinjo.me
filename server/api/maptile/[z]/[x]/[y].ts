

export default defineEventHandler(async (event) => {
  const { z, x, y } = event.context.params || {}
  const config = useRuntimeConfig()
  const apiKey = config.MAPTILER_KEY

  const yClean = y?.replace('.png', '')

  if (!z || !x || !yClean) {
    console.error('Missing tile params:', { z, x, y })
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Missing tile parameters' }))
  }

  const url = `https://api.maptiler.com/maps/streets-v2-dark/${z}/${x}/${yClean}.png?key=${apiKey}`
  const res = await fetch(url)

  if (!res.ok) {
    console.error('Failed to fetch from MapTiler:', res.status, await res.text())
    return sendError(event, createError({ statusCode: res.status, statusMessage: 'MapTiler error' }))
  }

  const headers = new Headers(res.headers)
  headers.set('Cache-Control', 'max-age=31536000')

  return new Response(res.body, {
    status: res.status,
    headers
  })
})

