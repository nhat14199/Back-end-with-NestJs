// enum là một từ khóa để định nghĩa một tập hợp các hằng số có tên

export enum HttpStatus {
  ERROR = 404,
  SUCCESS = 200,
}

export enum HttpMessage {
  ERROR = 'lỗi sever cmr',
  SUCCESS = 'OK thành công rồi nha ',
}

export enum httpStatusPost {
  ERROR = 400,
  SUCCESS = 200,
}

export enum httpMessagePost {
  ERROR = 'Thiếu body ',
  SUCCESS = 'Tạo thành công ',
}
