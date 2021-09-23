import {
  Component,
  // ChangeDetectionStrategy,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppNavbarComponent implements OnInit, OnChanges {
  @Input() navbarTitle: string = 'Default Title';

  ngOnInit(): void {
    // console.log('Init: ', this.navbarTitle);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Changes: ', changes);
  }
}
