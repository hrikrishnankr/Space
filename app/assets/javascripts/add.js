$(document).ready(function() {
    $("#add").hide();
    $(document).on("click","#addBtn",function() {
        $("#add").show();
        $("#showAdd").hide();
    });
    $(document).on("click","#submitBtn",function() {
       	$("#add").hide();
      	$("#showAdd").show();
    });
});