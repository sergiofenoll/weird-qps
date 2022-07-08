import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ParentChildAController extends Controller {
  queryParams = ['foo', 'bar'];

  @tracked foo = null;
  @tracked bar = null;
  // @tracked isLoading;

  @action
  setQueryParams() {
    this.foo = 'oof';
    this.bar = 'rab';
  }
}
