// Async/Await
const getUserEmail = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const userEmail = users.map((user) => {
    return user.email;
  });
  postToWeb(userEmail);
};

const postToWeb = async (data) => {
  console.log(data);
};

getUserEmail();

// Async GET

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const dadJoke = await response.json();
  console.log(dadJoke);
};

getDadJoke();

// Post Async

const jokeObject = {
  id: "KJmrOKeNexc",
  joke: "This morning I was wondering where the sun was, but then it dawned on me.",
};

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jokeResponse = await response.json();
  console.log(jokeResponse.headers);
};

postData(jokeObject);
