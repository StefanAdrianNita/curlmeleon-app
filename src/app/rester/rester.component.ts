import { Component } from "@angular/core";

@Component({
  selector: "app-rester",
  standalone: true,
  imports: [],
  templateUrl: "./rester.component.html",
  styleUrl: "./rester.component.css",
})
export class ResterComponent {
  request = {
    url: "",
    method: "GET",
    headers: [],
    body: "",
  };

  verbChange(event: any) {
    this.request.method = event.target.value;
  }

  urlChange(event: any) {
    this.request.url = event.target.value;
  }

  reqSend() {
    console.log(this.request);
  }
}
