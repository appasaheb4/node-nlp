import jwt from "jsonwebtoken";
// import Config from "../config";

let refreshTokens = [];

class TokenConfig_ {
  public generateAccessToken = (user: any) => {
    // return jwt.sign(
    //   user,
    //   "1f602e934ef2ad71efa467ecd5db8f585117ff4cfea9cb9961b4d4479cec4f3e6608896f04791a8a1dddc32a9cefe6a39f8aab5bf9c1be032914908ea7fe715d" as string
    // );
    return jwt.sign(
      user,
      "1f602e934ef2ad71efa467ecd5db8f585117ff4cfea9cb9961b4d4479cec4f3e6608896f04791a8a1dddc32a9cefe6a39f8aab5bf9c1be032914908ea7fe715d" as string,
      {
        expiresIn: "1d",
      }
    );
  };

  public generateRereshToken = (user: any) => {
    return jwt.sign(
      user,
      "474b333a4c4a2bd2beb71ddaf6d19559826b92afa1f779331b0fc294add893ab0db4a420ead1f67b5f0b998cc8bc0a7859228388963f6c096d8979dbbb7dad41" as string
    );
  };

  public verifyToken = (token: any): Promise<any> =>
    new Promise<any>((resolve, reject) => {
      jwt.verify(
        token,
        "1f602e934ef2ad71efa467ecd5db8f585117ff4cfea9cb9961b4d4479cec4f3e6608896f04791a8a1dddc32a9cefe6a39f8aab5bf9c1be032914908ea7fe715d" as string,
        (err: any, user: any) => {
          //console.log({ err, user });
          if (err) reject;
          resolve(user);
        }
      );
    });
}
export const TokenConfig = new TokenConfig_();
