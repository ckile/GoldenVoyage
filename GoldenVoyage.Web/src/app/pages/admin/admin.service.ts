import { Injectable } from "@angular/core";
import { ApiService } from "../../services";
@Injectable()
export class AdminService {
    constructor(private apiService: ApiService) { }
}