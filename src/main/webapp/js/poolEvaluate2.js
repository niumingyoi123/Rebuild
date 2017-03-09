//JQuery的入口
$(function() {
	dealSearch();
	//listPoolEvaluate();
});

var tlist=new Array();
var strDate = '';
var searchMode = 0;

function dealSearch() {
	var indexButton = $('#indexForm').serialize();
//	var buttonID = indexButton.slice(-6);  //buttonID = 'index3'
//	var buttonID=$('#chooseIndexButton2').combobox('getValue');
	var buttonID=$('#chooseIndexButton2 option:selected').val();
	var poolIDInMode2;
	var newParams = '';
	var failAppearence = false;

	if(searchMode == 0) {   //如果是从三个radio进行查询
		var params = $("#frmSearch").form('clear').serialize(); 
		// lowT=&highT=&searchPoolID=&lowNTU=0&highNTU=100&lowAlgaeContent=0&highAlgaeContent=100&lowOutNTU=0&highOutNTU=100&lowSV=0.00&highSV=100.00
		switch(buttonID) {
//		case 'index1':
		case 'MTG_JJC_SC01':
			title = '1# 机加池分析表';
			ImageTitle1 = "1# 机加池浊度分析图 ";
			ImageTitle2 = "1# 机加池原水藻类/水温/预加氯量分析图 ";
			ImageTitle3 = "1# 机加池基本运行参数分析图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_JJC_SC01');
			//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_JJC_SC01';
			break;
//		case 'index2':
		case 'MTG_JJC_SC02':
			title = '2# 机加池分析表';
			ImageTitle1 = "2# 机加池浊度分析图 ";
			ImageTitle2 = "2# 机加池原水藻类/水温/预加氯量分析图 ";
			ImageTitle3 = "2# 机加池基本运行参数分析图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_JJC_SC02');
			//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_JJC_SC02';
			break;
//		case 'index3':
		case 'MTG_JJC_SC03':
			title = '3# 机加池分析表';
			ImageTitle1 = "3# 机加池浊度分析图 ";
			ImageTitle2 = "3# 机加池原水藻类/水温/预加氯量分析图 ";
			ImageTitle3 = "3# 机加池基本运行参数分析图 ";
			newParams = params.replace(/searchPoolID=/,'searchPoolID=MTG_JJC_SC03');
			//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_JJC_SC03';
			break;
		default :
			title = '机加池分析表';
			ImageTitle1 = "机加池浊度分析图 ";
			ImageTitle2 = "机加池原水藻类/水温/预加氯量分析图 ";
			ImageTitle3 = "机加池基本运行参数分析图 ";
			newParams = params;
			//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action';
		}
	} else if(searchMode == 1){  //如果是从查询窗口进入
		var params = $("#frmSearch").serialize(); 
		/*
		 * lowT= 或 lowT=XXXX-XX-XX
		 * highT=(不确定是否有值) 或 highT=XXXX-XX-XX
		 * searchPoolID=(不确定是否有值) 或 searchPoolID=MTG_JJC_SC0X
		 */
		//alert("poolID " + poolID);
		
		var reLowTime = new RegExp(/^lowT=\d{4}-\d{2}\-\d{2}/);
		var testLowTime = reLowTime.test(params);
		var reHighTime = new RegExp(/highT=\d{4}-\d{2}\-\d{2}/);
		var testHighTime = reHighTime.test(params);
		var reID = new RegExp(/searchPoolID=MTG_JJC_SC0\d{1}/);
		var testID = reID.test(params);
		
		if(testLowTime && testHighTime && testID) {  // lowT、highT、searchPoolID均不为空
			var lowTimeStr = params.substring(5, 15);
			var highTimeStr = params.substring(22, 32);
			var index = params.substring(57, 58);
			if (lowTimeStr != highTimeStr)
				TimeStr = lowTimeStr + '~' + highTimeStr;
			else 
				TimeStr = lowTimeStr;
			switch(index) {
				case '1':
					title = '1# 机加池分析表' + ' ' + TimeStr;
					ImageTitle1 = "1# 机加池浊度分析图 " + ' ' + TimeStr;
					ImageTitle2 = "1# 机加池原水藻类/水温/预加氯量分析图 " + ' ' + TimeStr;
					ImageTitle3 = "1# 机加池基本运行参数分析图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index1"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_JJC_SC01');
					$('#chooseIndexButton2').val('MTG_JJC_SC01');
					newParams = params;
					//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_JJC_SC01';
					break;
				case '2':
					title = '2# 机加池分析表' + ' ' + TimeStr;
					ImageTitle1 = "2# 机加池浊度分析图 " + ' ' + TimeStr;
					ImageTitle2 = "2# 机加池原水藻类/水温/预加氯量分析图 " + ' ' + TimeStr;
					ImageTitle3 = "2# 机加池基本运行参数分析图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index2"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_JJC_SC02');
					$('#chooseIndexButton2').val('MTG_JJC_SC02');
					newParams = params;
					//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_JJC_SC02';
					break;
				case '3':
					title = '3# 机加池分析表' + ' ' + TimeStr;
					ImageTitle1 = "3# 机加池浊度分析图 " + ' ' + TimeStr;
					ImageTitle2 = "3# 机加池原水藻类/水温/预加氯量分析图 " + ' ' + TimeStr;
					ImageTitle3 = "3# 机加池基本运行参数分析图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
//					$('#chooseIndexButton2').combobox('setValue', 'MTG_JJC_SC01');
					$('#chooseIndexButton2').val('MTG_JJC_SC03');
					newParams = params;
					//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_JJC_SC03';
					break;
				default :
					title = '机加池分析表' + ' ' + TimeStr;
					ImageTitle1 = "机加池浊度分析图 " + ' ' + TimeStr;
					ImageTitle2 = "机加池原水藻类/水温/预加氯量分析图 " + ' ' + TimeStr;
					ImageTitle3 = "机加池基本运行参数分析图 " + ' ' + TimeStr;
					$('input[name="chooseIndexButton"][value="index3"]').attr("checked", true);
					newParams = params;
					//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action';
				}
			
		} else {  // 如果  lowT、highT、searchPoolID均不为空  不满足，退出查询
			failAppearence = true;
			$.messager.alert('错误', '查询失败！<br />起始/结束日期、机加池编号不能为空！', 'warning');
			//设置一个错误的数据，使得查询失败，避免图表刷新，因为即便是数据缺失，SQLServer也会返回特定结果
			newParams = 'lowT=2015-01-01&highT=2014-01-01&searchPoolID=&lowNTU=0&highNTU=100&lowAlgaeContent=0&highAlgaeContent=100&lowOutNTU=0&highOutNTU=100&lowSV=0.00&highSV=100.00';
			//closeSearchForm();
		}
		searchMode=0; //将设置模式重置，否则此时改变下拉框会不起作用
	} else if(searchMode == 2) {
		/*
		 * lowT=XXXX-XX-XX
		 * highT=XXXX-XX-XX
		 * searchPoolID=空
		 * 其余参数也为空
		 */
		var params = $("#frmSearch").serialize(); 
		var lowTimeStr = params.substring(5, 15);
		var highTimeStr = params.substring(22, 32);
		var TimeStr = "";
		if (lowTimeStr != highTimeStr)
			TimeStr = lowTimeStr + '~' + highTimeStr;
		else 
			TimeStr = lowTimeStr;
		switch(buttonID) {
//			case 'index1':
		case 'MTG_JJC_SC01':
				title = '1# 机加池分析表' + ' ' + TimeStr;
				ImageTitle1 = "1# 机加池浊度分析图 " + ' ' + TimeStr;
				ImageTitle2 = "1# 机加池原水藻类/水温/预加氯量分析图 " + ' ' + TimeStr;
				ImageTitle3 = "1# 机加池基本运行参数分析图 " + ' ' + TimeStr;
				poolIDInMode2 = 'MTG_JJC_SC01';
				newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
				//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_JJC_SC01';
				break;
//			case 'index2':
		case 'MTG_JJC_SC02':
				title = '2# 机加池分析表' + ' ' + TimeStr;
				ImageTitle1 = "2# 机加池浊度分析图 " + ' ' + TimeStr;
				ImageTitle2 = "2# 机加池原水藻类/水温/预加氯量分析图 " + ' ' + TimeStr;
				ImageTitle3 = "2# 机加池基本运行参数分析图 " + ' ' + TimeStr;
				poolIDInMode2 = 'MTG_JJC_SC02';
				newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
				//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_JJC_SC02';
				break;
//			case 'index3':
		case 'MTG_JJC_SC03':
				title = '3# 机加池分析表' + ' ' + TimeStr;
				ImageTitle1 = "3# 机加池浊度分析图 " + ' ' + TimeStr;
				ImageTitle2 = "3# 机加池原水藻类/水温/预加氯量分析图 " + ' ' + TimeStr;
				ImageTitle3 = "3# 机加池基本运行参数分析图 " + ' ' + TimeStr;
				poolIDInMode2 = 'MTG_JJC_SC03';
				newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
				//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action?dataAnalysis.PoolID=MTG_JJC_SC03';
				break;
			default :
				title = '机加池分析表' + ' ' + TimeStr;
				ImageTitle1 = "机加池浊度分析图 " + ' ' + TimeStr;
				ImageTitle2 = "机加池原水藻类/水温/预加氯量分析图 " + ' ' + TimeStr;
				ImageTitle3 = "机加池基本运行参数分析图 " + ' ' + TimeStr;
				poolIDInMode2 = 'MTG_JJC_SC03';
				newParams = params.substring(0, 46) + poolIDInMode2 + params.substring(46);
				//treeURL = '${pageContext.request.contextPath}/searchDataAnalysis.action';
		}
	}
	  



$.post("Poolevlaute/listPoolevlaute.do", function(result) {
//	console.log(result);
	result=JSON.parse(result);
	console.log(result.rows)
	if (result.success=='true') {
		rows= result.rows;
		console.log(rows);
		listPoolEvaluate(result);
//		if(searchMode != 2) {
//			listTreeNode(tlist);
//		}
//	} else {
//		if(!failAppearence) {
//			//如果已经出现了查询失败窗口，见mode2，就不必要再出现下面的窗口
//			$.messager.alert('查询', '查询失败,未查找到相关信息', 'warning');
//		}
	}
});

}
var title;

function listPoolEvaluate(data) {
	//alert("多个Tab的情况下只有第一个Tab日期框有效！\n即Tab 2、3中日期框内无法输入时间\n私以为是highStock与easyUI之间的不兼容=。=");
	$("#poolEvaluatebody").datagrid({
		title: title,
		width : "1300",
		height : "300",
		data:data,
		rownumbers : true, // 在最前面显示行号
		fitColumns : true, // 自动适应列宽
		striped : true, // 隔行变色
		singleSelect : true, // 每次只选中一行
		loadMsg : '正在加载项目列表，请稍后...',
		idField : 'ID', // 主键属性
		remoteSort : true, // 从服务器端排序，默认true	
		onLoadSuccess: function(data){
			if(data.rows!=datalist){		
				datalist = eval(data).rows;
//				alert("(data).rows = " + datalist);
				drawImage(); //作图
			}
		},
		columns : [ [
		             {
		            	 field : 't',
		            	 title : '时间',
		            	 align : 'center',
		            	 width : 80,
//		            	 formatter : function(value) {
//		            		 return value.substring(0, 10);
//		            	 },
		            	 sortable : true
		             },
		             {
		            	 field : 'poolID',
		            	 title : '机加池编号',
		            	 align : 'center',
		            	 width : 90,
		            	 //可以排序，但服务器也完成相应的代码，要加入sort和order属性
		            	 sortable : true,
		            	 formatter:function(value){
		            		 return formPoolID(value);
		            	 }
		             }, 
		             {
		            	 field : 'PAC',
		            	 title : 'PAC投加量<br>mg/L',
		            	 align : 'center',
		            	 width : 80,
//		            	 formatter : function(value) {
//		            		 return value*100+"%";
//		            	 },
		            	 sortable : true
		             },{
		            	 field : 'feCl3',
		            	 title : 'FeCl<sub>3</sub>投加量<br>mg/L',
		            	 align : 'center',
		            	 width : 85,
//		            	 formatter : function(value) {
//		            		 return value*100+"%";
//		            	 },
		            	 sortable : true			
		             },
		             {
		            	 field : 'openDegree',
		            	 title : '开启度',
		            	 width : 55,
		            	 align : 'center',
		            	 formatter : function(value) {
		            		 return value+"%";
		            	 },
		            	 sortable : true
		             }, 

		             {
		            	 field : 'rotationSpeed',
		            	 title : '转速<br>r/min',
		            	 width : 50,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'SV',
		            	 title : '沉降比',
		            	 width : 60,
		            	 align : 'center',
		            	 /*formatter : function(value) {
		            		 return value+"%";
		            	 },*/
		            	 sortable : true
		             },
		             {
		            	 field : 'waterTemp',
		            	 title : '水温<br>',
		            	 width : 55,
		            	 align : 'center',
		            	 formatter : function(value) {
		            		 return value+"℃";
		            	 },
		            	 sortable : true
		             },
		             {
		            	 field : 'smallMudFre',
		            	 title : '小斗排泥时长<br>h',
		            	 width : 80,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'bigMudFre',
		            	 title : '大斗排泥时长<br>h',
		            	 width : 80,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'NTU',
		            	 title : '原水浊度<br>NTU',
		            	 width : 60,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'algaeContent',
		            	 title : '原水藻类含量<br>万个/L',
		            	 width : 90,
		            	 align : 'center',
		            	 formatter : function(value) {
		            		 return value;          //修改之前return value+"%"
		            	 },
		            	 sortable : true
		             },
		             {
		            	 field : 'outNTU',
		            	 title : '出水浊度<br>NTU',
		            	 width : 60,
		            	 align : 'center',
		            	 sortable : true
		             },	 
		             {
		            	 field : 'CL',
		            	 title : '预加氯量<br>mg/L',
		            	 width : 60,
		            	 align : 'center',
		            	 sortable : true
		             }
		             ] ],

		             onLoadError: function () {
		            	 $.messager.alert("提示", "服务器忙，请稍后再试！", "warning");
		             },
		             onDblClickRow: function (rowIndex,rowData){
		            	 editPoolEvaluate();
		             },
		             //选择显示的列
		             onHeaderContextMenu: function(e, field){
		            	 e.preventDefault();
		            	 if (!cmenu){
		            		 createColumnMenu();
		            	 }
		            	 cmenu.menu('show', {
		            		 left:e.pageX,
		            		 top:e.pageY
		            	 });
		             }
	});
}

//前端假的分页函数
function myLoader(param, success, error) {
	var that = $(this);
	var opts = that.datagrid("options");
	if (!opts.url) {
		return false;
	}

	var cache = that.data().datagrid.cache;
	if (!cache) {
		$.ajax({
			type: opts.method,
			url: opts.url,
			data: param,
			dataType: "json",
			success: function (data) {
				that.data().datagrid['cache'] = data;
				success(bulidData(data));
			},
			error: function () {
				error.apply(this, arguments);
			}
		});
	} else {
		success(bulidData(cache));
	}

	function bulidData(data) {
		var temp = $.extend({}, data);
		var tempRows = [];
		var start = (param.page - 1) * parseInt(param.rows);
		var end = start + parseInt(param.rows);
		var rows = data.rows;
		for (var i = start; i < end; i++) {
			if (rows[i]) {
				tempRows.push(rows[i]);
			} else {
				break;
			}
		}

		temp.rows = tempRows;
		return temp;
	}
}

//选择显示的项目
var cmenu;
function createColumnMenu(){
	cmenu = $('<div/>').appendTo('body');
	cmenu.menu({
		onClick: function(item){
			if (item.iconCls == 'icon-ok'){
				$('#poolEvaluatebody').datagrid('hideColumn', item.name);
				cmenu.menu('setIcon', {
					target: item.target,
					iconCls: 'icon-empty'
				});
			} else {
				$('#poolEvaluatebody').datagrid('showColumn', item.name);
				cmenu.menu('setIcon', {
					target: item.target,
					iconCls: 'icon-ok'
				});
			}
		}
	});
	var fields = $('#poolEvaluatebody').datagrid('getColumnFields');
	for(var i=0; i<fields.length; i++){
		var field = fields[i];
		var col = $('#poolEvaluatebody').datagrid('getColumnOption', field);
		cmenu.menu('appendItem', {
			text: col.title,
			name: field,
			iconCls: 'icon-ok'
		});
	}
}

function formPoolID(value){
	var strs = new Array();
	var poolID;
	strs=value.split("_");//字符切割
	poolID = strs[2].replace(/SC0/,'');
	poolID = poolID.replace(/SC0/,'');
	return poolID + "#"+"机加池" ;		
}