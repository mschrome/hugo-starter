export async function onRequest({ request, params, env }) {
  try {
    const saga_test_1 = await my_kv.get('saga_test_1');

    return new Response(
      JSON.stringify({
        saga_test_1,
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