let loadHover = () => {
    let str = document.querySelector('.heading').innerHTML;
    let chars = [...str];
    let content = '';
    let text = chars.map((char) =>{
         let textHover = `<span>${char}</span>`
        console.log(textHover);
        return textHover;
    });
    content = text.join('');
    // console.log(content)
    document.querySelector('.heading').innerHTML = content;
}
loadHover();
