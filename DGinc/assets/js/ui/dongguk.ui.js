function dropdown(id, btn){
    var $id = $(id);
    var $btn = $(btn);
    $id.slideToggle('fast').toggleClass('is-visible');

    $(document).off('click.dropdown focusin.gnb').on('click.dropdown focusin.gnb', function(e){
        var isTarget = $id.has(e.target).length === 0;
        var exTarget = $btn.has(e.target).length === 0;
        if (isTarget && exTarget){
            $id.slideUp('fast').removeClass('is-visible');
        }
    })
}