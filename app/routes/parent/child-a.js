import Route from '@ember/routing/route';

export default class ParentChildARoute extends Route {
  queryParams = {
    foo: {
      refreshModel: true,
    },
    bar: {
      refreshModel: true,
    },
  };

  async model(params) {
    console.debug('In child-a model hook. Query params:', params);
    const sleep = (delay, resolveValue) => new Promise((resolve) => {
      setTimeout(() => resolve(resolveValue), delay);
    });
    await sleep(1000);
  }
}
