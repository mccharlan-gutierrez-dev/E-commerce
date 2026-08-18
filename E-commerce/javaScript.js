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

// https://www.google.com/search?sca_esv=3d61bb1f6eb631d7&sxsrf=APpeQnuAQYfeQbK55PdYhXwJM91O6gV5jQ:1787066389140&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832VstEKsVDqPorK0Gahnm2nq-aQnTz_mBV-EZYISbLc-StUIq_PhL7hb0Qt0YiIGOHmbgdzA7WLFluE76f-Gw9-kn_vuuCCPCJpHu1gmKqCIuSZd8T1yAgM1fgsi1HxBhCFiENZXz4ZKHEBpVkmKN66EIoEw_7IqUjVjTZo0KvW1khG7vGQ&q=UA+Men+Halo+Tour+SI+Golf&sa=X&ved=2ahUKEwjr7MGKvaqWAxVp8DQHHaTSO1cQtKgLegQIFRAB&biw=1280&bih=551&dpr=1.5#sv=CAMSURoyKhBlLWgzbDBqSmVPc05IVnFNMg5oM2wwakplT3NOSFZxTToORXFZcFF5bnZiLWQ4N00gBCoXCgFzEhBlLWgzbDBqSmVPc05IVnFNGAEwARgHIKyluLoFSggQARgBIAEoAQ

// Set timeout with arrow functions
// setTimeout(() => {
//     let body = document.querySelector('body');
//     body.style.transition = "1s";
//     body.style.background = "black";
// },2000);
// runs after 2000 milliseconds(2s)

function hover(image, hoverImage) {
    image.src = hoverImage;
}

function unhoverMe(image) {
    image.src = image.dataset.original;
}