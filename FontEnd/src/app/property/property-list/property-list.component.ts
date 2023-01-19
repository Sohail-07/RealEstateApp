import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Shaikh's Villa",
      "Type": "House",
      "Price": 12000000
    },
    {
      "Id": 2,
      "Name": "Syed's Villa",
      "Type": "House",
      "Price": 12000000
    },
    {
      "Id": 3,
      "Name": "Khan's Villa",
      "Type": "House",
      "Price": 12000000
    },
    {
      "Id": 4,
      "Name": "Mannat Villa",
      "Type": "House",
      "Price": 12000000
    },
    {
      "Id": 5,
      "Name": "Galexy Villa",
      "Type": "House",
      "Price": 12000000
    }
  ]
}
