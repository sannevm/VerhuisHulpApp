using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace VerhuisHulp.Migrations
{
    public partial class deadlineItemModelAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "TodoItem",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeadlineItemId",
                table: "TodoItem",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DeadlineItem",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    TodoItemId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeadlineItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DeadlineItem_TodoItem_TodoItemId",
                        column: x => x.TodoItemId,
                        principalTable: "TodoItem",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TodoItem_DeadlineItemId",
                table: "TodoItem",
                column: "DeadlineItemId");

            migrationBuilder.CreateIndex(
                name: "IX_DeadlineItem_TodoItemId",
                table: "DeadlineItem",
                column: "TodoItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_TodoItem_DeadlineItem_DeadlineItemId",
                table: "TodoItem",
                column: "DeadlineItemId",
                principalTable: "DeadlineItem",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TodoItem_DeadlineItem_DeadlineItemId",
                table: "TodoItem");

            migrationBuilder.DropTable(
                name: "DeadlineItem");

            migrationBuilder.DropIndex(
                name: "IX_TodoItem_DeadlineItemId",
                table: "TodoItem");

            migrationBuilder.DropColumn(
                name: "DeadlineItemId",
                table: "TodoItem");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "TodoItem",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
