import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    public readonly id!: number;

    @Column({type: 'varchar'})
    public name!: string;

    @Column({type: 'double'})
    public price!: number;

    @Column({type: 'int'})
    public amount!: number;

    @Column({type: 'varchar'})
    public image!: string; 

    @Column({type: 'varchar'})
    public description!: string;
}