import * as express from "express";
import { makeUserRouter } from "./libs/users/UserRouter";
import { IUserModule } from "./libs/users";
import { makeCollectionRouter } from "./libs/collections/collectionRouter";

export const makeApp = (userModule: IUserModule) => {
  const app = express();
  app.use(express.json());

  const userRouter = makeUserRouter(userModule.userService, userModule.userDao);
  const collectionRouter = makeCollectionRouter()
  app.use(userRouter);
  app.use(collectionRouter)

  return app;
};
