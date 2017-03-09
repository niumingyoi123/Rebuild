package water.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import water.dao.PoolevaluateMapper;
import water.model.Poolevaluate;


@Service("PoolevaluateServiceI")
public class PoolevaluateServiceImpl implements PoolevaluateServiceI {
	
	private PoolevaluateMapper poolevaluateMapper;
	
	

	public PoolevaluateMapper getPoolevaluateMapper() {
		return poolevaluateMapper;
	}
	@Autowired
	public void setPoolevaluateMapper(PoolevaluateMapper poolevaluateMapper) {
		this.poolevaluateMapper = poolevaluateMapper;
	}

	public List<Poolevaluate> getAll() {

		return poolevaluateMapper.selectAll();
	}

	public Poolevaluate selectByPrimaryKey(int id) {

		return poolevaluateMapper.selectByPrimaryKey(id);
	}

	public int insert(Poolevaluate p) {

		return poolevaluateMapper.insert(p);
	}

	public int update(Poolevaluate p) {

		return poolevaluateMapper.updateByPrimaryKey(p);
	}

	public int delete(int id) {

		return poolevaluateMapper.deleteByPrimaryKey(id);
	}
	public int findTotal() {

		return poolevaluateMapper.findTotal();
	}

}
