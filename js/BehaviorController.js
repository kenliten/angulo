(function(){

    angular.module('angulo')
        .controller('BehaviorController', function($scope, $timeout){
            $scope.openNotePad = function(){
                document.querySelector('#sidepanel').style.display = "block";
                document.querySelector('#note-pad').style.display = "block";
                $timeout(function(){
                    document.querySelector('#sidepanel-content').style.right = "0";
                }, 200);
            }
            $scope.openTodoList = function(){
                document.querySelector('#sidepanel').style.display = "block";
                document.querySelector('#todo-list').style.display = "block";
                $timeout(function () {
                    document.querySelector('#sidepanel-content').style.right = "0";
                }, 200);
            }
            function closeSidePanel() {
                document.querySelector('#todo-list').style.display = "none";
                document.querySelector('#note-pad').style.display = "none";
                document.querySelector('#sidepanel-content').style.right = "-40%";
                document.querySelector('#sidepanel').style.display = "none";
            }
            document.querySelector('#sidepanel-closer').addEventListener('click', closeSidePanel);
            document.querySelector('#sidepanel-empty').addEventListener('click', closeSidePanel);
        });

})();