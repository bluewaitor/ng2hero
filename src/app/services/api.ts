import { environment } from '../../environments/environment';

let apiPrefix = 'http://127.0.0.1:3000';
if (environment.production) {
    apiPrefix = 'http://api.bluewaitor.com';
}

export const apiUrl = apiPrefix;

export const loginUrl = apiPrefix + '/account/login';
export const signUrl = apiPrefix + '/account/signup';
export const usersUrl = apiPrefix + '/users';
export const articlesUrl = apiPrefix + '/articles';
export const dashboardArticlesUrl = apiPrefix + '/articles/dashboard';
export const meUrl = apiPrefix + '/users/me';
export const starUrl = apiPrefix + '/stars';

export const CommentUrl = {
  addComment: apiPrefix + '/articles/comments'
};

export const TodoUrl = {
  todo: apiPrefix + '/todos',
  todoAdmin: apiPrefix + '/todos/admin'
};
