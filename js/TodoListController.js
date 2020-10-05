(function(){

    angular.module('angulo')
        .controller('TodoListController', function($scope){
            $scope.container = 'todo.html';
            $scope.todoText = '';
            $scope.todos = [];
            $scope.saveTodo = function(){
                let newTodo = {
                    id: $scope.todos.length == 0 ? 0 : $scope.todos[$scope.todos.length - 1].id + 1,
                    text: $scope.todoText,
                    done: false
                }
                $scope.todos.push(newTodo);
                $scope.todoText = '';
            }
            $scope.openTodoEditor = function(){}
            $scope.editTodo = function(){
            }
        });

})();