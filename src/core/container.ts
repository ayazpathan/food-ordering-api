import { AuthService } from "../modules/auth/auth.service.js";
import { JwtService } from "../modules/auth/jwt.service.js";
import { UserRepository } from "../modules/user/user.repository.js";
import { UserService } from "../modules/user/user.service.js";
import { RestaurantService } from "../modules/restaurant/restaurant.service.js";

const userRepository = new UserRepository();
const jwtService = new JwtService();
const restaurantService = new RestaurantService();
const userService = new UserService(userRepository);

const authService = new AuthService(userRepository, jwtService);

export const container = {
    userRepository,
    jwtService,
    userService,
    authService,
    restaurantService,
};
