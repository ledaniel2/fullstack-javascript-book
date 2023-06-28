import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }

ngOnInit() {
  this.http.get('https://api.example.com/data').subscribe(data => {
    this.data = data;
  });
}
