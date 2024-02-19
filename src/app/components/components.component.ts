import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>components works!</p>`,
  styleUrl: './components.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent { }
