import packageJson from "../../package.json";

export const environment = {
  production: true,
  useMocks: true,
  environmentName: 'DEV',
  version: packageJson.version,
};
