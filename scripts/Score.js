const placaScore = document.getElementById("score")
const pontuacao = new Game();
    window.onload = () => game.start();
    
        function setup(){
            game.gamewindows();
        }
    
        function draw(){
            game.update();
           
    scoreBoard()
        textSize (15);
        nostroke();
        fill(26);
        /*text(10, 20);*/
        textSize(20);
        text(this.score, 32.5,45);
    }

    function bestscore(){
        textSize(15);
        text("Recorde", 340,20);

        if(!localStorage.getItem("best")
        ) {
            localStorage.setItem("best", 0);
        }

        textSize(20)

        text(localStorage.getItem("best"),357,45);

        if(this.score > localStorage.getItem("best")){
            this.best = this.score;
            localStorage.setItem("best",this.best);
        }
    }

/*continuarei experimentando codigos*/
