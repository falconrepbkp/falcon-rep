export async function onRequest(context) {
    const country = context.request.cf?.country;
    if (country === "IN") {
      return new Response("Access restricted in your region.", { status: 403 });
    }
    return context.next();
  }