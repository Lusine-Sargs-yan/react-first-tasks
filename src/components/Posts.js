import React from 'react';
import Post from "./Post"

const BSAE_URL = 'https://jsonplaceholder.typicode.com/posts';

const inputFakeData = [1,2,3,4,5,6,7,8,9];

export class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			postsData: {
				posts: [],
				isLoading: true,
				checkedIds: [],
				isChecked: false
			}
		}
	}

	componentDidMount() {
		this.getPosts();
	}

	getPosts = () => {
		setTimeout(() => {
			fetch(BSAE_URL).then((res) => res.json()).then((posts) => {
				console.log(posts, 'posts');
				this.setState({ 
          postsData: { 
            posts: posts, 
            isLoading: false,
            checkedIds: [...this.state.postsData.checkedIds]
          } 
        });
				localStorage.setItem('posts', JSON.stringify(posts));
			})
		}, 1000);
	}

  handleCheck = (event) => {
    console.log(event, 'event, when checked:::');
    console.log(event.target.id, 'id:::');
    console.log(event.target.checked, 'checked::::');
    
    let dataOfPosts = JSON.parse(localStorage.getItem('posts'));

    if(event.target.checked) {
      let filteredPosts = dataOfPosts.filter((elem) => {
        return this.state.postsData.checkedIds.includes(elem.userId.toString() || elem.userId === event.target.id.toString());
      });
      this.setState({ 
        postsData: { 
          posts: filteredPosts, 
          isLoading: false,
          checkedIds: [event.target.id, ...this.state.postsData.checkedIds]
        } 
      });

    } else {
      let filteredPosts2 = dataOfPosts.filter((elem) => elem.userId.toString() !== event.target.id);
      let newIds = this.state.postsData.checkedIds.filter((item) => item !== event.target.id);
      this.setState({ 
        postsData: { 
          posts: filteredPosts2, 
          isLoading: false,
          checkedIds: newIds
        } 
      });

    }

  }
	render() {
		console.log(this.state);
		const { postsData } = this.state;

		return (
			<div>
				{postsData.isLoading ? <div>Loading ...</div> :
				<>
          <h2>Posts</h2>
          {
            inputFakeData.map((number) => {
              return (
                <div>
                  <label>
                  User {number}
                  <input 
                  id={number}
                  type="checkbox"  
                  onChange={this.handleCheck}
                  checked={this.state.postsData.isChecked}/>
                  </label>
                <br/>
                </div>
              )
            })
          }
          {
            postsData.posts.map(({body, title, userId, id}, index) => {
              return (
                <Post key={id} body={body} title={title} userId={userId}/>
              )
            })
          }

				</>
				}
			</div>
		);
	}
}


export default Posts;