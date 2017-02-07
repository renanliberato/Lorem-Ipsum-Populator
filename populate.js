var last_target = null;
var lipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

document.addEventListener('mousedown', function(event){
    if (event.button == 2) {
        last_target = event.target;
    }
}, true);

chrome.extension.onRequest.addListener(function(event){
    var nodeName = last_target.nodeName.toLowerCase();
    if (nodeName == "input") {
        if (last_target.hasAttribute("maxlength")) {
            var maxlength = last_target.getAttribute("maxlength");
            last_target.value = lipsum.substring(0, maxlength);
        } else {
            last_target.value = lipsum;
        }
    }
})
