import packageJson from '../../package.json';

export const environment = {
  production: true,
  useMocks: false,
  environmentName: 'DEV',
  apiUrl: 'https://localhost:55361/',
  version: packageJson.version,
};
