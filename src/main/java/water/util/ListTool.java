package water.util;

import java.util.ArrayList;
import java.util.List;

/**
*@projectNameZLS-ITTC
*@authorchenhua
*@date2015å¹?11æœ?29æ—?
*/

//listå»é‡
public class ListTool{
	public static List removeDuplicate(List list){
		for(int i=0;i<list.size()-1;i++){
			for(int j=list.size()-1;j>i;j--){
				if(list.get(j).equals(list.get(i))){
					list.remove(j);
				}
			}
		}
		return list;
	}
}
