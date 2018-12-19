export class Message {
  public userId: number;
  public id: number;
  public titre: string;
  public texte: string;
  public date: Date;

  constructor(data?: any) {
    if (data) {
      this.userId = data.userId;
      this.id = data.id;
      this.titre = data.title;
      this.texte = data.body;
      this.date = data.date ? data.date : new Date();
    }
  }
}
