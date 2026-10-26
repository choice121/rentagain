export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);

  // Skip static assets with extensions (images, scripts, fonts, etc.)
  if (/\.[a-zA-Z0-9]+$/.test(url.pathname)) {
    return context.next();
  }

  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera mini|iemobile|wpdesktop/i.test(userAgent);

  // If user is on a mobile device and not already on /m/
  if (isMobile && !url.pathname.startsWith('/m/') && url.pathname !== '/m') {
    const mobilePath = '/m' + (url.pathname.endsWith('/') ? url.pathname : url.pathname + '/');
    const mobileUrl = new URL(mobilePath, url.origin);
    const response = await context.env.ASSETS.fetch(mobileUrl);
    if (response.status === 200) {
      return response;
    }
  }

  // If user is on a desktop device and currently on /m/
  if (!isMobile && (url.pathname.startsWith('/m/') || url.pathname === '/m')) {
    const desktopPath = url.pathname.replace(/^\/m/, '') || '/';
    const desktopUrl = new URL(desktopPath, url.origin);
    const response = await context.env.ASSETS.fetch(desktopUrl);
    if (response.status === 200) {
      return response;
    }
  }

  return context.next();
}
