export function initialize(container, application) {
  application.inject('controller', 'global', 'service:global');
  application.inject('view', 'global', 'service:global');
}

export default {
  name: 'global-service',
  initialize: initialize
};
