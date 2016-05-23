$(document).ready(function () {
    $('.galleryContainerRow').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        removalDelay: 500,
        mainClass: 'mfp-with-zoom mfp-img-mobile animated fadeIn',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }

    });
});