$(function () {
    console.log('hh');
    $.post('/data',{"getData": true},function (result) {
        console.log(result);
        $('#data').html(result);
    });
    // $.ajax({
    //     type: "post",
    //     url: "/data",
    //     data: {"getData": true},
    //     success: function (result) {
    //         console.log(result);
    //         $('#data').html(result);
    //     }
    // });
})
