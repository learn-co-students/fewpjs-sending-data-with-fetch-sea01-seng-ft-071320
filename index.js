function submitData(userName, userEmail) {
  const submitBody = {
    name: userName,
    email: userEmail,
  };

  const submitConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(submitBody),
  };

  return fetch("http://localhost:3000/users", submitConfig)
    .then((resp) => resp.json())
    .then((json) => appendToBody(json.id))
    .catch((error) => {
      appendToBody(error);
    });
}

function appendToBody(string) {
  document.querySelector("body").append(string);
}
