function viewModel(data) {
    var self = this;
    
    this.firstName = ko.observable(data.firstName);
    this.lastName = ko.observable(data.lastName);
    
    var json = ko.toJSON(viewModel);
    }