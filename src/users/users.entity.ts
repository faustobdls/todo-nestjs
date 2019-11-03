import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Users {

    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id?: number;
    
    @ApiModelProperty()
    @Column()
    name?: string;

    @ApiModelProperty()
    @Column({nullable: true})
    github_username?: string;

    @ApiModelProperty()
    @Column({unique: true})
    email: string;

    @ApiModelProperty()
    @Column('text')
    password?: string;
}