var app = {

    createPixel:()=>{
        var pixel = document.createElement('div');
        pixel.classList.add('pixel');
    
        app.invader = document.getElementById('invader');

        app.invader.appendChild(pixel);
    },

    createGrid:(nbPixel)=>{            
        for (let index = 0; index < nbPixel; index++) {
            app.createPixel();
        };
    },

    init:()=>{
        app.createGrid(8);
    }
};

app.init();