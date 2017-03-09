package water.controller;




import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import water.model.Poolevaluate;
import water.service.PoolevaluateServiceI;
import water.util.TimeTree;
import water.util.TreeNode;
import water.util.TypeEditor;


@Controller
@RequestMapping("/Poolevaluate/*")
public class PoolevaluateController {
	@Autowired
	private PoolevaluateServiceI poolevaluateServiceI;
	@RequestMapping("listPoolevaluate")
	@ResponseBody
	public Map<String, Object> getPoolevaluate(){
		List<String> tlist = new ArrayList<String>();
		DateFormat sdFormat=new SimpleDateFormat("yyyy-MM-dd");
		List<Poolevaluate> list = poolevaluateServiceI.getAll();
		Map<String,Object> modelmap = new HashMap<String, Object>();
		for(Poolevaluate s:list){
			tlist.add(sdFormat.format(s.getT()));
		}
		List <TreeNode> timeTree = TimeTree.convert(TimeTree.buildTree(tlist));
		modelmap.put("total", list.size());
		modelmap.put("tlist", timeTree);
		modelmap.put("rows", list);
		return modelmap;
		
	}

	
	@RequestMapping(value="addPoolevaluate")
	public String addPoolevaluate(Poolevaluate poolevaluate){
		try {
			poolevaluateServiceI.insert(poolevaluate);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "redirect:/Poolevaluate/listPoolevaluate.do";
	}
	
	@RequestMapping("deletePoolevaluate")
	public String deletePoolevaluate(int id){
		poolevaluateServiceI.delete(id);
		return "redirect:/Poolevaluate/listPoolevaluate.do";
	}
	
	@RequestMapping("updatePoolevaluate")
	public String updatePoolevaluate(int id,HttpServletRequest request){
		Poolevaluate poolevaluate = poolevaluateServiceI.selectByPrimaryKey(id);
		request.setAttribute("updatePoolevaluate", poolevaluate);
		return "updatePoolevaluate";
	}
	
	@InitBinder
	public void initBinder(WebDataBinder binder){
        binder.registerCustomEditor(Date.class, new CustomDateEditor(new TypeEditor("yyyy-MM-dd"), true)); 
	}
}
