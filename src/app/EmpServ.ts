import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from 'src/Employee';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';



@Injectable()

export class EmpServ {

    private url: string = "http://dummy.restapiexample.com/api/v1/employees";
    employees: Employee[] = [];

    constructor(private http: HttpClient) {

    }

    getEmployees() {
        debugger;
        return this.http.get(this.url)
            .pipe(map((result : []) => {
                return result;

            }))
    }
}