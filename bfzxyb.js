"ui";
ui.layout(
    <vertical> //垂直布局
    <horizontal gravity="center"> //水平布局
    </horizontal>
    <text marginLeft="20" text="文本" textSize="20" textColor="#ffffff" w="auto" h="auto />  //文本
    <button paddingLeft="30" text="按钮" layout_gravity="left" gravity="center" w="*" h="auto" id="button" /> //按钮
    <img src="图片链接" layout_gravity="center"  w="200" h="200" /> //图片
    <input w="60" id="input" text="输入框预设值" inputType="number"/>
    
    <radiogroup> //单选框
       <radio id="1" text="1" />
       <radio id="2" text="2" />
       <radio id="3" text="3" />
       <radio id="4" text="4" />
    </radiogroup>
)


ui.button.click(function(){
    main();
})

function main(){
  console.log("ok")
}
