$(document).ready(function() {
	$("#data").data("count", 0);
	$("#hide_button").click(function() {
		$("#toggle").hide();
	});
	$("#show_button").click(function() {
		$("#toggle").show();
	});
	$("#toggle_button").click(function() {
		$("#toggle").toggle();
	});
	$("#slide_down_button").click(function() {
		$("#slide").slideDown();
	});
	$("#slide_up_button").click(function() {
		$("#slide").slideUp();
	});
	$("#slide_toggle_button").click(function() {
		$("#slide").slideToggle();
	});
	$("#fade_in_button").click(function() {
		$("#fade").fadeIn();
	});
	$("#fade_out_button").click(function() {
		$("#fade").fadeOut();
	});
	$("#add_class_button").click(function() {
		$("#add_class").addClass("serif");
	});
	$("#before_button").click(function() {
		$("#before_after").before("<h1>Before</h1>");
	});
	$("#after_button").click(function() {
		$("#before_after").after("<h1>After</h1>");
	});
	$("#append_button").click(function() {
		$("#append").append(" appended");
	});
	$("#html_button").click(function() {
		$("#html").html("<h1>HTML replaced</h1>");
	});
	$("#attr_button").click(function() {
		$("#attr").attr("style", "color: red");
	});
	$("#data_button").click(function() {
		$("#data").data("count", $("#data").data("count") + 1);
		$("#data").text($("#data").data("count"));
	});
});
