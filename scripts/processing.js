function listProcessing() {
    $('.btn').on('click', submit);
    $('.input').on('keypress', function (e) {
        if (e.which  === 13) submit();
    });

    function submit() {
        let input = $('.input');
        write(input.val());
        input.val('');
    }
}