import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("giveaways")
export default class GiveawayConfiguration {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 22 })
  channel!: string;

  @Column({ type: "varchar", length: 22 })
  message!: string;

  @Column({ type: "integer" })
  end!: number;
}
