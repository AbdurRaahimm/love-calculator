const yourName  = document.querySelector('#yourName'),
partnerName  = document.querySelector('#partnerName'),
btn  = document.querySelector('#calculate'),
results  = document.querySelector('.result');


yourName.addEventListener('input', ()=>{
    const params = new URLSearchParams(window.location.search);
    params.set('yourName', yourName.value);
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
});
partnerName.addEventListener('input', () => {
    const params = new URLSearchParams(window.location.search);
    params.set('partnerName', partnerName.value);
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
});

yourName.value = new URLSearchParams(window.location.search).get('yourName');
partnerName.value = new URLSearchParams(window.location.search).get('partnerName');


function commonCharacters(str1, str2) {

    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Create sets to store unique characters from each string
    const set1 = new Set(cleanStr1);
    const set2 = new Set(cleanStr2);
    console.log(`First Name unique`,set1);
    console.log(`Second Name unique`,set2);
  
    // Initialize a variable to count common characters
    let commonCount = 0;
    let common = '';
    
  
    // Iterate through one of the sets (set1 in this case)
    // and check if each character is present in set2
    set1.forEach(char => {
      if (set2.has(char)) {
        commonCount++;
        common += char;
      }
    });
  
    // Calculate the percentage based on the total number of unique characters
    const totalUniqueChars = (set1.size + set2.size) - commonCount;
    console.log(`Total Char:`,(set1.size + set2.size));
    console.log(`totalUniqueChars:`,totalUniqueChars);

    const percent = (commonCount / totalUniqueChars) * 100;
  
    return {common, commonCount, percent };
  }


    btn.addEventListener('click', () => {

      // empty check 
      if (yourName.value === '' || partnerName.value === '') {
        results.innerHTML = '';
        alert(`Please Fill Up both input Fields`)
        return;
      }
        const result = commonCharacters(yourName.value, partnerName.value);
        let percent = Math.floor(result.percent);

        results.style.display = 'block';
        console.log(`Common char :`, result.commonCount)
        console.log(`Common :`, result.common)
          
        // Increase Number Animation of result.innerHTML
        const increaseNumber = () => {
            let i = 0;
            const timer = setInterval(() => {
                if (i >= percent) {
                    clearInterval(timer);
                }
                results.innerHTML = `${i}%`;
                i++;
            }, 50);
        };
        increaseNumber();
  
      //  check empty fields then dont show  displayQuote(); after field is not empty then show  displayQuote();  
        if (yourName.value === '' || partnerName.value === '') {
         
          results.innerHTML = '';
            
        } else {
            displayQuote();
        }

    });
 
    

    // random quate for yourName field and partnerName field 
    const quotes = [
        {quote: 'You are the source of my joy, the center of my world and the whole of my heart.'},
        {quote: 'When I tell you I love you, I am not saying it out of habit, I am reminding you that you are my life.'},
        {quote: 'I don’t need paradise because I found you. I don’t need dreams because I already have you.'},
        {quote: 'I am so totally, completely, overwhelmingly, eye-poppingly, life-changingly, spectacularly, passionately, deliciously in love with you.'},
        {quote: 'I love you, and I will love you until I die, and if there’s a life after that, I’ll love you then.'},
        {quote: 'I love you not only for what you are, but for what I am when I am with you.'},
        {quote: 'I love you as one loves certain dark things, secretly, between the shadow and the soul.'}
    ];
    function displayQuote() {
        const random = Math.floor(Math.random() * quotes.length);
        document.getElementById('quote').innerHTML = quotes[random].quote;
    }

  
 