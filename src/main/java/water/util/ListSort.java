package water.util;
/**  
 * @projectName ZLS-ITTC  
 * @author chenhua 
 * @date 2015å¹?11æ?22æ? 
 */

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ListSort<E> {
	/**
	 * 
	 * @param list è¦æåºçéå
	 * @param method è¦æåºçå®ä½çå±æ§æå¯¹åºçgetæ¹æ³
	 * @param sort desc ä¸ºéåº?  
	 */
	public void Sort(List<E> list, final String method, final String sort) {
		// ç¨åé¨ç±»å®ç°æåº
		Collections.sort(list, new Comparator<E>() {

			public int compare(E a, E b) {
				int ret = 0;
				try {
					// è·åm1çæ¹æ³å
					Method m1 = a.getClass().getMethod(method, null);
					// è·åm2çæ¹æ³å
					Method m2 = b.getClass().getMethod(method, null);
					
					if (sort != null && "desc".equals(sort)) {

						ret = m2.invoke(((E)b), null).toString().compareTo(m1.invoke(((E)a),null).toString());

					} else {
						// æ­£åºæåº
						ret = m1.invoke(((E)a), null).toString().compareTo(m2.invoke(((E)b), null).toString());
					}
				} catch (NoSuchMethodException ne) {
					System.out.println(ne);
				} catch (IllegalArgumentException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IllegalAccessException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (InvocationTargetException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return ret;
			}
		});
	}
}
