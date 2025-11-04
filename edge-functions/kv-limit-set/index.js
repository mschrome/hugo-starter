export async function onRequest({ request, params, env }) {
  try {
    const kvRes = await my_kv.put('saga_test_1', '1');

    return new Response(
      JSON.stringify({
        kvRes,
        message: 'KV 设置成功',
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