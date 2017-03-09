package water.util;

import java.util.List;

/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2015å¹?11æœ?29æ—? 
 */

public class TreeNode {
	private int id;
	private String text;
	private String state;
	private List<TreeNode> children;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public List<TreeNode> getChildren() {
		return children;
	}
	public void setChildren(List<TreeNode> children) {
		this.children = children;
	}
	
	public TreeNode(){
		
	}
	public TreeNode(int id, String text, String state, List<TreeNode> children) {
		super();
		this.id = id;
		this.text = text;
		this.state = state;
		this.children = children;
	}
	
	
}
