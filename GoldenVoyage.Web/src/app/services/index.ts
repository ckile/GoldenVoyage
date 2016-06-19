// Services

export * from "./api.service";
export * from "./security.service";
export * from "./user.service";

import { ApiService } from "./api.service";
import { SecurityService } from "./security.service";
import { UserService } from "./user.service";

export const COMMON_PROVIDERS = [
    ApiService, SecurityService, UserService
];