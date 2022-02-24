declare global {
  interface Window {
    ENV: { [key: string]: string };
  }
}

/**
 This component loads environment variables into window.ENV 
 */
export function EnvironmentSetter({ env }: { env: { [key: string]: string } }) {
  return <script dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(env)}` }} />;
}
