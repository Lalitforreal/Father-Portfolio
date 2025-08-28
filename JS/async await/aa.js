
//first asynchronnous function

// async function getData(){

//     setTimeout(function(){
//         console.log("I am inside set timeout")
//     }, 3000)
// }
// let output = getData();
// console.log(output)

// async function getData(){
    
//     //get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com//comments?postId=1');

//     //parse json -async
//     let data = await response.json();

//     console.log(data);


// }
// getData();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const option = {
        method: "POST",
        body: JSON.stringify({ username: "Lalit" }),
        headers: myHeaders,
};
async function getData(){
    const url = 'https://dummyjson.com/posts';
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
}


async function postData(){
    const response = await fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Lalit toh pad gaye bahman kki ladki ke pyaar me',
    userId: 5,
    /* other post data */
  })
})
    let data = await response.json();
    console.log("Post created successfully", data);
}

async function handleData(){
    await postData();
    await getData();
}
handleData();