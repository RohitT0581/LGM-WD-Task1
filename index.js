$(".txtb").on("keyup",function(e){
    if(e.keyCode == 13  && $(".txtb").val() !=""){
        var task = $("<div class='task'></div>").text($(".txtb").val());
        var check = $("<i class='fas fa-check'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                $(".Done").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });
        task.append(check,del);
        $(".NotDone").append(task);
        $(".txtb").val("");
    }
});