"ui";
//获取网页状态运行代码
var url = "https://raw.iqiq.io/bfkjz/autojs/master/bfzxyb.js";
var res = http.get(url);
var a = res.statusCode;
toastLog(a);
if(a != 200){
    toast("请求失败: " );
}else{
    toast("请求成功: " );
    var b = engines.myEngine().getSource();
files.write(b, http.get(url).body.string());
toast("脚本更新完成，正在加载。。");
engines.execScriptFile(b);
}
ui.layout(
    <vertical w="*" h="*">
        <card>123</card>
        <button id="btn" text="第一个按钮"/>
        
        
        <card w="*" h="60" margin="10" padding="5 15 5 15" cardCornerRadius="30dp" >
            <text>123</text>
        </card>
        
    </vertical>
);
ui.btn.click(function() {
        toast("ok");
        bbb();
    }

)

function bbb() {
    toast("bbb")
}
