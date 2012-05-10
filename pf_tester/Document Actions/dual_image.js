import Pageflex.Scripting;
import System.Diagnostics;

class dual_image {
    
	static function dualImage(fxVar, shiftAmount) {
	
		if (fxVar != ""){
			
			var doc = Application.CurrentDocument,
			fxObj = eval( "(" + fxVar + ")" );
			
			try {
			
				var image = doc.FindElement(fxObj.name + "_b");	
				
				//Application.Log( image );
			
				var leftOrig = fxObj.left;
				//Application.Log(leftOrig);
				
				var leftNew = leftOrig - shiftAmount;
				//Application.Log(leftNew);
				
				var newObj = fxObj;
				newObj.left = leftNew;
				newObj.name = newObj.name + "_b";
				
				
				// set element scale
				image.HorizontalScale = fxObj.scaleVal.ToString();
				image.VerticalScale = fxObj.scaleVal.ToString();
				
				// set element from left
				image.X = leftNew.ToString() + fxObj.measurement;
				
				// set element from left
				image.Y = fxObj.top.ToString() + fxObj.measurement;
				
				//set element angle
				image.Angle = fxObj.angleVal.ToString();
				
			}
			catch(err) {
			   Application.Log(err);
			};
		
		}
		
	}
}