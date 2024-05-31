function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eE5VUXZx4/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;}
    
    img= document.getElementById('animal');
    if(results[0].label == 'barking'){
        img.src= 'th.jpeg';

    }
    else{
        img.src= 'cat.gif';

    }
}

