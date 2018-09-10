const express = require( 'express' );
const fastXmlParser = require( 'fast-xml-parser' );
const rp = require( 'request-promise' );
const http = require( 'http' );
const path = require( 'path' );

const app = express();
const FLICKR_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=rest&lang=en-us';

app.use( function ( req, res, next ) {
  res.header( "Access-Control-Allow-Origin", "*" );
  res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
  next();
} );

app.use( express.static( path.join( __dirname, 'dist') ) );


app.get( '/feeds', async ( req, res ) => {

  const data = await rp( FLICKR_URL );

  const response = fastXmlParser.parse( data, {
    attributeNamePrefix: '$',
    ignoreAttributes: false
  } );

  if ( response.feed && response.feed.entry ) {
    const result = response.feed.entry.map( entry => {
      return {
        title: entry.title,
        img: getEnclosureLink( entry.link ),
        published: entry.published,
        author: entry.author,
        category: getCategories( entry.category ),
      }
    } );
    res.status( 200 ).json( result );

  } else {
    res.status( 500 ).json( { error: 'No feed or entries available on url provided' } );
  }
} );

function getEnclosureLink( links ) {
  return links
    .filter( link => link.$rel === 'enclosure' )
    .pop()
    .$href
    ;
}

function getCategories( data ) {
  const categories = data instanceof ( Array ) ? data : [ data ];
  return categories
    .map( val => val.$term )
    .filter( val => val !== '' )
    ;
}

app.get( '*', ( req, res ) => {
  res.sendfile( path.join( __dirname, 'dist/index.html' ) );
} );


const port = process.env.PORT || 3001;
app.set( 'port', port );

const server = http.createServer( app );
server.listen( port, () => console.log( 'running' ) );

// app.listen( 3000, () => console.log( 'Api listening on port 3000' ) );