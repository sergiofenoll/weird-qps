import EmberRouter from '@ember/routing/router';
import config from 'weird-qps/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('parent', { path: '/' }, function () {
    this.route('child-a');
    this.route('child-b');
  });
});
