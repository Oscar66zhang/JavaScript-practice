var first = document.getElementById('First');
var second = document.getElementById('Second');
var third = document.getElementById('Third');

function toggleImage(element, imagePath) {
    var existingImage = element.nextSibling; //nextSibling返回节点之后紧跟的节点
    if (existingImage && existingImage.tagName === 'IMG') {
        existingImage.parentNode.removeChild(existingImage);//removeChild删除一个子节点。返回删除的节点
    } else {
        var image = new Image();
        image.src = imagePath;
        image.style.width = "600px";
        image.style.height = "600px";

        image.onload = function() {
            element.parentNode.insertBefore(image, element.nextSibling);
        };
    }
}

first.addEventListener('click', function() {
    toggleImage(first, "./jpg/png1.jpg");
});

second.addEventListener('click', function() {
    toggleImage(second, "./jpg/png-2.jpg");
});

third.addEventListener('click', function() {
    toggleImage(third, "./jpg/png-3.jpg");
});