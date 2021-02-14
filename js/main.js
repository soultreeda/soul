/* main.js */

$(function(){
    // gnb 열기
    $(".btn-toggle").on("click",function(){
        $("#gnb").addClass("show");
    });
});

$(function(){
    // gnb 닫기
    $(".btn-close").on("click",function(){
        $("#gnb").removeClass("show");
    });
});

// 갤러리 이미지 클릭시 변경하기
$(function(){
    $("#gallery ul.thumb li").on("click",function(){
        let getUrl=$(this).find("img").attr("src");
        console.log(getUrl);
        $("#gallery figure>img").attr("src",getUrl);
    });
});