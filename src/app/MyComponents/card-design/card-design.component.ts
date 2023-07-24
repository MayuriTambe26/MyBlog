import { Component, Input } from '@angular/core';
import { PostInterface } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-card-design',
  templateUrl: './card-design.component.html',
  styleUrls: ['./card-design.component.css']
})
export class CardDesignComponent {
@Input() post:PostInterface|undefined;
}
