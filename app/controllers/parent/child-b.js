import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ParentChildBController extends Controller {
  queryParams = ['foo', 'bar'];

  @tracked foo = null;
  @tracked bar = null;
}
