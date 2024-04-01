// D chính là generic type ResponseData
export class ResponseData<D> {
  data: D | D[];
  statusCode: number;
  message: string;

  /* Constructor được sử dụng để khởi tạo một đối tượng từ một lớp.
   Constructor có thể chứa các câu lệnh để thiết lập các giá trị ban đầu cho các thuộc tính của đối tượng */
  constructor(data: D | D[], statusCode: number, message: string) {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
    return this;
  }
}

export class ResponseDataFromServer<D> {
  data: D | D[];
  status: number;
  message: string;

  constructor(data: D | D[], status: number, message: string) {
    this.data = data;
    this.status = status;
    this.message = message;
    return this;
  }
}
