
document.addEventListener('DOMContentLoaded', function() {
    func();
});

function func() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1882bdad27msh59692b8e77c412ep1c0cd3jsn60c490266dc1',
            'X-RapidAPI-Host': 'word-of-the-day2.p.rapidapi.com'
        }
    };
    
    fetch('https://word-of-the-day2.p.rapidapi.com/word/dc', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            document.getElementById('word').innerHTML = response[0].word
            document.getElementById('meaning').innerHTML = response[0].mean
        })
        .catch(err => console.error(err));
}