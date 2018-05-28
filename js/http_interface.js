let requestObj = {
  url: '',
  type: 'get',
  parameter: {

  }
}

$(document).ready(function(){
  //提交按钮触发
  $('#submit').click(function(){
    // console.log('ok');
    setSend();
  });
})

function getTableValue(){
  //清空requestObj参数
  requestObj.parameter = {};

  let rowLength =  $('.key').length;

  for(let i = 0; i < rowLength; i++){
    let key = $('[name = keys]')[i].value;
    let value = $('[name = values]')[i].value;
    requestObj.parameter[key] = value;

    // console.log(key, value);
  }
}

function getCheckedStatus(){
  //不发送参数
  if($('#openParameter').prop('checked') === false){
    requestObj.parameter = {};
  }
}

//按钮触发
function setSend(){
  let url = $('#url').val(); //获取输入框url
  let httpType = $('#type').val(); //获取请求类型
  getTableValue();//获取参数数据
  getCheckedStatus();//判断是否发送数据

  requestObj.url = url;
  requestObj.type = httpType;

  sendRequest();//发送请求
}

//发送请求
function sendRequest(){
  let type = requestObj.type;
  let url = requestObj.url;
  let parameter = requestObj.parameter;

  if(type === 'Get'){
    $.get(url, parameter, function(res){
      consoleAction(res);
      setJsonHtml(res);
    })
  }else if(type === 'Post'){
    $.post(url, parameter, function(res){
      consoleAction(res);
      setJsonHtml(res);
    })
  }
}

function consoleAction(res){
  try{
    console.log(JSON.parse(res));
  }catch(e){
    console.log(res);
  }
}

function setJsonHtml(row){
  $('#json_input').html(row);
}

//添加参数事件
function add_url_parameter(that){
  let element = that.parentNode.parentNode;
  // console.log(element);
  let Trhtml = '<tr class="key">' + 
  '<td><input k="" value="" name="keys" class="form-control" type="text" maxlength="100" placeholder="参数名称"></td> ' +
  '<td><input value="" v="" name="values" class="form-control" type="text" maxlength="5000" style="width: 70%;float: left;" placeholder="参数数值"><button type="button" onclick="del(this);" class="btn btn-primary btn-sm del_btn">删除参数</button></td>' +
  '</tr>'
  $(element).before(Trhtml);
}

function del(that){
  let element = that.parentNode.parentNode;
  // console.log(element);
  $(element).remove();
}