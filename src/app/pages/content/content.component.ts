import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  photoCover: string =
    'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1711929600&semt=ais';
  contentTitle: string = 'COntent works?';
  description: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => console.log(value.get('id')));
  }
}
