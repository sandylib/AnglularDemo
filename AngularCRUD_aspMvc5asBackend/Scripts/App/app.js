var TodoApp = angular.module("TodoApp", ["ngRoute", "ngResource"]).
    config(function ($routeProvider) {
        $routeProvider.
            when('/', { controller: ListCtrl, templateUrl: '/Patials/list.html' }).
            when('/new', { controller: CreateCtrl, templateUrl: '/Patials/detail.html' }).
            when('/edit/:editId', { controller: EditCtrl, templateUrl: '/Patials/detail.html' }).
            otherwise({ redirectTo: '/' });
    });


TodoApp.directive('greet', function () {
    return {
        scope: true,
        restrict : 'E', /* restrict this directive to elements */
        template: '<h2>Greeting from {{from}} to my dear {{to}}</h2>',
        controller: function ($scope, $element, $attrs) {
            $scope.from = $attrs.from;
            $scope.to = $attrs.to;

        }// bind element to data in $scope
        
    };
});

TodoApp.factory('Todo', function ($resource) {
    return $resource('/api/todo/:id', { id: '@id' }, { update: { method: 'PUT' } });
});

var EditCtrl = function ($scope, $location,$routeParams, Todo) {
    $scope.action = "Update";
    var id = $routeParams.editId;
    $scope.item = Todo.get({ id: id });

    $scope.submitForm = function (isValid) {
        // check to make sure the form is completely valid
        if (isValid) {
            //then could create a new Todo         
           
            Todo.update({id:id},$scope.item, function () {
                $location.path('/');
            });
        }
    };
};

var CreateCtrl = function ($scope, $location, Todo) {
    $scope.action = "Add";       
    //function to submit the form after all validation has occurred            
    $scope.submitForm = function (isValid) {
        // check to make sure the form is completely valid
        if (isValid) {
            //then could create a new Todo             
           
            Todo.save($scope.item, function () {
                $location.path('/');
            });
        }
    };

};






var ListCtrl = function ($scope, $location, Todo) {
    $scope.search = function () {
        Todo.query({
            q: $scope.query,
            limit: $scope.limit,
            offset: $scope.offset
        },
            function (data) {
                $scope.more = data.length === 20;
                $scope.items = $scope.items.concat(data);
            }
        );
    };

    $scope.show_more = function () {
        $scope.offset += $scope.limit;
        $scope.search();
    };

    $scope.has_more = function () {
        return $scope.more;
    };

    $scope.sortField = "Priority";
    $scope.reverse = false;

    $scope.limit = 20;
    $scope.offset = 0;
    $scope.items = [];
    $scope.more = true;

    $scope.delete = function () {
        var id = this.item.Id;
        Todo.delete({ id: id }, function () {
            $('#todo_' + id).fadeOut();
        });
    };

    $scope.search();
    
};
