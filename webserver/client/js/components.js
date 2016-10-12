class NewComponent extends React.Component{
   
  constructor() {
    super();
    this.state = {
      type: "panel panel-success"
    };
    this.clickSuccess = this.clickSuccess.bind(this);
    this.clickDefault = this.clickDefault.bind(this);
  }
  clickSuccess() {

  	this.setState({type: "panel panel-success"});

  }
   clickDefault() {

  	this.setState({type: "panel panel-default"});

  }
  render() {
    return (
      <div className="container">
      	<br />
	      <div className={this.state.type}>
	        <div className="panel-heading"><h3 className="panel-title">Hello</h3></div>
	        <div className="panel-body">IT WORKS!</div>
	         <button onClick={this.clickSuccess} className="btn btn-default">
		        Panel Success
		      </button>
		      <button onClick={this.clickDefault} className="btn btn-default">
		        Panel Default
		      </button>
	      </div>
      </div>
    );
  }
}

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  render() {
    const text = this.state.liked ? 'Liked' : 'Like this';
    return (
      <button onClick={this.handleClick} className="btn btn-default">
        {text}
      </button>
    );
  }
}

ReactDOM.render(
  <NewComponent  />,
  document.getElementById('main')
);


ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);