import mapBy from 'dummy/utils/map-by';
import { module, test } from 'qunit';

module('Unit | Utility | mapBy', function () {
  test('maps correctly', function (assert) {
    const testArray = [
      {
        foo: '1',
        bar: 1
      },
      { foo: '2', bar: 2 },
      { foo: '3', bar: 3 }
    ];
    assert.deepEqual(mapBy(testArray, 'foo'), ['1', '2', '3']);
    assert.deepEqual(mapBy(testArray, 'bar'), [1, 2, 3]);
  });
});
