var app = {

    createGridLine:()=>{
        app.gridLine = document.createElement('div');
        app.gridLine.classList.add('gridLine');

        var invader = document.getElementById('invader');
        invader.appendChild(app.gridLine);
    },

    createPixel:()=>{
        var pixel = document.createElement('div');
        pixel.classList.add('pixel');
    
        app.gridLine.appendChild(pixel);
    },

    createGrid:(nbLine, nbPixel)=>{            
        for (let index = 0; index < nbLine; index++) {
            app.createGridLine();

            for (let index = 0; index < nbPixel; index++) {
                app.createPixel();                
            };            
        };
    },

    init:()=>{
        app.createGrid(5,5);
    }
};

app.init();