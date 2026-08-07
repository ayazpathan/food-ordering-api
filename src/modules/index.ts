import { commonTypeDefs } from "./common/index.js";
import { healthResolvers, healthTypeDefs } from "./health/index.js";
import { userResolvers, userTypeDefs } from "./user/index.js";
import { authResolvers, authTypeDefs } from "./auth/index.js";

import { restaurantResolvers } from "./restaurant/graphql/restaurant.resolver.js";
import { restaurantTypeDefs } from "./restaurant/graphql/restaurant.schema.js";

import { scalarTypeDefs } from "./scalars/scalar.schema.js";
import { scalarResolvers } from "./scalars/scalar.resolver.js";

import { paginationTypeDefs } from "../shared/graphql/pagination.schema.js";

import { menuTypeDefs } from "../modules/menu/index.js";
import { menuResolvers } from "../modules/menu/index.js";

export const typeDefs = [commonTypeDefs, healthTypeDefs, userTypeDefs, authTypeDefs, restaurantTypeDefs, scalarTypeDefs, paginationTypeDefs, menuTypeDefs];
export const resolvers = [healthResolvers, userResolvers, authResolvers, restaurantResolvers, scalarResolvers, menuResolvers];
