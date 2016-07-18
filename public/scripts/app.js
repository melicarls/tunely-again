/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

var template;
var $albumsList;
var allAlbums=[];

$(document).ready(function() {
  console.log('app.js loaded!');

  $albumsList = $('#albums');

  var source = $('#album-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: onSuccess,
    error: onError
  });

  $('form').on('submit', function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    $('input').val("");
    $('textarea').val("");
    $.ajax({
      method: 'POST',
      url: '/api/albums',
      data: data,
      success:postSuccess,
      error: postError
    });
  });

});


function renderAlbum(thisAlbum) {
  var albumsHtml = template({album: thisAlbum});
  $albumsList.prepend(albumsHtml);
}

function onSuccess(json) {
  json.forEach(function(album) {
    renderAlbum(album);
  });
}

function onError(err) {
  console.log("The albums couldn't be fetched: ", err);
}

function postSuccess(json) {
  renderAlbum(json);
}

function postError(err) {
  console.log("The album could not be added: ", err);
}
