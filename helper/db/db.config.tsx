import { MongoClient } from "mongodb";

let url: string =
  process.env.URL != undefined ? process.env.URL : "mongodb://localhost:27017";
const client = new MongoClient(url);

class Connexion {
  public static clientConnexion: MongoClient;

  /** initiate the mongo connection */
  public static async createConnexionMongo() {
    if (this.clientConnexion == null) {
      this.clientConnexion = await client.connect();
    }
    return this.clientConnexion;
  }

  connexion() {
    return;
  }
}

const getCollection = new Connexion().connexion;

/*

const getCollection = () => {
  let connexion = new Connexion();
  console.log(connexion);
};

const closeConnexion = () => {
  let connexion = new Connexion();
  connexion.
};
*/
//export { getCollection };
