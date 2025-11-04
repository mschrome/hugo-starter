export async function onRequest({ request, params, env }) {
  try {
    const saga_test_2 = await my_kv.get('saga_test_2');

    return new Response(
      JSON.stringify({
        saga_test_2,
      }),
      {
        headers: {
          'content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err.message || JSON.stringify(err),
      }),
      {
        headers: {
          'content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          error: '1',
        },
      }
    );
  }
}