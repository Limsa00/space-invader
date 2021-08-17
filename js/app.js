var app = {
    generateForm:()=>{
        app.form = document.getElementById('form');

        app.input = document.createElement('input');
        app.input.classList.add('form-input');
        app.input.placeholder = 'Définir taille de grille';
        app.input.type = 'number';
        app.input.min = 1;
        app.input.max = 20;

        var button = document.createElement('button');
        button.classList.add('form-button');
        button.type = 'submit';
        button.textContent ='Valider';

        app.form.appendChild(app.input);
        app.form.appendChild(button);
    },

    createGridLine:()=>{
        app.gridLine = document.createElement('div');
        app.gridLine.classList.add('gridLine');

        app.invader.appendChild(app.gridLine);
    },

    createPixel:()=>{
        app.pixel = document.createElement('div');
        app.pixel.classList.add('pixel');
        app.pixel.classList.add('grey');
    
        app.gridLine.appendChild(app.pixel);
    },

    createGrid:(size)=>{            
        for (let index = 0; index < size; index++) {
            app.createGridLine();

            for (let index = 0; index < size; index++) {
                app.createPixel();
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
        app.createGrid(app.input.value);
    },

    init:()=>{
        app.generateForm();

        app.form.addEventListener('submit',app.handleFormSubmit);

        // app.createGrid(5);
    }
};

app.init();