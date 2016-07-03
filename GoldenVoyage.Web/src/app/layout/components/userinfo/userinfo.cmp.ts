import { Component } from "@angular/core";
import { UserService } from "../../../services";
import { EmployeeLogin } from "../../../models";
import { GvMsgCenter } from "../msgcenter"; 
import { GvProfilePicturePipe } from "../../pipes";
@Component({
    selector: "gv-user-info",
    template: require("./userinfo.cmp.html"),
    directives: [GvMsgCenter],
    pipes:[ GvProfilePicturePipe]
})
export class UserInfoComponent {

    hotelName: string;
    userName: string;
    constructor(private _userService: UserService) {
        this._userService.currentEmployeeLogin.subscribe(login => {
            this._updateUserInfo(login);
        });

    }

    private _updateUserInfo(login: EmployeeLogin): void {
       
        this.hotelName = login && login.currentHotel && login.currentHotel.name || "";
        this.userName = login && login.employee && login.employee.name || "";
    }



}