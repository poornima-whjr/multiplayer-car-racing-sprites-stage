class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3")
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
        this.title.hide()
    }

    display(){
      
       this.title.html("Car Racing Game"); 
       this.title.position(displayWidth/2-30,0)
      
       this.input.position(displayWidth/2-20,160)
      
       this.button.position(displayWidth/2+30,200)  

       this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()

        player.name = this.input.value()
        playerCount+=1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)

        this.greeting.html("Hello, "+ player.name)
        this.greeting.position(displayWidth/2-20,160)})
    }

   
    
}