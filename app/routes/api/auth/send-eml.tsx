// import invariant from 'tiny-invariant';
import type { ActionFunction, LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () => {};

// type ActionBody = {
//   email: string;
// };

export const action: ActionFunction = async ({ request }) => {
  // const { email } = JSON.parse(request.body);
  // invariant(email, 'email is required');
  // if (request.method === 'POST') {
  //   const baseUrl = getDomainFromRequest(req);
  //   const stytchClient = await getStytchClient();
  //   const res = await stytchClient.magicLinks.email.loginOrCreate({
  //     email: email,
  //     login_magic_link_url: `${baseUrl}/recipes/api-webauthn/magic-link-authenticate`,
  //     signup_magic_link_url: `${baseUrl}/recipes/api-webauthn/magic-link-authenticate`,
  //   });
  //   return json({ res });
  // }
};

export async function sendEML(email: string) {
  const response = await fetch('/api/auth/send-eml', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  return response.json();
}
