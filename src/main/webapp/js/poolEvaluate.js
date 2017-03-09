//JQuery的入口
$(function() {
	dealSearch();
	//listPoolEvaluate();
});
var tlist=new Array();
var strDate = '';
var searchMode = 0;
$(document).ready(function() {
	$('#addButton').click(function(event) {
		event.preventDefault();
		var _len = $("#tab tr").length;
		//alert(_len);
		$('#tab').append(
			"<tr id='tr" + _len + "'>"
			+ "<td style='width:1px;height:26px'><input type='hidden' id='splitSign' name='split' style='width:1px;height:25px'/></td>"
			+ "<td style='width:1px;height:26px'><input type='hidden' id='IDAdd' name='poolEvaluate.ID' style='width:1px;height:25px' /></td>"
			+ "<td id='indexNum" + _len + "' style='text-align:center; width:40px;height:26px'>" + _len + "</td>"
			+ "<td style='width:152px;height:26px'><input name='poolEvaluate.t' id='tAdd' type='date' style='width:150px;height:25px'/></td>"
			+ "<td style='width:102px;height:26px'><select name='poolEvaluate.PoolID' id='PoolIDAdd' style='width:100px;height:25px'><option value='MTG_JJC_SC01' selected='selected'>1# 机加池</option><option value='MTG_JJC_SC02'>2# 机加池</option><option value='MTG_JJC_SC03'>3# 机加池</option></select></td>"
			+ "<td style='width:82px;height:26px'><input style='width:80px;height:25px' id='PAC' name='poolEvaluate.PAC' data-options='min:0,precision:0,' /></td>"
			+ "<td style='width:92px;height:26px'><input style='width:90px;height:25px' id='FeCl3' name='poolEvaluate.FeCl3' data-options='min:0,precision:0' /></td>"
			+ "<td style='width:62px;height:26px'><input style='width:60px;height:25px' id='OpenDegree' name='poolEvaluate.OpenDegree' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:52px;height:26px'><input style='width:50px;height:25px' id='RotationSpeed' name='poolEvaluate.RotationSpeed' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:62px;height:26px'><input style='width:60px;height:25px' id='SV' name='poolEvaluate.SV' data-options='min:0,precision:0' /></td>"
			+ "<td style='width:52px;height:26px'><input style='width:50px;height:25px' id='WaterTemp' name='poolEvaluate.WaterTemp' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:92px;height:26px'><input style='width:90px;height:25px' id='SmallMudFre' name='poolEvaluate.SmallMudFre' data-options='min:0,precision:0'/></td>"
			+ "<td style='width:92px;height:26px'><input style='width:90px;height:25px' id='BigMudFre' name='poolEvaluate.BigMudFre'  data-options='precision:0'/></td>"
			+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='NTU' name='poolEvaluate.NTU' data-options='precision:2'/></td>"
			+ "<td style='width:92px;height:26px'><input style='width:90px;height:25px' id='AlgaeContent' name='poolEvaluate.AlgaeContent' data-options='precision:2'/></td>"
			+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='OutNTU' name='poolEvaluate.OutNTU' data-options='precision:2'/></td>"
			+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='CL' name='poolEvaluate.CL' data-options='precision:2'/></td>"
			+ "<td id='delete" + _len + "' style='width:40px;height:26px'><a href='#' onclick='deltr(" + _len + ",event)'>删除</a></td>"
			+ "</tr>");
	});
	
	$('.radioItem').change(function() {
		//var $selectedValue = $('input[name="chooseIndexButton"]:checked').val();
		//alert("$selectedValue = " + $selectedValue);
		hideImportPanel();
		searchMode = 0;
		dealSearch();
	});
	
/*	$('#chooseIndexButton2').combobox({  
        onChange:function(){  
    		hideImportPanel();
    		if(searchMode!=1){ //不是从查询窗口进入的
	    		searchMode=0;
	    		$("#frmSearch").form('clear');
	    		dealSearch();
    		}
        }
	});*/
});
function changeButton2(){
	hideImportPanel();
	if(searchMode!=1){ //不是从查询窗口进入的
		searchMode=0;
		$("#frmSearch").form('clear');
		dealSearch();
	}
}
$(document).ready(function() {
	var count = 0;
	$('#menu').click(function() {
		hideImportPanel();
		count += 1;
		if(count % 2 == 1) {
			$('#menu').text("隐藏");
			$('#add').animate({
				'left': '120px',
				'top': '0'
			},{
				//duration: 'slow'
			});
			$('#edit').animate({
				'left': '49px',
				'top': '21px'
			},{
				//duration: 'slow'
			});	
			$('#delete').animate({
				'left': '6px',
				'top': '83px'
			},{
				//duration: 'slow'
			});	
			$('#search').animate({
				'left': '6px',
				'top': '157px'
			},{
				//duration: 'slow'
			});
			$('#export').animate({
				'left': '49px',
				'top': '217px'
			},{
				//duration: 'slow'
			});
			$('#import').animate({
				'left': '120px',
				'top': '250px'
			},{
				//duration: 'slow'
			});
//			$('#template').animate({
//				'left': '120px',
//				'top': '250px'
//			},{
//				//duration: 'slow'
//			});

		} else {
			$('#menu').text("功能");
			$('#add').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});
			$('#edit').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});	
			$('#delete').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});	
			$('#search').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'fast'
			});
			$('#export').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});
			$('#import').animate({
				'left': '120px',
				'top': '110px'
			},{
				//duration: 'slow'
			});
//			$('#template').animate({
//				'left': '120px',
//				'top': '110px'
//			},{
//				//duration: 'slow'
//			});
		}
		
	});
	$('#add').click(function() {
		hideImportPanel();
		addPoolEvaluate();
	});
	$('#edit').click(function() {
		hideImportPanel();
		editPoolEvaluate();
	});
	$('#delete').click(function() {
		hideImportPanel();
		deletePoolEvaluate();
	});
	$('#search').click(function() {
		hideImportPanel();
		searchMode = 1;
		searchPoolEvaluate();
	});
	$('#export').click(function() {
		hideImportPanel();
//		export2excel();
		showSearchforExportForm();
	});
	$('#import').click(function() {
//		$('#tab_export').css('display','block');
		showImportPanel();
	});
	//$('#template').click(function() {
	//	$('#download').click();
	//});
	$('#btn-cancel').click(function() {
		$('#tab_export').css('display','none');
	});
});

function hideImportPanel() {
	$('#import').text('导入');
//	$('#tab_export').css('display','none');
	$("#frmImportEdit").form('clear');
	$('#tab_Import').dialog('close');
	//alert($('#tab_export').css('display'));
}

function showImportPanel() {
	$('#import').text('导入');
//	$('#tab_export').css('display','none');
	//alert($('#tab_export').css('display'));
 
	$("#tab_Import").dialog({
		modal : true,// 模式窗口
		title : '导入文件操作',
		iconCls : 'icon-redo',
		closed:false,
		buttons : [ {
			text : '确认',
			handler : function() {
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				if ($('#frmImportEdit').form('validate')) {
					import2DB();
					// 关闭窗口
					hideImportPanel();
				} else {
					$.messager.alert('验证', '项目信息有误或不完整', 'error');
				}
			}
		}, {
			text : '取消',
			handler : function() {
				hideImportPanel();				
			}
		} ]

	});
}

var deltr = function(index, event) {
	event.preventDefault();
	var _len = $("#tab tr").length;
	$("tr[id='tr" + index + "']").remove();
	for(var i = index + 1; i < _len; ++i) {
		//alert("i = " + i + " _len = " + _len);
		$("tr[id='tr" + i + "']").replaceWith("<tr id='tr" + (i-1) + "'>"
				
				
				+ "<td style='width:1px;height:26px'><input type='hidden' id='splitSign' name='split' style='width:1px;height:25px'/></td>"
				+ "<td style='width:1px;height:26px'><input type='hidden' id='IDAdd' name='poolEvaluate.ID' style='width:1px;height:25px' /></td>"
				+ "<td id='indexNum" + (i-1) + "' style='text-align:center; width:40px;height:26px'>" + (i-1) + "</td>"
				+ "<td style='width:152px;height:26px'><input name='poolEvaluate.t' id='tAdd' type='date' style='width:150px;height:25px'/></td>"
				+ "<td style='width:102px;height:26px'><select name='poolEvaluate.PoolID' id='PoolIDAdd' style='width:72px;height:25px'><option value='MTG_JJC_SC01' selected='selected'>1# 机加池</option><option value='MTG_JJC_SC02'>2# 机加池</option><option value='MTG_JJC_SC03'>3# 机加池</option></select></td>"
				+ "<td style='width:82px;height:26px'><input style='width:80px;height:25px' id='PAC' name='poolEvaluate.PAC' data-options='min:0,precision:0,' /></td>"
				+ "<td style='width:92px;height:26px'><input style='width:90px;height:25px' id='FeCl3' name='poolEvaluate.FeCl3' data-options='min:0,precision:0' /></td>"
				+ "<td style='width:62px;height:26px'><input style='width:60px;height:25px' id='OpenDegree' name='poolEvaluate.OpenDegree' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:52px;height:26px'><input style='width:50px;height:25px' id='RotationSpeed' name='poolEvaluate.RotationSpeed' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:62px;height:26px'><input style='width:60px;height:25px' id='SV' name='poolEvaluate.SV' data-options='min:0,precision:0' /></td>"
				+ "<td style='width:52px;height:26px'><input style='width:50px;height:25px' id='WaterTemp' name='poolEvaluate.WaterTemp' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:92px;height:26px'><input style='width:90px;height:25px' id='SmallMudFre' name='poolEvaluate.SmallMudFre' data-options='min:0,precision:0'/></td>"
				+ "<td style='width:92px;height:26px'><input style='width:90px;height:25px' id='BigMudFre' name='poolEvaluate.BigMudFre'  data-options='precision:0'/></td>"
				+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='NTU' name='poolEvaluate.NTU' data-options='precision:2'/></td>"
				+ "<td style='width:92px;height:26px'><input style='width:90px;height:25px' id='AlgaeContent' name='poolEvaluate.AlgaeContent' data-options='precision:2'/></td>"
				+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='OutNTU' name='poolEvaluate.OutNTU' data-options='precision:2'/></td>"
				+ "<td style='width:72px;height:26px'><input style='width:70px;height:25px' id='CL' name='poolEvaluate.CL' data-options='precision:2'/></td>"
				+ "<td id='delete" + (i-1) + "' style='width:40px;height:26px'><a href='#' onclick='deltr(" + (i-1) + ",event)'>删除</a></td>"
				+ "</tr>");
	}
}


var tburl='listPoolevaluate.do'; 
var datalist = new Array();
var title;
//加载项目列表
function listPoolEvaluate(data) {
	//alert("多个Tab的情况下只有第一个Tab日期框有效！\n即Tab 2、3中日期框内无法输入时间\n私以为是highStock与easyUI之间的不兼容=。=");
	$("#poolEvaluatebody").datagrid({
		title:title,
		width : "1300",
		height : "300",
		//iconCls : 'icon-help', // 表格左上角的图标样式
		//url : tburl, // 访问服务器的地址，要求返回JSON对象
		data:data,
		rownumbers : true, // 在最前面显示行号
		fitColumns : true, // 自动适应列宽
		striped : true, // 隔行变色
		singleSelect : true, // 每次只选中一行
		loadMsg : '正在加载项目列表，请稍后...',
		idField : 'ID', // 主键属性
		remoteSort : true, // 从服务器端排序，默认true	
//		pagination : true, // 在底部显示分页工具栏
//		pageSize : 20, // 指定每页的大小，服务器要加上page属性和total属性
//		pageList : [ 10, 15, 20, 30], // 可以设置每页记录条数的列表，服务器要加上rows属性
//		loader: myLoader, //前端假分页
		onLoadSuccess: function(data){
			if(data.rows!=datalist){		
				datalist = eval(data).rows;
				//alert("(data).rows = " + datalist);
				drawImage(); //作图
			}
		},
		columns : [ [
		             {
		            	 field : 't',
		            	 title : '时间',
		            	 align : 'center',
		            	 width : 80,
		            	 formatter : function(value) {
		            		 return value.substring(0, 10);
		            	 },
		            	 sortable : true
		             },
		             {
		            	 field : 'poolid',
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
		            	 field : 'pac',
		            	 title : 'PAC投加量<br>mg/L',
		            	 align : 'center',
		            	 width : 80,
//		            	 formatter : function(value) {
//		            		 return value*100+"%";
//		            	 },
		            	 sortable : true
		             },{
		            	 field : 'fecl3',
		            	 title : 'FeCl<sub>3</sub>投加量<br>mg/L',
		            	 align : 'center',
		            	 width : 85,
//		            	 formatter : function(value) {
//		            		 return value*100+"%";
//		            	 },
		            	 sortable : true			
		             },
		             {
		            	 field : 'opendegree',
		            	 title : '开启度',
		            	 width : 55,
		            	 align : 'center',
		            	 formatter : function(value) {
		            		 return value+"%";
		            	 },
		            	 sortable : true
		             }, 

		             {
		            	 field : 'rotationspeed',
		            	 title : '转速<br>r/min',
		            	 width : 50,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'sv',
		            	 title : '沉降比',
		            	 width : 60,
		            	 align : 'center',
		            	 /*formatter : function(value) {
		            		 return value+"%";
		            	 },*/
		            	 sortable : true
		             },
		             {
		            	 field : 'watertemp',
		            	 title : '水温<br>',
		            	 width : 55,
		            	 align : 'center',
		            	 formatter : function(value) {
		            		 return value+"℃";
		            	 },
		            	 sortable : true
		             },
		             {
		            	 field : 'smallmudfre',
		            	 title : '小斗排泥时长<br>h',
		            	 width : 80,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'bigmudfre',
		            	 title : '大斗排泥时长<br>h',
		            	 width : 80,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'ntu',
		            	 title : '原水浊度<br>NTU',
		            	 width : 60,
		            	 align : 'center',
		            	 sortable : true
		             },
		             {
		            	 field : 'algaecontent',
		            	 title : '原水藻类含量<br>万个/L',
		            	 width : 90,
		            	 align : 'center',
		            	 formatter : function(value) {
		            		 return value;          //修改之前return value+"%"
		            	 },
		            	 sortable : true
		             },
		             {
		            	 field : 'outntu',
		            	 title : '出水浊度<br>NTU',
		            	 width : 60,
		            	 align : 'center',
		            	 sortable : true
		             },	 
		             {
		            	 field : 'cl',
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

//显示编辑窗口
function showEditForm() {
	$("#tabEdit").dialog({
		modal : true,// 模式窗口
		title : '添加/编辑操作',
		iconCls : 'icon-save',
		closed:false,
		buttons : [ {
			text : '确认',
			handler : function() {
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				if ($('#frmEdit').form('validate')) {
					// 提交到服务器并写入数据库
					dealSave();
					// 关闭窗口
					closeForm();
				} else {
					$.messager.alert('验证', '项目信息有误或不完整', 'error');
				}
			}
		}, {
			text : '取消',
			handler : function() {
				closeForm();				
			}
		} ]

	});
}

//关闭窗口
function closeForm() {
	$("#frmEdit").form('clear');
	$('#tabEdit').dialog('close');
}

function closeAddForm() {
	$("#newfrmEdit").form('clear');
	$('#newEdit').dialog('close');
}

//添加的函数
function addPoolEvaluate() {
	// 清空原有的数据
	$('#newfrmEdit').form('clear');
	// 显示添加对话框
	showAddForm();
	//$('#frmEdit').form('clear');
	//showEditForm();
}

function showAddForm() {
	$("#newEdit").dialog({
		modal : true,// 模式窗口
		title : '添加操作',
		iconCls : 'icon-edit',
		closed:false,
		buttons : [{
			text : '确认',
			handler : function() {
				//$.messager.alert('表单数据', $('#newfrmEdit').serialize(), 'info');
				//$.messager.alert('验证信息', $('#newfrmEdit').form('validate'), 'info');
				//alert('test of Test1');
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				if ($('#newfrmEdit').form('validate')) {
					//alert('If condition');
					// 提交到服务器并写入数据库
					dealAddSave();
					// 关闭窗口
					closeAddForm();
				} else {
					$.messager.alert('验证', '项目信息有误或不完整', 'error');
				}
			}
		}, {
			text : '取消',
			handler : function() {
				//alert('click Camcel!');
				closeAddForm();
			}
		} ]
	});
}

//编辑按钮的操作
function editPoolEvaluate() {
	var poolEvaluate = $('#poolEvaluatebody').datagrid('getSelected');// 得到选中的一行数据
	// 如果没有选中记录
	if (poolEvaluate == null) {
		$.messager.alert('项目', '请先选中要编辑的项目', 'info');
		return;
	}
	$('#frmEdit').form('clear');
	// 填充数据
	$("#ID").val(poolEvaluate.ID);
//	$("#PoolID").val(poolEvaluate.poolID);
	$("#PoolID").combobox( "setValue",poolEvaluate.poolID);
	$("#t").datebox("setValue",poolEvaluate.t);
	$("#OpenDegree").numberbox("setValue",poolEvaluate.openDegree);
	$("#RotationSpeed").numberbox("setValue",poolEvaluate.rotationSpeed);
	$("#SV").numberbox("setValue",poolEvaluate.SV);
	$("#SmallMudFre").numberbox("setValue",poolEvaluate.smallMudFre);
	$("#BigMudFre").numberbox("setValue",poolEvaluate.bigMudFre);
	$("#NTU").numberbox("setValue",poolEvaluate.NTU);
	$("#WaterTemp").numberbox("setValue",poolEvaluate.waterTemp);
	$("#AlgaeContent").numberbox("setValue",poolEvaluate.algaeContent);
	$("#FeCl3").numberbox("setValue",poolEvaluate.feCl3);
	$("#PAC").numberbox("setValue", poolEvaluate.PAC);
	$("#OutNTU").numberbox("setValue",poolEvaluate.outNTU);
//	$("#state").combobox( "setValue",poolEvaluate.state);
	$("#CL").numberbox("setValue",poolEvaluate.CL);
//	// 显示编辑页面
	showEditForm();

}

//在增加和更新时点确定按钮的处理函数
function dealSave() {
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#frmEdit").serialize();
//	alert("params is \n" + params);
	// 得到id的值，为空串表示添加
	if ($("#ID").val() == "") {
		$.post("Poolevaluate/addPoolevaluate.do", params, function(result) {
			if (result.operateSuccess) {
				$("#poolEvaluatebody").data().datagrid.cache = null;
				$('#poolEvaluatebody').datagrid('reload');// 重新加载
				$.messager.alert('添加', '添加成功', 'info');
			} else {
				$.messager.alert('添加', '添加失败', 'warning');
			}
		});
	} else {
		// 表示更新
		$.post("Poolevaluate/updatePoolevaluate.do", params, function(result) {
			if (result.operateSuccess) {
				$("#poolEvaluatebody").data().datagrid.cache = null;
				$('#poolEvaluatebody').datagrid('reload');// 重新加载
				$.messager.alert('更新', '更新成功', 'info');
			} else {
				$.messager.alert('更新', '更新失败', 'warning');
			}
		});
	}
}


function dealAddSave() {
	// 表单数据序列化成一个字符串用&拼接
	var params = $("#newfrmEdit").serialize();
	var paramsArray = params.split("split=&");
	$.fn.serializeObject = function()    
	{    
	   var o = {};    
	   var a = this.serializeArray();    
	   $.each(a, function() {    
	       if (o[this.name]) {    
	           if (!o[this.name].push) {    
	               o[this.name] = [o[this.name]];    
	           }    
	           o[this.name].push(this.value || '');    
	       } else {    
	           o[this.name] = this.value || '';    
	       }    
	   });    
	   return o;    
	}; 
	var jsonform = $("#newfrmEdit").serializeObject();
	
	/*alert("prams is " + params + 
			"\nparamsArray.length is " + paramsArray.length + 
			"\npramsArray is " + paramsArray);*/
	var errorMessage = '';
	var flag = true;
	for(var i = 0; i < paramsArray.length; ++i) {
		var re_ID = new RegExp(/poolid=MTG_JJC_SC0\d/);
		var re_t = new RegExp(/t=\d{4}-\d{2}\-\d{2}/);
		//alert('Form表单Array' + i + "\n" + paramsArray[i] + 
		//		"\ntest1 = " + re_t.test(paramsArray[i]) + 
		//		"\ntest2 = " + re_ID.test(paramsArray[i]));
		var test = re_t.test(paramsArray[i]) && re_ID.test(paramsArray[i]);
		
		if(!true) {
			var errorMessageTemp = '';
			if(i == 1)
				errorMessageTemp = '错误！第' + i + '条记录ID和日期有误！';
			else {
				errorMessageTemp += '<br />错误！第' + i + '条记录ID和日期有误！';
			}
			errorMessage += errorMessageTemp;
			flag = false;
		}//test = false; 
		else {
//			var t= new Date(2015,1,1);
			var paramform=$("#newfrmEdit").serializeArray();
			$.post("Poolevaluate/addPoolevaluate.do", paramform, function(result) {
					$.messager.alert('添加', '添加成功', 'info');
					location.reload();
			});
		}//flag = true;
	}//for loop
	if(flag == false)
		$.messager.alert('错误', errorMessage, 'error');	
}



//删除项目
function deletePoolEvaluate() {
	var poolEvaluate = $('#poolEvaluatebody').datagrid('getSelected');// 得到选中的一行数据
	// 如果没有选中记录
	if (poolEvaluate == null) {
		$.messager.alert('删除', '请先选中要删除的项目', 'info');
		return;
	}
	$.messager.confirm('确认', '真的要删除选中的记录吗？', function(r) {
		if (r) {
			var url = "deletePoolEvaluate.action?poolEvaluate.ID=" + poolEvaluate.ID;
			// 试一下get方法（地址，回调函数）
			$.get(url, function(result) {
				if (result.operateSuccess) {
					$.messager.alert('删除', '选中的项目成功删除！', 'info');
					// 重新加载
					$("#poolEvaluatebody").data().datagrid.cache = null;
					$("#poolEvaluatebody").datagrid('reload');
				} else {
					$.messager.alert('删除', '删除失败！', 'warning');
				}
			});
		}
	});
}


function listAllPoolEvaluate(){
	$('#frmSearch').form('clear');
//	$('#searchPoolID').combobox('setValue','');
	dealSearch();
}

function searchPoolEvaluate(){
	$("#lowT").val(lowT);
	$("#highT").val(highT);
	$("#searchPoolID").val(searchPoolID);
	$('#lowAlgaeContent').numberbox("setValue",lowAlgaeContent);
	$('#highAlgaeContent').numberbox("setValue",highAlgaeContent);
	$('#lowNTU').numberbox("setValue",lowNTU);
	$('#highNTU').numberbox("setValue",highNTU);
	$('#lowOutNTU').numberbox("setValue",lowOutNTU);
	$('#highOutNTU').numberbox("setValue",highOutNTU);
	$('#lowSV').numberbox("setValue",lowSV);
	$('#highSV').numberbox("setValue",highSV);
	showSearchForm();
}


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
	  

	//alert("newParams = " + newParams);
	$.post("Poolevaluate/listPoolevaluate.do", newParams, function(result) {
//		result=JSON.parse(result);
		if (result.total!=0) {
			//$("#poolEvaluatebody").data().datagrid.cache = null;
			//$('#poolEvaluatebody').datagrid('reload');// 重新加载
			//$.messager.alert('查询', '查询成功', 'info');
			tlist = result.tlist;
			listPoolEvaluate(result);
			if(searchMode != 2) {
				listTreeNode(tlist);
			}
		} else {
			if(!failAppearence) {
				//如果已经出现了查询失败窗口，见mode2，就不必要再出现下面的窗口
				$.messager.alert('查询', '查询失败,未查找到相关信息', 'warning');
			}
		}
	},'json');
}

//显示查询窗口
function showSearchForm() {
	$("#tabSearch").dialog({
		modal : true,// 模式窗口
		title : '查询操作',
		iconCls : 'icon-search',
		closed:false,
		buttons : [ {
			text : '确认',
			handler : function() {
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				//if ($('#frmSearch').form('validate')) {
					// 提交到服务器并写入数据库
					dealSearch();
					// 关闭窗口
					closeSearchForm();
				//} else {
				//	$.messager.alert('验证', '项目信息有误或不完整', 'error');
				//}
			}
		}, {
			text : '取消',
			handler : function() {
				closeSearchForm();
			}
		} ]
	});
}

//关闭窗口
function closeSearchForm() {
	$("#frmSearch").form('clear');
	$('#tabSearch').dialog('close');
}


//var url = "listPoolEvaluate.action";
//var poolIDlist  = new Array();
//var alldata = new Array();
////查询下拉框显示的数据
//$.getJSON(url, function(json) {
//	//去除重复项
//	alldata=eval(json).rows;
//	var tempPoolIDlist = new Array();
//	for(var i=0;i<json.total;i++){
//		var row = alldata[i];
//		if(jQuery.inArray(row.poolID, tempPoolIDlist)<0){
//			tempPoolIDlist.push(row.poolID);
//			poolIDlist.push({poolID:row.poolID,text:formPoolID(row.poolID)});
//		}
////		if(jQuery.inArray(row.t, tlist) < 0) {
////			tlist.push(row.t);
////		}
//	}//for
//	$('#searchPoolID').combobox({
//		data : poolIDlist.sort(keysrt('poolID',false)),
//		valueField:'poolID',
//		textField:'text',
//		onLoadSuccess: function () {
//			$(this).combobox('setText', '');
//		}			
//	});
////	listTreeNode(tlist.sort());
//	listTreeNode(tlist);
//});

//水池编号转换
function formPoolID(value){
	var strs = new Array();
	var poolID;
	strs=value.split("_");//字符切割
	poolID = strs[2].replace(/SC0/,'');
	poolID = poolID.replace(/SC0/,'');
	return poolID + "#"+"机加池" ;		
}


//根据对象key 对对象数组排序，使用 arr.sort(keystr('key',true)); false表示升序，ture表示降序 
function keysrt(key,desc) {
	return function(a,b){
		return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
	}
}

function showSearchforExportForm() {
	$("#tabSearchForExport").dialog({
		modal : true,// 模式窗口
		title : '请选择导出的数据范围',
		iconCls : 'icon-search',
		closed:false,
		buttons : [ {
			text : '确认',
			handler : function() {
				// 进行表单字段验证，当全部字段都有效时返回true和validatebox一起使用
				//if ($('#frmSearch').form('validate')) {
					// 提交到服务器并写入数据库
					// 关闭窗口
					export2excel();
					closeSearchForExportForm();
				//} else {
				//	$.messager.alert('验证', '项目信息有误或不完整', 'error');
				//}
			}
		}, {
			text : '取消',
			handler : function() {
				closeSearchForExportForm();
			}
		} ]
	});
}


//关闭导出前打开的查询窗口
function closeSearchForExportForm() {
	$("#frmSearchForExport").form('clear');
	$('#tabSearchForExport').dialog('close');
}

//导出到excel文件
function export2excel(){
//	var params = $("#exportPoolEvaluate").serialize();
//	var filename = $('#downloadFilename').val() ;
//	var downloadPath;
//	if(null==filename || ""==filename){
//	downloadPath = "downloadTemp/PoolEvaluate.xls";
//	}else{
//	downloadPath = "downloadTemp/"+filename+".xls";
//	}
//	console.log(downloadPath);
//	$.post("exportPoolEvaluate.action", params, function(result) {
//	if (result.operateSuccess){
//	window.location.href=downloadPath;
////	$.messager.alert('导出', '导出成功', 'info');		
//	} else {
//	$.messager.alert('导出', '导出失败', 'warning');
//	}
//	});
	var params = $("#frmSearchForExport").serialize(); 
	var reLowTime = new RegExp(/^lowT=\d{4}-\d{2}\-\d{2}/);
	var testLowTime = reLowTime.test(params);
	var reHighTime = new RegExp(/highT=\d{4}-\d{2}\-\d{2}/);
	var testHighTime = reHighTime.test(params);
	var reID = new RegExp(/searchPoolID=MTG_JJC_SC0\d{1}/);
	var testID = reID.test(params);
	var url="exportPoolEvaluate.action?"+params;
	
	var downloadPath = "downloadTempForJJC/PoolEvaluate.xls";
	
	$.post(url, function(result) {
		if (result.operateSuccess){
			window.location.href=downloadPath;
		} else {
			if(result.state==1){  //导出失败原因  1-没有相关数据
				$.messager.alert('导出', '导出失败,没有相关数据', 'warning');
			}else if(result.state==2){
				$.messager.alert('导出', '导出失败,程序抛出异常', 'warning');
			}else{
				$.messager.alert('导出', '导出失败', 'warning');
			}
		
		}});
}//export2excel

//导入文件操作
function import2DB(){
	var params=$('#upload').val();
	if(''==params || null== params){
		$.messager.alert('导入', '请选择上传文件', 'warning');
	}
	else
	{
		$.ajaxFileUpload({
			url : "importCheckPoolEvaluate.action",
			fileElementId:'upload',
			dataType:'json',
			success: function(data, status){
				if (data.operateSuccess){
					$.ajaxFileUpload({
						url : "importPoolEvaluate.action",
						fileElementId:'upload',
						dataType:'json',
						success: function(result){
							if (result.operateSuccess){
								$.messager.alert('导入', '导入成功', 'info');	
								$("#poolEvaluatebody").data().datagrid.cache = null;
								$('#poolEvaluatebody').datagrid('reload');// 重新加载
							} else {
//								$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
								$.messager.alert('导入', '导入失败<br><br>', 'warning');
							}
						},//success
						error:function(result){
							console.log("error 上传失败");
//							$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
							$.messager.alert('导入', '导入失败<br><br>', 'warning');
						} //error
					});//ajaxFileUpload	
					location.reload();
				} 
				else {		
					$.messager.confirm("导入提示",'已存在相关日期的数据，是否继续覆盖导入？',function(r){
						if (r) { //上传文件
							$.ajaxFileUpload({
								url : "importPoolEvaluate.action",
								fileElementId:'upload',
								dataType:'json',
								success: function(data, status){
									if (data.operateSuccess){
										$("#poolEvaluatebody").data().datagrid.cache = null;
										$('#poolEvaluatebody').datagrid('reload');// 重新加载
										$.messager.alert('导入', '导入成功', 'info');
										setTimeout(location.reload(),10000);
									} else {
//										$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
										$.messager.alert('导入', '导入失败<br><br>', 'warning');
									}
									location.reload();
								},//success
								error:function(data,status){
									console.log("error 上传失败");
//									$.messager.alert('导入', '导入失败<br><br>'+$('#errMsg').val(), 'warning');
									$.messager.alert('导入', '导入失败<br><br>', 'warning');
									$("#poolEvaluatebody").data().datagrid.cache = null;
									$('#poolEvaluatebody').datagrid('reload');// 重新加载
								} //error
							}//ajaxFileUpload
							);
						}//if r
					}) //confirm					
				}
			},
			error:function(data, status){
				$.messager.alert('导入', '导入失败<br><br>请检查文件格式是否正确！', 'warning');
			}
		});
	}
	$('#fakeUpload').val('');

}

var ImageTitle1;
var ImageTitle2;
var ImageTitle3;
function drawImage(){
	//加药量分析图
	var PACArray=new Array();		// PAC
	var FeCl3Array=new Array();		// FeCl3
	var NTUArray=new Array();		// 来水浊度
	var OutNTUArray=new Array();	// 出水浊度
	
	var AlgaeContentArray=new Array();		// 原水藻类
	var WaterTempArray = new Array();		// 水温
	var CLArray = new Array();				// 预加氯量
	
	var OpenDegreeArray = new Array();		// 开启度
	var RotationSpeedArray = new Array();	// 转速
	var SVArray = new Array();				// 沉降比
	var SmallMudFreArray = new Array();		// 小斗排泥
	var BigMudFreArray = new Array();		// 大斗排泥
	
	var poollist = new Array();
	var options1;  //加药量/浊度分析图
	var options2;  //原水藻类/水温/预加滤量分析图
	var options3;  //基本运行参数分析图
	if (datalist.length>0){					
		for (var i=0; i<datalist.length;i++){
			var row = datalist[i]; 
			var flag_i = jQuery.inArray(row.poolID, poollist); //判断水池是否存在
			if(flag_i<0){  //不存在
				poollist.push(row.poolID);	//添加水池
				flag_i=poollist.length-1;
				
				PACArray[flag_i]=[];	
				FeCl3Array[flag_i]=[];	
				NTUArray[flag_i]=[];	
				OutNTUArray[flag_i]=[];
				
				AlgaeContentArray[flag_i]=[];
				WaterTempArray[flag_i]=[];
				CLArray[flag_i]=[];
				
				OpenDegreeArray[flag_i]=[];
				RotationSpeedArray[flag_i]=[];
				SVArray[flag_i]=[];
				SmallMudFreArray[flag_i]=[];
				BigMudFreArray[flag_i]=[];
				
			}//if flag_i
			PACArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.PAC]);	//填充数据，PAC投加量
			FeCl3Array[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.feCl3]);	//填充数据，FeCl3投加量	
			NTUArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.NTU]);	//填充数据，原水浊度
			OutNTUArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.outNTU]);	//填充数据，出水浊度
			
			AlgaeContentArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.algaeContent]);	//填充数据，原水藻类
			WaterTempArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.waterTemp]);	//填充数据，水温	
			CLArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.CL]);	//填充数据，预加氯量
			
			OpenDegreeArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.openDegree]);	//填充数据，开启度
			RotationSpeedArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.rotationSpeed]);	//填充数据，转速
			SVArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.SV]);	//填充数据，沉降比	
			SmallMudFreArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.smallMudFre]);	//填充数据，小斗排泥时长
			BigMudFreArray[flag_i].push([Date.UTC(row.t.substring(0, 4),
					row.t.substring(5, 7)-1, //highcharts 月份要减一，因为Date.UTC从0-11计数
					row.t.substring(8, 10),
					row.t.substring(11, 13)
			),row.bigMudFre]);	//填充数据，大斗排泥时长
			
		} //for
	} //if datalist.length
	/**绘图**/
	options1 = {
		chart: {
			borderColor: '#FFFFFF',	//边框颜色
	        selectionMarkerFill: 'rgba(0,0,0, 0.2)',
	        height: 630,
	        width:1300,
	        zoomType: 'y',
		},
		colors: ['#000000', '#FF0000', '#0000C6', '#00A600',
		         '#000000', '#FF0000', '#0000C6', '#00A600',
		         '#000000', '#FF0000', '#0000C6', '#00A600'],
	    credits: {//Highchart by default puts a credits label in the lower right corner of the chart. This can be changed using these options.
	    	enabled: false,
	    	text: '北京市自来水集团',
		    href: '',
		    position: {
		    	align: 'right',
		        x: -10,
		        verticalAlign: 'bottom',
		        y: -25
		    },
		    style: {                            // 样式设置
		        cursor: 'default',
		        color: 'blue',
		        fontSize: '12px'
		    }
		},	//显示图表版权信息
		exporting : {
			type:'image/svg+xml',
			filename: 'PoolEvaluate',
			buttons: {
                contextButton: {
                    enabled: false
                },
                exportButton: {
                    text: '导出',
                    onclick: function () {
                        this.exportChart();
                    }
//                    menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.splice(2)
                },
                printButton: {
                    text: '打印',
                    onclick: function () {
                        this.print();
                    }
                }
            }
		},
		lang:{						
			printChart: '打印',
			downloadJPEG: 'JPEG 图片',
	        downloadPDF: 'PDF文档',
	        downloadPNG: 'PNG 图片',
	        downloadSVG: 'SVG 矢量图',
	        exportButtonTitle: '下载图片',
			noData: '没有查询到数据',
			Zoom: '时间选择',
		},
		legend: {  //The legend is a box containing a symbol and name for each series item or point item in the chart.
        	enabled: true,	//显示图例	
        	layout:"vertical",
        	align: 'right', //水平方向位置
        	verticalAlign: 'top', //垂直方向位置
        	x:0,
        	y:100		            	            
        },
        navigation : {
        	menuItemStyle: {
                fontWeight: 'normal',
                background: 'none'
            },
            menuItemHoverStyle: {
                fontWeight: 'bolder',
                background: 'none',
                color: 'black'
            }, 
        	menuStyle: {
                 background: '#E0E0E0'
             },
	            buttonOptions:{
	            	theme:{
	            		 style: {
	            			 fontWeight: 'bolder',
	     	                 background: 'none',
	     	                 color: 'black',
	                     }
	            	}
	            	
	            }
        },
        navigator: {
        	//enable:true,
        	enabled : true,
            handles: {
                backgroundColor: '#66CCFF',
                borderColor: '#6650FF'
            },
            margin: 2,
            maskFill: 'rgba(102,204,255, 0.5)'
        },
        rangeSelector: {
        	allButtonsEnabled: true,
            buttonTheme: { // styles for the buttons
                fill: 'none',
                stroke: 'none',
                'stroke-width': 0,
                r: 3,
                style: {
                    color: '#039',
                    fontWeight: 'bold'
                },
                states: {
                    hover: {
                    },
                    select: {
                        fill: '#039',
                        style: {
                            color: 'white'
                        }
                    }
                }
            },
            buttons: [{
            	type: 'week',
            	count: 1,
            	text: '1周'
            },{
            	type: 'week',
            	count: 2,
            	text: '2周'
            },{
    	    	type: 'week',
    	    	count: 3,
    	    	text: '3周'
    			}, {
    			type: 'month',
    			count: 1,
    			text: '1月'
    			}],
    		buttonSpacing: 10,
            inputBoxBorderColor: 'gray',
            inputBoxWidth: 120,
            //inputBoxHeight: 40,
            inputEnabled: true,
            inputEditDateFormat: '%Y-%m-%d',
            inputDateFormat: '%Y-%m-%d',
            inputDateParser: function(value) {
            	value = value.split('-');
            	return Date.UTC(value[0], (value[1] - 1), value[2]);
            },
            inputStyle: {
                color: '#000000',
                fontWeight: 'bold'
            },
            labelStyle: {
                color: 'red',
                fontWeight: 'bold'
            },
            selected: 0
        },
        scrollbar: {
            barBackgroundColor: 'gray',
            barBorderRadius: 7,
            barBorderWidth: 0,
            buttonBackgroundColor: 'gray',
            buttonBorderWidth: 0,
            buttonArrowColor: 'yellow',
            buttonBorderRadius: 7,
            rifleColor: 'yellow',
            trackBackgroundColor: 'white',
            trackBorderWidth: 1,
            trackBorderColor: 'silver',
            trackBorderRadius: 7
        },
		// 按钮样式
	    title:{
	    	text: ImageTitle1,
			style:{
				font: '20px',
				color: '#0E2D5F',
				fontWeight: 'bold',
				fontSize:'20px',
				fontFamily:'微软雅黑'
			}
		},
		tooltip: {
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, 'white'],
                    [1, '#EEE']
                ]
            },
            borderColor: 'gray',
            borderWidth: 1,
            dateTimeLabelFormats: { // don't display the dummy year
            	minute: "%Y-%m-%d %H:%M",
            	hour: "%Y-%m-%d %H时",
            	day: "%Y-%m-%d",
			},
        },
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: { // don't display the dummy year
				hours: '%H时',
				day: "%m-%d",
				month:'%Y年 %m月',
				year: '%Y年'
			},
			tickColor: 'green',
            tickLength: 10,
            tickWidth: 3,
            tickPosition: 'inside',
			labels: { 
				//rotation: -45 
			} 
		},
		yAxis: [{			//第一个y轴坐标   对于双Y轴问题，要想两个Y轴刻度一致，应该让第一个Y轴为数值大的数据
			min: 0, 		//第二个Y轴为数值小的数据  且linkedTo = 0
		    //max: 12,		//在后面为series分配Y轴时，先分配第二个Y轴，再分配第一个Y轴，这样可以避免第二个Y轴最后一个刻度不显示的bug
		    startOnTick: true,
            endOnTick: true,
            minPadding: 0,
            maxPadding: 0,
		    gridLineColor: 'silver',
		    opposite:false,
		    showLastLabel: true,
		    tickColor: 'green',
            tickLength: 10,
            tickWidth: 3,
            tickPosition: 'inside',
            
			title: {
				text: '原水/出水浊度(NTU)'                  //指定y轴的标题
			},
		},{	//第二个Y坐标
			min: 0,
		    //max: 6,
		    startOnTick: true,
            endOnTick: true,
            minPadding: 0,
            maxPadding: 0,
		    gridLineColor: 'silver',
		    showLastLabel: true,
		    tickColor: 'green',
            tickLength: 10,
            tickWidth: 3,
            tickPosition: 'inside',
            //linkedTo: 0,
			labels: {
                formatter: function () {
                    return this.value;
                }
            },
			title: {
				enable: true,
				text: '<b>PAC/FeCl3</b>投加量(mg/L)'                  //指定y轴的标题
			},
		},
		],
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true,
					formatter: function() {
						return this.y;
					} 
			    },
			    enableMouseTracking: true,
			}, 
		},
		//指定数据列
		series: []
	};//options1
	
	options2 = {
		chart: {
			borderColor: '#FFFFFF',	//边框颜色
		    selectionMarkerFill: 'rgba(0,0,0, 0.2)',
		    height: 630,
		    width:1300,
		    zoomType: 'y',
		},
		colors: ['#FF0000', '#0000C6', '#00A600',
		         '#FF0000', '#0000C6', '#00A600',
		         '#FF0000', '#0000C6', '#00A600'],
		credits: {//Highchart by default puts a credits label in the lower right corner of the chart. This can be changed using these options.
			enabled: false,
			text: '北京市自来水集团',
			href: '',
			position: {
			    align: 'right',
			    x: -10,
			    verticalAlign: 'bottom',
			    y: -25
			},
			style: {                            // 样式设置
			    cursor: 'default',
			    color: 'blue',
			    fontSize: '12px'
			}
		},	//显示图表版权信息
		exporting : {
			type:'image/svg+xml',
			filename: 'PoolEvaluate',
			buttons: {
                contextButton: {
                    enabled: false
                },
                exportButton: {
                    text: '导出',
                    onclick: function () {
                        this.exportChart();
                    }
//                    menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.splice(2)
                },
                printButton: {
                    text: '打印',
                    onclick: function () {
                        this.print();
                    }
                }
            }
		},
		lang:{						
			printChart: '打印',
			downloadJPEG: 'JPEG 图片',
		    downloadPDF: 'PDF文档',
		    downloadPNG: 'PNG 图片',
		    downloadSVG: 'SVG 矢量图',
		    exportButtonTitle: '下载图片',
			noData: '没有查询到数据',
			Zoom: '时间选择',
		},
		legend: {  //The legend is a box containing a symbol and name for each series item or point item in the chart.
	        enabled: true,	//显示图例	
	        layout:"vertical",
	        align: 'right', //水平方向位置
	        verticalAlign: 'top', //垂直方向位置
	        x:0,
	        y:100		            	            
	    },
	    navigation : {
	        menuItemStyle: {
	        fontWeight: 'normal',
	        background: 'none'
	    },
	    menuItemHoverStyle: {
	        fontWeight: 'bolder',
	        background: 'none',
	        color: 'black'
	    }, 
	    menuStyle: {
	        background: '#E0E0E0'
	    },
        buttonOptions:{
        	theme:{
        		 style: {
        			 fontWeight: 'bolder',
 	                 background: 'none',
 	                 color: 'black',
                 }
        	}
        	
        }
	},
	navigator: {
		enabled : true,
		handles: {
	    	backgroundColor: '#66CCFF',
	    	borderColor: '#6650FF'
	    },
	    margin: 2,
	    maskFill: 'rgba(102,204,255, 0.5)'
	},
	rangeSelector: {
    	allButtonsEnabled: true,
        buttonTheme: { // styles for the buttons
            fill: 'none',
            stroke: 'none',
            'stroke-width': 0,
            r: 3,
            style: {
                color: '#039',
                fontWeight: 'bold'
            },
            states: {
                hover: {
                },
                select: {
                    fill: '#039',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        buttons: [{
        	type: 'week',
        	count: 1,
        	text: '1周'
        },{
        	type: 'week',
        	count: 2,
        	text: '2周'
        },{
	    	type: 'week',
	    	count: 3,
	    	text: '3周'
			}, {
			type: 'month',
			count: 1,
			text: '1月'
			}],
		buttonSpacing: 10,
        inputBoxBorderColor: 'gray',
        inputBoxWidth: 120,
        //inputBoxHeight: 40,
        inputEnabled: true,
        inputEditDateFormat: '%Y-%m-%d',
        inputDateFormat: '%Y-%m-%d',
        inputDateParser: function(value) {
        	value = value.split('-');
        	return Date.UTC(value[0], (value[1] - 1), value[2]);
        },
        inputStyle: {
            color: '#000000',
            fontWeight: 'bold'
        },
        labelStyle: {
            color: 'red',
            fontWeight: 'bold'
        },
        selected: 0
    },
	scrollbar: {
		barBackgroundColor: 'gray',
	    barBorderRadius: 7,
	            barBorderWidth: 0,
	            buttonBackgroundColor: 'gray',
	            buttonBorderWidth: 0,
	            buttonArrowColor: 'yellow',
	            buttonBorderRadius: 7,
	            rifleColor: 'yellow',
	            trackBackgroundColor: 'white',
	            trackBorderWidth: 1,
	            trackBorderColor: 'silver',
	            trackBorderRadius: 7
	},
			// 按钮样式
		    title:{
		    	text: ImageTitle2,
				style:{
					font: '20px',
					color: '#0E2D5F',
					fontWeight: 'bold',
					fontSize:'20px',
					fontFamily:'微软雅黑'
				}
			},
			tooltip: {
	            backgroundColor: {
	                linearGradient: {
	                    x1: 0,
	                    y1: 0,
	                    x2: 0,
	                    y2: 1
	                },
	                stops: [
	                    [0, 'white'],
	                    [1, '#EEE']
	                ]
	            },
	            borderColor: 'gray',
	            borderWidth: 1,
	            dateTimeLabelFormats: { // don't display the dummy year
	            	minute: "%Y-%m-%d %H:%M",
	            	hour: "%Y-%m-%d %H时",
	            	day: "%Y-%m-%d",
				},
	        },
			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: { // don't display the dummy year
					hours: '%H时',
					day: "%m-%d",
					month:'%Y年 %m月',
					year: '%Y年'
				},
				tickColor: 'green',
	            tickLength: 10,
	            tickWidth: 3,
	            tickPosition: 'inside',
				labels: { 
					//rotation: -45 
				} 
			},
	yAxis: [{	//第二个Y坐标
		min: 0,
	    //max: 1,
	    startOnTick: true,
        endOnTick: true,
        minPadding: 0,
        maxPadding: 0,
	    gridLineColor: 'silver',
	    showLastLabel: true,
	    //tickAmount: 5,
	    tickColor: 'green',
        tickLength: 10,
        tickWidth: 3,
        tickPosition: 'inside',
        //tickPositions: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
	    
        //linkedTo: 0,
		labels: {
            formatter: function () {
                return this.value;
            }
        },
		//title: {
		//	enable: true,
		//	text: '开启度/转速/沉降比'                  //指定y轴的标题
		//},
        
        
        
        title: {
		        		text: '预加氯(mg/L)/水温(℃)'                  //指定y轴的标题
		},

	},{	//第一个y轴坐标
		min: 0,
	    //max: 1,
	    startOnTick: true,
        endOnTick: true,
        minPadding: 0,
        maxPadding: 0,
	    gridLineColor: 'silver',
	    opposite:false,
	    showLastLabel: true,
	    //tickAmount: 5,
	    tickColor: 'green',
        tickLength: 10,
        tickWidth: 3,
        tickPosition: 'inside',
        //linkedTo: 0,
        //tickPositions: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
		title: {
			text: '原水藻类含量(%)'                  //指定y轴的标题
		},
			        	//lebels:{
			        	//	format: '{value*100}%'
			        	//},
			        	//添加标示线
			        
		},
		],
			       //显示数据
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true,
					formatter: function() {
						return this.y;
					} 
			    },
			    enableMouseTracking: true,
			}, 
		},
			        //指定数据列
			        series: []
	};//options2
	
	options3 = {
			chart: {
				borderColor: '#FFFFFF',	//边框颜色
			    selectionMarkerFill: 'rgba(0,0,0, 0.2)',
			    height: 630,
			    width:1300,
			    zoomType: 'y',
			},
			colors: ['#000000', '#FF0000', '#0000C6', '#00A600', '#F75000',
			         '#000000', '#FF0000', '#0000C6', '#00A600', '#F75000',
			         '#000000', '#FF0000', '#0000C6', '#00A600', '#F75000',
			         '#000000', '#FF0000', '#0000C6', '#00A600', '#F75000',
			         '#000000', '#FF0000', '#0000C6', '#00A600', '#F75000'],
			credits: {//Highchart by default puts a credits label in the lower right corner of the chart. This can be changed using these options.
				enabled: false,
				text: '北京市自来水集团',
				href: '',
				position: {
				    align: 'right',
				    x: -10,
				    verticalAlign: 'bottom',
				    y: -25
				},
				style: {                            // 样式设置
				    cursor: 'default',
				    color: 'blue',
				    fontSize: '12px'
				}
			},	//显示图表版权信息
			exporting : {
				type:'image/svg+xml',
				filename: 'PoolEvaluate',
				buttons: {
	                contextButton: {
	                    enabled: false
	                },
	                exportButton: {
	                    text: '导出',
	                    onclick: function () {
	                        this.exportChart();
	                    }
//	                    menuItems: Highcharts.getOptions().exporting.buttons.contextButton.menuItems.splice(2)
	                },
	                printButton: {
	                    text: '打印',
	                    onclick: function () {
	                        this.print();
	                    }
	                }
	            }
			},
			lang:{						
				printChart: '打印',
				downloadJPEG: 'JPEG 图片',
			    downloadPDF: 'PDF文档',
			    downloadPNG: 'PNG 图片',
			    downloadSVG: 'SVG 矢量图',
			    exportButtonTitle: '下载图片',
				noData: '没有查询到数据',
				Zoom: '时间选择',
			},
			legend: {  //The legend is a box containing a symbol and name for each series item or point item in the chart.
		        enabled: true,	//显示图例	
		        layout:"vertical",
		        align: 'right', //水平方向位置
		        verticalAlign: 'top', //垂直方向位置
		        x:0,
		        y:100		            	            
		    },
		    navigation : {
		        menuItemStyle: {
		        fontWeight: 'normal',
		        background: 'none'
		    },
		    menuItemHoverStyle: {
		        fontWeight: 'bolder',
		        background: 'none',
		        color: 'black'
		    }, 
		    menuStyle: {
		        background: '#E0E0E0'
		    },
            buttonOptions:{
            	theme:{
            		 style: {
            			 fontWeight: 'bolder',
     	                 background: 'none',
     	                 color: 'black',
                     }
            	}
            	
            }
		},
		navigator: {
			enabled : true,
			handles: {
		    	backgroundColor: '#66CCFF',
		    	borderColor: '#6650FF'
		    },
		    margin: 2,
		    maskFill: 'rgba(102,204,255, 0.5)'
		},
		rangeSelector: {
        	allButtonsEnabled: true,
            buttonTheme: { // styles for the buttons
                fill: 'none',
                stroke: 'none',
                'stroke-width': 0,
                r: 3,
                style: {
                    color: '#039',
                    fontWeight: 'bold'
                },
                states: {
                    hover: {
                    },
                    select: {
                        fill: '#039',
                        style: {
                            color: 'white'
                        }
                    }
                }
            },
            buttons: [{
            	type: 'week',
            	count: 1,
            	text: '1周'
            },{
            	type: 'week',
            	count: 2,
            	text: '2周'
            },{
    	    	type: 'week',
    	    	count: 3,
    	    	text: '3周'
    			}, {
    			type: 'month',
    			count: 1,
    			text: '1月'
    			}],
    		buttonSpacing: 10,
            inputBoxBorderColor: 'gray',
            inputBoxWidth: 120,
            //inputBoxHeight: 40,
            inputEnabled: true,
            inputEditDateFormat: '%Y-%m-%d',
            inputDateFormat: '%Y-%m-%d',
            inputDateParser: function(value) {
            	value = value.split('-');
            	return Date.UTC(value[0], (value[1] - 1), value[2]);
            },
            inputStyle: {
                color: '#000000',
                fontWeight: 'bold'
            },
            labelStyle: {
                color: 'red',
                fontWeight: 'bold'
            },
            selected: 0
        },
		scrollbar: {
			barBackgroundColor: 'gray',
		    barBorderRadius: 7,
		            barBorderWidth: 0,
		            buttonBackgroundColor: 'gray',
		            buttonBorderWidth: 0,
		            buttonArrowColor: 'yellow',
		            buttonBorderRadius: 7,
		            rifleColor: 'yellow',
		            trackBackgroundColor: 'white',
		            trackBorderWidth: 1,
		            trackBorderColor: 'silver',
		            trackBorderRadius: 7
		},
				// 按钮样式
			    title:{
			    	text: ImageTitle3,
					style:{
						font: '20px',
						color: '#0E2D5F',
						fontWeight: 'bold',
						fontSize:'20px',
						fontFamily:'微软雅黑'
					}
				},
				tooltip: {
		            backgroundColor: {
		                linearGradient: {
		                    x1: 0,
		                    y1: 0,
		                    x2: 0,
		                    y2: 1
		                },
		                stops: [
		                    [0, 'white'],
		                    [1, '#EEE']
		                ]
		            },
		            borderColor: 'gray',
		            borderWidth: 1,
		            dateTimeLabelFormats: { // don't display the dummy year
		            	minute: "%Y-%m-%d %H:%M",
		            	hour: "%Y-%m-%d %H时",
		            	day: "%Y-%m-%d",
					},
		        },
				xAxis: {
					type: 'datetime',
					dateTimeLabelFormats: { // don't display the dummy year
						hours: '%H时',
						day: "%m-%d",
						month:'%Y年 %m月',
						year: '%Y年'
					},
					tickColor: 'green',
		            tickLength: 10,
		            tickWidth: 3,
		            tickPosition: 'inside',
					labels: { 
						//rotation: -45 
					} 
				},
		yAxis: [{	//第一个y轴坐标
			min: 0,
		    //max: 1,
		    startOnTick: true,
	        endOnTick: true,
	        minPadding: 0,
	        maxPadding: 0,
		    gridLineColor: 'silver',
		    opposite:false,
		    showLastLabel: true,
		    //tickAmount: 5,
		    tickColor: 'green',
	        tickLength: 10,
	        tickWidth: 3,
	        tickPosition: 'inside',
	        //tickPositions: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
	        
	        
	        
	        
			title: {
				text: '开启度(%)'                  //指定y轴的标题
			},
				        	//lebels:{
				        	//	format: '{value*100}%'
				        	//},
				        	//添加标示线
				        
			},{	//第二个Y坐标
				min: 0,
			    //max: 1,
			    startOnTick: true,
		        endOnTick: true,
		        minPadding: 0,
		        maxPadding: 0,
			    gridLineColor: 'silver',
			    showLastLabel: true,
			    //tickAmount: 5,
			    tickColor: 'green',
	            tickLength: 10,
	            tickWidth: 3,
	            tickPosition: 'inside',
	            //tickPositions: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
			    
	            //linkedTo: 0,
				labels: {
	                formatter: function () {
	                    return this.value;
	                }
	            },
				//title: {
				//	enable: true,
				//	text: '开启度/转速/沉降比'                  //指定y轴的标题
				//},
	            
	            
	            title: {
				        		text: '转速/沉降比/小/大斗排泥时长'                  //指定y轴的标题
				},
			},
			],
				       //显示数据
			plotOptions: {
				line: {
					dataLabels: {
						enabled: true,
						formatter: function() {
							return this.y;
						} 
				    },
				    enableMouseTracking: true,
				}, 
			},
				        //指定数据列
				        series: []
		};//options3
	
	options1.series = new Array();
	options2.series = new Array();
	options3.series = new Array();
	for(var i=0;i<poollist.length;i++)
	{	
		//options1 PAC
		options1.series[i+poollist.length*2]= new Object();
		options1.series[i+poollist.length*2].data=(PACArray[i].sort()); //对PACArray[i]进行排序，否则会造成时间轴上的图错乱
		options1.series[i+poollist.length*2].name='PAC投加量';
		options1.series[i+poollist.length*2].type="line";
		options1.series[i+poollist.length*2].yAxis=1;

		//options1 FeCl3
		options1.series[i+poollist.length*3] = new Object();
		options1.series[i+poollist.length*3].data=FeCl3Array[i].sort(); //对FeCl3Array[i]进行排序，否则会造成时间轴上的图错乱
		options1.series[i+poollist.length*3].name='FeCl<sub>3</sub>投加量';
		options1.series[i+poollist.length*3].type="line";
		options1.series[i+poollist.length*3].yAxis=1;
		
		
		//options1 NTU
		options1.series[i]= new Object();
		options1.series[i].data=(NTUArray[i].sort()); //对NTUArray[i]进行排序，否则会造成时间轴上的图错乱
		options1.series[i].name='原水浊度';
		options1.series[i].type="line";
		options1.series[i].yAxis=0;

		//options1 OutNTU
		options1.series[i+poollist.length] = new Object();
		options1.series[i+poollist.length].data=OutNTUArray[i].sort(); //对OutNTUArray[i]进行排序，否则会造成时间轴上的图错乱
		options1.series[i+poollist.length].name='出水浊度';
		options1.series[i+poollist.length].type="line";;
		options1.series[i+poollist.length].yAxis=0;
		
		
		
		//options2 AlgaeContent
		options2.series[i] = new Object();
		options2.series[i].data=AlgaeContentArray[i].sort(); //对AlgaeContentArray[i]进行排序，否则会造成时间轴上的图错乱
		options2.series[i].name='原水藻类';
		options2.series[i].type="line";
		options2.series[i].yAxis=1;
		
		//options2 CL
		options2.series[i+poollist.length] = new Object();
		options2.series[i+poollist.length].data=CLArray[i].sort(); //对CLArray[i]进行排序，否则会造成时间轴上的图错乱
		options2.series[i+poollist.length].name='预加氯量';
		options2.series[i+poollist.length].type="line";
		options2.series[i+poollist.length].yAxis=0;
		
		//options2 WaterTemp
		options2.series[i+poollist.length*2]= new Object();
		options2.series[i+poollist.length*2].data=(WaterTempArray[i].sort()); //对WaterTempArray[i]进行排序，否则会造成时间轴上的图错乱
		options2.series[i+poollist.length*2].name='水温';
		options2.series[i+poollist.length*2].type="line";
		options2.series[i+poollist.length*2].yAxis=0;

		
		//options3 SmallMudFre
		options3.series[i+poollist.length*3] = new Object();
		options3.series[i+poollist.length*3].data=SmallMudFreArray[i].sort(); //对SmallMudFreArray[i]进行排序，否则会造成时间轴上的图错乱
		options3.series[i+poollist.length*3].name='小斗排泥时长';
		options3.series[i+poollist.length*3].type="line";
		options3.series[i+poollist.length*3].yAxis=1;
		
		//options3 BigMudFre
		options3.series[i+poollist.length*4] = new Object();
		options3.series[i+poollist.length*4].data=BigMudFreArray[i].sort(); //对BigMudFreArray[i]进行排序，否则会造成时间轴上的图错乱
		options3.series[i+poollist.length*4].name='大斗排泥时长';
		options3.series[i+poollist.length*4].type="line";
		options3.series[i+poollist.length*4].yAxis=1;
		
		//options3 OpenDegree
		options3.series[i]= new Object();
		options3.series[i].data=(OpenDegreeArray[i].sort()); //对OpenDegreeArray[i]进行排序，否则会造成时间轴上的图错乱
		options3.series[i].name='开启度';
		options3.series[i].type="line";
		options3.series[i].yAxis=0;

		//options3 RotationSpeed
		options3.series[i+poollist.length] = new Object();
		options3.series[i+poollist.length].data=RotationSpeedArray[i].sort(); //对RotationSpeedArray[i]进行排序，否则会造成时间轴上的图错乱
		options3.series[i+poollist.length].name='转速';
		options3.series[i+poollist.length].type="line";
		options3.series[i+poollist.length].yAxis=1;
		
		//options3 SV
		options3.series[i+poollist.length*2]= new Object();
		options3.series[i+poollist.length*2].data=(SVArray[i].sort()); //对SVArray[i]进行排序，否则会造成时间轴上的图错乱
		options3.series[i+poollist.length*2].name='沉降比';
		options3.series[i+poollist.length*2].type="line";
		options3.series[i+poollist.length*2].yAxis=1;

		
	}
	options1.series.sort(keysrt("name",false));
	options2.series.sort(keysrt("name",false));
	options3.series.sort(keysrt("name",false));
	//chart1 = new Highcharts.Chart(options1);
	//chart2 = new Highcharts.Chart(options2);
	$('#imageContainer1').highcharts('StockChart',options1);
	$('#imageContainer2').highcharts('StockChart',options2);
	$('#imageContainer3').highcharts('StockChart',options3);
}//preH;
var treeNodeList= [{id:1,name:"时间列表",text:"时间列表",parentId:0}];
function listTreeNode(tlist){
//	var yearlist = new Array();
//	var monthlist = new Array();
//	var daylist = new Array();
//	var j=1; 
//	for(var i=0;i<tlist.length;i++){
//		var year = tlist[i].substring(0,4);
//		var month = tlist[i].substring(0,7);
//		var day = tlist[i].substring(0,10);
//		var yearIndex=yearlist.indexOf(year);
//		var monthIndex=monthlist.indexOf(month);
//		var dayIndex=daylist.indexOf(day);
//		if(yearIndex<0){	//不存在该年份
//			j=j+1;	
//			yearlist.push(year);
//			treeNodeList.push({id:j,name:year+"年",text:year,parentId:1});	
//			j=j+1;
//			monthlist.push(month);
//			treeNodeList.push({id:j,name:month.substring(5,7)+"月",text:month,parentId:j-1});
//			j=j+1;
//			daylist.push(day);
//			treeNodeList.push({id:j,name:day.substring(8,10)+"日",text:day,parentId:j-1});		
//		}
//		else{
//			if(monthIndex<0) //不存在该月份
//			{	
//				j=j+1;
//				monthlist.push(month);
//				treeNodeList.push({id:j,name:month.substring(5,7)+"月",text:month,
//									parentId:findParentId(treeNodeList, year)});
//				j=j+1;
//				daylist.push(day);
//				treeNodeList.push({id:j,name:day.substring(8,10)+"日",
//								text:day,parentId:j-1});
//			}else{
//				if(dayIndex<0){
//					j=j+1;
//					daylist.push(day);
//					treeNodeList.push({id:j,name:day.substring(8,10)+"日",text:day,
//									parentId:findParentId(treeNodeList, month)});
//				}
//			}
//		}
//	}

	$('#timeTree').tree({
//		url: 'tree_data.json',
//		data: treeNodeList,
		data:tlist,
		animate:true,	//动画效果
		lines:true,
//		loadFilter: function(data){
//			return convert(data);
//		},
		onClick:function(node){
			hideImportPanel()
			searchMode = 2;
			var pnode=$('#timeTree').tree('getParent',node.target);
			var out=node.text;
			while(pnode.text!="时间列表"){
				out=pnode.text+out;
				pnode=$('#timeTree').tree('getParent',pnode.target);	
			}
			if($('#timeTree').tree('isLeaf',node.target)){	//是根节点
				out=out.replace("年",'-'); out=out.replace("月",'-'); out=out.replace("日",'');
				$("#lowT").datebox("setValue",out);
				$("#highT").datebox("setValue",out);
				$("#searchPoolID").val();
				dealSearch();		
			}
		},
		cascadeCheck:true,//是否支持级联选择
		
	});
}

function GetNode(type){  
    var node = $('#timeTree').tree('getChecked');  
    var chilenodes = '';  
    var parantsnodes = '';  
    var prevNode = '';  
    for (var i = 0; i < node.length; i++) {  
     
        if ($('#timeTree').tree('isLeaf', node[i].target)) {  
            chilenodes += node[i].text + ',';  
             
            var pnode = $('#timeTree').tree('getParent', node[i].target);  
            if (prevNode != pnode.text) {  
                parantsnodes += pnode.text + ',';  
                prevNode = pnode.text;  
            }  
        }  
    }  
    chilenodes = chilenodes.substring(0, chilenodes.length - 1);  
    parantsnodes = parantsnodes.substring(0, parantsnodes.length - 1);  
     
    if (type == 'child') {  
        return chilenodes;  
    }  
    else {  
        return parantsnodes  
    };  
}; 


//function findParentId(rows, text){
//	for(var i=0; i<rows.length; i++){
//		if (rows[i].text == text) return rows[i].id;
//	}
//	return -1;
//}
////显示树目录的数据
//function convert(rows){
//	//判断是否存在父节点
//	function exists(rows, parentId){
//		for(var i=0; i<rows.length; i++){
//			if (rows[i].id == parentId) return true;
//		}
//		return false;
//	}
//
//	var nodes = [];
//	// get the top level nodes
//	//遍历查找最高一层节点
//	for(var i=0; i<rows.length; i++){
//		var row = rows[i];
//		//如果不存在父节点，添加节点
//		if (!exists(rows, row.parentId)){
//			nodes.push({
//				id:row.id,
//				text:row.name,
//				state:'closed'
//			});
//		}
//	}
//
////	利用堆栈的结构
//	var toDo = []; //所有的父节点
//	for(var i=0; i<nodes.length; i++){
//		toDo.push(nodes[i]);
//	}
//	while(toDo.length){
//		//	shift从集合中把第一个元素删除，并返回这个元素的值
//		var node = toDo.shift();	// the parent node
//		// get the children nodes
//		//	获得所有父节点各自的子节点
//		for(var i=0; i<rows.length; i++){
//			var row = rows[i];
//			if (row.parentId == node.id){
//				var child = {id:row.id,text:row.name};
//				if (node.children){
//					node.children.push(child);
//				} else {
//					node.children = [child];
//				}
//				toDo.push(child);//添加子节点，以便进一步遍历子节点查看是否有子目录
//			}
//		}
//	}
//	return nodes;
//}

