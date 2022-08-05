import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '12345678',
    database: 'product_manager',
    port: 3306,
    logging: false,
    synchronize: true,
    entities: ["./dist/src/model/*.js"],
});
