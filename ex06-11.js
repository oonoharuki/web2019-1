<form name="timer">
<input type="button"value="スタート"onclick="hyoji()"></input>
<br></br>
<input type="text"name="moji"size="30"value=""></input>
</form>
function hyouji(){
    //表示する文字
    var str="一文字ずつ表示します。";
    //テキストボックスの文字数
    var cnt=document.timer.moji.value.length;
    //文字が全部表示されているか確認 if(cnt<11){
    //現在より１文字多く切り出して表示
    document.timer.moji.value=str.substr(0,cnt+1);}
    else{
    //全て表示されたら、空文字に戻す
    dsocument.timer.moji.value="";}
    //setTimeout()を含む関数を呼び出す
    setTimeout("hyoji()",1000);}
