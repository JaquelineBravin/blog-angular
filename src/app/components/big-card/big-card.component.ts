import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  photoCover: string =
    'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1711929600&semt=ais';
  @Input()
  contentTitle: string = 'Big Card?';
  @Input()
  description: string = '';
  @Input()
  Id: string = '0';
}
