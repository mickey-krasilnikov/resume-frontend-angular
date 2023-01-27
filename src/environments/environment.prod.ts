import packageJson from "../../package.json";

export const environment = {
  production: true,
  useMocks: true,
  environmentName: 'PROD',
  apiBaseUrl: 'TBD',
  version: packageJson.version,
};
