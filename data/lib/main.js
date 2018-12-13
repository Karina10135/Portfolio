function Main()
{
    this.install = function()
    {


        let header = `
        <div id="header">
            <div id="photo"></div>
            <div id="title"></div>
        </div>`;

        let content = `
            <div id="content">
                <div id="sidebar"></div>
                <div id="presentation"></div>
            </div>`;
        
        let footer = `
        <div id="footer">
            <div id="footerwrap">
            <div class="credit" id="credit"></div>
            </div>
        </div>`;

        document.body.innerHTML += `<div id="view">` + header + content + footer + `</div>`;
        Build(game);
    }
}

function Build(src)
{
    let facts = `
    <div id="column">
        <h2>Curriculum Vitae</h2>
        <p><a href="data/${src.cv}">${src.cv}</a></p>
    </div>`;

    let team = `
        <div id="column">
            <h2>Contact</h2>
            ${src.team.map((item, i) => `
                <div class="team">
                    ${src.team[i].social.map((item, j) => `<a href="http://${src.team[i].social[j]}">${src.team[i].social[j]}</a></br>`).join('')}
                    <a href="mailto:${src.team[i].contact}">${src.team[i].contact}</a></p>
                </div>
            `).join('')}</p>
        </div>`;

    let main = `
    <div id="section">
        <h2>Hello,</h2>
            <p>${src.logline}</p>
            ${src.description.map((item, i) => `<p>${src.description[i]}</p>`).join('')}
    </div>
    <div id="section">
        <h2>Games</h2>
        ${src.itch.map((item, i) => `<iframe frameborder="0" src="https://itch.io/embed/${src.itch[i]}" width="600" height="167"></iframe>`).join('')}
    </div>`;


    document.title = src.name;
    document.getElementById("photo").style.backgroundImage = "url('data/content/images/" + src.header + "')";
    document.getElementById("title").innerHTML = src.name.toUpperCase();
    document.getElementById("sidebar").innerHTML += team;
    let credit = document.getElementById("credit").innerHTML;
    document.getElementById("credit").innerHTML += `${src.name} © ${new Date().getFullYear()}`
    document.getElementById("presentation").innerHTML += main;
}