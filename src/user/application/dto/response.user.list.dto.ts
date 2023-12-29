import { ResponseUserDto } from "./response.user.dto";

export class ResponseUserListDto {
  data: ResponseUserDto[];
  page: number;
  total_page: number;
  limit: number;
}
