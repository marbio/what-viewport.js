what-viewport.js
==============

A small javascript object that returns information about the device such as the type and orientation.

The main scope of this module is to determine the width of the viewport (cross-browser) and offers conditional methods to figure out which device we are using.

**How to use it**

Add jQuery to the head section of your page
Add the what-viewport.js to the head section of your page


Init the module:

$Modules.whatViewport.init();


Call the public methods of module:

if( $Modules.whatViewport.isDesktop() )
	// Do something on desktop
	
if( $Modules.whatViewport.isTabletLandscape() )
	// Do something on tablet in lanscape orientation

