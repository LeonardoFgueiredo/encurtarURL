function encurtar(){
    //validar se o link existe:
    let url = document.getElementById("input-url").value;
    if(!url){
        alert("É preciso inserir uma URL para encurtar");
        return;
    }

    //api key: 63df35575c11450ea801eec0b2cd63cc

    //encurtar o link

    //headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "63df35575c11450ea801eec0b2cd63cc"
    }

    //dados
    let linkRequest = {
        destination: url,
        domain: {fullName: "rebrand.ly"}
    }
    //fetch -> requisição http
    fetch("https://api.rebrandly.com/v1/links",{
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;

        })
}

function copiar(){
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);
    document.execCommand("copy");
    navigator.clipboard.writeText(inputUrl);

    alert(` URL copiada. \n Nova URL: ${inputUrl.value}`);
}