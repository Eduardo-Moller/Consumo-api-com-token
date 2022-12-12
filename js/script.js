window["key"] = "c7d734f23946a9a042d3ffd19416fa5f";
angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api.themoviedb.org/3/movie/popular?api_key='+key+'&language=pt-BR').
      success(function(data) {
          data = data.results;
          $scope.movies = data;
          $scope.linha = function (index) {
            window["num"] = index;
            localStorage.setItem("linha", num);
        };
      }
  );
});
angular.module('noticiaMax', []);
angular.module('noticiaMax').controller('RestMax', function ($scope, $http){
  $http.get('https://api.themoviedb.org/3/movie/popular?api_key='+key+'&language=pt-BR').
      success(function(data) {
          data = data.results;
          $scope.movies = data[localStorage.getItem("linha")];
      }
  );
});
