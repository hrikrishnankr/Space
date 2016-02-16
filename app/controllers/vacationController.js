spaceApp.controller("vacationController", function($scope) {
    $scope.vacationtypes = ["Loss of pay", "Compensatory", "Maternity", "Paternity"];
    $scope.approvers = ["Prathapan Sethu", "Binu Dasappan", "Ansar Shahabudeen", "Arun Prasad", "Jose Antony", "Praveen Sasidharan", "Syam Mohan", "Divya Padmanabhan", "Manooja Manoharan", "Ameena Iqbal", "Jyothish Abraham", "Suja Sundaresan", "Kamal Jith", "Ajith Raj", "Renjith Valsa", "Savitha Rajagopal", "Karthik Gopalakrishnan", "Aparna Manju", "Vishnu Prabhakaran", "Nanda Kumar", "Praveen Rajasekhar", "Muhamed Sherin", "Saju Devasia", "Susan Abraham", "Sreedevi Kannappassery", "Suresh Nair", "Srijith Vijayamohanan", "Deepa John", "Arun Rajendran", "Santhosh Kum", "Binny Cherian", "Vibhin Sreevals", "Sajith Devarajan", "Jimmy Kappen", "Rohini Pillai", "Malu Nair", "Nishin Nisthar", "Anju Jolly", "Joby Raj", "Rekha Radh", "Chinmay Varma", "Mathew Purakal", "John Ambadan", "Jisha Marina", "Parvathy Prasad", "Divya Korula", "Sugunan Asokan", "Nevil Jose", "Shaji Kunjumon", "Arun Panicker", "Karol Przy", "Kripa Sreedevi", "Sarun Sasidharan", "Robin Panicker", "Shyja Das", "Marcin Skoczylas", "Vijesh Vijay", "Niby Antony", "Bindu Abraham", "Anju Edadan", "Aby John", "Sunil Giri", "Rakesh Prabhu", "Sudhir Kelappan", "Raju Chandran", "Rahul Kumar", "Fran Baby", "Vivin Vikraman", "Cyril Cherian", "Lixo Kurian", "Devi Chandrika", "Prasad Elayath", "Mathen Abraham", "Arun Sekhar", "Mithun Sreedharan", "Parvathi Anandavalli", "Anand Jayakumar", "Rejith Varma", "Rajeswari Rajagopal", "Aswathi Kurup", "Adarsh Varadarajan", "Atul Sudhir", "Mary Mathew", "Ajith Khan", "Deen Edger", "Joseph Rego", "Punnan Thomas", "Smitha Padmanabhan", "Sreejith Sreedharakurup", "Nithin Vettom", "Perumal Murukan", "Manas Nair", "Niranjana Nair", "Raji Nair", "Riyas Abdulrahiman", "Sandeep Ramesh", "Julian Fainlight", "Mukesh Jayaram", "Linesh Moses", "Sivasankar Seenuvasan", "Vinod Johnny", "Hrishikesh Soman", "Pratheep Srinivasan", "Madhevan Pillai", "Denny Kurian", "Marcin Bartoszuk", "Vivek Shenoy", "Ratheesh Kumar", "Jagadeesh Puthukkudi", "Lahari Chiruvella", "Malu Sreekumar", "Shihabudheen Kozhikoden", "Navin Jayaraman", "Krzysztof Kondrusik", "Monica Kingsley", "Ajoydhas Michael", "Vignesh Ravindranath", "Shynu George", "Saranya Pradeep", "Iyvin Jose", "Abdul Rahman", "Sesharaj Venkitaraman", "Vidya Vijayan", "Sam Kolladikal", "Pritish Jayachandran", "Surya Paul", "Arunbabu Poovathody", "Ranjith Vijayan", "Jose Dibine", "Sunil Kumar", "David John", "Bibin Babu", "Sujith Nair", "Manmohan Muraleedharan", "Lakshmi Nair", "Smijeet Kurup", "Anoop Chenayil", "Rajesh Rajappan", "Ranichandra Jayanthi"];
    $scope.vacationstatus = "Fresh";
    $scope.saved = localStorage.getItem('vacations');
    $scope.searchByYear=[2008,2009,2010,2011,2012,2013,2014,2015,2016];
    $scope.vacations = (localStorage.getItem('vacations') !== null) ? JSON.parse($scope.saved) : [];
  
    $scope.submit = function() {
        $scope.vacations.push({
            days: $scope.days,
            sdate: $scope.sdate,
            an: $scope.an,
            tdate: $scope.tdate,
            fn: $scope.fn,
            vacationtype: $scope.vacationtype,
            approver: $scope.approver,
            copy: $scope.copy,
            comment: $scope.comment,
            vacationstatus: $scope.vacationstatus
        });
        localStorage.setItem('vacations', JSON.stringify($scope.vacations));
    }
});