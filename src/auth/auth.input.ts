import { ApiModelProperty } from "@nestjs/swagger";

export class AuthInput {

    @ApiModelProperty()
    email: string;

    @ApiModelProperty()
    password: string;

  }
  