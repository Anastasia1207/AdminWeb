$(document).ready( function () {
    $('#myTable').DataTable();
} );
$('.delete-button').on('click', function() {
    $(this).parent().parent().remove();
});
