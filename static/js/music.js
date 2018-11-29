



// if (location.hostname == 'www.ruiwenjy.com' || location.hostname == 'www.yinyuefengchao.com') {
//     HOST = "https://admin.yyfcdrm.com";
// } else {
//     HOST = "https://cms-ubtest-admin.ruiwenjy.com";
// }
HOST = "https://admin.yyfcdrm.com";

// 验证码
function checkVcode() {
    // baby_name = $("#form_lession input[name='baby_name']");
    // baby_age_year = $("#form_lession select[name='year']");
    // baby_age_month = $("#form_lession select[name='month']");
    // baby_age_day = $("#form_lession select[name='day']");
    baby_mobile = $("#form_lession input[name='baby_mobile']");

    // baby_name.val(baby_name.val().trim());
    baby_mobile.val(baby_mobile.val().trim());

    // if (baby_name.val().length==0) {
    //     alert("请输入孩子姓名");
    //     baby_name.focus()
    //     return false;
    // }
    //
    // if (baby_name.val().length>8) {
    //     alert("孩子姓名过长");
    //     baby_name.focus()
    //     return false;
    // }

    // if (baby_age_year.val()==0) {
    //     alert("请选择孩子生日");
    //     baby_age_year.focus();
    //     return false;
    // }
    //
    // if (baby_age_month.val()==0) {
    //     alert("请选择孩子生日");
    //     baby_age_month.focus();
    //     return false;
    // }
    //
    // if (baby_age_day.val()==0) {
    //     alert("请选择孩子生日");
    //     baby_age_day.focus();
    //     return false;
    // }

    // var mail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // var tel=/^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
    var phone=/^1[34578]\d{9}$/;
    // if(tjTel.match(tel)==null){
    //     alert("您的固定电话格式不正确");
    //     return;
    // } 
    // if(tjEmail.match(mail)==null){
    //     alert("您的邮箱格式不正确");
    //     return;
    // }

    if (baby_mobile.val().match(phone)==null) {
        alert("您的手机格式不正确");
        baby_mobile.focus()
        return false;
    }

    return true;

}

function autoLayout() {
    h = $(window).height()
    h = h>920?h:920
    for (var i = 1; i <= 8; i++) {
        console.log('dd')
        $('.page'+i).css("height", h);
    }
}

function goLocation(href_a) {
    $('#menu_box a').each(function(i, a) {

        console.log($(a).attr('attr_location'));
    })
    console.log($('#menu_box li'));
    // $(href_a).attr('attr_location');
}

// 钢琴课
function checkLession() {
    if (checkVcode()) {
        baby_vcode = $("#form_lession input[name='baby_vcode']");
        baby_vcode.val(baby_vcode.val().trim());

        if (baby_vcode.val().length==0) {
            alert("请输入验证码");
            baby_vcode.focus()
            return false;
        }
        return true;
    }

    return false;
}

(function($){
    $.extend({
        ms_DatePicker: function (options) {
            var defaults = {
                YearSelector: "#sel_year",
                MonthSelector: "#sel_month",
                DaySelector: "#sel_day",
                FirstText: "--",
                FirstValue: 0
            };
            var opts = $.extend({}, defaults, options);
            var $YearSelector = $(opts.YearSelector);
            var $MonthSelector = $(opts.MonthSelector);
            var $DaySelector = $(opts.DaySelector);
            var FirstText = opts.FirstText;
            var FirstValue = opts.FirstValue;

            // 初始化
            var str = "<option value=\"" + FirstValue + "\">" + FirstText + "</option>";
            $YearSelector.html(str);
            $MonthSelector.html(str);
            $DaySelector.html(str);

            // 年份列表
            var yearNow = new Date().getFullYear();
            var yearSel = $YearSelector.attr("rel");
            for (var i = yearNow; i >= 1900; i--) {
                var sed = yearSel==i?"selected":"";
                var yearStr = "<option value=\"" + i + "\" " + sed+">" + i + "</option>";
                $YearSelector.append(yearStr);
            }

            // 月份列表
            var monthSel = $MonthSelector.attr("rel");
            for (var i = 1; i <= 12; i++) {
                var sed = monthSel==i?"selected":"";
                var monthStr = "<option value=\"" + i + "\" "+sed+">" + i + "</option>";
                $MonthSelector.append(monthStr);
            }

            // 日列表(仅当选择了年月)
            function BuildDay() {
                if ($YearSelector.val() == 0 || $MonthSelector.val() == 0) {
                    // 未选择年份或者月份
                    $DaySelector.html(str);
                } else {
                    $DaySelector.html(str);
                    var year = parseInt($YearSelector.val());
                    var month = parseInt($MonthSelector.val());
                    var dayCount = 0;
                    switch (month) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            dayCount = 31;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            dayCount = 30;
                            break;
                        case 2:
                            dayCount = 28;
                            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                                dayCount = 29;
                            }
                            break;
                        default:
                            break;
                    }
                    
                    var daySel = $DaySelector.attr("rel");
                    for (var i = 1; i <= dayCount; i++) {
                        var sed = daySel==i?"selected":"";
                        var dayStr = "<option value=\"" + i + "\" "+sed+">" + i + "</option>";
                        $DaySelector.append(dayStr);
                    }
                }
            }
            $MonthSelector.change(function () {
                BuildDay();
            });
            $YearSelector.change(function () {
                BuildDay();
            });
            if($DaySelector.attr("rel")!=""){
                BuildDay();
            }
        } // End ms_DatePicker
    });
})(jQuery);

$(function() {
    $.ms_DatePicker({
        YearSelector: "#select_year",
        MonthSelector: "#select_month",
        DaySelector: "#select_day"
    });


    $('#menu_box a').each(function(i, a) {
        $(a).click(function(e) {
            $('#menu_box a').each(function(i, a) {
                $(a).removeClass('active');
            });
            $(e.target).addClass('active');
        })
    });

    $(".showpic-img").hover(function(){
        $(this).find("em").slideDown();
    },function(){
        $(this).find("em").slideUp();
    });

    $("#btn1").click(function(){
        $(".topppot-mask").show();
    })

    $(".close-topppot").click(function(){
        $(".topppot-mask").hide();
    })

    $("#btn_get_code").click(function(){
        if (checkVcode()) {
            baby_mobile = $("#form_lession input[name='baby_mobile']");
            url = HOST + "/stu/website/sendRegistrationVcodeFromOfficialWebsite";
            // $.jsonp({
            //     url: url,
            //     data: { mobile: baby_mobile.val().trim() },
            //     callbackParameter: "callback",
            //     success: function(data) {
            //         debugger;
            //        if (data.header) {
            //             if (data.header.code != 0) {
            //                 alert(data.header.msg);
            //             } else {
            //                 alert("验证码发送成功.")
            //             }
            //         }
            //     },
            //     error: function(d,msg) {
            //         alert("Could not find user "+msg);
            //         alert(XMLHttpRequest.status);
            //         alert(XMLHttpRequest.readyState);
            //         alert(textStatus);
            //     }
            // });
            $.ajax({
                url : url,
                data: { mobile: baby_mobile.val().trim() },
                success: function(data) {
                    if (data.header) {
                        if (data.header.code != 0) {
                            alert(data.header.msg);
                        } else {
                            alert("验证码发送成功.")
                        }
                    }
                },
                error: function(xhr, status) {
                    console.log(xhr);
                }
            })
        }
    })

    $("#btn_submit_lession").click(function(){
        if (checkLession()) {
            //baby_name = $("#form_lession input[name='baby_name']");
            //baby_age_year = $("#form_lession select[name='year']");
            //baby_age_month = $("#form_lession select[name='month']");
            //baby_age_day = $("#form_lession select[name='day']");
            baby_mobile = $("#form_lession input[name='baby_mobile']");
            baby_vcode = $("#form_lession input[name='baby_vcode']");


            //baby_bithday_value = baby_age_year.val() + '-' + ('00'+baby_age_month.val()).substr(-2) + '-' + ('00'+baby_age_day.val()).substr(-2);

            url = HOST + "/stu/website/studentRegistrationFromOfficialWebsiteAndGetFreeProduct";
            $.ajax({
                url: url,
                data: {
                    vcode : baby_vcode.val().trim(),
                    //user_baby_name: baby_name.val().trim(),
                    //user_baby_birthday : baby_bithday_value,
                    mobile: baby_mobile.val().trim()
                },
                success: function(data) {
                    if (data.header) {
                        if (data.header.code != 0) {
                            alert(data.header.msg);
                        } else {
                            alert("尊敬的用户您好，您在音乐蜂巢预约的一节免费钢琴课已经申请成功，我们的销售代表会尽快与您联系。");
                            $(".topppot-mask").hide();
                        }
                    }
                },
                error: function(xhr, status) {
                    // console.log(xhr);
                }
            })
        }
    })

    $("#btn_submit_bao_ming").click(function(){

        stu_name = $("#form_baoming input[name='stu_name']");
        stu_age = $("#form_baoming input[name='stu_age']");
        stu_mobile = $("#form_baoming input[name='stu_mobile']");

        stu_name.val(stu_name.val().trim());
        stu_age.val(stu_age.val().trim());
        stu_mobile.val(stu_mobile.val().trim());

        if (stu_name.val().length==0) {
            alert("请输入学生姓名");
            stu_name.focus()
            return false;
        }

        if (stu_name.val().length>8) {
            alert("学生姓名过长");
            stu_name.focus()
            return false;
        }

        stu_age_regu = /^\d{1,2}$/;
        if (stu_age.val().match(stu_age_regu)==null) {
            alert("年龄格式不正确");
            stu_age.focus()
            return false;
        }

        var phone=/^1[34578]\d{9}$/;

        if (stu_mobile.val().match(phone)==null) {
            alert("您的手机格式不正确");
            stu_mobile.focus()
            return false;
        }

        url = HOST + "/stu/website/studentEntryForExperienceFromOfficialWebsite";
        $.ajax({
            url: url,
            data: {
                stu_name : stu_name.val().trim(),
                stu_age: stu_age.val().trim(),
                stu_mobile: stu_mobile.val().trim()
            },
            success: function(data) {
                if (data.header) {
                    if (data.header.code != 0) {
                        alert(data.header.msg);
                    } else {
                        alert("您的申请已经收到，我们的销售代表会尽快与您联系。");
                        stu_name.val('');
                        stu_age.val('');
                        stu_mobile.val('');
                    }
                }
            },
            error: function(xhr, status) {
                // console.log(xhr);
            }
        })

        console.log('btn_submit_bao_ming');
    })

    // $(window).resize(function() {
    //     autoLayout();
    // });
    //
    // autoLayout();
});


