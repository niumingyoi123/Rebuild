package water.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Tools {
	//åˆ¤æ–­å­—ç¬¦ä¸²æ˜¯å¦æ˜¯æ•°å­—
	public static boolean isNumeric(String str){ 
		if (str==null){
				return false;
		}
	   Pattern pattern = Pattern.compile("[0-9]*"); 
	   Matcher isNum = pattern.matcher(str);
	   if( !isNum.matches() ){
	       return false; 
	   } 
	   return true; 
	}
	
	public static String transPoolID(String PoolID){
		String temp[] = PoolID.split("_");
		StringBuffer s = new StringBuffer();
	    temp[2] = temp[2].replace("SC0", "");
	    temp[2] = temp[2].replace("SC","");
		s.append(temp[2]);
		if("JJC".equals(temp[1])){
			s.append("# »ú¼Ó³Ø");
		}else if("QingS".equals(temp[1])){
			s.append("# ÇåË®³Ø");
		}else if("MoChi".equals(temp[1])){
			s.append("# Ä¤³Ø");
		}
		return s.toString();
	}
}
