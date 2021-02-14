/* main.js */

$(function(){

    // gnb 열기
    $('.btn-toggle').on('click', function(){
      $('#gnb').addClass('show');
    });
  
    // gnb 닫기
    $('.btn-close').on('click', function(){
      $('#gnb').removeClass('show');
    });
  
    // 갤러리 이미지 클릭시 변경하기
    $('#main > .thumb > li').on('click', function(){
      // 이미지 주소값 읽기
      let getUrl = $(this).find('img').attr('src');
      // 이미지 쓰기
      $('#main > figure > img').attr('src', getUrl);
    })
  });