$(document).ready(function() {
    $(document).on("click","#addBtn",function() {
$('#add').trigger("reset");
        $("#add").show();
        $("#showAdd").hide();
    });
    $(document).on("click","#submitBtn",function() {

           		$("#add").hide();
      	$("#showAdd").show();
    });
});