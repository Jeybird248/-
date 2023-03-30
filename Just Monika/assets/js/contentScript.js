setInterval(() => {
    let images = document.querySelectorAll('img, background-image');
    let texts = document.querySelectorAll("b, em, strong, p ,h1 ,h2, h3, h4, h5, h6, li");
    let specialTexts = document.querySelectorAll("div");
    // let as = document.querySelectorAll("a");

    for(let i = 0; i < images.length; i++){
        images[i].src = "https://images3.alphacoders.com/887/887715.png";
    }
    for(let i = 0; i < texts.length; i++){
        if(texts[i].innerHTML && texts[i].innerHTML != "Just Monika") {
            texts[i].innerHTML  = "Just Monika";
        }
    }
    // for(let i = 0; i < as.length; i++){
    //     if(as[i].text && as[i].text != "Just Monika")
    //         as[i].text = "Just Monika";
    // }
    for(let i = 0; i < specialTexts.length; i++){
        if(specialTexts[i].text && specialTexts[i].text != "Just Monika")
            specialTexts[i].text  = "Just Monika";
    }
    
        
        
}, 500)
