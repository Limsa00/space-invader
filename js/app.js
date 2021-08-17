var app = {
    generateForm:()=>{
        app.form = document.getElementById('form');

        app.inputPixel = document.createElement('input');
        app.inputPixel.classList.add('form-input');
        app.inputPixel.placeholder = 'Nombre de pixel';
        app.inputPixel.type = 'number';
        app.inputPixel.min = 1;
        app.inputPixel.max = 20;

        app.inputSize = document.createElement('input');
        app.inputSize.classList.add('pixel-size-input');
        app.inputSize.placeholder = 'Taille du pixel';
        app.inputSize.type = 'number'
        app.inputSize.min = 25;
        app.inputSize.max = 50;

        var button = document.createElement('button');
        button.classList.add('form-button');
        button.type = 'submit';
        button.textContent ='Valider';

        app.form.appendChild(app.inputPixel);
        app.form.appendChild(app.inputSize);
        app.form.appendChild(button);
    },

    createGridLine:()=>{
        app.gridLine = document.createElement('div');
        app.gridLine.classList.add('gridLine');

        app.invader.appendChild(app.gridLine);
    },

    createPixel:(size)=>{
        app.pixel = document.createElement('div');
        app.pixel.classList.add('pixel');
        app.pixel.classList.add('grey');

        app.pixel.style.height = size+'px';
        app.pixel.style.width = size+'px';
    
        app.gridLine.appendChild(app.pixel);
    },

    createGrid:(size)=>{            
        for (let index = 0; index < size; index++) {
            app.createGridLine();

            for (let index = 0; index < size; index++) {
                app.createPixel(app.inputSize.value);
                console.log(app.inputSize.value);
                app.pixel.addEventListener('click', app.changeColorPixel);
            };            
        };
    },

    changeColorPixel:(event)=>{
        var pixel = event.target;

        if (pixel.classList.contains('grey')){
            pixel.classList.remove('grey');
            pixel.classList.add('white');
        } 
        else if(pixel.classList.contains('white')){
            pixel.classList.remove('white');
            pixel.classList.add('black');
        }
        else if (pixel.classList.contains('black')){
            pixel.classList.remove('black');
            pixel.classList.add('white');
        }
    },
    
    resetGrid:()=>{
        app.invader = document.getElementById('invader');

        app.invader.textContent='';
    },

    handleFormSubmit:(event)=>{
        event.preventDefault();
        app.resetGrid();
        app.createGrid(app.inputPixel.value);
    },

    init:()=>{
        app.generateForm();

        app.form.addEventListener('submit',app.handleFormSubmit);
    }
};

app.init();