
document.getElementById('suggestionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const suggestionInput = document.getElementById('suggestionInput');
    const suggestion = suggestionInput.value;

   
    const li = document.createElement('li');
    li.textContent = suggestion;

    
    document.getElementById('suggestions').appendChild(li);

    
    suggestionInput.value = '';
});