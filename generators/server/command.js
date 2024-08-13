import { command as jhipsterCommand } from 'generator-jhipster/generators/server';

/**
 * @type {import('generator-jhipster').JHipsterCommandDefinition}
 */
const command = {
  options: {
    ...jhipsterCommand.options,
  },
  configs: {
    ...jhipsterCommand.configs,
  },
  arguments: {
    ...jhipsterCommand.arguments,
  },
};

export default command;
