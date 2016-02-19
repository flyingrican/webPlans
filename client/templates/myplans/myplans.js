Template.myplans.helpers({
	userplans: function(){
		return Subscribers.find({user_id: Meteor.userId()});
	}
});

Template.myplans.events({
	'click .cancel-plan': function(event){
		event.preventDefault();
		if(confirm("Are you sure?")){
			Subscribers.remove(this._id);
			toastr.success("Subscription Cancelled");
		}
	}
});