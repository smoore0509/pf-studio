import Pageflex.Scripting;
import System.Diagnostics;

class move_page_class
{    

// move the last page in the document before the first page
	static function move_page()
	{
		var doc = Application.CurrentDocument,
		pageCount = doc.PageCount,
		firstPage = doc.GetPage(1),
		lastPage = doc.GetPage(pageCount);
		
		//Application.Log( lastPage.GetType() );
		//Application.Log( lastPage.ParentElement() );
		
		lastPage.MoveBefore(doc,firstPage);
	}


}