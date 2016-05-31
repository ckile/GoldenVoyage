using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GoldenVoyage.Api.Migrations
{
    public partial class update20160531 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Ended",
                table: "EmployeeLogin",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "LogoutTime",
                table: "EmployeeLogin",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ended",
                table: "EmployeeLogin");

            migrationBuilder.DropColumn(
                name: "LogoutTime",
                table: "EmployeeLogin");
        }
    }
}
