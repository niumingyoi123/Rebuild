<%@ page language="java" contentType="text/html; charset=UTF-8" 
	pageEncoding="UTF-8"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%-- <%if(null == request.getSession().getAttribute("user")){
       response.getWriter().write("<script>window.location.href = 'notSignIn.jsp'</script>");
     }
%> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.ddd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
		<base href="<%=basePath%>" />
	<meta charset="UTF-8" />
	<meta http-equiv="Access-Control-Allow-Origin" content="*" />
	<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
	<title>北京自来水集团工艺平台</title>

<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" />
<link rel="stylesheet" href="css/top_down.css" />
<link rel="stylesheet" href="css/normal.css" />
<link rel="stylesheet" href="css/breadcrumb.css" /> 

<link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css" />
<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css" />
<link rel="stylesheet" type="text/css" href="style/myeasyui.css" />

<script type="text/javascript" src="easyui/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="highcharts/highstock.js" ></script>
<script type="text/javascript" src="highcharts/exporting.src.js"></script>
<script type="text/javascript" src="highcharts/themes/grid.js"></script>

<script type="text/javascript" src="js/ajaxfileupload.js"></script>
<script type="text/javascript" src="js/poolEvaluate.js"></script>

<style>
body {
	background: #afd9ee;
     }
     
#myPage {
	font-family: '微软雅黑','Source Sans Pro';
	font-size: 15px;
	width: 1600px;
	height: 1150px;
	margin:0px auto;
	}

#myContent {
	margin: 0px auto;
	position: relative;
	width: 1600px;
	height: 1150px;
	top:15px;
	background-position: bottom;
}

#tab {
	cellspacing: 10px;
	cellpadding: 10px;
}

 
#tab_entity {
	position: absolute;
	top: 10px;
	left: 50px;
	width: 1300px;
}

#gap {
	width: 1300px;
	height: 5px;
}

#rightContainer {
	position: absolute;
	top: 10px;
	left: 1400px;
	width: 200px;
}

#treeGuid {
	position: relative;
	top: 0px;
	width: 200px;
	height: 300px;
	padding: 5px;
	border: 1px solid #95B8E7;
}

#treeGuid p {
	color: #337ab7;
	font-weight: bold;
	font-size: 18px;
	text-align: left;
}
#chooseIndex {
	position: relative;
	top: 15px;
	width: 200px;
	height: 110px;
	padding: 5px;
	inline-height: 30px;
	/* border: 1px solid #95B87E;
	border: 0; */
	border: 1px solid #95B8E7;
}


 

#tab_export {
	font-family: '微软雅黑', 'Arial';
	position: relative;
	left: 25px;
	top: 170px;
	z-index: 999;
	font-size: 14px;
	width: 200px;
}

.legendTitle {
	color:blue;
	font-weight:bolder;
}
    #treeGuid p {
    color: #337ab7;
    font-weight: bold;
    font-size: 18px;
    text-align: left;
    }
    
#legendTable tr, #legendTable td {
	padding: 5px;
	margin: 5px;
}

#addButton {
	position: relative;
	left: 1642px;
}

div.icon {
	position: relative;
	top: 40px;
	left: 0px;
	width: 180px;
	height: 180px;
 	
}

#menu {  
 	line-height:70px;  
	font-family: '微软雅黑';
	font-weight: 100;
	font-size: 20px;
	border: 1px solid #CCCCCC;
	border-radius: 90%;
	color: #FFFFFF;
	background-color: #337ab7; 
	display: block;
	height: 70px;
	width: 70px;
	text-align:center;
	text-indent:0;
	position: absolute;
	left: 110px;
	top: 110px;
	z-index:999;
}

#menu:hover{
	cursor: pointer;
}


div.menuSecond{   
 	line-height:40px;  
	font-family: '微软雅黑';
	font-weight: 100;
	font-size: 16px;
	border: 1px solid #CCCCCC;
	border-radius: 90%;
	color: #FFFFFF;
	background-color: #337ab7; 
	display: block;
	height: 50px;
	width: 50px;
	text-align:center;
	text-indent:0;
}

.menuSecond:visited {
	background-color: rgba(0, 51, 255, 0.8);
	cursor: pointer;
	width: 60px;
	height: 60px;
	font-size: 18px;
	line-height:50px;
}
.menuSecond:hover{
	background-color: rgba(0, 51, 255, 0.8);
	cursor: pointer;
	width: 60px;
	height: 60px;
	font-size: 18px;
	line-height:50px;
}

.menuSecond:active {
	background-color: rgba(0, 51, 255, 0.8);
	cursor: pointer;
	width: 60px;
	height: 60px;
	font-size: 18px;
	line-height:50px;
}

.menuSecond {
	position: absolute;
	top: 110px;
	left: 120px;
}


#tab_description {
	position: relative;
    font-family: '微软雅黑','Arial';
    top:40px;
    padding:5px;
    font-size:14px;
    width:220px;
    height:400px;
    border:1px solid #95B8E7
    }

#tab_description h1 {
    font-size:20px;
    color:#ff4400;
    font-weight:bold;
    }

#picLegend {
	position: relative;
	top: 60px;
	width: 220px;
	height: 200px;
	padding: 5px;
	border: 1px solid #95B8E7;	
	text-align:left;
	padding:5px;
	/* margin-top: 100px; */
}

#btn_group {
	position:absolute;
	top: 20px;
}

#addButton {
	position: relative;
	left: 1135px;
	top: 5px;
}

th, td, input, option {
	text-align:center;
}

</style>
</head>
<body>
    <jsp:include page="top.jsp" />
    <ol class="breadcrumb">
    <li><a href="main.jsp">首页</a></li>
    <li class="active">机加池分析</li>
    </ol>
    <div id="myPage">
    	<div id="myContent" style="overflow: hidden">
    		<!-- btn_group -->
    		<div id="btn_group" class="btn-group-vertical btn-group-lg" role="group" style="display:none">
    			<button id="btn_addRow" class="btn btn-primary" 
    				onclick="javascript:addPoolEvaluate()">添加</button>
				<button id="btn_editRow" class="btn btn-primary"
					onclick="javascript:editPoolEvaluate()">编辑</button>
				<button id="btn_deleteRow" class="btn btn-primary"
					onclick="javascript:deletePoolEvaluate()">删除</button>
				<button id="btn_searchAll" class="btn btn-primary"
					onclick="javascript:listAllPoolEvaluate()">查询全部</button>
				<button id="btn_search" class="btn btn-primary"
					onclick="javascript:searchPoolEvaluate()">条件查询</button>
				<button id="btn_export" class="btn btn-primary"
					onclick="javascript:export2excel()">导出</button>
			</div> 
			<!-- rightContainer -->
			<div id="rightContainer">
				<!-- treeGuid -->
				<div id="treeGuid" style="overflow:scroll">
					<p>选择时间:</p>
					<!-- 树形导航菜单 -->
					<ul id="timeTree" class="easyui-tree"></ul>
				</div>
				<!-- chooseIndex -->
				<div id="chooseIndex" style="display:none">
					<form id="indexForm">
						<p style="color:#337ab7; font-weight:bold;font-size:18px">请选择机加池编号：</p>
						<input type="radio" id="index1" class="radioItem" name="chooseIndexButton" value="index1" checked="checked" /><label for="index1">1#机加池</label><br />
						<input type="radio" id="index2" class="radioItem" name="chooseIndexButton" value="index2" /><label for="index2">2#机加池</label><br />
						<input type="radio" id="index3" class="radioItem" name="chooseIndexButton" value="index3" /><label for="index3">3#机加池</label><br />
					</form>
				</div>
				<!-- icon -->
				<div class="icon">
    				<div class="menuBar" id="menu">功能</div>
        			<div class="menuSecond" id="add">添加</div>
        			<div class="menuSecond" id="edit">编辑</div>
        			<div class="menuSecond" id="delete">删除</div>
        			<div class="menuSecond" id="search">查询</div>
        			<div class="menuSecond" id="export">导出</div>
        			<div class="menuSecond" id="import">导入</div>
        			<!-- <div class="menuSecond" id="template"><a href="download/PoolEvaluate.xls" style="height:50px">模板</a></div> -->
        		</div>
        		<!-- tab_Import -->
				<div id="tab_Import" class="easyui-dialog" data-options="closed:true"
					style="align:center;width:500px;height:200px;padding:10px 60px 20px 60px">
					<form id="frmImportEdit" 
						name="uploadForm" enctype="multipart/form-data" method="post">
						<br>
						<button type="button"  class="btn btn-primary" onclick=upload.click()>
					             <span class="fa fa-folder-open" style="font-size: 14px; "></span>浏览
					   </button>
						<input type=file name="upload" id="upload" style="display: none;" onchange="fakeUpload.value=value.replace(/.*fakepath\\/i, '')" /> 
						<input id="fakeUpload" name="fakeUpload" type="text" ondblclick=upload.click()
							style="width: 260px; height: 35px; border: 1px solid #95B8E7;">						
						<!-- <input id="btn-import" class="btn btn-primary" style="font-size: 18px; width: 65px;
							background-color:rgba(0, 51, 255, 0.8)"" value="确定" onclick="javascript:import2DB();fakeUpload.value='';" />
						<input id="btn-cancel" class="btn btn-primary" style="font-size: 18px; width: 65px;
							background-color:rgba(0, 51, 255, 0.8)"" value="取消"/> -->
							
					</form>	
				</div><!-- tab_Import -->
			</div><!-- rightContainer -->
			
			<!-- tab_entity -->
			<div id="tab_entity">
				<table id="poolEvaluatebody" class="easyui-datagrid" style="width:1300;height:300px;"></table><br />
				<!-- easyui-tabs -->
				<div id="gap"></div>
				<div class="easyui-tabs" style="width:1300px;height:690px;">
					<div title="浊度/加药量分析图" id="imageContainer1" style="width:1300px;height:600px;padding:0px;border-width:0px"></div>
					<div title="原水藻类/水温/预加氯量分析图" id="imageContainer2" style="width:1300px;height:690px;padding:0px;border-width:0px"></div>
					<div title="基本运行参数分析图" id="imageContainer3" style="width:1300px;height:690px;padding:0px;border-width:0px"></div>
				 </div>
			</div>
			<select  id="chooseIndexButton2" name="chooseIndexButton2" onchange="javascript:changeButton2()"
						 data-options="required:true,missingMessage:'请选择机加池编号' ">
									<option value="MTG_JJC_SC01" selected>1#机加池</option>
									<option value="MTG_JJC_SC02">2#机加池</option>
									<option value="MTG_JJC_SC03" >3#机加池</option>
			</select>
						
			<!-- 编辑数据的div，默认看不到 -->
			<div style="display:none">
				<div id="tabEdit" class="easyui-dialog" data-options="closed:true"
					style="align:center;width:830px;height:540px;padding:10px 60px 20px 60px">
				<form id="frmEdit">
					<input type="hidden" id="ID" name="poolEvaluate.ID" /> <br />
					&nbsp; &nbsp; &nbsp; 时 &nbsp; &nbsp; &nbsp; &nbsp; 间 : &nbsp; 
					<input	class="easyui-datebox" id="t" name="poolEvaluate.t"
						style="width:200px;height:25px" required="required" /> 
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 机加池编号 : &nbsp; 
					<select class="easyui-combobox" id="PoolID"
						name="poolEvaluate.PoolID" style="width:200px;height:25px"
						data-options="required:true,missingMessage:'请输入机加池编号'" >
						<option value="MTG_JJC_SC01" selected>1#机加池</option>
						<option value="MTG_JJC_SC02">2#机加池</option>
						<option value="MTG_JJC_SC03">3#机加池</option>
					</select>	<br /><br /> 
					&nbsp; &nbsp; &nbsp; PAC投加量 : &nbsp; 
					<input class="easyui-numberbox textbox" style="width:195px;height:25px"
						id="PAC" name="poolEvaluate.PAC" data-options="prompt:'',precision:2">
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FeCl3投加量 : &nbsp; 
					<input class="easyui-numberbox textbox" style="width:198px;height:25px"
						id="FeCl3" name="poolEvaluate.FeCl3" data-options="prompt:'',precision:2" /><br /><br />
					&nbsp; &nbsp; &nbsp; 开  &nbsp; 启 &nbsp; 度  : &nbsp; 
					<input class="easyui-numberbox textbox" style="width:200px;height:25px"
						id="OpenDegree" name="poolEvaluate.OpenDegree" data-options="prompt:'',precision:2,min:0" /> 
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 转 &nbsp; &nbsp; &nbsp; &nbsp; 速  : &nbsp; 
					<input class="easyui-numberbox" style="width:210px;height:25px" id="RotationSpeed"
						name="poolEvaluate.RotationSpeed" data-options="prompt:'',precision:2,min:0" /><br /><br /> 
					&nbsp; &nbsp; &nbsp; 沉  &nbsp; 降  &nbsp; 比 : &nbsp; 
					<input class="easyui-numberbox" style="width:200px;height:25px" id="SV"
						name="poolEvaluate.SV" data-options="prompt:'',precision:2" />
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 水 &nbsp; &nbsp; &nbsp; &nbsp; 温 : &nbsp; 
					<input class="easyui-numberbox" style="width:210px;height:25px" id="WaterTemp"
						name="poolEvaluate.WaterTemp" data-options="prompt:'',precision:2" /><br /><br/>
					&nbsp; &nbsp; &nbsp; 小斗排泥时长 : &nbsp; 
					<input class="easyui-numberbox" style="width:183px;height:25px"
						id="SmallMudFre" name="poolEvaluate.SmallMudFre" data-options="prompt:'',precision:2" /> 
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 大斗排泥时长 : &nbsp; 
					<input class="easyui-numberbox" style="width:190px;height:25px"
						id="BigMudFre" name="poolEvaluate.BigMudFre" data-options="prompt:'',precision:2" /><br /><br />
					&nbsp; &nbsp; &nbsp; 原 水 浊 度  : &nbsp;
					<input class="easyui-numberbox" style="width:198px;height:25px"
						id="NTU" name="poolEvaluate.NTU" data-options="prompt:'',precision:2" />
					&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 原水藻类含量 : &nbsp; 
					<input class="easyui-numberbox" style="width:190px;height:25px"
						id="AlgaeContent" name="poolEvaluate.AlgaeContent" data-options="prompt:'',precision:2" /><br /><br />
					&nbsp; &nbsp; &nbsp; 出 水 浊 度 : &nbsp;
					<input class="easyui-numberbox" style="width:198px;height:25px"
						id="OutNTU" name="poolEvaluate.OutNTU" data-options="prompt:'',precision:2" />
					<!-- &nbsp; &nbsp;状&nbsp;态:&nbsp;
					<select id="state" class="easyui-combobox" name="poolEvaluate.state" style="width:150px;">
					<option value="0">不正常</option>
					<option value="1">正常</option>
					</select> --> <!-- <input  size="10" id="state" name="poolEvaluate.state" /> -->
					&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 预 加 氯 量 : &nbsp; 
					<input class="easyui-numberbox" style="width:205px;height:25px"
						id="CL" name="poolEvaluate.CL" data-options="prompt:'',precision:2" />
					</form>
				</div>
				
			<div id="newEdit" class="easyui-dialog" data-options="closed:true"
						style="align: center; width:1380px; height: 600px; padding: 10px 60px 10px 60px">
						<form id="newfrmEdit" style="width:1240px">
							<br />
							<table id="tab" style="align: center">


								<tr>
									<th style="width: 1px; height: 26px"></th>
									<th style="width: 1px; height: 26px"></th>
									<th style="width: 40px; height: 26px">序 号</th>
									<th style="width: 152px; height: 26px">时 间</th>
									<th style="width: 102px; height: 26px">机加池编号</th>
									<th style="width: 82px; height: 26px">PAC投放量</th>
									<th style="width: 92px; height: 26px">FeCl<sub>3</sub>投放量</th>
									<th style="width: 62px; height: 26px">开启度</th>
									<th style="width: 52px; height: 26px">转速</th>
									<th style="width: 62px; height: 26px">沉降比</th>
									<th style="width: 52px; height: 26px">水温</th>
									<th style="width: 92px; height: 26px">小斗排泥时长</th>
									<th style="width: 92px; height: 26px">大斗排泥时长</th>
									<th style="width: 72px; height: 26px">原水浊度</th>
									
									<th style="width: 92px; height: 26px">原水藻类含量</th>
									<th style="width: 72px; height: 26px">出水浊度</th>
									<th style="width: 72px; height: 26px">预加氯量</th>
									
								</tr>


								<tr id="tr1">
									<td style="width: 1px; height: 26px">
										<input type="hidden" id="IDAdd" name="id" style="width: 1px; height: 25px" /></td>
									<td id="indexNum1" style="text-align:center;width: 40px; height: 25px">1</td>
									<td style="width: 152px; height: 26px" >
										<!-- 时间 --> <input name="t" id="tAdd1"
										type="date" style="width: 150px; height: 25px" />
									</td>
									<td style="width: 102px; height: 26px" >
										<!-- 机加池编号 -->
										<select id="PoolIDAdd1" name="poolid"
										class="easyui-combox" style="width: 100px; height: 25px">
											<option value="MTG_JJC_SC01" selected>1# 机加池</option>
											<option value="MTG_JJC_SC02">2# 机加池</option>
											<option value="MTG_JJC_SC03" >3# 机加池</option>
									</select>
									</td>
									<td style="width: 82px; height: 26px" >
										<!-- PAC投加量 --> <input id="PACAdd1" name="pac"
										style="width: 80px; height: 25px"
										data-options="min:0,precision:0," />
									</td>
									<td style="width: 92px; height: 26px" >
										<!-- FeCl3投加量 --> <input id="FeCl3Add1" name="fecl3"
										style="width: 90px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td style="width: 62px; height: 26px" >
										<!-- 开启度 --> <input id="OpenDegreeAdd1"
										name="opendegree" style="width: 60px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td style="width: 52px; height: 26px" >
										<!-- 转速 --> <input id="RotationSpeedAdd1"
										name="rotationspeed" style="width: 50px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td style="width: 62px; height: 26px" >
										<!-- 沉降比 --> <input id="SVAdd1"
										name="sv" style="width: 60px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td style="width: 52px; height: 26px" >
										<!-- 水温 --> <input id="WaterTempAdd1"
										name="watertemp" style="width: 50px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td style="width: 92px; height: 26px" >
										<!-- 小斗排泥时长 --> <input id="SmallMudFreAdd1"
										name="smallmudfre" style="width: 90px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td style="width: 92px; height: 26px" >
										<!-- 大斗排泥时长 --> <input id="BigMudFreAdd1" name="bigmudfre"
										style="width: 90px; height: 25px"
										data-options="min:0,precision:0" />
									</td>
									<td style="width: 72px; height: 26px" >
										<!-- 原水浊度 --> <input id="NTUAdd1"
										name="ntu" style="width: 70px; height: 25px"
										data-options="precision:0" />
									</td>
									<td style="width: 92px; height: 26px" >
										<!-- 原水藻类含量 --> <input id="AlgaeContentAdd1"
										name="algaecontent" style="width: 90px; height: 25px"
										data-options="precision:0" />
									</td>
									<td style="width: 72px; height: 26px" >
										<!-- 出水浊度 --> <input id="OutNTUAdd1" name="outntu"
										style="width: 70px; height: 25px" data-options="precision:2" />
									</td>
									<td style="width: 72px; height: 26px" >
										<!-- 预加氯量 --> <input id="CLAdd1" name="cl"
										style="width: 70px; height: 25px" data-options="precision:2" />
									</td>
								</tr>

							</table>
							<a id="addButton" href="#" class="easyui-linkbutton"
								data-options="iconCls:'icon-add'">添加</a>

						</form>
					</div>	
				
			
			<div style="display:none">
				<div id="tabSearch" class="easyui-dialog" data-options="closed:true"
					style="align:center;width:600px;height:400px;padding:10px 60px 20px 60px">
					<form id="frmSearch"><br />
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 起  &nbsp;始  &nbsp;日 &nbsp; 期 : &nbsp; 
						<input class="easyui-datebox" style="width:150px" id="lowT" name="lowT"/ ><br/><br/>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 结  &nbsp;束  &nbsp;日 &nbsp; 期 : &nbsp;
						<input class="easyui-datebox" style="width:150px" id="highT" name="highT"/ ><br /><br />
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 水  &nbsp;池 &nbsp; 编  &nbsp;号 : &nbsp; 
						<select	class="easyui-combobox" type="text" style="width:150px"	id="searchPoolID" name="searchPoolID" >
							<option value="MTG_JJC_SC01">1#机加池</option>
							<option value="MTG_JJC_SC02">2#机加池</option>
							<option value="MTG_JJC_SC03">3#机加池</option>
						</select><br /><br />
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 来  &nbsp;水 &nbsp; 浊  &nbsp;度 : &nbsp;
						<input class="easyui-numberbox" id="lowNTU" name="lowNTU" style="width:120px" value="0"></input> ~ 
						<input class="easyui-numberbox" id="highNTU" name="highNTU"	style="width:120px" value="100"></input><br /><br />
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 来水藻类含量 : &nbsp;
						<input	class="easyui-numberbox" id="lowAlgaeContent" name="lowAlgaeContent" style="width:120px" value="0"></input> ~
						<input class="easyui-numberbox" id="highAlgaeContent" name="highAlgaeContent" style="width:120px" value="100"></input><br /><br />
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 出  &nbsp;水  &nbsp;浊 &nbsp; 度 : &nbsp;
						<input class="easyui-numberbox" id="lowOutNTU" name="lowOutNTU"	style="width:120px" value="0"></input> ~ 
						<input class="easyui-numberbox" id="highOutNTU" name="highOutNTU" style="width:120px" value="100"></input><br /><br />
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 沉  &nbsp; &nbsp; 降  &nbsp; &nbsp; 比 : &nbsp;
						<input class="easyui-numberbox" id="lowSV" name="lowSV" style="width:122px" value="0" data-options="prompt:'',precision:2"></input> ~ 
						<input class="easyui-numberbox" id="highSV" name="highSV" style="width:120px" value="100" data-options="prompt:'',precision:2"></input>
					</form>
				</div>
				<div id="newtabSearch" class="easyui-dialog" data-options="closed:true"
					style="align: center; width: 400px; height: 270px; padding: 10px 60px 20px 60px">
					<form id="newfrmSearch">
						<dl><br />
							&nbsp; &nbsp; &nbsp; 时 &nbsp; &nbsp; &nbsp; 间: &nbsp;
							<input class="easyui-datebox" style="width: 150px" id="searchT"	name="searchT" text="" type="text"></input><br /><br /><br /> 
							&nbsp; &nbsp; &nbsp;机加池编号:&nbsp;
							<input class="easyui-combobox" style="width: 150px" id="searchPoolID" name="searchPoolID" type="text"></input>
						</dl>
					</form>
				</div>
			</div>
		
			<div id="searchAreaForExport" style="display: none; width: 400px">
					<div id="tabSearchForExport" class="easyui-dialog"
						data-options="closed:true"
						style="align: center; width: 500px; height: 400px; padding: 10px 60px 20px 60px">
						<form id="frmSearchForExport">
							<dl>
								<br /> 
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 起  &nbsp;始  &nbsp;日 &nbsp; 期 : &nbsp;
								<input class="easyui-datebox" style="width:150px" id="lowT" name="lowT"/ ><br/><br/>
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 结  &nbsp;束  &nbsp;日 &nbsp; 期 : &nbsp;	
							    <input class="easyui-datebox" style="width:150px" id="highT" name="highT"/ ><br /><br />
							    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 水  &nbsp;池 &nbsp; 编  &nbsp;号 : &nbsp; 
								<select class="easyui-combobox" style="width: 150px"
									id="searchPoolID" name="searchPoolID">
									<option value="MTG_JJC_SC01">1#机加池</option>
									<option value="MTG_JJC_SC02">2#机加池</option>
									<option value="MTG_JJC_SC03">3#机加池</option>
								</select>									
							</dl>
						</form><!-- frmSearchForExport -->
					</div><!-- tabSearchForExport -->
				</div><!-- searchAreaForExport -->
		</div>
		</div>
	</div>
	<jsp:include page="down.jsp" />
</body>
</html>
