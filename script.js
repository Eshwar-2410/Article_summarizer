
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '', //paste rapidapi key here
		'x-rapidapi-host': ''
	}
};
const btn = document.querySelector(".btn");
const summary = document.querySelector(".summary");

btn.addEventListener("click", (e) => {
    e.preventDefault();  
    
    const input = document.querySelector("#url").value;
    
    if (!input) {
        summary.innerText = 'Please enter a valid URL!';
        return;
    }

    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            summary.innerText = data?.summary || 'No summary available for this article.';
        })
        .catch(error => {
            summary.innerText = 'Error: Unable to fetch summary.';
            console.error('Error:', error);
        });
});
// fetch(url, options)
// .then((data)=>{
//     return data.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//       console.log(error);
// })