Template.editplan.helpers({
	'checkValue': function(val1, val2){
		if(val1 == val2){
			return "selected";
		}
	}
});

Template.addplan.events({
	'submit .add-plan-form': function(event){
		event.preventDefault();
		var plan_name = event.target.plan_name.value;
		var plan_label = event.target.plan_label.value;
		var days = event.target.days.value;
		var description = event.target.description.value;
		var is_default = event.target.is_default.value;
		var price = event.target.price.value;

		Plans.insert({
			plan_name: plan_name,
			plan_label: plan_label,
			days: days,
			price: price,
			description: description,
			is_default: is_default
		});
		toastr.success('Plan Added');
		Router.go('/admin/plans');
	}
});

Template.editplan.events({
	'submit .edit-plan-form': function(event){
		event.preventDefault();
		var plan_name = event.target.plan_name.value;
		var plan_label = event.target.plan_label.value;
		var days = event.target.days.value;
		var description = event.target.description.value;
		var is_default = event.target.is_default.value;
		var price = event.target.price.value;

		Plans.update({
			_id: this._id
		}, {
			$set: {
				plan_name: plan_name,
				plan_label: plan_label,
				days: days,
				price: price,
				description: description,
				is_default: is_default
			}
		});
		toastr.success('Plan Updated');
		Router.go('/admin/plans');
	}
});

Template.listplans.events({
	'click .delete-plan': function(event){
		event.preventDefault();
		if(confirm("Are you sure?")){
			Plans.remove(this._id);
			toastr.success('Plan Deleted');
		}
	}
});