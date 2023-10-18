import {Component, OnInit} from '@angular/core';
import {icons} from "./icons";
import {delay, Subject} from "rxjs";

@Component({
  selector: 'app-random-icon',
  templateUrl: './random-icon.component.html',
  styleUrls: ['./random-icon.component.css']
})
export class RandomIconComponent implements OnInit {

  public buttonClick$: Subject<boolean> = new Subject<boolean>();

  public isLoading: boolean = false;
  public iconList: string[] = icons;
  public currentIcon: string = this.iconList[0];
  public currentColor: string = 'red';

  constructor() {
  }

  public ngOnInit() {
    this.buttonClick$
      .pipe(delay(3000))
      .subscribe(() => {
        this.currentColor = this.randomColor();
        this.currentIcon = this.randomIcon();
        this.isLoading = false;
      });
  }

  public click() {
    this.isLoading = true;
    this.buttonClick$.next(true);
  }

  public randomIcon() {
    const randomIndex = Math.floor(Math.random() * this.iconList.length);
    return this.iconList[randomIndex];
  }

  public randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
