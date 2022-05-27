const lang = 'ru';

function n(text, type, time, closein) {
    timen = (time) ? time : 1500;
    bdsd = (closein) ? closein : true;
    new Noty({
        text        : text,
        type        : type,
        dismissQueue: true,
        layout      : 'bottomRight',
        theme       : 'mint',
        progressBar: true,
        timeout: timen,
        killer: bdsd
    }).show();
}


const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

function passport_save (){
	return n('Данные паспорта изменить нельзя!', 'error');
}

function copy(x) {
    var copyText = document.getElementById(x);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    n('Скопировано!', 'success');
}

function copyBonus() {
    var copyText = document.getElementById('bonus');
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    n('Скопировано!', 'success');
}