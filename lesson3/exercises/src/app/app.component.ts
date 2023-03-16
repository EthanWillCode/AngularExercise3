import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  isLaunched =false;


  takeOff(){
    let input = window.confirm("Confirm that the shuttle is ready for takeoff.")
    if(input === true){
      this.message = "Shuttle in flight.";
      this.height += 10000;
      this.color = 'blue';
      this.isLaunched = true;
    }
  }

  land(){
    let input = window.alert("The shuttle is landing. Landing gear engaged.")
      this.message = "The shuttle has landed.";
      this.height = 0;
      this.color = 'green'
      this.isLaunched = false;
  }

  abort(){
    let input = window.confirm("Are you sure that you want to abort mission?")
    if(input === true){
      this.message = "Mission aborted.";
      this.height = 0;
      this.color = 'red'
      this.isLaunched = false
    }
  }
  
  moveLeft(img){
    if(this.isLaunched === true){
    img.style.left = parseInt(img.style.left) - 10 + 'px';
    }
  }

  moveRight(img){
    if(this.isLaunched === true){
    img.style.left = parseInt(img.style.left) + 10 + 'px';
    }
  }

  moveUp(img){
    if(this.isLaunched === true){
    this.height += 10000;
    img.style.bottom = parseInt(img.style.bottom) + 10 + 'px';
    }
  }

  moveDown(img){
    if(this.isLaunched === true){
    img.style.bottom = parseInt(img.style.bottom) - 10 + 'px';
    this.height -=10000;
    }
  }
}
