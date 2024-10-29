import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-page',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-page.component.html',
  styleUrl: './testimonial-page.component.scss'
})
export class TestimonialPageComponent {
  star = 0;

  starsGoogle = [
    {id: 0, type: 'fill'},
    {id: 1, type: 'fill'},
    {id: 2, type: 'fill'},
    {id: 3, type: 'fill'},
    {id: 4, type: 'empty'}
  ];

  starsMeta = [
    {id: 0, type: 'fill'},
    {id: 1, type: 'fill'},
    {id: 2, type: 'fill'},
    {id: 3, type: 'fill'},
    {id: 4, type: 'fill'}
  ];
}
