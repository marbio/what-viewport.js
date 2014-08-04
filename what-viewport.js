
/*
 * @WhatViewport module
 *	
 * Determina la width della viewport (cross-browser) ed offre dei metodi condizionali
 * per capire su quale dispositivo ci troviamo
 * 
 */
(function () {

    if (typeof $Modules === 'undefined') { $Modules = {} }

    $Modules.whatViewport = function () {

        var w = window,
			a = 'inner',
			ww = '',
			wh = '',
			mode = '', 
			options = {
				breakpoints : {
					mobile : 767,
					tabletLandscapeDown : 767,
					tabletLandscapeUp : 1279,
					tabletPortraitDown : 767,
					tabletPortraitUp : 1001,
					desktop : 1279,
					desktopWide : 1407
				}
			};


        var init = function( params ) {

            if ( !( 'innerWidth' in window ) ) {
				a = 'client';
				w = document.documentElement || document.body;
			}
	
			ww = w[ a+'Width'];
			wh = w[ a+'Height'];
        
        },

        getOrientation = function() {

            if ( wh > ww )
				mode = "portrait";
			else
				mode = "landscape";
				
			return mode;	

        },
        
        isMobile = function () {

			return ( ww <= options.breakpoints.mobile );

		},

		isTabletLandscape = function () {

			return ( ww > options.breakpoints.mobile && ww < options.breakpoints.tabletLandscapeUp && mode == "landscape" );

		},

		isTabletPortrait = function () {

			return ( ww > options.breakpoints.mobile && ww < options.breakpoints.tabletPortraitUp && mode == "portrait" );

		},

		isMobileLandscape = function () {

			return ( ww < options.breakpoints.mobile && mode == "landscape" );

		},

		isMobilePortrait = function () {

			return ( ww < options.breakpoints.mobile && mode == "portrait" );

		},

		isDesktop = function () {

			return ( ww > options.breakpoints.desktop );

		},

		isWideDesktop = function () {

			return ( ww > options.breakpoints.desktopWide );

		};

        var whatViewportObj = {

            init: init,
            getOrientation : getOrientation,
            isDesktop: isDesktop,

        }; 

        return whatViewportObj;

    }();

})();