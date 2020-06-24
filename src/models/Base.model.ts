export class BaseModel {
  static fromJSON(json: any) {
    return Object.assign(new this(), json);
  }
}
