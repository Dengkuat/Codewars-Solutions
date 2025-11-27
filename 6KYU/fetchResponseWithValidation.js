// Fetch & Response Validation

// Use: https://jsonplaceholder.typicode.com/posts/1

// Question:
// Write a function that fetches the post above and:
// 	•	Throws an error if the status is not 200
// 	•	Logs the title in uppercase
// 	•	Returns the full post data

async function fetchPosts(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if(!response.ok || response.status !== 200) throw new Error(response.status);
  const data = await response.json();
  const title = data.title.toUpperCase();
  console.log(title);
   console.log(data);
  const result = {
  id:userId,
  title:title
  }
}
fetchPosts();

// output 
// 'SUNT AUT FACERE REPELLAT PROVIDENT OCCAECATI EXCEPTURI OPTIO REPREHENDERIT'
// {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   body: 'quia et suscipit
// ' +
//     'suscipit recusandae consequuntur expedita et cum
// ' +
//     'reprehenderit molestiae ut ut quas totam
// ' +
//     'nostrum rerum est autem sunt rem eveniet architecto'
// }
// Promise { <pending> }