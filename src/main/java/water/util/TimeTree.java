package water.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;


public class TimeTree {
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static  List<JsonTreeData> buildTree(List<String> tlist){
		Collections.sort(tlist);
		tlist = ListTool.removeDuplicate(tlist);
		List <JsonTreeData> timeTree= new ArrayList<JsonTreeData>();
		List<String> yearlist=new ArrayList<String>();
		List<String> monthlist=new ArrayList<String>();
		List<String> daylist=new ArrayList<String>();
		JsonTreeData treeNode = new JsonTreeData(1,0,"ʱ���б�","ʱ���б�"); //根节�?
		timeTree.add(treeNode);
		int j = 1;
		for(int i=0;i<tlist.size();i++){
			String[] strs = tlist.get(i).split("-");
			String year = strs[0];
			String month = year+strs[1];
			String day = month+strs[2];

			int yearIndex=yearlist.indexOf(year);
			int monthIndex=monthlist.indexOf(month);
			int dayIndex=daylist.indexOf(day);
			if(yearIndex<0){	//不存在该年份
				j=j+1;	
				yearlist.add(year);
				treeNode =  new JsonTreeData(j,1,year,year+"��");
				timeTree.add(treeNode);

				j=j+1;
				monthlist.add(month);
				treeNode =  new JsonTreeData(j,j-1,month,strs[1]+"��");
				timeTree.add(treeNode);

				j=j+1;
				daylist.add(day);
				treeNode =  new JsonTreeData(j,j-1,day,strs[2]+"��");
				timeTree.add(treeNode);
			}
			else{
				if(monthIndex<0) //不存在该月份
				{	
					j=j+1;
					monthlist.add(month);
					treeNode =  new JsonTreeData(j,getParentID(timeTree,year),month,strs[1]+"��");
					timeTree.add(treeNode);

					j=j+1;
					daylist.add(day);
					treeNode =  new JsonTreeData(j,j-1,day,strs[2]+"��");
					timeTree.add(treeNode);
				}else{
					if(dayIndex<0){
						j=j+1;
						daylist.add(day);
						treeNode =  new JsonTreeData(j,getParentID(timeTree,month),month,strs[2]+"��");
						timeTree.add(treeNode);
					}
				}
			}
		}
		return timeTree;
	}

	public static int getParentID(List<JsonTreeData>list,String text){
		for(int i=0;i<list.size();i++){
			if((list.get(i).getText()).equals(text)){
				return list.get(i).getId();
			}
		}
		return -1;
	}
	
	public static List<TreeNode> convert(List<JsonTreeData> treeList){
		List<TreeNode> tree = new ArrayList<TreeNode>();
		for(int i=0;i<treeList.size();i++){
			JsonTreeData treeNode = treeList.get(i);
			if(exists(treeList,treeNode.getPid())==false){
//				System.out.println(tree.size());
				tree.add(new TreeNode(treeNode.getId(), treeNode.getName(), "closed", new ArrayList<TreeNode>()));
				
			}
		}
		
		List<TreeNode> todo = new ArrayList<TreeNode>();
		for(int i=0;i<tree.size();i++){
//			System.out.println(tree.get(i).getText());
			todo.add(tree.get(i));
		}
		
		while(todo.size()>0){
			TreeNode treeNode = todo.remove(todo.size()-1);
			for(int i=0;i<treeList.size();i++){
				JsonTreeData treeTemp = treeList.get(i);
				if(treeTemp.getPid() == treeNode.getId()){
//					包含“日”的,即具体日期的，状态为open,其他为closed
					if(treeTemp.getName().contains("��")){
						TreeNode childTreeNode = new TreeNode(treeTemp.getId(),treeTemp.getName(),"open", new ArrayList<TreeNode>());
						treeNode.getChildren().add(childTreeNode);
						todo.add(childTreeNode);
					}else{
						TreeNode childTreeNode = new TreeNode(treeTemp.getId(),treeTemp.getName(),"closed", new ArrayList<TreeNode>());
						treeNode.getChildren().add(childTreeNode);
						todo.add(childTreeNode);
					}
				}
			}
		}
		return tree;
	}
	
	//判断是否存在父节�?
	public static boolean exists(List<JsonTreeData>treeList,int parentId){
		for(int i=0;i<treeList.size();i++){
			if(treeList.get(i).getId()==parentId)
				return true;
		}
		return false;
	}
	
	/*打印�?*/
	public static void printTree(List<TreeNode>tree){
		for(int i=0;i<tree.size();i++){
			TreeNode tnode = tree.get(i);
			System.out.println("ID:"+tnode.getId()+" text:"+tnode.getText()+" children: "+tnode.getChildren());
			if(tnode.getChildren()!=null){
				printTree(tnode.getChildren());
			}
		}
	}
	
//  //测试
//	public static void main(String[] args){
//		List<String> tlist = new ArrayList<String>();
//		tlist.add("2014-09-01");
//		tlist.add("2015-09-02");
//		tlist.add("2015-09-03");
//		tlist.add("2015-09-01");
//		tlist.add("2015-08-01");
//		tlist.add("2015-08-03");
//		List<TreeNode>tree = convert(buildTree(tlist));
//		printTree(tree);
//	}
}
