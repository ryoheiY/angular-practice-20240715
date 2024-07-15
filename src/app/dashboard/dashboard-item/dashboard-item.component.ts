import { Component, Input, input } from '@angular/core';
import { ImageModel } from './image.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // @Input({required: true}) image! : ImageModel;
  // @Input() title! : string;
  image = input.required<ImageModel>();
  title = input.required<string>();
}
