/**
 * Created by Harry on 5/23/2016.
 */
var App = angular.module('rssApp', []);

App.controller("FeedController", ['$scope', 'FeedService', function($scope, Feed) {
    $scope.loadFeed = function(e) {
        Feed.parseFeed($scope.feedSrc).then(function(res) {
            $scope.feeds = res.data.responseData.feed.entries;
        });
    }
}]);

App.factory('FeedFactory', ['$http', function($http) {
    return {
        parseFeed: function(url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);