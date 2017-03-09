package water.util;

import java.util.List;

/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2015å¹?11æœ?29æ—? 
 */

public class JsonTreeData {
		public int id;       //json id
	    public int pid;      //
	    public String text;     //json æ˜¾ç¤ºæ–‡æœ¬
	    public String name;
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public int getPid() {
			return pid;
		}
		public void setPid(int pid) {
			this.pid = pid;
		}
		public String getText() {
			return text;
		}
		public void setText(String text) {
			this.text = text;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public JsonTreeData(){
			
		}
		public JsonTreeData(int id, int pid, String text, String name) {
			super();
			this.id = id;
			this.pid = pid;
			this.text = text;
			this.name = name;
		}    

	  
}
