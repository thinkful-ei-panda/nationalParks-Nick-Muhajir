
const apiKey = 'NopMSaqB4n0swSXDmJCFJdc0ZOki7kfqIoVcV80g';


function makeUrl(stateInput, maxResults) {
  return `https://developer.nps.gov/api/v1/parks?statecode=${stateInput}&limit=${maxResults}&api_key=${apiKey}`;

}

function getParks(query, maxResults) {
  //this is where our fetch goes
  console.log('get parks ran')
  const searchUrl = makeUrl(query, maxResults);
  console.log(searchUrl)

  fetch(searchUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      alert(err.message);
    });
} 

function displayResults(responseJson) {
  let html = ``;
  
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const stateInput = $('#js-state-select').val();
    const maxResults = $('#js-number-of-responses').val();
    console.log(`State: ${stateInput} Max: ${maxResults}`);
    getParks(stateInput, maxResults);
  });
}

$(watchForm);