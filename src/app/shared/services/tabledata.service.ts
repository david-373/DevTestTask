import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class TableDataService {
    constructor(public http: HttpClient) {
    }

    public getData(): Observable<any> {
        return this.http.get('http://localhost:3000/data');
    }
}