angular.module('App.User.Buy', []).controller('App.User.Buy.Controller', [
    '$scope',
    '$state',
    "$ionicHistory",
    "$sce",
    "$ionicSlideBoxDelegate",
    "Chips",
    function(
        $scope,
        $state,
        $ionicHistory,
        $sce,
        $ionicSlideBoxDelegate,
        Chips
    ) {
        $ionicSlideBoxDelegate.update();
        $scope.back = function() { $ionicHistory.goBack(); }
        // console.log($state.params.id);
        Chips.getChipsList().$promise.then(function(response) {
            $scope.chips_list = response;
            $scope.chip = ($scope.chips_list)[0];


        console.log($scope.chip);
        }, function(response){
            console.log(response);
        })

        // 选择套餐
        $scope.choseType = 1;
        $scope.selectType = function(index){
        	$scope.choseType = index;
        	console.log($scope.choseType);
        }

        // tab切换
        $scope.activeTab = 1;
        $scope.setTabs = function(index) {
            $scope.activeTab = index;
        }
    }
]);
