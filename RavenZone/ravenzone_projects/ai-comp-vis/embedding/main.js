function doIt() {
    let word = document.getElementById('word').value
    if (word == "") {
        
    } else {
        $.ajax({
            method: 'POST',
            url: 'https://api.api-ninjas.com/v1/embeddings',
            headers: { 'X-Api-Key': 'tRDxrqYpnLzi7llQC06C4w==L86GCk9hhRmQXKvM'},
            data: JSON.stringify({ "text":  word}),
            success: function(result) {
                console.log(result);
            
                // Assuming 'embeddings' is an object with a property 'embeddings'
                const embeddings = result.embeddings;
            
                // Check if embeddings is an array
                if (!Array.isArray(embeddings)) {
                    console.error('Embeddings is not an array:', embeddings);
                    return;
                }
            
                // Flatten the 2D array to a 1D array
                const flattenedEmbeddings = embeddings.flat();
            
                // Assuming flattenedEmbeddings is now a 1D array
                const embeddings2D = [];
                for (let i = 0; i < flattenedEmbeddings.length; i += 2) {
                    // Take every pair of values for the scatter plot (adjust if needed)
                    embeddings2D.push([flattenedEmbeddings[i], flattenedEmbeddings[i + 1]]);
                }
            
                // Create a scatter plot using Plotly
                const trace = {
                    x: embeddings2D.map(v => v[0]),
                    y: embeddings2D.map(v => v[1]),
                    mode: 'markers',
                    type: 'scatter',
                };
            
                const layout = {
                    title: 'Embedding Vector Visual Output',
                    xaxis: { title: 'Principal Component 1' },
                    yaxis: { title: 'Principal Component 2' },
                };
            
                Plotly.newPlot('scatter-plot', [trace], layout);
            },
            
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
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