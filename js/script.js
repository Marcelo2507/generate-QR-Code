const formQrCode = document.getElementById("form-qrcode");
const sampleUrl = "http://api.qrserver.com/v1/create-qr-code/?data=[DATA_VALUE]!&size=200x200";
const textForm = document.getElementById("text-form");
const qrcodeImage = document.getElementById("qrcode-image");



formQrCode.addEventListener("submit", function (event){
    event.preventDefault();
    const realUrl = sampleUrl.replace("[DATA_VALUE]", textForm.value);
    //console.log(realUrl);
    qrcodeImage.src = realUrl;
});