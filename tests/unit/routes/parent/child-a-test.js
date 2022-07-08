import { module, test } from 'qunit';
import { setupTest } from 'weird-qps/tests/helpers';

module('Unit | Route | parent/child-a', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:parent/child-a');
    assert.ok(route);
  });
});
