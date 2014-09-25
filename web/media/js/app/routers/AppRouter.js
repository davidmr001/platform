/**
 * Ushahidi Application Router
 *
 * @module     AppRouter
 * @author     Ushahidi Team <team@ushahidi.com>
 * @copyright  2013 Ushahidi
 * @license    https://www.gnu.org/licenses/agpl-3.0.html GNU Affero General Public License Version 3 (AGPL3)
 */

define(['marionette', 'App'],
	function(Marionette, App) {
		var router = Marionette.AppRouter.extend(
		{
			appRoutes :
			{
				'' : 'index',
				'views/full' : 'viewsFull',
				'views/list' : 'viewsList',
				'views/map' : 'viewsMap',
				'posts?:params' : 'postsList',
				'posts/create' : 'postCreate',
				'posts/:id' : 'postDetail',
				'visualizations' : 'visualizations',
				'apiexplorer' : 'apiExplorer',
				//'login' : 'login',
				//'register' : 'register',

				// *path needs to be last
				'*path' : 'index'
			}
		});

		if (App.user.get('role') === 'admin') {
			router.appRoute('settings/users', 'users');
			router.appRoute('settings/tags', 'tags');
		}

		return router;
	});
