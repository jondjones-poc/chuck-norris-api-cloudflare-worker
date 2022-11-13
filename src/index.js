const API_ENDPOINT = "https://api.chucknorris.io/jokes/random";

var src_default = {
  async fetch(request, env, ctx) {
    const response  = await fetch(API_ENDPOINT);
    const body =  await response.json();

    console.log(body)

    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      }
    })
  }
};
export {
  src_default as default
};