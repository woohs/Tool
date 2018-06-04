<?php

$url = $_POST['url'];
$type = $_POST['type'];
$data = $_POST['parameter'];

if($type == 'Get'){
    $http_data = http_build_query($data);
    $url_data = $url . '?' . $http_data;
    curl_file_get_contents($url_data);
}else{
    curl_post($url, $data);
}



function curl_file_get_contents($durl){
   
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $durl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true) ; // 获取数据返回
//    curl_setopt($ch, CURLOPT_BINARYTRANSFER, true) ; // 在启用 CURLOPT_RETURNTRANSFER 时候将获取数据返回
    $data = curl_exec($ch);
    curl_close($ch);
    echo ($data);
    return $data;
}

function curl_post($url, $data){
    
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    echo $result;
}


