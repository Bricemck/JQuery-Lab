// jQuery equivalent of your DOM setup and event logic

$(document).ready(function () {
    const $requestElement = $('#request');
    const $inputElement = $('#input');
    const $inputReceived = $('#customer-input');
    const $likeButtonElement = $('#like-button');
    const $displayArticle = $('#article');
    const $blogToggle = $('#blog-button');
    const $imgCaption = $('#founder img');
    const $innerText = $('.innerText p');
    const $toggleButton = $('#dark-mode');
    const $body = $('body');

    let isImgDisplay = false;
    let isDisplay = true;
    let likesCount = 0;

    // Mouseover for image caption
    $imgCaption.on('mouseover', function () {
        if (!isImgDisplay) {
            $innerText.css('display', 'block');
            isImgDisplay = true;
        } else {
            $innerText.css('display', 'none');
            isImgDisplay = false;
        }
    });

    // Toggle blog article
    $blogToggle.on('click', function () {
        if (isDisplay) {
            $displayArticle.css('display', 'none');
            isDisplay = false;
        } else {
            $displayArticle.css('display', 'block');
            isDisplay = true;
        }
    });

    // Like button
    $likeButtonElement.on('click', function () {
        likesCount += 1;
        $likeButtonElement.text(`${likesCount} likes. like this post!`);
    });

    // Handle request and input
    $requestElement.on('click', function () {
        let customerInput = $inputElement.val();
        $('#apples').html(customerInput);
        $inputElement.val('');
    });

    // Dark mode toggle
    $body.addClass('light-mode');

    $toggleButton.on('click', function () {
        if ($body.hasClass('light-mode')) {
            $body.removeClass('light-mode').addClass('dark-mode');
        } else {
            $body.removeClass('dark-mode').addClass('light-mode');
            $toggleButton.text('Switch to Dark Mode');
        }
    });
});
