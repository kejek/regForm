var AlertBox = React.createClass({

		render: function(){
			return(
					<div className="alert alert-danger">
						Please submit all fields.
					</div>
				);
		}
	});

	var SuccessBox = React.createClass({
		render: function(){			
			return(
					<div className="alert alert-success">
						Thank you for registering {this.props.firstName}
					</div>
				);
		}
	});

	var RegForm = React.createClass({
		getInitialState: function(){
			return{
				showAlert: false,
				showSuccess: false,
				firstName: ""
			}
		},

		register: function(e){
			e.preventDefault();
			this.setState({showSuccess: false});
			this.setState({showAlert: false});
			var firstName = this.refs.firstName.value.trim();
			var lastName = this.refs.lastName.value.trim();
			var email = this.refs.email.value.trim();			
			if(!firstName || !lastName || !email){
				this.setState({showAlert: true});
				return;
			}

			//alert('Thank You '+ firstName + ' ' + lastName+ ' for registering ' + email);
			this.setState({showSuccess: true});
			this.setState({firstName: firstName});
			this.refs.firstName.value = '';
			this.refs.lastName.value = '';
		    this.refs.email.value = '';
		},

		render: function(){
			return(
					<div>
						<form onSubmit={this.register}>
							{this.state.showAlert ? <AlertBox /> : null}
							{this.state.showSuccess ? <SuccessBox firstName={this.state.firstName} /> : null}
							<div className="form-group">
								<label htmlFor="firstName">First Name: </label>
								<input type="text" className="form-control" placeholder="First Name" ref="firstName"/>
							</div>
							<div className="form-group">
								<label htmlFor="lastName">Last Name: </label>
								<input type="text" className="form-control" placeholder="Last Name" ref="lastName"/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email: </label>
								<input type="email" className="form-control" placeholder="Email Address" ref="email"/>
							</div>
							<input type="submit" className="btn btn-primary" value="Submit" />
						</form>
					</div>
				);
		}

	});

	ReactDOM.render(
		<RegForm />, document.getElementById('regForm')
	);