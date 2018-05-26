let requestObj = {
  url: '',
  type: 'get',
  parameter: {

  }
}

$(document).ready(function(){
  //提交按钮触发
  $('#submit').click(function(){
    console.log('ok');
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

    console.log(key, value);
  }
}

//按钮触发
function setSend(){
  let url = $('#url').val(); //获取输入框url
  let httpType = $('#type').val(); //获取请求类型
  getTableValue();

  requestObj.url = url;
  requestObj.type = httpType;

  sendRequest();
}

//发送请求
function sendRequest(){
  let type = requestObj.type;
  let url = requestObj.url;
  let parameter = requestObj.parameter;

  if(type === 'Get'){
    $.get(url, parameter, function(res){
      console.log(res);
      setJsonHtml(res);
    })
  }else if(type === 'Post'){
    $.post(url, parameter, function(res){
      console.log(res);
      setJsonHtml(res);
    })
  }
}

function setJsonHtml(row){
  $('#json_input').html(row);
}