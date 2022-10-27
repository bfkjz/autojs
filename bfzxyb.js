"auto";
console.show();
setScreenMetrics(1080, 1920);
//💰💸💴💹🕒


var 时间 = " ";
var n = 0;
var y = 0;
var r = 0;
var s1 = 0;
var f1 = 0;
var m1 = 0;
var 任务奖励 = 0;
var 订阅奖励 = 0;
//var getxyb = 0;
//var xyb = 0;

var cshcs = 0;
var kbbcs = 0;
var qttlhl0 = 0;
var qelmgylsg0 = 0;
var qcncsj0 = 0;
var qtmnhb0 = 0;
var qgdmflsg0 = 0;
var lqjl0 = 0;
var box = 0;
var dqxyb1 = 0;
var jrsy = 0;

var syjjb1 = 0;
var syjjb2 = 0;
var qd1 = 0;
var qd2 = 0;
//子线程
threads.start(function(){
   events.observeKey();
   events.onKeyDown("volume_up",function(event){
     console.hide();
     engines.stopAllAndToast();
    });
})

csh();



function csh() {
    launchApp("闲鱼");
    sleep(2000);
    if (id("tab_title").className("android.widget.TextView").text("闲鱼").exists()) {
        console.log("初始化[闲鱼]：完成");
        start();
    } else {
        cshcs = Number(cshcs) + 1;
        console.log("初始化[闲鱼]：" + cshcs + "次")
        back();
        sleep(1111);
        csh();
    }
}

function start() {
    console.log("开始运行")

    let click_xy1 = [random(933, 985), random(1808, 1860)];
    let x1 = click_xy1[0] / 1080 * device.width;
    let y1 = click_xy1[1] / 1920 * device.height;
    click(x1, y1);
    sleep(1500);
    if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
        console.log("进入[领闲鱼币]")
        className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
        sleep(random(1555, 2222));
        time();
        日志("\n\n======== 📅 " + n + "年" + y + "月" + r + "日 ========\n")
        日志(时间 + "开始赚闲鱼币🪙");
        let myDate2 = new Date();
        let s = myDate2.getHours();
        let f = myDate2.getMinutes();
        let m = myDate2.getSeconds();
        s1 = s;
        f1 = f;
        m1 = m;

        dqxyb();
        jrsy = dqxyb1;
        sleep(500);
        main();

    } else {
        console.log("未找到[领闲鱼币]页面");
        console.log("尝试重启[闲鱼]");
        csh();
    }
}


function main() {
    闲鱼币();
    lqsyj();
    sleep(1000);
    qd();
    sleep(1000);
    txqd();
    sleep(1000);
    djzdpdhw();
    sleep(1000);
    fbyjxbb();
    sleep(1000);
    qttlhl();
    sleep(1000);
    qelmgylsg();
    sleep(1000);
    qtmnhb();
    sleep(1000);
    qcncsj();
    sleep(1000);
    qgdmflsg();
    sleep(1000);
    lqjl();
    sleep(1000);
    sjxd();
    sleep(1000);
    time();
    日志(时间 + "结束赚闲鱼币🪙\n");
    任务明细();
    今日收益();
    耗时();

    日志("\n========== 🏁 🐟🪙 ==========\n");
    console.log("脚本结束");

}
//当前闲鱼币
function dqxyb() {
    if (className("android.view.View").desc("提醒签到" + '\n' + "收益+10%").exists()) {
        let click_xy3 = [random(995, 1027), random(537, 569)];
        let x3 = click_xy3[0] / 1080 * device.width;
        let y3 = click_xy3[1] / 1920 * device.height;
        click(x3, y3);
        sleep(888);
    }
    let dqxyb2 = className("android.view.View").depth("9").indexInParent("1").findOne(2000);
    if (dqxyb2) {
        dqxyb1 = dqxyb2.desc();
    } else {
        toast("获取不到 [闲鱼币] 数量");
        日志("⚠️ 无法获取 [闲鱼币] 数量，统计功能失效");
    }
}
//领取收银机
function lqsyj() {
    if (className("android.view.View").desc("点击领取").exists()) {
        dqxyb();
        sleep(555);
        syjjb1 = dqxyb1;
        sleep(555);
        className("android.view.View").desc("点击领取").click();
        console.log("领取[收银机]");
        sleep(555);

        if (className("android.view.View").desc("升级次数越多，领闲鱼币越多！").exists()) {
            className("android.view.View").desc("知道了").findOne().click()
        }
        sleep(555);
        dqxyb();
        sleep(555);
        syjjb2 = dqxyb1 - syjjb1;
        日志("🖥️ [收银机领取]： " + syjjb2 + "个🪙");
        sleep(2000);
        dqxyb();
    } else {
        console.log("[收银机]领取过了");
        if (className("android.view.View").desc("升级次数越多，领闲鱼币越多！").exists()) {
            className("android.view.View").desc("知道了").findOne().click()
        }
    }
    if (className("android.view.View").desc("升级次数越多，领闲鱼币越多！").findOne(3000)) {
        className("android.view.View").desc("知道了").findOne().click()
    }



}

//赚经验
function zjy() {

    let click_xy1 = [random(930, 982), random(869, 921)];
    let x1 = click_xy1[0] / 1080 * device.width;
    let y1 = click_xy1[1] / 1920 * device.height;
    click(x1, y1);

    sleep(1000);
}
//签到
function qd() {
    zjy();
    box = className("android.view.View").depth("11").indexInParent("0").findOne().bounds().bottom;

    if (className("android.widget.Button").desc("签到").exists()) {
        dqxyb();
        sleep(555);
        qd1 = dqxyb1;
        className("android.widget.Button").desc("签到").findOne().click();
        console.log("[签到]成功");
        sleep(666);
        dqxyb();
        qd2 = dqxyb1 - qd1;
        日志("📝 [签到领取]： " + qd2 + "个🪙");
    } else {
        console.log("已经[签到]过了");
    }
}
//开启提醒签到(收益+10%)
function txqd() {

    let click_xy2 = [random(1010, 1052), random(679, 706)];
    let x2 = click_xy2[0] / 1080 * device.width;
    let y2 = click_xy2[1] / 1920 * device.height;
    click(x2, y2);
    sleep(800)
    if (className("android.widget.Button").desc("再想想").findOne(1000)) {
        className("android.widget.Button").desc("再想想").findOne().click()
    } else {
        console.log("开启[提醒签到+10%]");
    }
}
//点击指定频道好物
function djzdpdhw() {
    let kj = className("android.view.View").desc("点击指定频道好物" + '\n' + "+100" + '\n' + "+200" + '\n' + "收益+10%");
    let an = className("android.widget.Button").desc("去完成");
    if (kj.exists()) {
        console.log("开始[点击指定频道好物]任务");
        sleep(800);
        console.hide();
        if (kj.findOne().bounds().bottom == box) {
            let click_xy1 = [random(535, 587), random(1715, 1767)];
            let x1 = click_xy1[0] / 1080 * device.width;
            let y1 = click_xy1[1] / 1920 * device.height;
            let click_xy2 = [random(679, 731), random(1539, 1591)];
            let x2 = click_xy2[0] / 1080 * device.width;
            let y2 = click_xy2[1] / 1920 * device.height;
            swipe(x1, y1, x2, y2, 300);
            sleep(1000);
        };
        let kjtop = kj.findOne().bounds().top + 70;
        let kjright = an.findOne().bounds().right - 40;
        let kjbottom = kj.findOne().bounds().bottom - 95;
        let kjleft = an.findOne().bounds().left + 40;
        click(random(kjleft, kjright), random(kjtop, kjbottom));
        sleep(1000);
        djzdpdhw2();

    } else {
        console.log("无[点击指定频道好物]任务")
    }
}

function djzdpdhw2() {
    if (className("android.view.View").desc("个宝贝，得").exists()) {

        let click_xy1 = [random(160, 362), random(339, 541)];
        let x1 = click_xy1[0] / 1080 * device.width;
        let y1 = click_xy1[1] / 1920 * device.height;
        click(x1, y1);
        kbbcs = kbbcs + 1;
        console.log("查看第" + kbbcs + "个宝贝");
        sleep(1000);
        back();
        sleep(2000);
        let click_xy2 = [random(705, 907), random(328, 530)];
        let x2 = click_xy2[0] / 1080 * device.width;
        let y2 = click_xy2[1] / 1920 * device.height;
        click(x2, y2);
        kbbcs = kbbcs + 1;
        console.log("查看第" + kbbcs + "个宝贝");
        sleep(1000);
        back();
        sleep(2000);
        let click_xy3 = [random(262, 314), random(1718, 1770)];
        let x3 = click_xy3[0] / 1080 * device.width;
        let y3 = click_xy3[1] / 1920 * device.height;
        click(x3, y3);
        kbbcs = kbbcs + 1;
        console.log("查看第" + kbbcs + "个宝贝");
        sleep(1000);
        back();
        sleep(2000);

        let click_xy4 = [random(784, 836), random(1712, 1764)];
        let x4 = click_xy4[0] / 1080 * device.width;
        let y4 = click_xy4[1] / 1920 * device.height;
        click(x4, y4);
        kbbcs = kbbcs + 1;
        console.log("查看第" + kbbcs + "个宝贝");
        sleep(1000);
        back();

        sleep(2000);
        back();
        sleep(1000);
        if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
            console.log("进入[领闲鱼币]")
            className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
            sleep(888);
            zjy();
            sleep(888);
            djzdpdhw();

        } else {
            console.log("未找到[领闲鱼币]页面");
            console.log("尝试重启[闲鱼]");
            csh();
        }

        console.show();

    } else {
        console.log("任务[点击指定频道好物]完成");
        任务奖励 = 任务奖励 + 100;
        订阅奖励 = 订阅奖励 + 10;
        日志("🧧[点击指定频道好物]： 100币🪙  订阅奖励： 10币🪙");
    }

}

//发布一件新宝贝
function fbyjxbb() {
    let kj = className("android.view.View").desc("发布一件新宝贝" + '\n' + "+100" + '\n' + "+300" + '\n' + "收益+10%");
    let an = className("android.widget.Button").desc("去完成");
    if (kj.exists()) {
        console.log("开始[发布一件新宝贝]任务");
        console.hide();
        sleep(800);
        if (kj.findOne().bounds().bottom == box) {
            let click_xy1 = [random(535, 587), random(1715, 1767)];
            let x1 = click_xy1[0] / 1080 * device.width;
            let y1 = click_xy1[1] / 1920 * device.height;
            let click_xy2 = [random(679, 731), random(1539, 1591)];
            let x2 = click_xy2[0] / 1080 * device.width;
            let y2 = click_xy2[1] / 1920 * device.height;
            swipe(x1, y1, x2, y2, 300);
            sleep(1000);
        };

        let kjtop = kj.findOne().bounds().top + 70;
        let kjright = an.findOne().bounds().right - 40;
        let kjbottom = kj.findOne().bounds().bottom - 100;
        let kjleft = an.findOne().bounds().left + 40;
        click(random(kjleft, kjright), random(kjtop, kjbottom));
        sleep(2000);
        if (className("android.widget.Button").desc("明日再来").findOne(1000)) {
            console.log("任务[发布一件新宝贝]已经完成");
            console.show();
        } else {
            fb();
        }

    } else {
        console.log("无[发布一件新宝贝]任务")
    }
}

function wfbd() {
    if (text("我的").findOne(1000)) {
        sleep(1111);

        let click_xy00 = [random(938, 990), random(1838, 1890)];
        let x00 = click_xy00[0] / 1080 * device.width;
        let y00 = click_xy00[1] / 1920 * device.height;
        click(x00, y00);
        sleep(2222);
        let click_xy0 = [random(114, 166), random(941, 993)];
        let x0 = click_xy0[0] / 1080 * device.width;
        let y0 = click_xy0[1] / 1920 * device.height;
        click(x0, y0);
        sleep(random(1555, 2333));
        xj();
    } else {
        launchApp("闲鱼");
        sleep(random(2222, 3333));
        back();
        sleep(555);
        wfbd();
    }

}

function fb() {
    if (className("android.view.View").desc("发布").exists()) {

        let click_xy1 = [random(956, 1008), random(727, 779)];
        let x1 = click_xy1[0] / 1080 * device.width;
        let y1 = click_xy1[1] / 1920 * device.height;
        click(x1, y1);
        sleep(random(900, 1111));

        let click_xy2 = [random(118, 170), random(779, 831)];
        let x2 = click_xy2[0] / 1080 * device.width;
        let y2 = click_xy2[1] / 1920 * device.height;
        click(x2, y2);
        sleep(random(1499, 1511));

        let click_xy3 = [random(497, 549), random(841, 893)];
        let x3 = click_xy3[0] / 1080 * device.width;
        let y3 = click_xy3[1] / 1920 * device.height;
        click(x3, y3);
        sleep(1500);

        let click_xy4 = [random(522, 574), random(1584, 1636)];
        let x4 = click_xy4[0] / 1080 * device.width;
        let y4 = click_xy4[1] / 1920 * device.height;
        let click_xy5 = [random(859, 911), random(513, 565)];
        let x5 = click_xy5[0] / 1080 * device.width;
        let y5 = click_xy5[1] / 1920 * device.height;
        swipe(x4, y4, x5, y5, random(800, 900));

        sleep(random(1490, 1550));
        className("android.view.View").desc("价格" + '\n' + "¥ 0.00").findOne().click();


        sleep(random(1111, 1550));

        let click_xy7 = [random(656, 708), random(1671, 1723)];
        let x7 = click_xy7[0] / 1080 * device.width;
        let y7 = click_xy7[1] / 1920 * device.height;
        click(x7, y7);
        sleep(555);

        let click_xy8 = [random(656, 708), random(1671, 1723)];
        let x8 = click_xy8[0] / 1080 * device.width;
        let y8 = click_xy8[1] / 1920 * device.height;
        click(x8, y8);
        sleep(555);

        let click_xy9 = [random(656, 708), random(1671, 1723)];
        let x9 = click_xy9[0] / 1080 * device.width;
        let y9 = click_xy9[1] / 1920 * device.height;
        click(x9, y9);
        sleep(555);
        let click_xy13 = [random(656, 708), random(1671, 1723)];
        let x13 = click_xy13[0] / 1080 * device.width;
        let y13 = click_xy13[1] / 1920 * device.height;
        click(x13, y13);
        sleep(1000);

        let click_xy14 = [random(210, 262), random(1274, 1326)];
        let x14 = click_xy14[0] / 1080 * device.width;
        let y14 = click_xy14[1] / 1920 * device.height;
        click(x14, y14);

        sleep(555);

        let click_xy11 = [random(656, 708), random(1681, 1733)];
        let x11 = click_xy11[0] / 1080 * device.width;
        let y11 = click_xy11[1] / 1920 * device.height;
        click(x11, y11);
        sleep(555);

        let click_xy12 = [random(936, 988), random(1720, 1772)];
        let x12 = click_xy12[0] / 1080 * device.width;
        let y12 = click_xy12[1] / 1920 * device.height;
        click(x12, y12);
        sleep(1000);

        let click_xy15 = [random(936, 973), random(100, 137)];
        let x15 = click_xy15[0] / 1080 * device.width;
        let y15 = click_xy15[1] / 1920 * device.height;
        click(x15, y15);

        sleep(4500);

        if (className("android.view.View").desc("发布成功").findOne(1000)) {
            console.log("任务[发布一件新宝贝]完成");
            back();
            任务奖励 = 任务奖励 + 100;
            订阅奖励 = 订阅奖励 + 10;
            日志("🧧[发布一件新宝贝]： 100币🪙  订阅奖励： 10币🪙");
        }
        sleep(random(2222, 3333));
        wfbd();
    } else {
        console.log("不在[发布]页面")
    }
}

function xj() {
    if (desc("已下架").findOne(5000)) {

        let click_xy16 = [random(64, 116), random(1266, 1303)];
        let x16 = click_xy16[0] / 1080 * device.width;
        let y16 = click_xy16[1] / 1920 * device.height;
        click(x16, y16);
        sleep(random(2222, 3333));

        let click_xy17 = [random(522, 574), random(1717, 1754)];
        let x17 = click_xy17[0] / 1080 * device.width;
        let y17 = click_xy17[1] / 1920 * device.height;
        click(x17, y17);
        sleep(random(2222, 3333));

        let click_xy18 = [random(705, 757), random(1052, 1089)];
        let x18 = click_xy18[0] / 1080 * device.width;
        let y18 = click_xy18[1] / 1920 * device.height;
        click(x18, y18);
        sleep(random(2222, 3333));
        scdt()

    } else {
        console.log("未进入[我发布的]页面");
        sleep(1111);
        wfbd();
    }
}

function scdt() {
    if (text("我的").findOne(1000)) {
        sleep(1111);

        let click_xy00 = [random(938, 990), random(1838, 1890)];
        let x00 = click_xy00[0] / 1080 * device.width;
        let y00 = click_xy00[1] / 1920 * device.height;
        click(x00, y00);
        sleep(random(2222, 3333));

        let click_xy1 = [random(139, 191), random(238, 290)];
        let x1 = click_xy1[0] / 1080 * device.width;
        let y1 = click_xy1[1] / 1920 * device.height;
        click(x1, y1);
        sleep(random(2222, 3333));

        let click_xy2 = [random(662, 724), random(1075, 1112)];
        let x2 = click_xy2[0] / 1080 * device.width;
        let y2 = click_xy2[1] / 1920 * device.height;
        click(x2, y2);
        sleep(random(2222, 3333));

        let click_xy3 = [random(1002, 1029), random(1191, 1218)];
        let x3 = click_xy3[0] / 1080 * device.width;
        let y3 = click_xy3[1] / 1920 * device.height;
        click(x3, y3);
        sleep(random(2222, 3333));

        let click_xy4 = [random(742, 769), random(1089, 1116)];
        let x4 = click_xy4[0] / 1080 * device.width;
        let y4 = click_xy4[1] / 1920 * device.height;
        click(x4, y4);
        sleep(random(2222, 3333));
        fhrw();

    } else {
        launchApp("闲鱼");
        sleep(random(2222, 3333));
        back();
        sleep(555);
        scdt();
    }


}

function fhrw() {
    if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
        console.log("进入[领闲鱼币]")
        className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
        sleep(555);
        lqjl();
        console.show();

    } else {
        if (text("我的").findOne(1000)) {
            sleep(1111);

            let click_xy00 = [random(938, 990), random(1838, 1890)];
            let x00 = click_xy00[0] / 1080 * device.width;
            let y00 = click_xy00[1] / 1920 * device.height;
            click(x00, y00);
            sleep(1111);
            fhrw();
        } else {
            launchApp("闲鱼");
            sleep(random(2222, 3333));
            back();
            sleep(555);
            fhrw();
        }

    }

}


//去逛一逛淘金币小镇
function qgygtjbxz() {
    let kj = className("android.view.View").desc("去逛一逛淘金币小镇" + '\n' + "+100" + '\n' + "+200" + '\n' + "收益+10%");
    let an = className("android.widget.Button").desc("去完成");
    if (kj.exists()) {
        console.log("开始[去逛一逛淘金币小镇]任务");
        sleep(800);
        console.hide();
        if (kj.findOne().bounds().bottom == box) {
            let click_xy1 = [random(535, 587), random(1715, 1767)];
            let x1 = click_xy1[0] / 1080 * device.width;
            let y1 = click_xy1[1] / 1920 * device.height;
            let click_xy2 = [random(679, 731), random(1539, 1591)];
            let x2 = click_xy2[0] / 1080 * device.width;
            let y2 = click_xy2[1] / 1920 * device.height;
            swipe(x1, y1, x2, y2, 300);
            sleep(1000);
        };
        let kjtop = kj.findOne().bounds().top + 70;
        let kjright = an.findOne().bounds().right - 40;
        let kjbottom = kj.findOne().bounds().bottom - 100;
        let kjleft = an.findOne().bounds().left + 40;
        click(random(kjleft, kjright), random(kjtop, kjbottom));
        sleep(1000);


    } else {
        console.log("无[去逛一逛淘金币小镇]任务")
    }

}


//去饿了么果园领水果
function qelmgylsg() {
    let kj = className("android.view.View").desc("去饿了么果园领水果" + '\n' + "+80" + '\n' + "+200" + '\n' + "收益+10%");
    let an = className("android.widget.Button").desc("去完成");
    if (kj.exists()) {
        console.log("开始[去饿了么果园领水果]任务");
        sleep(800);
        if (kj.findOne().bounds().bottom == box) {
            let click_xy1 = [random(535, 587), random(1715, 1767)];
            let x1 = click_xy1[0] / 1080 * device.width;
            let y1 = click_xy1[1] / 1920 * device.height;
            let click_xy2 = [random(679, 731), random(1539, 1591)];
            let x2 = click_xy2[0] / 1080 * device.width;
            let y2 = click_xy2[1] / 1920 * device.height;
            swipe(x1, y1, x2, y2, 300);
            sleep(1000);
        };
        let kjtop = kj.findOne().bounds().top + 70;
        let kjright = an.findOne().bounds().right - 40;
        let kjbottom = kj.findOne().bounds().bottom - 100;
        let kjleft = an.findOne().bounds().left + 40;
        click(random(kjleft, kjright), random(kjtop, kjbottom));
        sleep(2000);
        if (className("android.widget.Button").desc("明日再来").findOne(1800)) {
            console.log("任务[去饿了么果园领水果]已经完成");
        } else {

            if (className("android.widget.TextView").text("饿了么果园").findOne(15000)) {
                console.log("任务[去饿了么果园领水果]完成");
                任务奖励 = 任务奖励 + 80;
                订阅奖励 = 订阅奖励 + 8;
                日志("🧧[去饿了么果园领水果]： 80币🪙  订阅奖励： 8币🪙");
                launchApp("闲鱼");
                sleep(888);
                back();
                sleep(1111);
                lqjl();
                if (desc("闲鱼币").findOne(8000)) {
                    console.log("返回[闲鱼]");
                    sleep(888);
                    zjy();
                    lqjl();
                } else if (id("tab_title").className("android.widget.TextView").text("闲鱼").findOne(8000)) {

                    let click_xy1 = [random(933, 985), random(1808, 1860)];
                    let x1 = click_xy1[0] / 1080 * device.width;
                    let y1 = click_xy1[1] / 1920 * device.height;
                    click(x1, y1);
                    sleep(1500);
                    if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
                        console.log("进入[领闲鱼币]")
                        className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
                        sleep(500);
                        zjy();

                    } else {
                        console.log("未找到[领闲鱼币]页面");
                        console.log("任务结束");
                    }

                }
            } else {
                console.log("[超时]：未跳转到[饿了么]活动页面");
                launchApp("闲鱼");
                sleep(1000);
                if (desc("闲鱼币").findOne(3000)) {
                    console.log("返回[闲鱼]")
                    zjy();
                };
                if (id("tab_title").className("android.widget.TextView").text("闲鱼").findOne(8000)) {

                    let click_xy1 = [random(933, 985), random(1808, 1860)];
                    let x1 = click_xy1[0] / 1080 * device.width;
                    let y1 = click_xy1[1] / 1920 * device.height;
                    click(x1, y1);
                    sleep(1500);
                    if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
                        console.log("进入[领闲鱼币]")
                        className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
                        sleep(500);
                        zjy();

                    } else {
                        console.log("未找到[领闲鱼币]页面");
                        console.log("任务结束");
                    }

                }
            }

        }
    } else {

        if (qelmgylsg0 == 0) {
            hd();
            sleep(random(900, 1111));
            qelmgylsg0 = qelmgylsg0 + 1;
            qelmgylsg();
        } else {
            console.log("无[去饿了么果园领水果]任务")
        }
    }

}


//去淘特领好礼
function qttlhl() {
    let kj = className("android.view.View").desc("去淘特领好礼" + '\n' + "+80" + '\n' + "+200" + '\n' + "收益+10%");
    let an = className("android.widget.Button").desc("去完成");
    if (kj.exists()) {
        console.log("开始[去淘特领好礼]任务");
        sleep(800);
        if (kj.findOne().bounds().bottom == box) {
            let click_xy1 = [random(535, 587), random(1715, 1767)];
            let x1 = click_xy1[0] / 1080 * device.width;
            let y1 = click_xy1[1] / 1920 * device.height;
            let click_xy2 = [random(679, 731), random(1539, 1591)];
            let x2 = click_xy2[0] / 1080 * device.width;
            let y2 = click_xy2[1] / 1920 * device.height;
            swipe(x1, y1, x2, y2, 300);
            sleep(1000);
        };
        let kjtop = kj.findOne().bounds().top + 70;
        let kjright = an.findOne().bounds().right - 40;
        let kjbottom = kj.findOne().bounds().bottom - 100;
        let kjleft = an.findOne().bounds().left + 40;
        click(random(kjleft, kjright), random(kjtop, kjbottom));
        sleep(2000);
        if (className("android.widget.Button").desc("明日再来").findOne(1800)) {
            console.log("任务[去淘特领好礼]已经完成");
        } else {
            if (text("规则").findOne(15000)) {
                console.log("任务[去淘特领好礼]完成");
                任务奖励 = 任务奖励 + 80;
                订阅奖励 = 订阅奖励 + 8;
                日志("🧧[去淘特领好礼]： 80币🪙  订阅奖励： 8币🪙");
                launchApp("闲鱼");
                if (text("淘特App 源头好货 不止特价").findOne(15000)) {
                    sleep(500);
                    back();
                    sleep(1111);
                    lqjl();
                    if (desc("闲鱼币").findOne(8000)) {
                        console.log("返回[闲鱼]");
                        sleep(888);
                        zjy();
                        lqjl();
                    } else if (id("tab_title").className("android.widget.TextView").text("闲鱼").findOne(8000)) {

                        let click_xy1 = [random(933, 985), random(1808, 1860)];
                        let x1 = click_xy1[0] / 1080 * device.width;
                        let y1 = click_xy1[1] / 1920 * device.height;
                        click(x1, y1);
                        sleep(1500);
                        if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
                            console.log("进入[领闲鱼币]")
                            className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
                            sleep(500);
                            zjy();

                        } else {
                            console.log("未找到[领闲鱼币]页面");
                            console.log("任务结束");
                        }

                    }

                } else {
                    console.log("[超时]：无法返回[闲鱼]活动页面");
                }

            } else {
                console.log("[超时]：未跳转到[淘特]活动页面");
                launchApp("闲鱼");
                sleep(1000);
                if (desc("闲鱼币").findOne(3000)) {
                    console.log("返回[闲鱼]")
                    zjy();
                };
                if (id("tab_title").className("android.widget.TextView").text("闲鱼").findOne(8000)) {

                    let click_xy1 = [random(933, 985), random(1808, 1860)];
                    let x1 = click_xy1[0] / 1080 * device.width;
                    let y1 = click_xy1[1] / 1920 * device.height;
                    click(x1, y1);
                    sleep(1500);
                    if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
                        console.log("进入[领闲鱼币]")
                        className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
                        sleep(500);
                        zjy();

                    } else {
                        console.log("未找到[领闲鱼币]页面");
                        console.log("任务结束");
                    }

                }
            }
        }
    } else {
        if (qttlhl0 == 0) {
            hd();
            sleep(random(900, 1111));
            qttlhl0 = qttlhl0 + 1;
            qttlhl();
        } else {
            console.log("无[去淘特领好礼]任务")
        }
    }


}



//去菜鸟抽手机
function qcncsj() {
    let kj = className("android.view.View").desc("去菜鸟抽手机" + '\n' + "+80" + '\n' + "+200" + '\n' + "收益+10%");
    let an = className("android.widget.Button").desc("去完成");
    if (kj.exists()) {
        console.log("开始[去菜鸟抽手机]任务");
        sleep(800);
        if (kj.findOne().bounds().bottom == box) {
            let click_xy1 = [random(535, 587), random(1715, 1767)];
            let x1 = click_xy1[0] / 1080 * device.width;
            let y1 = click_xy1[1] / 1920 * device.height;
            let click_xy2 = [random(679, 731), random(1539, 1591)];
            let x2 = click_xy2[0] / 1080 * device.width;
            let y2 = click_xy2[1] / 1920 * device.height;
            swipe(x1, y1, x2, y2, 300);
            sleep(1000);
        };
        let kjtop = kj.findOne().bounds().top + 70;
        let kjright = an.findOne().bounds().right - 40;
        let kjbottom = kj.findOne().bounds().bottom - 100;
        let kjleft = an.findOne().bounds().left + 40;
        click(random(kjleft, kjright), random(kjtop, kjbottom));
        sleep(2000);
        if (className("android.widget.Button").desc("明日再来").findOne(1800)) {
            console.log("任务[去菜鸟抽手机]已经完成");
        } else {
            if (text("签到").findOne(15000)) {
                console.log("任务[去菜鸟抽手机]完成");
                任务奖励 = 任务奖励 + 80;
                订阅奖励 = 订阅奖励 + 8;
                日志("🧧[去菜鸟抽手机]： 80币🪙  订阅奖励： 8币🪙");
                launchApp("闲鱼");
                if (text("裹酱积分商城").findOne(15000)) {
                    sleep(500);
                    back();
                    sleep(1111);
                    lqjl();
                    if (desc("闲鱼币").findOne(8000)) {
                        console.log("返回[闲鱼]");
                        sleep(888);
                        zjy();
                        lqjl();
                    } else if (id("tab_title").className("android.widget.TextView").text("闲鱼").findOne(8000)) {

                        let click_xy1 = [random(933, 985), random(1808, 1860)];
                        let x1 = click_xy1[0] / 1080 * device.width;
                        let y1 = click_xy1[1] / 1920 * device.height;
                        click(x1, y1);
                        sleep(1500);
                        if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
                            console.log("进入[领闲鱼币]")
                            className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
                            sleep(500);
                            zjy();

                        } else {
                            console.log("未找到[领闲鱼币]页面");
                            console.log("任务结束");
                        }

                    }

                } else {
                    console.log("[超时]：无法返回[闲鱼]活动页面");
                }

            } else {
                console.log("[超时]：未跳转到[菜鸟]活动页面");
                launchApp("闲鱼");
                sleep(1000);
                if (desc("闲鱼币").findOne(3000)) {
                    console.log("返回[闲鱼]");
                    sleep(888);
                    zjy();
                };
                if (id("tab_title").className("android.widget.TextView").text("闲鱼").findOne(8000)) {

                    let click_xy1 = [random(933, 985), random(1808, 1860)];
                    let x1 = click_xy1[0] / 1080 * device.width;
                    let y1 = click_xy1[1] / 1920 * device.height;
                    click(x1, y1);
                    sleep(1500);
                    if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
                        console.log("进入[领闲鱼币]")
                        className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
                        sleep(500);
                        zjy();

                    } else {
                        console.log("未找到[领闲鱼币]页面");
                        console.log("任务结束");
                    }

                }
            }

        }

    } else {
        if (qcncsj0 == 0) {
            hd();
            sleep(random(900, 1111));
            qcncsj0 = qcncsj0 + 1;
            qcncsj();
        } else {
            console.log("无[去菜鸟抽手机]任务")
        }
    }

}


//去天猫拿红包
function qtmnhb() {
    let kj = className("android.view.View").desc("去天猫拿红包" + '\n' + "+80" + '\n' + "+200" + '\n' + "收益+10%");
    let an = className("android.widget.Button").desc("去完成");
    if (kj.exists()) {
        console.log("开始[去天猫拿红包]任务");
        sleep(800);
        if (kj.findOne().bounds().bottom == box) {
            let click_xy1 = [random(535, 587), random(1715, 1767)];
            let x1 = click_xy1[0] / 1080 * device.width;
            let y1 = click_xy1[1] / 1920 * device.height;
            let click_xy2 = [random(679, 731), random(1539, 1591)];
            let x2 = click_xy2[0] / 1080 * device.width;
            let y2 = click_xy2[1] / 1920 * device.height;
            swipe(x1, y1, x2, y2, 300);
            sleep(1000);
        };
        let kjtop = kj.findOne().bounds().top + 70;
        let kjright = an.findOne().bounds().right - 40;
        let kjbottom = kj.findOne().bounds().bottom - 100;
        let kjleft = an.findOne().bounds().left + 40;
        click(random(kjleft, kjright), random(kjtop, kjbottom));
        sleep(2000);
        if (className("android.widget.Button").desc("明日再来").findOne(1800)) {
            console.log("任务[去天猫拿红包]已经完成");
        } else {
            if (className("android.view.View").text("记录").findOne(15000)) {
                console.log("任务[去天猫拿红包]完成");
                任务奖励 = 任务奖励 + 80;
                订阅奖励 = 订阅奖励 + 8;
                日志("🧧[去天猫拿红包]： 80币🪙  订阅奖励： 8币🪙");
                launchApp("闲鱼");
                if (text("闲鱼X天猫APP福利").findOne(15000)) {
                    sleep(500);
                    back();
                    sleep(1111);
                    lqjl();
                    if (desc("闲鱼币").findOne(8000)) {
                        console.log("返回[闲鱼]");
                        sleep(888);
                        zjy();
                        lqjl();
                    } else if (id("tab_title").className("android.widget.TextView").text("闲鱼").findOne(8000)) {

                        let click_xy1 = [random(933, 985), random(1808, 1860)];
                        let x1 = click_xy1[0] / 1080 * device.width;
                        let y1 = click_xy1[1] / 1920 * device.height;
                        click(x1, y1);
                        sleep(1500);
                        if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
                            console.log("进入[领闲鱼币]")
                            className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
                            sleep(500);
                            zjy();

                        } else {
                            console.log("未找到[领闲鱼币]页面");
                            console.log("任务结束");
                        }

                    }

                } else {
                    console.log("[超时]：无法返回[闲鱼]活动页面");
                }

            } else {
                console.log("[超时]：未跳转到[天猫]活动页面");
                launchApp("闲鱼");
                sleep(1000);
                if (desc("闲鱼币").findOne(3000)) {
                    console.log("返回[闲鱼]");
                    sleep(888);
                    zjy();
                };
                if (id("tab_title").className("android.widget.TextView").text("闲鱼").findOne(8000)) {

                    let click_xy1 = [random(933, 985), random(1808, 1860)];
                    let x1 = click_xy1[0] / 1080 * device.width;
                    let y1 = click_xy1[1] / 1920 * device.height;
                    click(x1, y1);
                    sleep(1500);
                    if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
                        console.log("进入[领闲鱼币]")
                        className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
                        sleep(500);
                        zjy();

                    } else {
                        console.log("未找到[领闲鱼币]页面");
                        console.log("任务结束");
                    }

                }
            }
        }
    } else {
        if (qtmnhb0 == 0) {
            hd();
            sleep(random(900, 1111));
            qtmnhb0 = qtmnhb0 + 1;
            qtmnhb();
        } else {
            console.log("无[天猫拿红包]任务")
        }
    }

}
//去高德免费领水果
function qgdmflsg() {
    let kj = className("android.view.View").desc("去高德免费领水果" + '\n' + "+80" + '\n' + "+200" + '\n' + "收益+10%");
    let an = className("android.widget.Button").desc("去完成");
    if (kj.exists()) {
        console.log("开始[去高德免费领水果]任务");
        sleep(800);
        if (kj.findOne().bounds().bottom == box) {
            let click_xy1 = [random(535, 587), random(1715, 1767)];
            let x1 = click_xy1[0] / 1080 * device.width;
            let y1 = click_xy1[1] / 1920 * device.height;
            let click_xy2 = [random(679, 731), random(1539, 1591)];
            let x2 = click_xy2[0] / 1080 * device.width;
            let y2 = click_xy2[1] / 1920 * device.height;
            swipe(x1, y1, x2, y2, 300);
            sleep(1000);
        };
        let kjtop = kj.findOne().bounds().top + 70;
        let kjright = an.findOne().bounds().right - 40;
        let kjbottom = kj.findOne().bounds().bottom - 100;
        let kjleft = an.findOne().bounds().left + 40;
        click(random(kjleft, kjright), random(kjtop, kjbottom));
        sleep(2000);
        if (className("android.widget.Button").desc("明日再来").findOne(1800)) {
            console.log("任务[去高德免费领水果]已经完成");
        } else {

            if (packageName("com.autonavi.minimap").depth("16").indexInParent("4").findOne(15000)) {
                console.log("任务[去高德免费领水果]完成");
                任务奖励 = 任务奖励 + 80;
                订阅奖励 = 订阅奖励 + 8;
                日志("🧧[去高德免费领水果]： 80币🪙  订阅奖励： 8币🪙");
                launchApp("闲鱼");
                sleep(888);
                back();
                sleep(1111);
                lqjl();
                if (desc("闲鱼币").findOne(8000)) {
                    console.log("返回[闲鱼]");
                    sleep(888);
                    zjy();
                    lqjl();
                } else if (id("tab_title").className("android.widget.TextView").text("闲鱼").findOne(8000)) {

                    let click_xy1 = [random(933, 985), random(1808, 1860)];
                    let x1 = click_xy1[0] / 1080 * device.width;
                    let y1 = click_xy1[1] / 1920 * device.height;
                    click(x1, y1);
                    sleep(1500);
                    if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
                        console.log("进入[领闲鱼币]")
                        className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
                        sleep(500);
                        zjy();

                    } else {
                        console.log("未找到[领闲鱼币]页面");
                        console.log("任务结束");
                    }

                }
            } else {
                console.log("[超时]：未跳转到[高德地图]活动页面");
                launchApp("闲鱼");
                sleep(1000);
                if (desc("闲鱼币").findOne(3000)) {
                    console.log("返回[闲鱼]")
                    zjy();
                };
                if (id("tab_title").className("android.widget.TextView").text("闲鱼").findOne(8000)) {

                    let click_xy1 = [random(933, 985), random(1808, 1860)];
                    let x1 = click_xy1[0] / 1080 * device.width;
                    let y1 = click_xy1[1] / 1920 * device.height;
                    click(x1, y1);
                    sleep(1500);
                    if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
                        console.log("进入[领闲鱼币]")
                        className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
                        sleep(500);
                        zjy();

                    } else {
                        console.log("未找到[领闲鱼币]页面");
                        console.log("任务结束");
                    }

                }
            }

        }
    } else {

        if (qgdmflsg0 == 0) {
            hd();
            sleep(random(900, 1111));
            qgdmflsg0 = qgdmflsg0 + 1;
            qgdmflsg();
        } else {
            console.log("无[去高德免费领水果]任务")
        }
    }

}

//领取奖励
function lqjl() {
    if (className("android.widget.Button").desc("明日再来").findOne(2000)) {

        let click_xy1 = [random(995, 1027), random(536, 568)];
        let x1 = click_xy1[0] / 1080 * device.width;
        let y1 = click_xy1[1] / 1920 * device.height;
        click(x1, y1);
        sleep(1500);
        zjy();
        if (className("android.widget.Button").desc("领取奖励").findOne(2000)) {
            className("android.widget.Button").desc("领取奖励").findOne().click();
            console.log("[领取奖励]成功");
            sleep(500);
            lqjl();
        }
    } else {
        zjy();
        sleep(1111);
        lqjl();
    }
}


//升级小店
function sjxd() {
    if (className("android.view.View").desc("提醒签到" + '\n' + "收益+10%").exists()) {

        let click_xy2 = [random(995, 1027), random(537, 569)];
        let x2 = click_xy2[0] / 1080 * device.width;
        let y2 = click_xy2[1] / 1920 * device.height;
        click(x2, y2);
        sleep(888);
        sjxd2();
    };
    if (className("android.view.View").desc("闲鱼币").exists()) {
        sjxd2();
    };
    if (className("android.widget.ImageView").desc("领闲鱼币").exists()) {
        console.log("进入[领闲鱼币]")
        className("android.widget.ImageView").desc("领闲鱼币").findOne().click();
        sleep(888);
        sjxd2();
    }

}

function sjxd2() {
    if (className("android.view.View").desc("提醒签到" + '\n' + "收益+10%").exists()) {
        let click_xy5 = [random(995, 1027), random(537, 569)];
        let x5 = click_xy5[0] / 1080 * device.width;
        let y5 = click_xy5[1] / 1920 * device.height;
        click(x5, y5);
        sleep(888);
    }

    let click_xy1 = [random(523, 575), random(857, 909)];
    let x1 = click_xy1[0] / 1080 * device.width;
    let y1 = click_xy1[1] / 1920 * device.height;
    click(x1, y1);

    sleep(random(888, 1111));
    if (className("android.widget.ImageView").depth("9").indexInParent("5").findOne(1000)) {

        let click_xy2 = [random(520, 572), random(1274, 1326)];
        let x2 = click_xy2[0] / 1080 * device.width;
        let y2 = click_xy2[1] / 1920 * device.height;
        click(x2, y2);
    };
    if (className("android.widget.ImageView").depth("9").indexInParent("10").findOne(1000)) {
        let click_xy4 = [random(509, 561), random(1271, 1323)];
        let x4 = click_xy4[0] / 1080 * device.width;
        let y4 = click_xy4[1] / 1920 * device.height;
        click(x4, y4);

    };
    if (desc("奖励: 闲鱼币x50").findOne(1000)) {
        let click_xy4 = [random(509, 561), random(1271, 1323)];
        let x4 = click_xy4[0] / 1080 * device.width;
        let y4 = click_xy4[1] / 1920 * device.height;
        click(x4, y4);

    };

    sleep(random(888, 1111));
    if (className("android.view.View").desc("提醒签到" + '\n' + "收益+10%").exists()) {
        console.log("[经验不够]：无法继续升级");

        let click_xy3 = [random(995, 1027), random(537, 569)];
        let x3 = click_xy3[0] / 1080 * device.width;
        let y3 = click_xy3[1] / 1920 * device.height;
        click(x3, y3);
        sleep(888);
    } else {
        console.log("升级成功");
        sleep(1000);
        sjxd2();
    };


}

//上滑动屏幕
function hd() {

    let click_xy1 = [random(490, 542), random(1425, 1477)];
    let x1 = click_xy1[0] / 1080 * device.width;
    let y1 = click_xy1[1] / 1920 * device.height;
    let click_xy2 = [random(502, 554), random(1041, 1093)];
    let x2 = click_xy2[0] / 1080 * device.width;
    let y2 = click_xy2[1] / 1920 * device.height;
    swipe(x1, y1, x2, y2, 300)
}

function 日志(data) {
    files.append("/sdcard/🐟🪙" + n + "-" + y + "-" + r + ".log", data + "\n", encoding = "UTF-8");
}

function 闲鱼币() {
    dqxyb();
    日志("💰 闲鱼币：" + dqxyb1 + "🪙  ( 💴 ≈ " + (dqxyb1 / 10000) * 8 + "元 )");
}

function 任务明细() {
    日志("📃 任务奖励: " + 任务奖励 + "🪙   订阅奖励: " + 订阅奖励 + "🪙");
}

function 今日收益() {
    dqxyb();
    let xyb3 = dqxyb1 - jrsy;
    日志("📈 今日的收益：" + xyb3 + "🪙  ( 💴 ≈ " + (xyb3 / 10000) * 8 + "元 )");
}

function time() {
    let myDate = new Date();
    n = myDate.getFullYear();
    y = myDate.getMonth() + 1;
    r = myDate.getDate();
    let s = myDate.getHours();
    let f = myDate.getMinutes();
    let m = myDate.getSeconds();
    时间 = "🕒 " + s + "时" + f + "分" + m + "秒:  ";
}

function 耗时(){
    let myDate = new Date();
    let s = myDate.getHours()-s1;
    let f = myDate.getMinutes()-f1;
    let m = myDate.getSeconds();
    日志("⏳ 总耗时"+ s +"时"+ f+"分"+ m+"秒");
    
}
