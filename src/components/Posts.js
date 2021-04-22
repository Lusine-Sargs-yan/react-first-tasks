import React from 'react';

// class Posts extends React.Component {
//   contructor(props) {
//     super(props);

//     this.state = {
//       postsDate: {
//         posts: [],
//         isLoading: true,
//         checkIds: [],
//         isChecked: false
//       }
//     }
//   }
//   componentDidMount() {
//     this.getPosts();
//   }
//   getPosts = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((respose) => response.json())
//     .then((posts) => {
//       console.log(posts, "posts:::");
//       this.setState({ postsDate: { posts: posts, isLoading: false, checkedIds: [ ...this.state.postsData.checkedIds ]} });
//       localStorage.setItem('posts', JSON.stringify(posts));

//     })
//   }
//   groupByUserId = () => {

//   }
//   handleCheck = (evnet) => {
//     let posts = JSON.parse(localStorage.getItem('posts'));
//     console.log(event.target.id, event.target.checked);
//     // this.setState({
//     //   isChecked: !this.state.isChecked
//     // })
//     this.setState({...this.state, })
//   }

//   render() {
//     console.log(this.state);
//     const {postsDate, checkeds} = this.state;
//     return (
//       <div>
//         {posts.isLoading ? <div>Loading...</div> :
//           <h1> All posts</h1>
//           User1 <input id="1" onChange={(event)=> this.handleCheck(event)} type="checkbox check={this.state.isChecked}"/><br />
//           User2 <input id="2" onChange={(event)=> this.handleCheck(event)} type="checkbox"/><br />
//           User3 <input id="2" onChange={(event)=> this.handleCheck(event)} type="checkbox"/><br />
//           {postsDate.posts.map((post, index) => {
//             if(pastData.checkIds.includes(userId))
//             return (
//               <div key={index}>
//               <h3>{posts.title}</h3>
//               <span>{posts.body}</span>
//               <span>{posts.userId}</span>

//               </div>
//             )
//           })}
//         }
//       </div>
//     )
//   }
// }

// export default Posts;