package com.water.test;

import java.util.logging.Logger;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.druid.support.logging.LogFactory;

import water.dao.PoolevaluateMapper;
import water.service.PoolevaluateServiceImpl;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes=PoolevaluateServiceImpl.class)
public class TestMapper {
	@Autowired
	private PoolevaluateMapper poolevaluateMapper;
	@Test
	public void run(){
		int r = poolevaluateMapper.deleteByPrimaryKey(Integer.valueOf(1));
		System.out.println(r);
	}

}
