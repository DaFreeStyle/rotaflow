
console.log('main.js is connected');

function postRotaflowToDatabase(e) {
  console.log('attempt');
  e.preventDefault();
  fetch('/api/Rotaflows', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tweed: e.target.rotaflow.value,
    }),
  }).then((res) => {
    return res.json();
  }).then((jsonRes) => {
    console.log(jsonRes);
  }).catch((err) => {
    console.log(err);
  })
  e.target.reset();
}

function getrotaflowInput() {
  const testForm = document.getElementById('tester');
  testForm.addEventListener('submit', (e) => postRotaflowToDatabase(e));
}

document.addEventListener('DOMContentLoaded', getRotaflowInput);
