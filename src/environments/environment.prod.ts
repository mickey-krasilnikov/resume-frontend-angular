import packageJson from "../../package.json";

export const environment = {
  production: true,
  useMocks: false,
  environmentName: 'PROD',
  apiBaseUrl: 'TBD',
  version: packageJson.version,
};
