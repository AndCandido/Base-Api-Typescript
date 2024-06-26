import { Request, Response } from "express";

import { UserService } from "../services/UserService";

export class UserCotroller {
  constructor(private userService: UserService) {}

  getUser = (req: Request, res: Response) => {
    res.send(this.userService.getUser());
  };
}
