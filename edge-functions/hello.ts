export default function onRequest(context) {
  console.log('Hello from Edge Functions!');
  return new Response('Hello from Edge Functions!', {
    headers: {
      'Content-Type': 'text/plain',
      'X-EdgeFunctions-Test': 'Welcome to use Pages Functions.',
    },
  });
}
