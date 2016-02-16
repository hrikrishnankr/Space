spaceApp.controller("projectController", function($scope) {
  $scope.stats = [{
                         id:1,
                         text:"Open"}
                         ,{
                         id:2,
                         text:"Closed"},
                         {
                         id:3,
                         text:"On-hold"},
                         {
                         id:4,
                         text:"Completed"},
                         {
                         id:5,
                         text:"All"}];
                    $scope.billtypes=["All","Fixed Cost","Time & Material"];
                 	$scope.saved = localStorage.getItem('projects');
	               $scope.projects = (localStorage.getItem('projects')!==null) ? JSON.parse($scope.saved) :[]; 
                    $scope.verticals=["Airlines","Alternative Energy","Automotive Banking", "Financial Services & Insurance","Construction","Education","Energy", "Utilities", "Oil and Gas","Environment","Gaming","Government","Healthcare","IT Services","Job Portal","Legal","Logistics and Distribution","Manufacturing Media", "Advertising and Entertainment","Non-profit and Community Services","Pharma Professional Services","Realty","Retail","Sports","Technology","Telecom and ISP","Travel", "Hospitality and Leisure","eCommerce"];
                    $scope.categories=["Web app","Mobile","Big Data / ML / NLP","Testing","Website / CMS","Design",""];

                    $scope.submit = function () {
                    $scope.projects.push({
                    project: $scope.project,
                    customer: $scope.customer,
                    pm: $scope.pm,
                    billtype: $scope.billtype,
                    sdate: $scope.sdate,
                    tech: $scope.tech,
                    stat: $scope.stat,
                    vertical: $scope.vertical,
                    category:$scope.category,
                    detail:$scope.detail
                    });
                    localStorage.setItem('projects', JSON.stringify($scope.projects));
                   }

                    });