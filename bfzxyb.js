"ui";
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
