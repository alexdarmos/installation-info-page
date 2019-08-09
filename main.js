$( () => {
    $(`.email-button`).on('click', (e) => {
        console.log(`click`);
        $('html,body').animate({
            scrollTop: $("#contact-container").offset().top},
            'slow');
    })

    $('.banner').lazy();

})

