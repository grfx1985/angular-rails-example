angular.module('flapperNews')
.factory('posts', ['$http', function($http){
  var o = {
    posts: []
  };

  // o.getAll = function() {
  // 		return $http.get('/posts').success(function(data){
  //     	angular.copy(data, o.posts);
  //   });
  // };

  o.create = function(post, $http) {
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  };

  return o;
}])
