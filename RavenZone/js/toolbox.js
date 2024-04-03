let valid = document.getElementById('valid')
for (let i = 0; i < data_toolbox.length; i++) {
	valid.innerHTML += `<section>
    <div class="headline">
        <img width="48" height="48" src="${ section_intro[i].logo }" alt="bot"/><h1>${ section_intro[i].name }</h1>
    </div>
    <div class="contents" id="contents">
        
    </div>
    </section>
    `
}
for (let i = 0; i < data_toolbox.length; i++) {
	for (let j = 0; j < data_toolbox[i].length; j++) {
		document.getElementsByTagName('section')[i].children.contents.innerHTML += `<div class="card" onclick="window.location.href = '${ data_toolbox[i][j].locate }'">
        <img width="96" height="96" src="${ data_toolbox[i][j].img }" alt="vector"/>
        <h3>
        ${ data_toolbox[i][j].headline }
        </h3>
        <p> ${data_toolbox[i][j].descript} </p>
        
        </div>`
	}
}