import { Component } from "@angular/core";
import { UserService } from "../../../services";
import { EmployeeLogin } from "../../../models";
import { GvMsgCenter } from "../msgcenter"; 
import { GvProfilePicturePipe } from "../../pipes";
@Component({
    selector: "gv-user-info",
    template: `
    <div class="user-profile clearfix">
    <a href="#" class="al-sub-logo clearfix hidden-xs">金航酒店1</a>
    <div class="dropdown al-user-profile">
      <a class="profile-toggle-link dropdown-toggle" id="user-profile-dd" data-toggle="dropdown" aria-expanded="false">
        <img src="{{ ( 'Nick' | gvProfilePicture ) }}">
      </a>
      <div class="dropdown-menu top-dropdown-menu profile-dropdown" aria-labelledby="user-profile-dd">
        <li class="dropdown-item"><i class="dropdown-arr"></i></li>
        <li class="dropdown-item"><a href="#/profile"><i class="fa fa-user"></i>Profile</a></li>
        <li class="dropdown-item"><a href><i class="fa fa-cog"></i>Settings</a></li>
        <li class="dropdown-item"><a href class="signout"><i class="fa fa-power-off"></i>Sign out</a></li>
      </div>
    </div>
    <gv-msg-center></gv-msg-center>
  </div>
    `,
    directives: [GvMsgCenter],
    pipes:[ GvProfilePicturePipe]
})
export class UserInfoComponent {

    constructor(private _userService: UserService) {
        this._userService.currentEmployeeLogin.subscribe(login => {
            this._updateUserInfo(login);
        });

        this._userService.getCurrentEmployeeLogin();
    }

    private _updateUserInfo(login: EmployeeLogin): void {
        console.log(login);
    }



}