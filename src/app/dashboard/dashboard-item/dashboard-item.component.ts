import { Component, Input, ViewEncapsulation, input } from '@angular/core';
import { ImageModel } from './image.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {
    class: "dashboard-item"
  }
})
export class DashboardItemComponent {
  // @Input({required: true}) image! : ImageModel;
  // @Input() title! : string;
  image = input.required<ImageModel>();
  title = input.required<string>();
}
