function decision(){
    let mes = document.querySelector("#message");
    alert("Add to cart successfully!");
    
}
function hover() {
    let image = document.querySelector(".hero img");

    

    setTimeout(() => {
        image.src = " https://media.gq.com/photos/69209042ab42e11f1fa2ca4e/16:9/w_2560%2Cc_limit/2193320154";
        
        // https://media.gq.com/photos/69209042ab42e11f1fa2ca4e/16:9/w_2560%2Cc_limit/2193320154
        
    }, 500);
}

function unhoverMe() {
    let image = document.querySelector(".hero img");

    

    setTimeout(() => {
        image.src = "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_v38qr1kv/def_height/2700/def_width/2700/version/100012/type/1";
        
    }, 500);
}

// Set timeout with arrow functions
// setTimeout(() => {
//     let body = document.querySelector('body');
//     body.style.transition = "1s";
//     body.style.background = "black";
// },2000);
// runs after 2000 milliseconds(2s)