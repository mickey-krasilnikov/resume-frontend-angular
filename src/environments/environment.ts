import packageJson from '../../package.json';

export const environment = {
  production: true,
  useMocks: true,
  environmentName: 'DEV',
  apiUrl: 'https://localhost:55361/',
  version: packageJson.version,
};
