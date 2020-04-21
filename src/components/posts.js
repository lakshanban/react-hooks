import React, {Component} from 'react';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }


    componentWillMount() {

        fetch('https://jsonplaceholder.typicode.com/posts').
            then(res=>res.json()).
            then(data=>this.setState({
            data:data
        }));
    }


    render() {

        const  postItems = this.state.data.map(post=>(

            <div key={post.id}>

                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));



        return (
            <div>

                <h1>Posts</h1>
                {postItems}

            </div>
        );
    }
}

export default Posts;
