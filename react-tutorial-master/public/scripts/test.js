var data = [
    {"id": 1, "author": "Peter Hunt", "text": "this is one comment"},
    {"id": 2, "author": "Jordan Walker", "text": "this is *another* comment"}
];

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className = "commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass ({
    getInitialState: function () {
        return {author: '',text: ''};
    },
    handleAuthorChange: function(e){
        this.setState({author: e.target.value});
    },
    handleTextChange: function (e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e){
        e.preventDefault();
        var author = this.state.author;
        var text = this.state.text;
        if(!author || !text){
            return;
        }
        //TO DO
        this.setState({author:'', text:''});
    },
    render: function () {
        return (
            <form className = "commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeHolder="Your Name" value={this.state.author} onChange={this.handleAuthorChange}>
                </input>
                <input type="text" placeHolder="say something" value={this.state.text} onChange={this.handleTextChange}>
                </input>
                <input type="submit" value="Post" />
            </form>
        );
    }
});

var Comment = React.createClass ({
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return {
            __html: rawMarkup
        };
    },
    render: function() {
        return (
            <div className = "comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
 });
 
ReactDOM.render(
    // <CommentBox data = {data} />,
    <CommentBox url="/api/comments" />,
    document.getElementById('content')
);
