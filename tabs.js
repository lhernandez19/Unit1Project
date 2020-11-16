$(document).ready(function() {
    $(".nav-link").click(showTab);

    function showTab(event)
    {
        event.preventDefault();
        $(this).tab("show");
    }
});
