"ui";
ui.statusBarColor("#ffffff")
ui.layout(
    <vertical id="bfbox" w="*" gravity="center">
        <frame gravity="center" layout_gravity="center|top">
            <img src="https://tuchuangs.com/imgs/2022/09/21/ee8e7a41d47ea963.jpg" w="*" h="auto" radius="20dp" margin="10" scaleType="fitCenter" gravity="center"/>
        </frame>
        <tabs id="tabs" w="*" h="12dp" layout_gravity="center"/>
        <viewpager id="viewpager" h="*" layout_gravity="center">
            <frame>
                <list id="cardList" w="*" h="*">
                    <card id="carditem" w="*" h="60" margin="10" cardCornerRadius="16dp" gravity="center">
                        <horizontal w="*" h="*" gravity="center|left">
                            <img src="{{this.iconsrc}}" w="40" h="40" radius="50dp" margin="10" gravity="center"/>
                            <frame w="*" gravity="center|right">
                                <text w="*" id="{{this.id}}" gravity="center_vertical" text="{{this.title}}" />
                                <checkbox w="auto" id="check" checked="{{this.checkeds}}" margin="10" text=""/>
                            </frame>
                        </horizontal>
                    </card>
                </list>
            </frame>
            <frame>
            <vertical gravity="center|top">
                <horizontal gravity="center" h="auto">
                    <Switch id="无障碍服务" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
                    <Switch id="悬浮窗权限" text="悬浮窗权限" checked="{{floaty.checkPermission() != false}}" padding="8 8 8 8" textSize="15sp"/>
                </horizontal>
                <button id="reset" w="320px" h="125px" text="重置界面" bg="#efefef"  radius="50dp"/>
                </vertical>
            </frame>
            <frame>
                <text text="关于程序" textColor="green" textSize="16sp"/>
            </frame>
           
        </viewpager>

    </vertical>
);

threads.start(function() {
    //console.show();

})
var version = "1.0.0";
var cardList = [{
        id: "tbgyg",
        title: "淘宝逛一逛",
        iconsrc: "https://cdn.staticaly.com/gh/bfkjz/bfkjz.github.io/master/static/img/favicon.ico",
        checkeds: false
    },
    {
        id: "cngyg",
        title: "菜鸟逛一逛",
        iconsrc: "https://cdn.staticaly.com/gh/bfkjz/bfkjz.github.io/master/static/img/favicon.ico",
        checkeds: false
    },
    {
        id: "cngyg",
        title: "天猫逛一逛",
        iconsrc: "https://cdn.staticaly.com/gh/bfkjz/bfkjz.github.io/master/static/img/favicon.ico",
        checkeds: false
    },
    {
        id: "cngyg",
        title: "高德逛一逛",
        iconsrc: "https://cdn.staticaly.com/gh/bfkjz/bfkjz.github.io/master/static/img/favicon.ico",
        checkeds: false
    },
    {
        id: "cngyg",
        title: "支付宝逛一逛",
        iconsrc: "https://cdn.staticaly.com/gh/bfkjz/bfkjz.github.io/master/static/img/favicon.ico",
        checkeds: false
    },
    {
        id: "cngyg",
        title: "支付宝逛一逛2",
        iconsrc: "https://cdn.staticaly.com/gh/bfkjz/bfkjz.github.io/master/static/img/favicon.ico",
        checkeds: false
    },
    {
        id: "cngyg",
        title: "支付宝逛一逛3",
        iconsrc: "https://cdn.staticaly.com/gh/bfkjz/bfkjz.github.io/master/static/img/favicon.ico",
        checkeds: false
    },
    {
        id: "cngyg",
        title: "支付宝逛一逛4",
        iconsrc: "https://cdn.staticaly.com/gh/bfkjz/bfkjz.github.io/master/static/img/favicon.ico",
        checkeds: false
    },
    {
        id: "cngyg",
        title: "支付宝逛一逛5",
        iconsrc: "https://cdn.staticaly.com/gh/bfkjz/bfkjz.github.io/master/static/img/favicon.ico",
        checkeds: false
    },
    {
        id: "cngyg",
        title: "支付宝逛一逛6",
        iconsrc: "https://cdn.staticaly.com/gh/bfkjz/bfkjz.github.io/master/static/img/favicon.ico",
        checkeds: false
    }
];

//for (let i = 0; i < cardList.length; i++) {
//console.log(cardList[i]);
//  storage.put(cardList[i].id, cardList[i].checkeds);
//}
// ui.cardList.setDataSource(cardList);


var storage = storages.create("cardLists");

var Ver = storage.get("version");
if (Ver) {
    let Ver2 = storage.get("version");
    console.log("当前版本：" + Ver2);
    console.log("云端版本：" + version)
    let VerA = Ver2.split('.')[0];
    let VerB = Ver2.split('.')[1];
    let VerC = Ver2.split('.')[2];
    // console.log("大版本："+VerA);
    // console.log("中版本："+VerB);
    // console.log("小版本："+VerC);

} else {
    storage.put("version", version);
}

var config = storage.get("items");
if (config) {
    ui.cardList.setDataSource(config);
} else {
    ui.cardList.setDataSource(cardList);
    storage.put("items", cardList);
}


// //当离开本界面时保存todoList
// ui.emitter.on("pause", () => {
//     storage.put("items", cardList);
// });

// ui.viewpager.setTitles(["🏠", "🛠️", "🏷"]);

ui.tabs.setupWithViewPager(ui.viewpager);


ui.reset.on("click", ()=>{
    toast("重启软件生效");
    storage.clear();
    //storage.put("items", cardList);
});

threads.start(function () {
    var xfan = floaty.window(
        <frame>
            <button id="go" w="320px" h="125px" text="开始运行" style="Widget.AppCompat.Button.Colored" />
        </frame>
    );
    let zZ = 760 / 1080 * device.width;
    let yZ = 825 / 1920 * device.height;
    xfan.setPosition(zZ, yZ);   //设置位置（x，y）
    xfan.go.click(function () {
        反状态 = xfan.go.getText();
        if (反状态 == "停止运行") {
            toast("已经停止运行");
            ui.run(function () {
                xfan.go.setText("开始运行");
                //engines.stopAll();
                //exit();
            });
        } else {
            xfan.go.setText("停止运行");
            threads.start(function () {
                toast("开始运行");
            });
        }

    });

});



ui.cardList.on("item_click", function(item, i, itemView, listView) {
    if (itemView.check.checked == false) {
        itemView.check.checked = true
        cardList[i]["checkeds"] = true
    } else {
        itemView.check.checked = false
        cardList[i]["checkeds"] = false
    }
    storage.put("items", cardList);


});

ui.cardList.on("item_bind", function(itemView, itemHolder) {
    //绑定勾选框事件
    itemView.check.on("check", function(checked) {
        let item = itemHolder.item;
        let ititle = item.title;
        var x = 0;
        for (let i = 0; i < cardList.length; i++) {
            if (ititle == cardList[i].title) {
                x = i;
            }
        }
        if (checked == true) {
            cardList[x]["checkeds"] = true;
        } else {
            cardList[x]["checkeds"] = false;
        }
        storage.put("items", cardList);
    });
});

//两次才能返回
threads.start(function () {
    var isCanFinish = false;
    var isCanFinishTimeout;
    ui.emitter.on("back_pressed", e => {
        if (!isCanFinish) {
            isCanFinish = true;
            isCanFinishTimeout = setTimeout(() => {
                toastLog("再按一次退出");
                isCanFinish = false;
            }, 500);
            console.hide();
            engines.stopAll();
            e.consumed = true;
        } else {
            clearTimeout(isCanFinishTimeout);
            e.consumed = false;
        };
    });
    setInterval(() => { }, 1000)
});
