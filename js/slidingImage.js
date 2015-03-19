$( document ).ready( function () {

	var imagesCount = 10;

	for( var i = 0; i < imagesCount; i++ ) {
		$( '.website-bg-slideshow' ).append( '<div class="bg-image" id="img-' + i + '" style="display : none; background-image : url( img/img-' + i + '.jpg )" ></div>' );
	}

	var ctr = 0;

	function loopImages( timeout ) {
		setTimeout( function () {
			console.log( ctr )
			$( '#img-' + ctr ).fadeOut( 'slow', function () {
				ctr >= imagesCount - 1 ? ctr = 0 : ctr++;
				$( '#img-' + ctr ).fadeIn( 'slow' );
			} );
			loopImages( 7000 );
		}, timeout );
	}

	loopImages( 0 );
} );