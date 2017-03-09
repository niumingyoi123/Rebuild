package com.water.test;




import java.sql.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;

import water.model.Poolevaluate;
import water.service.PoolevaluateServiceI;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring.xml",
		"classpath:spring-mybatis.xml" })
public class TestMybatis {
	
	private static final Logger logger =Logger.getLogger(TestMybatis.class);
	
	private PoolevaluateServiceI poolevlauteService;

	public PoolevaluateServiceI getPoolevlauteService() {
		return poolevlauteService;
	}
	@Autowired
	public void setPoolevlauteService(PoolevaluateServiceI poolevlauteService) {
		this.poolevlauteService = poolevlauteService;
	}
	@Test
	public void test() {

		List<Poolevaluate> poolevlaute= poolevlauteService.getAll();
		
		int findtotal = poolevlauteService.findTotal();
		
		for (Poolevaluate p : poolevlaute) {
			Date t = p.getT();
			
			logger.info(JSON.toJSONStringWithDateFormat(t, "yyy-MM-dd HH:mm:ss"));
		}
		
		
		logger.info(JSON.toJSONStringWithDateFormat(poolevlaute, "yyyy-MM-dd HH:mm:ss"));
		
		logger.info(JSON.toJSONStringWithDateFormat(findtotal, "yyyy-MM-dd HH:mm:ss"));
		
	}
	
//	@Test
//	public void test2(){
//		
//		Date d = new Date();
//		
//		Poolevaluate poolevlaute = new Poolevaluate();
//		
//		poolevlaute.setId(2);
//		
//		poolevlaute.setPoolid("POOL2");
//		
//		poolevlaute.setT(d);
//		
//		int result = poolevlauteService.insert(poolevlaute);
//		
//		logger.info(JSON.toJSONStringWithDateFormat(result+"add","yyyy-MM-dd HH:mm:ss" ));
//		
//		@Test
//		public void test3() {
//			
//			int result = poolevlauteService.delete(1);
//			
//			logger.info(JSON.toJSONStringWithDateFormat(result+"delete", "yyyy-MM-dd HH:mm:ss"));
//		}
		
//	}
}
