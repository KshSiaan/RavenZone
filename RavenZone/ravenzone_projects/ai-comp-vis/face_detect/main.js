function doIt() {
    let fileInput = document.getElementById('word');
    
    if (fileInput.files.length === 0) {
        // Handle the case where no file is selected, if needed
    } else {
        var formData = new FormData();
        formData.append('image', fileInput.files[0]);
        $.ajax({
            method: 'POST',
            url: 'https://api.api-ninjas.com/v1/facedetect',
            data: formData,
            headers: { 'X-Api-Key': 'tRDxrqYpnLzi7llQC06C4w==L86GCk9hhRmQXKvM'},
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false, 
            success: function(result) {
                document.getElementById('dataZone').innerHTML = null
                for (let i = 0; i < result.length; i++) {
                    document.getElementById('dataZone').innerHTML += `
                    <li>
                    x: ${result[i].x}
                    <br/>
                    y: ${result[i].y}
                    <br/>
                    height: ${result[i].height}
                    <br/>
                    width: ${result[i].width}
                    
                    <br/>
                    <br/>
                    <br/>
                    </li>
                    
                    `
                    
                }
            },
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }
        });
    }
}



function viewIntroduction() {
    modal.open()
}




// instanciate new modal
var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
modal.setContent(`
Ever wonder how machines understand the meaning of words and text? We use something called 'embeddings.' Think of an embedding as a super-smart way for computers to represent words or pieces of text in a special mathematical space.<br><br>

In this case, I'm using a powerful technology that gives us a 768-dimensional vector for each word or text snippet. What does that mean? Well, imagine each word as a unique point in a 768-dimensional universe! 🌌<br><br>

Why 768 dimensions? That's because we want to capture all the rich and nuanced relationships between words. It's like having a super detailed map of language where words with similar meanings or contexts are closer to each other.<br><br>

These 768 numbers in the vector are like secret codes that help machines understand the intricacies of language. It's all thanks to cool techniques like Word2Vec, GloVe, and the fancy BERT model.<br><br>

So, what can you do with this app? Explore the fascinating world of language! You can visually see how words relate to each other, find similarities, and understand the context they carry. It's like peeking into the mind of a language-savvy machine.<br><br>

Keep in mind, these 768 numbers aren't just random. They're carefully crafted by cutting-edge models designed to understand the complexities of human language.<br><br>

Have fun exploring the wonders of language with this app! 🌐✨
`
);