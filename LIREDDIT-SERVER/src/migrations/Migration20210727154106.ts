import { Migration } from '@mikro-orm/migrations';

export class Migration20210727154106 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "posts" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');

    this.addSql('drop table if exists "post" cascade;');
  }

}
