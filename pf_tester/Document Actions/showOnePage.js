import Pageflex.Scripting;
import System.Diagnostics;

class showOnePageclass
{    
	static function showOnePage(pfvar) {
		if (pfvar != ""){
		
			var doc = Application.CurrentDocument,
			pageCount = doc.PageCount,
			pageToKeep = +(pfvar);
			
			//Application.Log("PFVAR = " + pfvar);
			//Application.Log("PAGE COUNT = " + pageCount);
			//Application.Log("PAGE TO KEEP = " + pageToKeep);
			
			doc.EnableFormatting = false;
			
			// delete all pages AFTER pageToKeep
			for ( var i = pageToKeep + 1; i <= pageCount; i++){
				
				doc.GetPage(pageToKeep + 1).Delete();

				};
			
			// delete all pages BEFORE pageToKeep
			try { 
				for ( var i = 1; i < pageToKeep; i){
						
					doc.GetPage(i).Delete();
						
				};
			}
			catch(err) {
			   Application.Log(err);
			};
			
			doc.EnableFormatting = true;
		
		}
		
	}
	
}