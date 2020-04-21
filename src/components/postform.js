import React, {Component} from 'react';

class Postform extends Component {

    constructor(props) {
        super(props);

        this.state={
            title:'',
            body:''
        }

        this.HandleChange= this.HandleChange.bind(this);
        this.Submit= this.Submit.bind(this);
    }


    HandleChange=(e)=>{

        this.setState({
                [e.target.name]: e.target.value
            }


        )

}

  Submit=(e)=>{

        e.preventDefault();

        const post={
        title: this.state.title,
        body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res=> res.json()).
        then(data=>console.log(data))


  }




    render() {
        return (
            <div>
                <h2>add post</h2>
                <form onSubmit={this.Submit}>
                    <div>
                        <label>Title</label>
                        <br />
                        <input type='text' name='title' onChange={this.HandleChange} value={this.state.title} />
                    </div>

                    <div>
                        <label>Body</label>
                        <br />
                        <textarea  name='body' onChange={this.HandleChange} value={this.state.body}/>
                    </div>

                    <div>

                        <input type='submit' value='submit' />
                    </div>
                </form>
                
            </div>
        );
    }
}

export default Postform;
