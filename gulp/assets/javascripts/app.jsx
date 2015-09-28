const Comment = React.createClass({
  propTypes: {
    author: React.PropTypes.string.isRequired,
    children: React.PropTypes.string.isRequired
  },
  componentDidMount () {
    this.state.name = this.props.author.toUpperCase();
  },
  render () {
    return (
      <div className="comment">
        {this.state.name}
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

const CommentList = React.createClass({
  render () {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">{'This is one comment'}</Comment>
        <Comment author="Jordan Walke">{'This is *another* comment'}</Comment>
      </div>
    );
  }
});

const CommentForm = React.createClass({
  render () {
    return (
      <div className="commentForm">
        {'Hello, world! I am a CommentForm.'}
      </div>
    );
  }
});

const CommentBox = React.createClass({
  render () {
    return (
      <div className="commentBox">
        <h1>{'Comments'}</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
