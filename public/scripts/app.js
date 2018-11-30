console.log("test this out, see if i get it to work!");
var $coloniesList;
var allColonies = [];

$(document).ready(function(){

  $coloniesList = $('#colonyTarget');
  $.ajax({
    method: 'GET',
    url: '/api/colony',
    success: handleSuccess,
    error: handleError
  });

  $('#newColonyForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/colonies',
      data: $(this).serialize(),
      success: newColonySuccess,
      error: newColonyError
    });
  });

  $coloniesList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/colonies/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/colonies/'+$(this).attr('data-id'),
      success: deleteColonySuccess,
      error: deleteColonyError
    });
  });

});

function getColonyHtml(colony) {
  return `<hr>
          <p>
            <b>${colony.title}</b>
            holds the capital ${colony.capital.city}
            <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${colony._id}>Delete</button>
          </p>`;
}

function getAllColoniesHtml(colonies) {
  return colonies.map(getColonyHtml).join("");
}

// helper function to render all posts to view
function render () {
  // empty posts from view
  $coloniesList.empty();

  // passing allcolonies into the template function
  var coloniesHtml = getAllColoniesHtml(allColonies);

  // appending html to the view
  $coloniesList.append(coloniesHtml);
};

function handleSuccess(json) {
  allColonies = json;
  render();
}

function handleError(e) {
  console.log('quack code');
  $('#colonyTarget').text('Failed to load!');
}

function newColonySuccess(json) {
  $('#newColonyForm input').val('');
  allColonies.push(json);
  render();
}

function newColonyError() {
  console.log('newcolonies error!');
}

function deleteColonySuccess(json) {
  var colony = json;
  console.log(json);
  var colonyId = colony._id;
  console.log('delete colony', colonyId);
  // searching for the colony with the correct ID and remove it from our allColonies array
  for(var index = 0; index < allColonies.length; index++) {
    if(allColonies[index]._id === colonyId) {
        allColonies.splice(index, 1);
      break; 
    }
  }
  render();
}

function deleteColonyError() {
  console.log('deletecolony error!');
}




