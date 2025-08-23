import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu";

@Component({
  selector: 'app-dashboard-page-component',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page-component.html',
})
export default class DashboardPageComponent {

}
