package water.service;

import java.util.List;

import water.model.Poolevaluate;

public interface PoolevaluateServiceI {

	List<Poolevaluate> getAll();
	
	Poolevaluate selectByPrimaryKey(int id);
	
    int insert(Poolevaluate p);
    
    int update(Poolevaluate p);
    
    int delete(int id);
    
    int findTotal();
}
