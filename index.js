
const apiKey = 'NopMSaqB4n0swSXDmJCFJdc0ZOki7kfqIoVcV80g';
const searchURL = 'https://developer.nps.gov/api/v1/parks?';



function getParks(query, maxResults = 10) {
  //this is where our fetch goes
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const stateInput = $('#js-state-select').val();
    const maxResults = $('#js-number-of-responses').val();
    //console.log(`State: ${stateInput} Max: ${maxResults}`);
  });
}

$(watchForm);