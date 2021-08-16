var app = {
    generateForm:()=>{
        var form = document.getElementById('form');

        var input = document.createElement('input');
        input.classList.add('form-input');
        input.placeholder = 'Définir taille de grille';
        input.type = 'number';
        input.value = 5;
        input.min = 1;
        input.max = 20;

        var button = document.createElement('button');
        button.classList.add('form-button');
        button.textContent ='Valider';

        form.appendChild(input);
        form.appendChild(button);
    },

    createGridLine:()=>{
        app.gridLine = document.createElement('div');
        app.gridLine.classList.add('gridLine');

        app.invader = document.getElementById('invader');
        app.invader.appendChild(app.gridLine);
    },

    createPixel:()=>{
        app.pixel = document.createElement('div');
        app.pixel.classList.add('pixel');
        app.pixel.classList.add('grey');
    
        app.gridLine.appendChild(app.pixel);
    },

    createGrid:(nbLine, nbPixel)=>{            
        for (let index = 0; index < nbLine; index++) {
            app.createGridLine();

            for (let index = 0; index < nbPixel; index++) {
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

    init:()=>{
        app.generateForm();
        app.createGrid(5,5);
    }
};

app.init();