/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleAlbums = [];
sampleAlbums.push({
             artistName: 'Ladyhawke',
             name: 'Ladyhawke',
             releaseDate: '2008, November 18',
             genres: [ 'new wave', 'indie rock', 'synth pop' ]
           });
sampleAlbums.push({
             artistName: 'The Knife',
             name: 'Silent Shout',
             releaseDate: '2006, February 17',
             genres: [ 'synth pop', 'electronica', 'experimental' ]
           });
sampleAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ]
           });
sampleAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ]
           });
/* end of hard-coded data */

var template;
var $albumsList;
// var allAlbums=[];



$(document).ready(function() {
  console.log('app.js loaded!');

  $albumsList = $('#albums');

  var source = $('#album-template').html();
  template = Handlebars.compile(source);

  sampleAlbums.forEach(function(album) {
    renderAlbum(album);
  });

});


function renderAlbum(thisAlbum) {
  var albumsHtml = template({album: thisAlbum});
  $albumsList.prepend(albumsHtml);
}
