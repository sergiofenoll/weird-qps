import { module, test } from 'qunit';
import { setupTest } from 'weird-qps/tests/helpers';

module('Unit | Controller | parent/child-b', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:parent/child-b');
    assert.ok(controller);
  });
});
