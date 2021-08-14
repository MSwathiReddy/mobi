Webcam.set({
    height:300,
    width:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function Take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>'
    });
}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('mobilenet',modelloded);
function modelloded() {
    console.log("model loded");
}
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
    }
} 