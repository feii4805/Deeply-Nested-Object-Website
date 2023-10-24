const rectangleContainer = document.getElementById('milkTea-container');

function createRectangles(numRectangles) {
    for (let i = 0; i < numRectangles; i++) {
        const rectangle = document.createElement('div');
        rectangle.classList.add('milkTea');
        rectangle.id = 'MilkTea-' + (i + 1);  
        rectangle.innerText = 'MilkTea ' + (i + 1);  
        rectangle.addEventListener('click', function() {
            displayText(i + 1); 
        });
        rectangleContainer.appendChild(rectangle);
    }
}

function displayText(rectangleNumber) {
    const text = 'Text ' + rectangleNumber;
    alert(text);
}

createRectangles(6);
