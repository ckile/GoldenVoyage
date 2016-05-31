using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace GoldenVoyage.Api.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AccountComeWith",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountComeWith", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AccountStay",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Adults = table.Column<int>(nullable: false),
                    Arrival = table.Column<DateTime>(nullable: false),
                    Childs = table.Column<int>(nullable: false),
                    Departure = table.Column<DateTime>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountStay", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AccountType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Country",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CustomerProfile",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CustomerId = table.Column<int>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerProfile", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CustomerType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Department",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Department", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeRights",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Invisible = table.Column<bool>(nullable: false),
                    Right = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeRights", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ethnicity",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ethnicity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GroupType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GroupType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GuestPreference",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Invisible = table.Column<bool>(nullable: false),
                    LikeRooms = table.Column<string>(nullable: true),
                    Preference = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuestPreference", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GuestRemark",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CashingRemark = table.Column<string>(nullable: true),
                    FrontRemark = table.Column<string>(nullable: true),
                    GuestId = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuestRemark", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GuestTitle",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuestTitle", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GuestType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuestType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HotelProfile",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    HotelDate = table.Column<DateTime>(type: "smalldatetime", nullable: false),
                    HotelId = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    LocalServiceAddress = table.Column<string>(nullable: true),
                    ReportDate = table.Column<DateTime>(type: "smalldatetime", nullable: false),
                    RowVersion = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HotelProfile", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IdentityType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IdentityType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Language",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Language", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Market",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Market", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OutOfOrderReason",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OutOfOrderReason", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Package",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Package", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Password",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Invisible = table.Column<bool>(nullable: false),
                    PasswordString = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Password", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PaymentType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Position",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Position", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RateCode",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Attribute = table.Column<int>(nullable: false),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RateCode", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReservationTemplate",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountTypeId = table.Column<int>(nullable: false),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Nights = table.Column<int>(nullable: false),
                    RateCodeId = table.Column<int>(nullable: false),
                    ReservationTypeId = table.Column<int>(nullable: false),
                    RoomTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReservationTemplate", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReservationType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    GuaranteeAttribute = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReservationType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RoomFeature",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoomFeature", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RoomProfile",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Invisible = table.Column<bool>(nullable: false),
                    RoomId = table.Column<int>(nullable: false),
                    RowVersion = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoomProfile", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RoomType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoomType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Source",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Source", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SpecialRequest",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpecialRequest", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Statistical",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArrivalCount = table.Column<int>(nullable: false),
                    BonusPointTotal = table.Column<decimal>(nullable: false),
                    CancelCount = table.Column<int>(nullable: false),
                    ExpenseTotal = table.Column<decimal>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    NightCount = table.Column<int>(nullable: false),
                    NoShowCount = table.Column<int>(nullable: false),
                    RowVersion = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Statistical", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VipType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Attribute = table.Column<int>(nullable: false),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VipType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Province",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    CountryId = table.Column<int>(nullable: true),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Province", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Province_Country_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Country",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "GuestProfile",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EthnicityId = table.Column<int>(nullable: true),
                    GuestId = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuestProfile", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GuestProfile_Ethnicity_EthnicityId",
                        column: x => x.EthnicityId,
                        principalTable: "Ethnicity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Hotel",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Invisible = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    ProfileId = table.Column<int>(nullable: false),
                    RowVersion = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Hotel_HotelProfile_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "HotelProfile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AccountRate",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountId = table.Column<int>(nullable: true),
                    Amount = table.Column<decimal>(nullable: false),
                    BeginDate = table.Column<DateTime>(nullable: false),
                    DiscountAmount = table.Column<decimal>(nullable: false),
                    DiscountPercentage = table.Column<decimal>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    PackageId = table.Column<int>(nullable: true),
                    RateCodeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountRate", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AccountRate_Package_PackageId",
                        column: x => x.PackageId,
                        principalTable: "Package",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AccountRate_RateCode_RateCodeId",
                        column: x => x.RateCodeId,
                        principalTable: "RateCode",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "GuestMmRoomFeature",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    GuestPreferenceId = table.Column<int>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false),
                    PreferenceId = table.Column<int>(nullable: false),
                    RoomFeatureId = table.Column<int>(nullable: true),
                    RowVersion = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuestMmRoomFeature", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GuestMmRoomFeature_GuestPreference_GuestPreferenceId",
                        column: x => x.GuestPreferenceId,
                        principalTable: "GuestPreference",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_GuestMmRoomFeature_RoomFeature_RoomFeatureId",
                        column: x => x.RoomFeatureId,
                        principalTable: "RoomFeature",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RateCodeDetail",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AmountA = table.Column<decimal>(nullable: false),
                    AmountB = table.Column<decimal>(nullable: false),
                    AmountC = table.Column<decimal>(nullable: false),
                    AmountD = table.Column<decimal>(nullable: false),
                    BeginDate = table.Column<DateTime>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    RateCodeId = table.Column<int>(nullable: false),
                    RoomTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RateCodeDetail", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RateCodeDetail_RateCode_RateCodeId",
                        column: x => x.RateCodeId,
                        principalTable: "RateCode",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RateCodeDetail_RoomType_RoomTypeId",
                        column: x => x.RoomTypeId,
                        principalTable: "RoomType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Region",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    ProvinceId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Region", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Region_Province_ProvinceId",
                        column: x => x.ProvinceId,
                        principalTable: "Province",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Attribute = table.Column<int>(nullable: false),
                    HotelId = table.Column<int>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    ProfileId = table.Column<int>(nullable: true),
                    RowVersion = table.Column<byte[]>(nullable: true),
                    TypeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Customer_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Customer_CustomerProfile_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "CustomerProfile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Customer_CustomerType_TypeId",
                        column: x => x.TypeId,
                        principalTable: "CustomerType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DefaultHotelId = table.Column<int>(nullable: true),
                    DepartmentId = table.Column<int>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    PasswordId = table.Column<int>(nullable: true),
                    PositionId = table.Column<int>(nullable: true),
                    RightId = table.Column<int>(nullable: true),
                    Role = table.Column<int>(nullable: false),
                    UserCode = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Employee_Hotel_DefaultHotelId",
                        column: x => x.DefaultHotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Employee_Department_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Department",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Employee_Password_PasswordId",
                        column: x => x.PasswordId,
                        principalTable: "Password",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Employee_Position_PositionId",
                        column: x => x.PositionId,
                        principalTable: "Position",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Employee_EmployeeRights_RightId",
                        column: x => x.RightId,
                        principalTable: "EmployeeRights",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Group",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Attribute = table.Column<int>(nullable: false),
                    Code = table.Column<string>(nullable: false),
                    HotelId = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    RowVersion = table.Column<byte[]>(nullable: true),
                    TypeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Group", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Group_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Group_GroupType_TypeId",
                        column: x => x.TypeId,
                        principalTable: "GroupType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Room",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Beds = table.Column<int>(nullable: true),
                    CleanStatus = table.Column<int>(nullable: false),
                    Code = table.Column<string>(nullable: false),
                    Floor = table.Column<int>(nullable: true),
                    HotelId = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    ProfileId = table.Column<int>(nullable: true),
                    RowVersion = table.Column<byte[]>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    TypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Room", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Room_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Room_RoomProfile_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "RoomProfile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Room_RoomType_TypeId",
                        column: x => x.TypeId,
                        principalTable: "RoomType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Guest",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Attribute = table.Column<int>(nullable: false),
                    BirthDate = table.Column<DateTime>(nullable: true),
                    CustomerId = table.Column<int>(nullable: true),
                    EName = table.Column<string>(nullable: true),
                    Gender = table.Column<int>(nullable: false),
                    HotelId = table.Column<int>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false),
                    LanguageId = table.Column<int>(nullable: true),
                    Name = table.Column<string>(nullable: false),
                    PreferenceId = table.Column<int>(nullable: true),
                    ProfileId = table.Column<int>(nullable: true),
                    RemarkId = table.Column<int>(nullable: true),
                    RowVersion = table.Column<byte[]>(nullable: true),
                    StatisticalId = table.Column<int>(nullable: true),
                    TitleId = table.Column<int>(nullable: true),
                    TypeId = table.Column<int>(nullable: true),
                    VipTypeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Guest", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Guest_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Guest_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Guest_Language_LanguageId",
                        column: x => x.LanguageId,
                        principalTable: "Language",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Guest_GuestPreference_PreferenceId",
                        column: x => x.PreferenceId,
                        principalTable: "GuestPreference",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Guest_GuestProfile_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "GuestProfile",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Guest_GuestRemark_RemarkId",
                        column: x => x.RemarkId,
                        principalTable: "GuestRemark",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Guest_Statistical_StatisticalId",
                        column: x => x.StatisticalId,
                        principalTable: "Statistical",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Guest_GuestTitle_TitleId",
                        column: x => x.TitleId,
                        principalTable: "GuestTitle",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Guest_GuestType_TypeId",
                        column: x => x.TypeId,
                        principalTable: "GuestType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Guest_VipType_VipTypeId",
                        column: x => x.VipTypeId,
                        principalTable: "VipType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AccountClassify",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Invisible = table.Column<bool>(nullable: false),
                    MarketId = table.Column<int>(nullable: true),
                    SalerId = table.Column<int>(nullable: true),
                    SourceId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountClassify", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AccountClassify_Market_MarketId",
                        column: x => x.MarketId,
                        principalTable: "Market",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AccountClassify_Employee_SalerId",
                        column: x => x.SalerId,
                        principalTable: "Employee",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AccountClassify_Source_SourceId",
                        column: x => x.SourceId,
                        principalTable: "Source",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeLogin",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CurrentHotelId = table.Column<int>(nullable: true),
                    EmployeeId = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    LoginTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeLogin", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeLogin_Hotel_CurrentHotelId",
                        column: x => x.CurrentHotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_EmployeeLogin_Employee_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employee",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeMmHotel",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EmployeeId = table.Column<int>(nullable: false),
                    HotelId = table.Column<int>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeMmHotel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeMmHotel_Employee_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employee",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EmployeeMmHotel_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OperLogger",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountId = table.Column<int>(nullable: true),
                    Data = table.Column<string>(nullable: true),
                    EmployeeId = table.Column<int>(nullable: true),
                    Function = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    LogTime = table.Column<DateTime>(nullable: false),
                    RoomId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperLogger", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OperLogger_Employee_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employee",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AccountShare",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    MaxDeparture = table.Column<DateTime>(nullable: false),
                    MinArrival = table.Column<DateTime>(nullable: false),
                    RoomId = table.Column<int>(nullable: true),
                    RoomTypeId = table.Column<int>(nullable: true),
                    Rooms = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountShare", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AccountShare_Room_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Room",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AccountShare_RoomType_RoomTypeId",
                        column: x => x.RoomTypeId,
                        principalTable: "RoomType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RoomMmRoomFeature",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FeatureId = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    RoomId = table.Column<int>(nullable: false),
                    RowVersion = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoomMmRoomFeature", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RoomMmRoomFeature_RoomFeature_FeatureId",
                        column: x => x.FeatureId,
                        principalTable: "RoomFeature",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RoomMmRoomFeature_Room_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Room",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Addr = table.Column<string>(nullable: true),
                    Attribute = table.Column<int>(nullable: false),
                    CountryId = table.Column<int>(nullable: true),
                    CustomerId = table.Column<int>(nullable: true),
                    GuestId = table.Column<int>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false),
                    ProvinceId = table.Column<int>(nullable: true),
                    RegionId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Address_Country_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Country",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Address_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Address_Guest_GuestId",
                        column: x => x.GuestId,
                        principalTable: "Guest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Address_Province_ProvinceId",
                        column: x => x.ProvinceId,
                        principalTable: "Province",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Address_Region_RegionId",
                        column: x => x.RegionId,
                        principalTable: "Region",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Contact",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Attribute = table.Column<int>(nullable: false),
                    CustomerId = table.Column<int>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    GuestId = table.Column<int>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false),
                    Mobile = table.Column<string>(nullable: true),
                    OfficeFax = table.Column<string>(nullable: true),
                    OfficePhone = table.Column<string>(nullable: true),
                    Weixin = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contact", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contact_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Contact_Guest_GuestId",
                        column: x => x.GuestId,
                        principalTable: "Guest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "GuestMmSpecialRequest",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    GuestId = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    SpecialRequestId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuestMmSpecialRequest", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GuestMmSpecialRequest_Guest_GuestId",
                        column: x => x.GuestId,
                        principalTable: "Guest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GuestMmSpecialRequest_SpecialRequest_SpecialRequestId",
                        column: x => x.SpecialRequestId,
                        principalTable: "SpecialRequest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Identity",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Attribute = table.Column<int>(nullable: false),
                    ExpirationDate = table.Column<DateTime>(nullable: true),
                    GuestId = table.Column<int>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false),
                    Number = table.Column<string>(nullable: true),
                    TypeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Identity", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Identity_Guest_GuestId",
                        column: x => x.GuestId,
                        principalTable: "Guest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Identity_IdentityType_TypeId",
                        column: x => x.TypeId,
                        principalTable: "IdentityType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Reservation",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AgenId = table.Column<int>(nullable: true),
                    Code = table.Column<string>(nullable: true),
                    ConfirmedStatus = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false),
                    RowVersion = table.Column<byte[]>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    TravelAgencyId = table.Column<int>(nullable: true),
                    TypeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reservation_Guest_AgenId",
                        column: x => x.AgenId,
                        principalTable: "Guest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reservation_Customer_TravelAgencyId",
                        column: x => x.TravelAgencyId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reservation_ReservationType_TypeId",
                        column: x => x.TypeId,
                        principalTable: "ReservationType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Account",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClassifyId = table.Column<int>(nullable: true),
                    Code = table.Column<string>(nullable: false),
                    ComeWithId = table.Column<int>(nullable: true),
                    CurrentRateId = table.Column<int>(nullable: true),
                    CustomerId = table.Column<int>(nullable: true),
                    Description = table.Column<string>(nullable: false),
                    HotelId = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    ReservationId = table.Column<int>(nullable: false),
                    RowVersion = table.Column<byte[]>(nullable: true),
                    ShareId = table.Column<int>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    StayId = table.Column<int>(nullable: true),
                    TypeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Account", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Account_AccountClassify_ClassifyId",
                        column: x => x.ClassifyId,
                        principalTable: "AccountClassify",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Account_AccountComeWith_ComeWithId",
                        column: x => x.ComeWithId,
                        principalTable: "AccountComeWith",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Account_AccountRate_CurrentRateId",
                        column: x => x.CurrentRateId,
                        principalTable: "AccountRate",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Account_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Account_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Account_Reservation_ReservationId",
                        column: x => x.ReservationId,
                        principalTable: "Reservation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Account_AccountShare_ShareId",
                        column: x => x.ShareId,
                        principalTable: "AccountShare",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Account_AccountStay_StayId",
                        column: x => x.StayId,
                        principalTable: "AccountStay",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Account_AccountType_TypeId",
                        column: x => x.TypeId,
                        principalTable: "AccountType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AccountMmGuest",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountId = table.Column<int>(nullable: false),
                    GuestId = table.Column<int>(nullable: true),
                    IdentityId = table.Column<int>(nullable: true),
                    IdentityNumber = table.Column<string>(nullable: true),
                    Invisible = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountMmGuest", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AccountMmGuest_Account_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Account",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccountMmGuest_Guest_GuestId",
                        column: x => x.GuestId,
                        principalTable: "Guest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AccountMmRemark",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountId = table.Column<int>(nullable: false),
                    Attribute = table.Column<int>(nullable: false),
                    Invisible = table.Column<bool>(nullable: false),
                    Remark = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountMmRemark", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AccountMmRemark_Account_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Account",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Account_ClassifyId",
                table: "Account",
                column: "ClassifyId");

            migrationBuilder.CreateIndex(
                name: "IX_Account_ComeWithId",
                table: "Account",
                column: "ComeWithId");

            migrationBuilder.CreateIndex(
                name: "IX_Account_CurrentRateId",
                table: "Account",
                column: "CurrentRateId");

            migrationBuilder.CreateIndex(
                name: "IX_Account_CustomerId",
                table: "Account",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Account_HotelId",
                table: "Account",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Account_ReservationId",
                table: "Account",
                column: "ReservationId");

            migrationBuilder.CreateIndex(
                name: "IX_Account_ShareId",
                table: "Account",
                column: "ShareId");

            migrationBuilder.CreateIndex(
                name: "IX_Account_StayId",
                table: "Account",
                column: "StayId");

            migrationBuilder.CreateIndex(
                name: "IX_Account_TypeId",
                table: "Account",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountClassify_MarketId",
                table: "AccountClassify",
                column: "MarketId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountClassify_SalerId",
                table: "AccountClassify",
                column: "SalerId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountClassify_SourceId",
                table: "AccountClassify",
                column: "SourceId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountMmGuest_AccountId",
                table: "AccountMmGuest",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountMmGuest_GuestId",
                table: "AccountMmGuest",
                column: "GuestId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountMmRemark_AccountId",
                table: "AccountMmRemark",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountRate_PackageId",
                table: "AccountRate",
                column: "PackageId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountRate_RateCodeId",
                table: "AccountRate",
                column: "RateCodeId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountShare_RoomId",
                table: "AccountShare",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_AccountShare_RoomTypeId",
                table: "AccountShare",
                column: "RoomTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_CountryId",
                table: "Address",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_CustomerId",
                table: "Address",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_GuestId",
                table: "Address",
                column: "GuestId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_ProvinceId",
                table: "Address",
                column: "ProvinceId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_RegionId",
                table: "Address",
                column: "RegionId");

            migrationBuilder.CreateIndex(
                name: "IX_Contact_CustomerId",
                table: "Contact",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Contact_GuestId",
                table: "Contact",
                column: "GuestId");

            migrationBuilder.CreateIndex(
                name: "IX_Customer_HotelId",
                table: "Customer",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Customer_ProfileId",
                table: "Customer",
                column: "ProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Customer_TypeId",
                table: "Customer",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_DefaultHotelId",
                table: "Employee",
                column: "DefaultHotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_DepartmentId",
                table: "Employee",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_PasswordId",
                table: "Employee",
                column: "PasswordId");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_PositionId",
                table: "Employee",
                column: "PositionId");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_RightId",
                table: "Employee",
                column: "RightId");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_UserCode",
                table: "Employee",
                column: "UserCode",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeLogin_CurrentHotelId",
                table: "EmployeeLogin",
                column: "CurrentHotelId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeLogin_EmployeeId",
                table: "EmployeeLogin",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeMmHotel_EmployeeId",
                table: "EmployeeMmHotel",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeMmHotel_HotelId",
                table: "EmployeeMmHotel",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Group_HotelId",
                table: "Group",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Group_TypeId",
                table: "Group",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Guest_CustomerId",
                table: "Guest",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Guest_HotelId",
                table: "Guest",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Guest_LanguageId",
                table: "Guest",
                column: "LanguageId");

            migrationBuilder.CreateIndex(
                name: "IX_Guest_PreferenceId",
                table: "Guest",
                column: "PreferenceId");

            migrationBuilder.CreateIndex(
                name: "IX_Guest_ProfileId",
                table: "Guest",
                column: "ProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Guest_RemarkId",
                table: "Guest",
                column: "RemarkId");

            migrationBuilder.CreateIndex(
                name: "IX_Guest_StatisticalId",
                table: "Guest",
                column: "StatisticalId");

            migrationBuilder.CreateIndex(
                name: "IX_Guest_TitleId",
                table: "Guest",
                column: "TitleId");

            migrationBuilder.CreateIndex(
                name: "IX_Guest_TypeId",
                table: "Guest",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Guest_VipTypeId",
                table: "Guest",
                column: "VipTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_GuestMmRoomFeature_GuestPreferenceId",
                table: "GuestMmRoomFeature",
                column: "GuestPreferenceId");

            migrationBuilder.CreateIndex(
                name: "IX_GuestMmRoomFeature_RoomFeatureId",
                table: "GuestMmRoomFeature",
                column: "RoomFeatureId");

            migrationBuilder.CreateIndex(
                name: "IX_GuestMmSpecialRequest_GuestId",
                table: "GuestMmSpecialRequest",
                column: "GuestId");

            migrationBuilder.CreateIndex(
                name: "IX_GuestMmSpecialRequest_SpecialRequestId",
                table: "GuestMmSpecialRequest",
                column: "SpecialRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_GuestProfile_EthnicityId",
                table: "GuestProfile",
                column: "EthnicityId");

            migrationBuilder.CreateIndex(
                name: "IX_Hotel_Name",
                table: "Hotel",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Hotel_ProfileId",
                table: "Hotel",
                column: "ProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Identity_GuestId",
                table: "Identity",
                column: "GuestId");

            migrationBuilder.CreateIndex(
                name: "IX_Identity_TypeId",
                table: "Identity",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_OperLogger_EmployeeId",
                table: "OperLogger",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Province_CountryId",
                table: "Province",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_RateCodeDetail_RateCodeId",
                table: "RateCodeDetail",
                column: "RateCodeId");

            migrationBuilder.CreateIndex(
                name: "IX_RateCodeDetail_RoomTypeId",
                table: "RateCodeDetail",
                column: "RoomTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Region_ProvinceId",
                table: "Region",
                column: "ProvinceId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservation_AgenId",
                table: "Reservation",
                column: "AgenId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservation_TravelAgencyId",
                table: "Reservation",
                column: "TravelAgencyId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservation_TypeId",
                table: "Reservation",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Room_Code",
                table: "Room",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Room_HotelId",
                table: "Room",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Room_ProfileId",
                table: "Room",
                column: "ProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Room_TypeId",
                table: "Room",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_RoomFeature_Code",
                table: "RoomFeature",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RoomMmRoomFeature_FeatureId",
                table: "RoomMmRoomFeature",
                column: "FeatureId");

            migrationBuilder.CreateIndex(
                name: "IX_RoomMmRoomFeature_RoomId",
                table: "RoomMmRoomFeature",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_RoomType_Code",
                table: "RoomType",
                column: "Code",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountMmGuest");

            migrationBuilder.DropTable(
                name: "AccountMmRemark");

            migrationBuilder.DropTable(
                name: "Address");

            migrationBuilder.DropTable(
                name: "Contact");

            migrationBuilder.DropTable(
                name: "EmployeeLogin");

            migrationBuilder.DropTable(
                name: "EmployeeMmHotel");

            migrationBuilder.DropTable(
                name: "Group");

            migrationBuilder.DropTable(
                name: "GuestMmRoomFeature");

            migrationBuilder.DropTable(
                name: "GuestMmSpecialRequest");

            migrationBuilder.DropTable(
                name: "Identity");

            migrationBuilder.DropTable(
                name: "OperLogger");

            migrationBuilder.DropTable(
                name: "OutOfOrderReason");

            migrationBuilder.DropTable(
                name: "PaymentType");

            migrationBuilder.DropTable(
                name: "RateCodeDetail");

            migrationBuilder.DropTable(
                name: "ReservationTemplate");

            migrationBuilder.DropTable(
                name: "RoomMmRoomFeature");

            migrationBuilder.DropTable(
                name: "Account");

            migrationBuilder.DropTable(
                name: "Region");

            migrationBuilder.DropTable(
                name: "GroupType");

            migrationBuilder.DropTable(
                name: "SpecialRequest");

            migrationBuilder.DropTable(
                name: "IdentityType");

            migrationBuilder.DropTable(
                name: "RoomFeature");

            migrationBuilder.DropTable(
                name: "AccountClassify");

            migrationBuilder.DropTable(
                name: "AccountComeWith");

            migrationBuilder.DropTable(
                name: "AccountRate");

            migrationBuilder.DropTable(
                name: "Reservation");

            migrationBuilder.DropTable(
                name: "AccountShare");

            migrationBuilder.DropTable(
                name: "AccountStay");

            migrationBuilder.DropTable(
                name: "AccountType");

            migrationBuilder.DropTable(
                name: "Province");

            migrationBuilder.DropTable(
                name: "Market");

            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.DropTable(
                name: "Source");

            migrationBuilder.DropTable(
                name: "Package");

            migrationBuilder.DropTable(
                name: "RateCode");

            migrationBuilder.DropTable(
                name: "Guest");

            migrationBuilder.DropTable(
                name: "ReservationType");

            migrationBuilder.DropTable(
                name: "Room");

            migrationBuilder.DropTable(
                name: "Country");

            migrationBuilder.DropTable(
                name: "Department");

            migrationBuilder.DropTable(
                name: "Password");

            migrationBuilder.DropTable(
                name: "Position");

            migrationBuilder.DropTable(
                name: "EmployeeRights");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "Language");

            migrationBuilder.DropTable(
                name: "GuestPreference");

            migrationBuilder.DropTable(
                name: "GuestProfile");

            migrationBuilder.DropTable(
                name: "GuestRemark");

            migrationBuilder.DropTable(
                name: "Statistical");

            migrationBuilder.DropTable(
                name: "GuestTitle");

            migrationBuilder.DropTable(
                name: "GuestType");

            migrationBuilder.DropTable(
                name: "VipType");

            migrationBuilder.DropTable(
                name: "RoomProfile");

            migrationBuilder.DropTable(
                name: "RoomType");

            migrationBuilder.DropTable(
                name: "Hotel");

            migrationBuilder.DropTable(
                name: "CustomerProfile");

            migrationBuilder.DropTable(
                name: "CustomerType");

            migrationBuilder.DropTable(
                name: "Ethnicity");

            migrationBuilder.DropTable(
                name: "HotelProfile");
        }
    }
}
