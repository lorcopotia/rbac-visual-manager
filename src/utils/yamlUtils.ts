import yaml from 'js-yaml';

export const generateYAML = (data: any): string => {
  return yaml.dump(data);
};
