import packageJson from '../../package.json';

export const environment = {
  production: true,
  useMocks: true,
  environmentName: 'PROD',
  apiUrl: '',
  version: packageJson.version,
};
