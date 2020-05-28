// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
/**
 * Development environment variables
 */
export const environment = {
  production: false,
  api_server_url: 'http://localhost:8001/',
  rabbitmq_server_url: 'ws://localhost:15674/ws'
};