import * as database from ("./utils/database")
import { desconecDataBase, databaseType } from "./src/utils/database"
import { key } from "./src/utils/api"
desconecDataBase()
databaseType = databaseType.typeData
key = key.permission
database.connectToDatabase("Gabriel's DataBase")
