using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using GoldenVoyage.Models;

namespace GoldenVoyage.Api.Migrations
{
    [DbContext(typeof(PmsDbContext))]
    [Migration("20160531063303_update20160531")]
    partial class update20160531
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20901")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ClassifyId");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<int?>("ComeWithId");

                    b.Property<int?>("CurrentRateId");

                    b.Property<int?>("CustomerId");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<int>("HotelId");

                    b.Property<bool>("Invisible");

                    b.Property<int>("ReservationId");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int?>("ShareId");

                    b.Property<int>("Status");

                    b.Property<int?>("StayId");

                    b.Property<int?>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("ClassifyId");

                    b.HasIndex("ComeWithId");

                    b.HasIndex("CurrentRateId");

                    b.HasIndex("CustomerId");

                    b.HasIndex("HotelId");

                    b.HasIndex("ReservationId");

                    b.HasIndex("ShareId");

                    b.HasIndex("StayId");

                    b.HasIndex("TypeId");

                    b.ToTable("Account");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountClassify", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Invisible");

                    b.Property<int?>("MarketId");

                    b.Property<int?>("SalerId");

                    b.Property<int?>("SourceId");

                    b.HasKey("Id");

                    b.HasIndex("MarketId");

                    b.HasIndex("SalerId");

                    b.HasIndex("SourceId");

                    b.ToTable("AccountClassify");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountComeWith", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("AccountComeWith");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountMmGuest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccountId");

                    b.Property<int?>("GuestId");

                    b.Property<int?>("IdentityId");

                    b.Property<string>("IdentityNumber")
                        .HasAnnotation("MaxLength", 100);

                    b.Property<bool>("Invisible");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.HasIndex("GuestId");

                    b.ToTable("AccountMmGuest");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountMmRemark", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccountId");

                    b.Property<int>("Attribute");

                    b.Property<bool>("Invisible");

                    b.Property<string>("Remark");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.ToTable("AccountMmRemark");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountRate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AccountId");

                    b.Property<decimal>("Amount");

                    b.Property<DateTime>("BeginDate");

                    b.Property<decimal>("DiscountAmount");

                    b.Property<decimal>("DiscountPercentage");

                    b.Property<bool>("Invisible");

                    b.Property<int?>("PackageId");

                    b.Property<int?>("RateCodeId");

                    b.HasKey("Id");

                    b.HasIndex("PackageId");

                    b.HasIndex("RateCodeId");

                    b.ToTable("AccountRate");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountShare", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<bool>("Invisible");

                    b.Property<DateTime>("MaxDeparture");

                    b.Property<DateTime>("MinArrival");

                    b.Property<int?>("RoomId");

                    b.Property<int?>("RoomTypeId");

                    b.Property<int>("Rooms");

                    b.HasKey("Id");

                    b.HasIndex("RoomId");

                    b.HasIndex("RoomTypeId");

                    b.ToTable("AccountShare");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountStay", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Adults");

                    b.Property<DateTime>("Arrival");

                    b.Property<int>("Childs");

                    b.Property<DateTime>("Departure");

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("AccountStay");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("AccountType");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Addr");

                    b.Property<int>("Attribute");

                    b.Property<int?>("CountryId");

                    b.Property<int?>("CustomerId");

                    b.Property<int?>("GuestId");

                    b.Property<bool>("Invisible");

                    b.Property<int?>("ProvinceId");

                    b.Property<int?>("RegionId");

                    b.HasKey("Id");

                    b.HasIndex("CountryId");

                    b.HasIndex("CustomerId");

                    b.HasIndex("GuestId");

                    b.HasIndex("ProvinceId");

                    b.HasIndex("RegionId");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Contact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Attribute");

                    b.Property<int?>("CustomerId");

                    b.Property<string>("Email");

                    b.Property<int?>("GuestId");

                    b.Property<bool>("Invisible");

                    b.Property<string>("Mobile");

                    b.Property<string>("OfficeFax");

                    b.Property<string>("OfficePhone");

                    b.Property<string>("Weixin");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("GuestId");

                    b.ToTable("Contact");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Country", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("Country");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Attribute");

                    b.Property<int?>("HotelId");

                    b.Property<bool>("Invisible");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<int?>("ProfileId");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int?>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("HotelId");

                    b.HasIndex("ProfileId");

                    b.HasIndex("TypeId");

                    b.ToTable("Customer");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.CustomerProfile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CustomerId");

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("CustomerProfile");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.CustomerType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("CustomerType");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Department", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("Department");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("DefaultHotelId");

                    b.Property<int?>("DepartmentId");

                    b.Property<bool>("Invisible");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 50);

                    b.Property<int?>("PasswordId");

                    b.Property<int?>("PositionId");

                    b.Property<int?>("RightId");

                    b.Property<int>("Role");

                    b.Property<string>("UserCode")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.HasKey("Id");

                    b.HasIndex("DefaultHotelId");

                    b.HasIndex("DepartmentId");

                    b.HasIndex("PasswordId");

                    b.HasIndex("PositionId");

                    b.HasIndex("RightId");

                    b.HasIndex("UserCode")
                        .IsUnique();

                    b.ToTable("Employee");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.EmployeeLogin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CurrentHotelId");

                    b.Property<int>("EmployeeId");

                    b.Property<bool>("Ended");

                    b.Property<bool>("Invisible");

                    b.Property<DateTime>("LoginTime");

                    b.Property<DateTime?>("LogoutTime");

                    b.HasKey("Id");

                    b.HasIndex("CurrentHotelId");

                    b.HasIndex("EmployeeId");

                    b.ToTable("EmployeeLogin");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.EmployeeMmHotel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("EmployeeId");

                    b.Property<int?>("HotelId");

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.HasIndex("HotelId");

                    b.ToTable("EmployeeMmHotel");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.EmployeeRights", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Invisible");

                    b.Property<string>("Right");

                    b.HasKey("Id");

                    b.ToTable("EmployeeRights");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Ethnicity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("Ethnicity");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Attribute");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<int>("HotelId");

                    b.Property<bool>("Invisible");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int?>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("HotelId");

                    b.HasIndex("TypeId");

                    b.ToTable("Group");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GroupType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("GroupType");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Guest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Attribute");

                    b.Property<DateTime?>("BirthDate");

                    b.Property<int?>("CustomerId");

                    b.Property<string>("EName")
                        .HasAnnotation("MaxLength", 200);

                    b.Property<int>("Gender");

                    b.Property<int?>("HotelId");

                    b.Property<bool>("Invisible");

                    b.Property<int?>("LanguageId");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<int?>("PreferenceId");

                    b.Property<int?>("ProfileId");

                    b.Property<int?>("RemarkId");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int?>("StatisticalId");

                    b.Property<int?>("TitleId");

                    b.Property<int?>("TypeId");

                    b.Property<int?>("VipTypeId");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("HotelId");

                    b.HasIndex("LanguageId");

                    b.HasIndex("PreferenceId");

                    b.HasIndex("ProfileId");

                    b.HasIndex("RemarkId");

                    b.HasIndex("StatisticalId");

                    b.HasIndex("TitleId");

                    b.HasIndex("TypeId");

                    b.HasIndex("VipTypeId");

                    b.ToTable("Guest");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GuestMmRoomFeature", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("GuestPreferenceId");

                    b.Property<bool>("Invisible");

                    b.Property<int>("PreferenceId");

                    b.Property<int?>("RoomFeatureId");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("Id");

                    b.HasIndex("GuestPreferenceId");

                    b.HasIndex("RoomFeatureId");

                    b.ToTable("GuestMmRoomFeature");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GuestMmSpecialRequest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("GuestId");

                    b.Property<bool>("Invisible");

                    b.Property<int?>("SpecialRequestId");

                    b.HasKey("Id");

                    b.HasIndex("GuestId");

                    b.HasIndex("SpecialRequestId");

                    b.ToTable("GuestMmSpecialRequest");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GuestPreference", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Invisible");

                    b.Property<string>("LikeRooms");

                    b.Property<string>("Preference");

                    b.HasKey("Id");

                    b.ToTable("GuestPreference");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GuestProfile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("EthnicityId");

                    b.Property<int>("GuestId");

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.HasIndex("EthnicityId");

                    b.ToTable("GuestProfile");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GuestRemark", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CashingRemark");

                    b.Property<string>("FrontRemark");

                    b.Property<int>("GuestId");

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("GuestRemark");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GuestTitle", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("GuestTitle");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GuestType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("GuestType");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Hotel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Invisible");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<int>("ProfileId");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.HasIndex("ProfileId");

                    b.ToTable("Hotel");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.HotelProfile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("HotelDate")
                        .HasColumnType("smalldatetime");

                    b.Property<int>("HotelId");

                    b.Property<bool>("Invisible");

                    b.Property<string>("LocalServiceAddress");

                    b.Property<DateTime>("ReportDate")
                        .HasColumnType("smalldatetime");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("Id");

                    b.ToTable("HotelProfile");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Identity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Attribute");

                    b.Property<DateTime?>("ExpirationDate");

                    b.Property<int?>("GuestId");

                    b.Property<bool>("Invisible");

                    b.Property<string>("Number")
                        .HasAnnotation("MaxLength", 100);

                    b.Property<int?>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("GuestId");

                    b.HasIndex("TypeId");

                    b.ToTable("Identity");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.IdentityType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("IdentityType");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Language", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("Language");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Market", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("Market");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.OperLogger", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AccountId");

                    b.Property<string>("Data");

                    b.Property<int?>("EmployeeId");

                    b.Property<int>("Function");

                    b.Property<bool>("Invisible");

                    b.Property<DateTime>("LogTime");

                    b.Property<int?>("RoomId");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.ToTable("OperLogger");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.OutOfOrderReason", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("OutOfOrderReason");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Package", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("Package");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Password", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Invisible");

                    b.Property<string>("PasswordString");

                    b.HasKey("Id");

                    b.ToTable("Password");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.PaymentType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("PaymentType");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Position", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("Position");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Province", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<int?>("CountryId");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.HasIndex("CountryId");

                    b.ToTable("Province");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.RateCode", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Attribute");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("RateCode");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.RateCodeDetail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("AmountA");

                    b.Property<decimal>("AmountB");

                    b.Property<decimal>("AmountC");

                    b.Property<decimal>("AmountD");

                    b.Property<DateTime>("BeginDate");

                    b.Property<bool>("Invisible");

                    b.Property<int>("RateCodeId");

                    b.Property<int>("RoomTypeId");

                    b.HasKey("Id");

                    b.HasIndex("RateCodeId");

                    b.HasIndex("RoomTypeId");

                    b.ToTable("RateCodeDetail");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Region", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.Property<int?>("ProvinceId");

                    b.HasKey("Id");

                    b.HasIndex("ProvinceId");

                    b.ToTable("Region");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Reservation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AgenId");

                    b.Property<string>("Code")
                        .HasAnnotation("MaxLength", 20);

                    b.Property<int>("ConfirmedStatus");

                    b.Property<string>("Description")
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int>("Status");

                    b.Property<int?>("TravelAgencyId");

                    b.Property<int?>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("AgenId");

                    b.HasIndex("TravelAgencyId");

                    b.HasIndex("TypeId");

                    b.ToTable("Reservation");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.ReservationTemplate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccountTypeId");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.Property<string>("Name");

                    b.Property<int>("Nights");

                    b.Property<int>("RateCodeId");

                    b.Property<int>("ReservationTypeId");

                    b.Property<int>("RoomTypeId");

                    b.HasKey("Id");

                    b.ToTable("ReservationTemplate");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.ReservationType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<int>("GuaranteeAttribute");

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("ReservationType");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Room", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("Beds");

                    b.Property<int>("CleanStatus");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<int?>("Floor");

                    b.Property<int>("HotelId");

                    b.Property<bool>("Invisible");

                    b.Property<int?>("ProfileId");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<int>("Status");

                    b.Property<int>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("Code")
                        .IsUnique();

                    b.HasIndex("HotelId");

                    b.HasIndex("ProfileId");

                    b.HasIndex("TypeId");

                    b.ToTable("Room");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.RoomFeature", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.HasIndex("Code")
                        .IsUnique();

                    b.ToTable("RoomFeature");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.RoomMmRoomFeature", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("FeatureId");

                    b.Property<bool>("Invisible");

                    b.Property<int>("RoomId");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("Id");

                    b.HasIndex("FeatureId");

                    b.HasIndex("RoomId");

                    b.ToTable("RoomMmRoomFeature");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.RoomProfile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Invisible");

                    b.Property<int>("RoomId");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("Id");

                    b.ToTable("RoomProfile");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.RoomType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.HasIndex("Code")
                        .IsUnique();

                    b.ToTable("RoomType");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Source", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("Source");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.SpecialRequest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("SpecialRequest");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Statistical", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ArrivalCount");

                    b.Property<decimal>("BonusPointTotal");

                    b.Property<int>("CancelCount");

                    b.Property<decimal>("ExpenseTotal");

                    b.Property<bool>("Invisible");

                    b.Property<int>("NightCount");

                    b.Property<int>("NoShowCount");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("Id");

                    b.ToTable("Statistical");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.VipType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Attribute");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 200);

                    b.Property<bool>("Invisible");

                    b.HasKey("Id");

                    b.ToTable("VipType");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Account", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.AccountClassify")
                        .WithMany()
                        .HasForeignKey("ClassifyId");

                    b.HasOne("GoldenVoyage.Models.Entities.AccountComeWith")
                        .WithMany()
                        .HasForeignKey("ComeWithId");

                    b.HasOne("GoldenVoyage.Models.Entities.AccountRate")
                        .WithMany()
                        .HasForeignKey("CurrentRateId");

                    b.HasOne("GoldenVoyage.Models.Entities.Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("GoldenVoyage.Models.Entities.Hotel")
                        .WithMany()
                        .HasForeignKey("HotelId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GoldenVoyage.Models.Entities.Reservation")
                        .WithMany()
                        .HasForeignKey("ReservationId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GoldenVoyage.Models.Entities.AccountShare")
                        .WithMany()
                        .HasForeignKey("ShareId");

                    b.HasOne("GoldenVoyage.Models.Entities.AccountStay")
                        .WithMany()
                        .HasForeignKey("StayId");

                    b.HasOne("GoldenVoyage.Models.Entities.AccountType")
                        .WithMany()
                        .HasForeignKey("TypeId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountClassify", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Market")
                        .WithMany()
                        .HasForeignKey("MarketId");

                    b.HasOne("GoldenVoyage.Models.Entities.Employee")
                        .WithMany()
                        .HasForeignKey("SalerId");

                    b.HasOne("GoldenVoyage.Models.Entities.Source")
                        .WithMany()
                        .HasForeignKey("SourceId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountMmGuest", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Account")
                        .WithMany()
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GoldenVoyage.Models.Entities.Guest")
                        .WithMany()
                        .HasForeignKey("GuestId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountMmRemark", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Account")
                        .WithMany()
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountRate", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Package")
                        .WithMany()
                        .HasForeignKey("PackageId");

                    b.HasOne("GoldenVoyage.Models.Entities.RateCode")
                        .WithMany()
                        .HasForeignKey("RateCodeId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.AccountShare", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Room")
                        .WithMany()
                        .HasForeignKey("RoomId");

                    b.HasOne("GoldenVoyage.Models.Entities.RoomType")
                        .WithMany()
                        .HasForeignKey("RoomTypeId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Address", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Country")
                        .WithMany()
                        .HasForeignKey("CountryId");

                    b.HasOne("GoldenVoyage.Models.Entities.Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("GoldenVoyage.Models.Entities.Guest")
                        .WithMany()
                        .HasForeignKey("GuestId");

                    b.HasOne("GoldenVoyage.Models.Entities.Province")
                        .WithMany()
                        .HasForeignKey("ProvinceId");

                    b.HasOne("GoldenVoyage.Models.Entities.Region")
                        .WithMany()
                        .HasForeignKey("RegionId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Contact", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("GoldenVoyage.Models.Entities.Guest")
                        .WithMany()
                        .HasForeignKey("GuestId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Customer", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Hotel")
                        .WithMany()
                        .HasForeignKey("HotelId");

                    b.HasOne("GoldenVoyage.Models.Entities.CustomerProfile")
                        .WithOne()
                        .HasForeignKey("GoldenVoyage.Models.Entities.Customer", "ProfileId");

                    b.HasOne("GoldenVoyage.Models.Entities.CustomerType")
                        .WithMany()
                        .HasForeignKey("TypeId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Employee", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Hotel")
                        .WithMany()
                        .HasForeignKey("DefaultHotelId");

                    b.HasOne("GoldenVoyage.Models.Entities.Department")
                        .WithMany()
                        .HasForeignKey("DepartmentId");

                    b.HasOne("GoldenVoyage.Models.Entities.Password")
                        .WithMany()
                        .HasForeignKey("PasswordId");

                    b.HasOne("GoldenVoyage.Models.Entities.Position")
                        .WithMany()
                        .HasForeignKey("PositionId");

                    b.HasOne("GoldenVoyage.Models.Entities.EmployeeRights")
                        .WithMany()
                        .HasForeignKey("RightId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.EmployeeLogin", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Hotel")
                        .WithMany()
                        .HasForeignKey("CurrentHotelId");

                    b.HasOne("GoldenVoyage.Models.Entities.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.EmployeeMmHotel", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GoldenVoyage.Models.Entities.Hotel")
                        .WithMany()
                        .HasForeignKey("HotelId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Group", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Hotel")
                        .WithMany()
                        .HasForeignKey("HotelId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GoldenVoyage.Models.Entities.GroupType")
                        .WithMany()
                        .HasForeignKey("TypeId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Guest", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("GoldenVoyage.Models.Entities.Hotel")
                        .WithMany()
                        .HasForeignKey("HotelId");

                    b.HasOne("GoldenVoyage.Models.Entities.Language")
                        .WithMany()
                        .HasForeignKey("LanguageId");

                    b.HasOne("GoldenVoyage.Models.Entities.GuestPreference")
                        .WithMany()
                        .HasForeignKey("PreferenceId");

                    b.HasOne("GoldenVoyage.Models.Entities.GuestProfile")
                        .WithOne()
                        .HasForeignKey("GoldenVoyage.Models.Entities.Guest", "ProfileId");

                    b.HasOne("GoldenVoyage.Models.Entities.GuestRemark")
                        .WithMany()
                        .HasForeignKey("RemarkId");

                    b.HasOne("GoldenVoyage.Models.Entities.Statistical")
                        .WithMany()
                        .HasForeignKey("StatisticalId");

                    b.HasOne("GoldenVoyage.Models.Entities.GuestTitle")
                        .WithMany()
                        .HasForeignKey("TitleId");

                    b.HasOne("GoldenVoyage.Models.Entities.GuestType")
                        .WithMany()
                        .HasForeignKey("TypeId");

                    b.HasOne("GoldenVoyage.Models.Entities.VipType")
                        .WithMany()
                        .HasForeignKey("VipTypeId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GuestMmRoomFeature", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.GuestPreference")
                        .WithMany()
                        .HasForeignKey("GuestPreferenceId");

                    b.HasOne("GoldenVoyage.Models.Entities.RoomFeature")
                        .WithMany()
                        .HasForeignKey("RoomFeatureId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GuestMmSpecialRequest", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Guest")
                        .WithMany()
                        .HasForeignKey("GuestId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GoldenVoyage.Models.Entities.SpecialRequest")
                        .WithMany()
                        .HasForeignKey("SpecialRequestId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.GuestProfile", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Ethnicity")
                        .WithMany()
                        .HasForeignKey("EthnicityId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Hotel", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.HotelProfile")
                        .WithOne()
                        .HasForeignKey("GoldenVoyage.Models.Entities.Hotel", "ProfileId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Identity", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Guest")
                        .WithMany()
                        .HasForeignKey("GuestId");

                    b.HasOne("GoldenVoyage.Models.Entities.IdentityType")
                        .WithMany()
                        .HasForeignKey("TypeId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.OperLogger", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Province", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Country")
                        .WithMany()
                        .HasForeignKey("CountryId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.RateCodeDetail", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.RateCode")
                        .WithMany()
                        .HasForeignKey("RateCodeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GoldenVoyage.Models.Entities.RoomType")
                        .WithMany()
                        .HasForeignKey("RoomTypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Region", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Province")
                        .WithMany()
                        .HasForeignKey("ProvinceId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Reservation", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Guest")
                        .WithMany()
                        .HasForeignKey("AgenId");

                    b.HasOne("GoldenVoyage.Models.Entities.Customer")
                        .WithMany()
                        .HasForeignKey("TravelAgencyId");

                    b.HasOne("GoldenVoyage.Models.Entities.ReservationType")
                        .WithMany()
                        .HasForeignKey("TypeId");
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.Room", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.Hotel")
                        .WithMany()
                        .HasForeignKey("HotelId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GoldenVoyage.Models.Entities.RoomProfile")
                        .WithOne()
                        .HasForeignKey("GoldenVoyage.Models.Entities.Room", "ProfileId");

                    b.HasOne("GoldenVoyage.Models.Entities.RoomType")
                        .WithMany()
                        .HasForeignKey("TypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GoldenVoyage.Models.Entities.RoomMmRoomFeature", b =>
                {
                    b.HasOne("GoldenVoyage.Models.Entities.RoomFeature")
                        .WithMany()
                        .HasForeignKey("FeatureId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GoldenVoyage.Models.Entities.Room")
                        .WithMany()
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
