import Route from '@ember/routing/route';

export default class ParentChildBRoute extends Route {
  model(params) {
    console.debug('In child-b model hook. Query params: ', params);
  }
}
