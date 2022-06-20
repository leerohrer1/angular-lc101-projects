import { Component, OnInit } from "@angular/core";

@Component({
  selector: "buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.css"],
})
export class ButtonsComponent implements OnInit {
  buttonHeading: string = "Buttons";
  buttonState: boolean[] = [true, true, true];
  active: string = 'true';
  location: string = "center";

  jokeHeading: string = "Do you like buttons?";
  jokeButtonAlignment: string[] = ["right", "left", "center"];

  constructor() {}

  ngOnInit() {}

  reactivateButtons() {
    return (this.buttonState = this.buttonState.map((e) => (e = true)));
  }

}
