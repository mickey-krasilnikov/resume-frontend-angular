import packageJson from "../../package.json";

export const environment = {
  production: true,
  useMocks: true,
  environmentName: 'DEV',
  apiBaseUrl: 'https://localhost',
  version: packageJson.version,
};
