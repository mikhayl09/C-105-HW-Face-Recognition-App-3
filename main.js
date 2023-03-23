Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpg",
    jpg_quality: 100
});
var cam = document.getElementById("camera");
Webcam.attach("#camera");
function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id = "snap" src = "'+data_uri+'">';
    });
}
console.log("ml5 version", ml5.version );
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rWjHUObw4/model.json", modelloaded);
function modelloaded(){
    console.log("Model is initialized");
    
}
function Identify(){
    picture = document.getElementById("snap");
    classifier.classify(picture, gotResult);
    
}
function gotResult(error, results){
if(error){
    console.error(error);

}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
}
}