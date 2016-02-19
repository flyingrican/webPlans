Template.listsubscribers.events({
	'click .cancel-subscription': function(event){
		event.preventDefault();
		if(confirm("Are you sure?")){
			Subscribers.remove(this._id);
			toastr.success("Plan Cancelled");
		}
	}
});