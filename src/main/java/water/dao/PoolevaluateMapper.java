package water.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import water.model.Poolevaluate;

@Repository(value="pollevaluateMapper")
public interface PoolevaluateMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Poolevaluate record);

    Poolevaluate selectByPrimaryKey(Integer id);

    List<Poolevaluate> selectAll();

    int updateByPrimaryKey(Poolevaluate record);
    
    int findTotal();
}